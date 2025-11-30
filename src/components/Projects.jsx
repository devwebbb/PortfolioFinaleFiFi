import { motion } from 'framer-motion'
import { Search, Code, GitBranch, Server, ShoppingBag, Monitor, Bot, ShoppingCart, ExternalLink } from 'lucide-react'
import { projectsData } from '../data/projects.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import { useTranslation } from '../data/translations.js'
import { fadeIn, staggerContainer } from '../utils/animations'

const Projects = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const iconMap = {
    search: Search,
    code: Code,
    'project-diagram': GitBranch,
    server: Server,
    'shopping-bag': ShoppingBag,
    desktop: Monitor,
    robot: Bot,
    'shopping-cart': ShoppingCart
  }

  const getProjectIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Code
    return IconComponent
  }

  return (
    <section id="projects" className="projects-section">
      {/* Overlay identique aux autres sections */}
      <div className="projects-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="projects-decoration projects-decoration-1"></div>
      <div className="projects-decoration projects-decoration-2"></div>
      <div className="projects-decoration projects-decoration-3"></div>
      
      <motion.div
        className="projects-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="projects-title"
          variants={fadeIn('down')}
        >
          {t.projects.title}
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const IconComponent = getProjectIcon(project.icon)
            
            return (
              <motion.div
                key={project.id}
                className="project-card"
                variants={fadeIn('up', index * 0.1)}
              >
                {/* En-tête */}
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">
                      {project.title[language]}
                    </h3>
                    <p className="project-year">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="project-content">
                  <p className="project-description">
                    {project.description[language]}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Lien optionnel */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>{language === 'fr' ? 'Voir le projet' : language === 'en' ? 'View Project' : 'عرض المشروع'}</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects