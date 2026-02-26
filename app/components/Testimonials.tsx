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
      name: 'Priya Sharma',
      review: 'Astromindly helped me understand the real reasons behind my career struggles. The combination of psychological insights and astrological timing gave me clarity I never had before. Highly recommended!'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      review: 'I was skeptical at first, but the approach here is so different. They don\'t just tell you what you want to hear - they help you understand yourself better. My relationship issues are finally making sense.'
    },
    {
      id: 3,
      name: 'Anita Desai',
      review: 'The best part about Astromindly is that they consider both psychological patterns and astrological influences. It\'s not just about planets or just about therapy - it\'s about real clarity.'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      review: 'I\'ve tried many astrologers before, but none gave me actionable advice like Astromindly. They helped me understand my financial patterns and timing, and I\'ve seen real improvements.'
    },
    {
      id: 5,
      name: 'Meera Patel',
      review: 'As someone who values logic and practicality, I was surprised by how much sense the guidance made. They don\'t sell fear - they provide understanding. My health concerns are now clearer.'
    },
    {
      id: 6,
      name: 'Arjun Nair',
      review: 'The experts at Astromindly truly listen before analyzing. They helped me understand my personality patterns and life purpose in a way that felt authentic and empowering. Thank you!'
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
