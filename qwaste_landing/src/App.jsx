import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Comparison from './components/Comparison'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VideoDemo from './components/VideoDemo'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Comparison />
        <Features />
        <HowItWorks />
        <VideoDemo />
        <Testimonials />
        <Blog />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
