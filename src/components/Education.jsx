import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { educationData } from '../data/education'
import { fadeIn, staggerContainer } from '../utils/animations'
import { Calendar, MapPin, GraduationCap } from 'lucide-react'

const Education = () => {
  const { language } = useLanguage()
  const education = educationData[language]

  return (
    <section id="education" className="education-section">
      {/* Overlay identique aux autres sections */}
      <div className="education-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="education-decoration education-decoration-1"></div>
      <div className="education-decoration education-decoration-2"></div>
      <div className="education-decoration education-decoration-3"></div>
      
      <motion.div
        className="education-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="education-title"
          variants={fadeIn('down')}
        >
          {language === 'fr' ? 'Parcours Académique' : language === 'en' ? 'Education' : 'المسار الأكاديمي'}
        </motion.h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={fadeIn('up', index * 0.1)}
            >
              {/* Timeline Dot */}
              <div className="education-dot"></div>

              {/* Education Card */}
              <div className="education-card">
                <div className="education-header">
                  <div className="education-meta">
                    <div className="meta-item">
                      <Calendar size={18} className="meta-icon" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="meta-item">
                      <GraduationCap size={18} className="meta-icon" />
                      <span className="education-status">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="education-degree">
                  {edu.degree}
                </h3>
                
                <div className="education-location">
                  <MapPin size={16} className="location-icon" />
                  <span>{edu.institution}</span>
                  <span className="location-separator">•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education