import Link from 'next/link'
import Header from '../components/Header'
import PageBackground from '../components/PageBackground'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy - Astromindly',
  description: 'Privacy policy for Astromindly services.',
}

export default function PrivacyPage() {
  return (
    <main className="policy-page page-wrapper">
      <PageBackground />
      <Header />
      <div className="policy-container">
        <div className="container">
          <div className="policy-content">
            <h1>Privacy Policy</h1>
            <p className="policy-intro">How we collect, use, and protect your information.</p>

            <section className="policy-section">
              <h2>1. Information We Collect</h2>
              <p>We may collect:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Birth time and location</li>
                <li>Session notes</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>2. How We Use Information</h2>
              <p>Your data is used to:</p>
              <ul>
                <li>Conduct sessions</li>
                <li>Provide personalized guidance</li>
                <li>Improve services</li>
                <li>Communicate regarding bookings</li>
              </ul>
              <p>We do not sell your personal information.</p>
            </section>

            <section className="policy-section">
              <h2>3. Confidentiality</h2>
              <p>All sessions are treated as confidential.</p>
              <p>We do not share your data with third parties unless:</p>
              <ul>
                <li>Required by law</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>4. Data Security</h2>
              <p>We implement reasonable security measures to protect your information.</p>
              <p>However, no online transmission is 100% secure.</p>
            </section>

            <section className="policy-section">
              <h2>5. Communication Consent</h2>
              <p>By submitting your details, you consent to being contacted via:</p>
              <ul>
                <li>WhatsApp</li>
                <li>Email</li>
                <li>Phone</li>
              </ul>
              <p>You may opt out anytime.</p>
            </section>

            <Link href="/" className="policy-back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
