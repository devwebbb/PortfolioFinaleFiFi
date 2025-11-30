import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from '../data/translations'
import { skillsData } from '../data/skills'
import { fadeIn, staggerContainer } from '../utils/animations'

const Skills = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)

  // Réorganisation des compétences selon votre demande
  const reorganizedSkills = {
    frontend: {
      title: {
        fr: 'Frontend Development',
        en: 'Frontend Development', 
        ar: 'تطوير الواجهة الأمامية'
      },
      color: 'blue',
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 100 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 60 },
        { name: 'Bootstrap', level: 90 },
        { name: 'React', level: 70 }
      ]
    },
    design: {
      title: {
        fr: 'Design & UI/UX',
        en: 'Design & UI/UX',
        ar: 'التصميم وتجربة المستخدم'
      },
      color: 'pink', 
      skills: [
        { name: 'Figma', level: 50 },
        { name: 'Photoshop', level: 70 },
        { name: 'Elementor', level: 70 },
        { name: 'Illustrator', level: 60 },
        { name: 'InDesign', level: 60 }
      ]
    },
    backend: {
      title: {
        fr: 'Backend Development',
        en: 'Backend Development',
        ar: 'تطوير الواجهة الخلفية'
      },
      color: 'orange',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'Next.js', level: 50 },
        { name: 'Nest.js', level: 40 }
      ]
    },
    database: {
      title: {
        fr: 'Bases de Données',
        en: 'Databases',
        ar: 'قواعد البيانات'
      },
      color: 'green',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 50 }
      ]
    },
    devops: {
      title: {
        fr: 'DevOps & Outils',
        en: 'DevOps & Tools', 
        ar: 'DevOps والأدوات'
      },
      color: 'purple',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Linux/Shell', level: 80 },
        { name: 'VSCode', level: 100 },
        { name: 'PyCharm', level: 60 },
        { name: 'Eclipse', level: 40 }
      ]
    },
    programming: {
      title: skillsData.programming.title,
      color: 'indigo',
      skills: skillsData.programming.skills.filter(skill => 
        !['JavaScript', 'TypeScript'].includes(skill.name)
      )
    },
    networks: {
      title: skillsData.networks.title,
      color: 'teal',
      skills: skillsData.networks.skills
    }
  }

  // Fonction pour obtenir l'icône de catégorie
  const getCategoryIcon = (color) => {
    const icons = {
      blue: 'FE',
      pink: 'UI',
      orange: 'BE',
      green: 'DB',
      purple: 'DO',
      indigo: 'PR',
      teal: 'NT'
    }
    return icons[color] || 'SK'
  }

  return (
    <section id="skills" className="skills-section">
      {/* Overlay identique aux autres sections */}
      <div className="skills-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="skills-decoration skills-decoration-1"></div>
      <div className="skills-decoration skills-decoration-2"></div>
      <div className="skills-decoration skills-decoration-3"></div>
      
      <motion.div
        className="skills-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="skills-title"
          variants={fadeIn('down')}
        >
          {t.skills.title}
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(reorganizedSkills).map(([categoryKey, category], index) => (
            <motion.div
              key={categoryKey}
              className="skill-category"
              data-color={category.color}
              variants={fadeIn('up', index * 0.1)}
            >
              {/* En-tête de la carte */}
              <div className="skill-category-header">
                <h3 className="skill-category-title">
                  {category.title[language] || category.title.fr}
                </h3>
                <div className={`category-icon category-${category.color}`}>
                  {getCategoryIcon(category.color)}
                </div>
              </div>

              {/* Liste des compétences */}
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">
                        {skill.name}
                      </span>
                      <span className="skill-percentage">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        style={{
                          backgroundColor: `var(--${category.color}-color)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills