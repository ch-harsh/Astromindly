import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astromindly - Where Astrology Meets Psychology',
  description: 'A modern life-guidance platform built for people who want understanding, clarity, and direction. We combine astrology and psychology for real-life clarity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
