'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  review: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Divyansh Dhingra',
      review: 'I had a really insightful session with Dr. Ekta at Astromindly. We discussed my career confusion, relationship patterns, and the attachment fear I have been struggling with for a long time. Instead of just giving predictions, she helped me understand why I feel the way I do and what I can work on. The session gave me a lot of clarity and calmness.'
    },
    {
      id: 2,
      name: 'Pavini',
      review: 'I consulted Astrologist Dipti regarding whether it was the right time to change my job. She carefully analyzed my chart and explained the planetary timing in a very practical way. Her guidance helped me understand that waiting for a few months could actually work better for me. The consultation felt very honest and grounded.'
    },
    {
      id: 3,
      name: 'Yana Sharma',
      review: 'I received a full life report from Astromindly and later had a session with one of their senior counsellors to discuss it in detail. The report itself was very detailed, but the session helped me interpret it better and apply the insights to my real-life situations. It felt more like a guidance session than a typical astrology consultation.'
    },
    {
      id: 4,
      name: 'Mary Kurien',
      review: 'I opted for the complete report and a follow-up session with a senior counsellor, and I must say the experience was very thoughtful and professional.'
    },
    {
      id: 5,
      name: 'Chaitanya Gulati',
      review: 'I ordered the three-question report where I asked about my career direction, relationship concerns, and some financial worries. Later I also booked a session with one of the senior counsellors to understand the report more deeply. The conversation helped me see some repeating patterns in my decisions and how timing could affect my plans.'
    },
    {
      id: 6,
      name: 'Gazal Arora',
      review: 'I initially booked a session with Dr. Ekta to talk about my fears around marriage and emotional readiness. She helped me understand some of my internal patterns and gave very thoughtful advice. After that, I also consulted Astrologist Dipti to understand the astrological timing related to marriage. Both sessions complemented each other really well, and I felt much more confident and clear afterward.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-slider">
          <button className="slider-button prev" onClick={goToPrevious} aria-label="Previous testimonial">
            ‹
          </button>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-image-wrapper">
                  <div className="testimonial-image-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-review">"{testimonial.review}"</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-button next" onClick={goToNext} aria-label="Next testimonial">
            ›
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
