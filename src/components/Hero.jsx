import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from '../data/translations'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { fadeIn, staggerContainer } from '../utils/animations'

const Hero = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const scrollToSection = (section) => {
    const element = document.querySelector(section)
    if (element) {
      const headerHeight = 80 // Même valeur que dans le Header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ 
        paddingTop: '80px', // Compensation pour le header fixe
        minHeight: 'calc(100vh - 80px)' // Ajuste la hauteur
      }}
    >
      <div className="hero-overlay"></div>
      
      <motion.div
        className="hero-container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeIn('up', 0.2)}
          className="hero-name"
        >
          {t.hero.name}
        </motion.h1>

        <motion.h2
          variants={fadeIn('up', 0.4)}
          className="hero-title"
        >
          {t.hero.title}
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.6)}
          className="hero-subtitle"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.8)}
          className="social-links"
        >
          {[
            { 
              icon: FaGithub, 
              href: 'https://github.com/bellaghfatma'
            },
            { 
              icon: FaLinkedin, 
              href: 'https://linkedin.com/in/bellagh-fatma'
            },
            { 
              icon: FaEnvelope, 
              href: 'mailto:ftma.azahra@gmail.com'
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 1)}
          className="cta-buttons"
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            {t.hero.cta}
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
          >
            {t.hero.contact}
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 1.2)}
          className="scroll-indicator"
        >
          <motion.div
            className="scroll-content"
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="scroll-text">
              {language === 'fr' ? 'Découvrir' : language === 'en' ? 'Discover' : 'اكتشف'}
            </span>
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero