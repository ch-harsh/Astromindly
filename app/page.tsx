import Header from './components/Header'
import PageBackground from './components/PageBackground'
import MainContent from './components/MainContent'
import Testimonials from './components/Testimonials'
import Experts from './components/Experts'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="page-wrapper">
      <PageBackground />
      <Header />
      <MainContent />
      <Testimonials />
      <Experts />
      <ContactForm />
      <Footer />
    </main>
  )
}
