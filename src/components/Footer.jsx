import { useTranslation } from '../data/translations.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      {/* Éléments décoratifs */}
      <div className="footer-decoration footer-decoration-1"></div>
      <div className="footer-decoration footer-decoration-2"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Liens sociaux */}
          <div className="footer-social">
            {[
              { icon: FaGithub, href: 'https://github.com/bellaghfatma' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/bellagh-fatma' },
              { icon: FaEnvelope, href: 'mailto:ftma.azahra@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Ligne de séparation */}
          <div className="footer-divider"></div>

          {/* Texte du footer */}
          <div className="footer-text">
            <p className="footer-message">
              {t.footer.madeWith} <FaHeart className="heart-icon" /> {t.footer.by}{' '}
              <span className="footer-name">Bellagh Fatma</span>
            </p>
            <p className="footer-copyright">
              © {currentYear} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer