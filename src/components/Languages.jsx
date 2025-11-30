import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { languagesData } from '../data/languages'
import { fadeIn, staggerContainer } from '../utils/animations'

const Languages = () => {
  const { language } = useLanguage()
  const languages = languagesData[language]

  // Fonction pour obtenir le nom de la langue en format data-attribute
  const getLanguageKey = (langName) => {
    const langMap = {
      'Français': 'french',
      'French': 'french',
      'Anglais': 'english',
      'English': 'english',
      'Arabe': 'arabic',
      'Arabic': 'arabic',
      'Espagnol': 'spanish',
      'Spanish': 'spanish'
    }
    return langMap[langName] || 'default'
  }

  return (
    <section id="languages" className="languages-section">
      {/* Overlay identique aux autres sections */}
      <div className="languages-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="languages-decoration languages-decoration-1"></div>
      <div className="languages-decoration languages-decoration-2"></div>
      <div className="languages-decoration languages-decoration-3"></div>
      
      <motion.div
        className="languages-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="languages-title"
          variants={fadeIn('down')}
        >
          {language === 'fr' ? 'Langues' : language === 'en' ? 'Languages' : 'اللغات'}
        </motion.h2>

        <div className="languages-grid">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="language-card"
              data-language={getLanguageKey(lang.name)}
              variants={fadeIn('up', index * 0.1)}
            >
              <div className="language-header">
                <h3 className="language-name">
                  {lang.name}
                </h3>
                <span className="language-level">
                  {lang.level}
                </span>
              </div>
              
              <div className="language-progress-container">
                <motion.div
                  className="language-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <span className="language-percentage">
                  {lang.percentage}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Languages