'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import PageBackground from '../components/PageBackground'
import Footer from '../components/Footer'

export default function ThankYou() {
  const [formData, setFormData] = useState<{ name?: string } | null>(null)
  const [commentData, setCommentData] = useState<{ comment?: string } | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedForm = sessionStorage.getItem('formData')
      if (storedForm) {
        setFormData(JSON.parse(storedForm))
        sessionStorage.removeItem('formData')
      }
      const storedComment = sessionStorage.getItem('submittedComment')
      if (storedComment) {
        setCommentData(JSON.parse(storedComment))
        sessionStorage.removeItem('submittedComment')
      }
    }
  }, [])

  const fromComment = !!commentData?.comment && !formData?.name

  return (
    <main className="thank-you-page page-wrapper">
      <PageBackground />
      <Header />
      <div className="thank-you-container">
        <div className="container">
          <div className="thank-you-content">
            <div className="thank-you-icon">✓</div>
            <h1>Thank You!</h1>
            {formData?.name && (
              <p className="thank-you-message">
                Thank you, <strong>{formData.name}</strong>, for contacting us!
              </p>
            )}
            {fromComment && (
              <p className="thank-you-message">
                Thank you for your comment!
              </p>
            )}
            <p className="thank-you-description">
              {fromComment
                ? "We've received your message and our team will get back to you soon. We look forward to helping you find clarity and direction."
                : "We've received your information and our team will get back to you soon. We look forward to helping you find clarity and direction."}
            </p>
            <Link href="/" className="back-home-button">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
