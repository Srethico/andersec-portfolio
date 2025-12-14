import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import WhatsAppButton from './components/WhatsAppButton'
import Architecture from './components/Architecture'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
    </>
  )
}


export default App
