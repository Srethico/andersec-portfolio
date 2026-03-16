import './styles/global.css'
import "remixicon/fonts/remixicon.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import WhatsAppButton from './components/WhatsAppButton'
import Architecture from './components/Architecture'
import ParticlesBackground from './components/ParticlesBackground'
import NetworkBackground from './components/NetworkBackground'
import CursorGlow from './components/CursorGlow'
import Terminal from './components/Terminal'
import MatrixBackground from './components/MatrixBackground'
import GitHubStats from './components/GitHubStats'


function App() {
  return (
    <>
      <MatrixBackground />
      <ParticlesBackground />
      <NetworkBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      {/* <Terminal /> */}
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Contact />
      <GitHubStats />
      <Footer />
      <WhatsAppButton />
      
    </>
  )
}


export default App
