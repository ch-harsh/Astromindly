import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-container">
            <span className="logo-text">AstroMindly</span>
          </Link>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
