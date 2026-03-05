/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-container">
            <Image
              src="/assets/astromindly-mark.png"
              alt="Astromindly"
              width={84}
              height={60}
              className="brand-logo"
              priority
            />
            <span className="logo-text">AstroMindly</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Open menu"
            aria-controls={menuId}
            onClick={() => setOpen(v => !v)}
          >
            <span className="kebab" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>

          <ul className="nav-links desktop-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        <div
          id={menuId}
          className={`mobile-menu ${open ? 'open' : ''}`}
          role="region"
          aria-label="Mobile navigation"
        >
          <a href="#home" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#testimonials" onClick={close}>Testimonials</a>
          <a href="#contact" onClick={close}>Contact Us</a>
        </div>
      </div>
    </header>
  )
}
