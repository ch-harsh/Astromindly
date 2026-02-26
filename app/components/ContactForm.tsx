'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const router = useRouter()
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!comment.trim()) return
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 800))
    sessionStorage.setItem('submittedComment', JSON.stringify({ comment: comment.trim() }))
    router.push('/thank-you')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Reach out for personalized guidance</p>

        <div className="contact-card">
          <div className="contact-card-inner">
            <div className="contact-info-bar">
              <a href="tel:7428366544" className="contact-info-item">
                <span className="contact-info-label">Mobile / WhatsApp</span>
                <span className="contact-info-value">+91 7428366544</span>
              </a>
              <span className="contact-info-divider" aria-hidden />
              <a href="mailto:astromindly@gmail.com" className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">astromindly@gmail.com</span>
              </a>
            </div>

            <div className="contact-message-section">
              <h3 className="contact-message-title">Send us a message</h3>
              <form className="comment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="comment">Your comment or question</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    placeholder="Write your message here..."
                    rows={4}
                    className="comment-textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
