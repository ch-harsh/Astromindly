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
      name: 'Dr. Sarah Johnson',
      profession: 'Astro-Psychologist',
      experience: '15+ Years',
      specialization: [
        'Psychological Pattern Analysis',
        'Vedic Astrology',
        'Relationship Counseling',
        'Career Guidance'
      ],
      bio: 'Dr. Sarah combines her deep understanding of psychology with traditional astrological wisdom to provide holistic life guidance. She specializes in helping individuals understand the psychological patterns that influence their life decisions.'
    },
    {
      name: 'Prof. Michael Chen',
      profession: 'Astrological Consultant & Life Coach',
      experience: '20+ Years',
      specialization: [
        'Transit Analysis',
        'Karmic Cycles',
        'Financial Astrology',
        'Health & Well-being'
      ],
      bio: 'With over two decades of experience, Prof. Michael helps clients navigate life transitions by understanding both astrological timing and personal growth patterns. His approach emphasizes practical action over passive prediction.'
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
