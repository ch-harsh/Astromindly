'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MainContent() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setAcceptTerms(checked)
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'get-started',
          ...formData,
        }),
      })
    } catch (error) {
      console.error('Error submitting lead', error)
    }

    sessionStorage.setItem('formData', JSON.stringify(formData))
    router.push('/thank-you')
  }

  return (
    <section id="home" className="main-content">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Astromindly – Where Astrology Meets Psychology for Real-Life Clarity</h1>
            <p className="hero-subtitle">
              Astromindly is a modern life-guidance platform built for people who don't just want predictions — they want understanding, clarity, and direction.
            </p>
          </div>
          
          <div className="hero-form-container">
            <form className="hero-form" onSubmit={handleSubmit}>
              <h3 className="hero-form-title">Get Started</h3>
              <p className="hero-form-subtitle">Contact us for personalized guidance</p>
              
              <div className="form-group">
                <label htmlFor="hero-name">Name *</label>
                <input
                  type="text"
                  id="hero-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="hero-whatsapp">WhatsApp Number *</label>
                <input
                  type="tel"
                  id="hero-whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="hero-email">Email ID *</label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="hero-form-terms">
                <input
                  type="checkbox"
                  id="hero-terms"
                  name="acceptTerms"
                  checked={acceptTerms}
                  onChange={handleChange}
                  required
                  className="hero-terms-checkbox"
                />
                <label htmlFor="hero-terms" className="hero-terms-label">
                  I accept the{' '}
                  <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hero-terms-link">
                    Terms &amp; Conditions
                  </Link>
                  *
                </label>
              </div>

              <button 
                type="submit" 
                className="hero-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        <div className="content-section">
          <h2>We help individuals navigate life's most important areas:</h2>
          <div className="areas-grid">
            <div className="area-item">Career & Profession</div>
            <div className="area-item">Love, Relationships & Marriage</div>
            <div className="area-item">Money & Gains</div>
            <div className="area-item">Health & Well-being</div>
            <div className="area-item">Family & Children</div>
            <div className="area-item">Education</div>
            <div className="area-item">Personality & Life Purpose</div>
            <div className="area-item">Spirituality & Karma</div>
          </div>
        </div>

        <div className="content-section" id="about">
          <h2>What makes us different?</h2>
          <div className="different-section">
            <div className="what-we-dont">
              <h3>We don't:</h3>
              <ul>
                <li>Blindly blame planets</li>
                <li>Offer shallow motivation</li>
                <li>Sell fear or false hope</li>
              </ul>
            </div>
            <div className="what-we-do">
              <p className="intro-text">
                At Astromindly, we first listen deeply, then analyze carefully, and finally guide honestly.
              </p>
              <h3>We study whether your challenge is coming from:</h3>
              <ul>
                <li>Psychological patterns (stress, burnout, self-doubt, emotional blocks), or</li>
                <li>Astrological timing (transits, planetary influences, karmic cycles), or</li>
                <li>A combination of both.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Lives Guided with Clarity</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8/5</span>
              <span className="stat-label">Average Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90%</span>
              <span className="stat-label">Clients Booked a Follow-Up Session</span>
            </div>
          </div>
        </div>

        <div className="content-section goal-section">
          <h2>Our goal is simple:</h2>
          <p className="goal-text">
            To help you make better decisions, not dependent ones.<br />
            Astromindly is for people who want to understand themselves, not escape reality.
          </p>
          <p className="tagline">
            Because not every problem is planetary — and not every struggle is mental.<br />
            <strong>Some just need clarity.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
