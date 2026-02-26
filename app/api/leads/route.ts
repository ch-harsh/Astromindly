import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { source, name, whatsapp, email, comment } = body || {}

    if (!source) {
      return NextResponse.json({ error: 'source is required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'astromindly')

    await db.collection('leads').insertOne({
      source,
      name: name || null,
      whatsapp: whatsapp || null,
      email: email || null,
      comment: comment || null,
      createdAt: new Date(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error saving lead to MongoDB', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

