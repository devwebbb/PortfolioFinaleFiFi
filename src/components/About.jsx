import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTranslation } from '../data/translations.js'
import { HiDownload } from 'react-icons/hi'

const About = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <section id="about" className="about-section">
      {/* Overlay identique au hero */}
      <div className="about-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="about-decoration about-decoration-1"></div>
      <div className="about-decoration about-decoration-2"></div>
      <div className="about-decoration about-decoration-3"></div>
      
      <div className="about-container">
        <div>
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t.about.title}
          </motion.h2>
        </div>

        <div className="about-card">
          <div className="about-content">
            <motion.div
              className="about-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              {t.about.badge || "Développeuse Passionnée"}
            </motion.div>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t.about.description}
            </motion.p>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.about.paragraph2}
            </motion.p>

            {/* Compétences principales */}
            <motion.div
              className="about-skills"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="skill-tag">IA & Machine Learning</span>
              <span className="skill-tag">Cybersécurité</span>
              <span className="skill-tag">Développement Full-Stack</span>
              <span className="skill-tag">Cloud Computing</span>
            </motion.div>

            <motion.a
              href="../../Bellagh Fatma (11).pdf"
              download
              className="download-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <HiDownload size={20} className="download-icon" />
              {t.about.downloadCV}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About