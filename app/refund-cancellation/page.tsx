import Link from 'next/link'
import Header from '../components/Header'
import PageBackground from '../components/PageBackground'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Refund & Cancellation Policy - Astromindly',
  description: 'Refund and cancellation policy for Astromindly sessions.',
}

export default function RefundCancellationPage() {
  return (
    <main className="policy-page page-wrapper">
      <PageBackground />
      <Header />
      <div className="policy-container">
        <div className="container">
          <div className="policy-content">
            <h1>Refund & Cancellation Policy</h1>
            <p className="policy-intro">Please read our booking, refund, and rescheduling policy.</p>

            <section className="policy-section">
              <h2>1. Booking Advance</h2>
              <p>Advance payments are non-refundable unless cancelled 24 hours before the scheduled session.</p>
            </section>

            <section className="policy-section">
              <h2>2. Full Payment</h2>
              <p>Once a session has started, no refunds will be issued.</p>
            </section>

            <section className="policy-section">
              <h2>3. Rescheduling</h2>
              <p>Clients may reschedule up to 12 hours before the session time.</p>
              <p>Repeated rescheduling may result in cancellation without refund.</p>
            </section>

            <section className="policy-section">
              <h2>4. Technical Issues</h2>
              <p>If a session cannot proceed due to technical issues from our side, it will be rescheduled at no extra cost.</p>
            </section>

            <section className="policy-section">
              <h2>5. Dissatisfaction</h2>
              <p>Astromindly provides guidance-based services. Since outcomes depend on personal actions, dissatisfaction alone does not qualify for a refund.</p>
            </section>

            <Link href="/" className="policy-back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
