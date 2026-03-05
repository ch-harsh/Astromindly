interface Expert {
  name: string
  profession: string
  experience: string
  specialization: string[]
  bio: string
}

export default function Experts() {
  const experts: Expert[] = [
    {
      name: 'Dr. Ekta',
      profession: 'Philosophical Psychologist | Life Coach',
      experience: '10+ Years',
      specialization: [
        'Relationship Counseling',
        'Karmic Relationship Patterns',
        'Life Coaching & Personal Growth',
        'Health & Well-being Guidance',
        'Emotional Clarity & Self Awareness'
      ],
      bio: 'Dr. Ekta combines her deep academic background in philosophy with a strong understanding of human psychology to help individuals explore the deeper meaning behind their thoughts, emotions, and life choices. With a PhD in Philosophy, she focuses on guiding people through self-reflection, emotional awareness, and conscious decision-making. At Astromindly, Dr. Ekta works with individuals facing challenges related to relationship counselling, life direction, emotional confusion, and personal growth.'
    },
    {
      name: 'Dipti Jain',
      profession: 'Astrologer | Palmistry Expert | Vastu Consultant',
      experience: '12+ Years',
      specialization: [
        'Vedic Astrology Consultation',
        'Palmistry Insights',
        'Vastu Shastra Consultation',
        'Transit & Timing Analysis',
        'Numerology Guidance'
      ],
      bio: 'Dipti Jain is a highly experienced astrology consultant with expertise in Vedic astrology, numerology, palmistry, and Vastu Shastra. Her consultations focus on analyzing planetary transits, numerological patterns, palm lines, and Vastu energies to provide practical guidance related to career growth, financial stability, relationships, and personal development. At Astromindly, she helps clients understand the best timing for career changes, marriage decisions, financial planning, and personal growth.'
    }
  ]

  return (
    <section id="experts" className="experts-section">
      <div className="container">
        <h2 className="section-title">Meet Our Experts</h2>
        <p className="section-subtitle">Experienced professionals combining astrology and psychology</p>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-image-wrapper">
                <div className="expert-image-placeholder">
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="expert-info">
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-profession">{expert.profession}</p>
                <p className="expert-experience">Experience: {expert.experience}</p>
                <p className="expert-bio">{expert.bio}</p>
                <div className="expert-specialization">
                  <h4>Specializations:</h4>
                  <ul>
                    {expert.specialization.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
