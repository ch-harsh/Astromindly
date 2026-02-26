'use client'

export default function PageBackground() {
  return (
    <div className="page-background" aria-hidden>
      {/* Light blue gradient background matching logo */}
      <div className="bg-layer bg-gradient" />
      {/* Subtle pattern overlay for texture */}
      <div className="bg-pattern" />
    </div>
  )
}
