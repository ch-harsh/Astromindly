import Link from 'next/link'
import Header from '../components/Header'
import PageBackground from '../components/PageBackground'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Terms & Conditions - Astromindly',
  description: 'Terms and conditions for using Astromindly services.',
}

export default function TermsPage() {
  return (
    <main className="policy-page page-wrapper">
      <PageBackground />
      <Header />
      <div className="policy-container">
        <div className="container">
          <div className="policy-content">
            <h1>Terms & Conditions</h1>
            <p className="policy-intro">Please read these terms carefully before using our services.</p>

            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>Welcome to Astromindly. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions.</p>
              <p>If you do not agree, please do not use our services.</p>
            </section>

            <section className="policy-section">
              <h2>2. Nature of Services</h2>
              <p>Astromindly provides online life-guidance sessions combining astrological insights and psychological perspectives.</p>
              <p>Our services are:</p>
              <ul>
                <li>Advisory in nature</li>
                <li>For personal growth and clarity</li>
                <li>Not a substitute for medical, legal, financial, or psychiatric advice</li>
              </ul>
              <p>We do not guarantee specific outcomes.</p>
            </section>

            <section className="policy-section">
              <h2>3. Eligibility</h2>
              <p>You must be at least 18 years old to use our services.</p>
              <p>By booking a session, you confirm that:</p>
              <ul>
                <li>The information you provide is accurate</li>
                <li>You are using the service voluntarily</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>4. Booking & Payments</h2>
              <ul>
                <li>Booking requires advance payment.</li>
                <li>Full payment must be completed before the session begins.</li>
                <li>Prices are listed in INR and may change without prior notice.</li>
              </ul>
              <p>Failure to complete payment may result in cancellation.</p>
            </section>

            <section className="policy-section">
              <h2>5. No Guarantees</h2>
              <p>Astromindly does not guarantee:</p>
              <ul>
                <li>Marriage timing</li>
                <li>Career success</li>
                <li>Financial gains</li>
                <li>Health outcomes</li>
                <li>Relationship outcomes</li>
              </ul>
              <p>Our role is to provide clarity and guidance, not certainty.</p>
            </section>

            <section className="policy-section">
              <h2>6. Limitation of Liability</h2>
              <p>Astromindly shall not be liable for:</p>
              <ul>
                <li>Personal decisions made after sessions</li>
                <li>Financial losses</li>
                <li>Relationship outcomes</li>
                <li>Career changes</li>
                <li>Emotional reactions</li>
              </ul>
              <p>All decisions remain the sole responsibility of the client.</p>
            </section>

            <section className="policy-section">
              <h2>7. Intellectual Property</h2>
              <p>All website content, branding, logos, and materials belong to Astromindly and may not be copied or reproduced without permission.</p>
            </section>

            <section className="policy-section">
              <h2>8. Modification of Terms</h2>
              <p>We reserve the right to update these Terms at any time.</p>
            </section>

            <Link href="/" className="policy-back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
