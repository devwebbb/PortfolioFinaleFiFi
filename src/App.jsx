import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Languages from './components/Languages.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        {/* Overlay bleu semi-transparent */}
        <div className="absolute inset-0 bg-blue-800/20 dark:bg-blue-900/30 pointer-events-none"></div>

        <Header />
        <main>
          <Hero />
          <About />
          <Education />          {/* Nouveau */}
          <Skills />
          <Projects />
          <Certifications />     {/* Nouveau */}
          <Languages />          {/* Nouveau */}
          <section id="experience">{/* Expérience */}</section>
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App