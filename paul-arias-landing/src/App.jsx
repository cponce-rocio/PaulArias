import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Pillars from './components/Pillars.jsx'
import Empathy from './components/Empathy.jsx'
import About from './components/About.jsx'
import Approach from './components/Approach.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Values from './components/Values.jsx'
import ProcessSteps from './components/ProcessSteps.jsx'
import Faq from './components/Faq.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import MobileStickyBar from './components/MobileStickyBar.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream pb-14 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Empathy />
        <About />
        <Approach />
        <Services />
        <Pricing />
        <Values />
        <ProcessSteps />
        <Faq />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  )
}
