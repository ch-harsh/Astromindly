export default function Features() {
  const features = [
    {
      icon: '🌌',
      title: 'Galaxy Explorer',
      description: 'Navigate through stunning visualizations of galaxies, nebulas, and cosmic phenomena from across the universe.',
    },
    {
      icon: '🔭',
      title: 'Telescope Insights',
      description: 'Learn about the latest discoveries from space telescopes and observatories around the world.',
    },
    {
      icon: '🌠',
      title: 'Celestial Events',
      description: 'Stay updated with upcoming meteor showers, eclipses, and other astronomical events.',
    },
    {
      icon: '🪐',
      title: 'Planet Profiles',
      description: 'Explore detailed information about planets, moons, and other celestial bodies in our solar system.',
    },
    {
      icon: '⭐',
      title: 'Star Maps',
      description: 'Interactive star maps to help you identify constellations and stars visible from your location.',
    },
    {
      icon: '🚀',
      title: 'Space Missions',
      description: 'Follow the progress of current and upcoming space missions and their groundbreaking discoveries.',
    },
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Discover the Universe</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
