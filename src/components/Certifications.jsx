import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { certificationsData, badgesData } from '../data/certifications'
import { fadeIn, staggerContainer } from '../utils/animations'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const { language } = useLanguage()
  const certifications = certificationsData[language]
  const badges = badgesData[language]

  return (
    <section id="certifications" className="certifications-section">
      {/* Overlay identique aux autres sections */}
      <div className="certifications-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="certifications-decoration certifications-decoration-1"></div>
      <div className="certifications-decoration certifications-decoration-2"></div>
      <div className="certifications-decoration certifications-decoration-3"></div>
      
      <motion.div
        className="certifications-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="certifications-title"
          variants={fadeIn('down')}
        >
          {language === 'fr' ? 'Certifications' : language === 'en' ? 'Certifications' : 'الشهادات'}
        </motion.h2>

        <div className="certifications-categories">
          {/* Certifications Formations */}
          <div className="certifications-category">
            <h3 className="category-title">
              {language === 'fr' ? 'Certifications de Formation' : language === 'en' ? 'Training Certifications' : 'شهادات التدريب'}
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certification-card"
                  variants={fadeIn('up', index * 0.1)}
                >
                  <div className="certification-header">
                    <div className="certification-icon">
                      <Award size={24} />
                    </div>
                    <div className="certification-info">
                      <h3 className="certification-name">{cert.title}</h3>
                      <p className="certification-year">{cert.year}</p>
                    </div>
                  </div>

                  <div className="certification-content">
                    <p className="certification-description">{cert.description}</p>

                    <div className="certification-skills">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">{skill}</span>
                      ))}
                    </div>

                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        {language === 'fr' ? 'Voir la certification' : language === 'en' ? 'View certification' : 'عرض الشهادة'}
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Badges Google */}
          <div className="certifications-category">
            <h3 className="category-title">
              {language === 'fr' ? 'Badges Google' : language === 'en' ? 'Google Badges' : 'شارات جوجل'}
            </h3>
            <div className="certifications-grid">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  className="certification-card"
                  variants={fadeIn('up', index * 0.1)}
                >
                  <div className="certification-header">
                    <div className="certification-icon badge-icon">
                      <Award size={24} />
                    </div>
                    <div className="certification-info">
                      <h3 className="certification-name">{badge.title}</h3>
                      <p className="certification-year">{badge.year}</p>
                    </div>
                  </div>

                  <div className="certification-content">
                    <p className="certification-description">{badge.description}</p>

                    <div className="certification-skills">
                      {badge.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">{skill}</span>
                      ))}
                    </div>

                    {badge.link && (
                      <a 
                        href={badge.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        {language === 'fr' ? 'Voir le badge' : language === 'en' ? 'View badge' : 'عرض الشارة'}
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications