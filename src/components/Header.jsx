import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTranslation } from '../data/translations.js'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const { language, setLanguage } = useLanguage()
  const t = useTranslation(language)

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ]

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = isScrolled ? 70 : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 header-transition ${
        isScrolled ? 'header-scrolled' : 'header-gradient'
      }`}
      style={{
        height: isScrolled ? '70px' : '80px',
        transition: 'all 0.3s ease'
      }}
    >
      <nav className="header-container h-full">
        <div className="nav-container h-full">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
            className="header-logo"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            BF
          </motion.a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                className="nav-item nav-item-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav[item.key]}
              </motion.a>
            ))}
            <div className="header-language-switcher">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile icons */}
          <div className="mobile-controls">
            <div className="header-language-switcher">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-button"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <div 
                className="fixed inset-0 mobile-menu-backdrop"
                style={{ top: isScrolled ? '70px' : '80px' }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mobile-menu mobile-menu-scroll"
                style={{ top: isScrolled ? '70px' : '80px' }}
              >
                {/* Sélecteur de langue mobile */}
                <div className="mobile-language-switcher">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`mobile-language-button ${language === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                    className="mobile-nav-item"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header