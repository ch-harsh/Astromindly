import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

function extractUtm(urlString: string | null) {
  if (!urlString) return { pageUrl: null, utm: null }

  try {
    const url = new URL(urlString)
    const sp = url.searchParams

    const utm: Record<string, string> = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
      const v = sp.get(k)
      if (v) utm[k] = v
    })

    return {
      pageUrl: url.toString(),
      utm: Object.keys(utm).length ? utm : null,
    }
  } catch {
    return { pageUrl: urlString, utm: null }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { source, name, whatsapp, email, comment, pageUrl, referrer } = body || {}

    if (!source) {
      return NextResponse.json({ error: 'source is required' }, { status: 400 })
    }

    // Prefer explicit pageUrl from client; fallback to HTTP Referer header
    const refererHeader = request.headers.get('referer')
    const resolvedPageUrl = typeof pageUrl === 'string' && pageUrl.length ? pageUrl : refererHeader

    const { pageUrl: storedPageUrl, utm } = extractUtm(resolvedPageUrl)

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'astromindly')

    await db.collection('leads').insertOne({
      source,
      name: name || null,
      whatsapp: whatsapp || null,
      email: email || null,
      comment: comment || null,
      pageUrl: storedPageUrl,
      referrer: typeof referrer === 'string' && referrer.length ? referrer : null,
      utm,
      createdAt: new Date(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error saving lead to MongoDB', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

