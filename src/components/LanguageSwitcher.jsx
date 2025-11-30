import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' }
  ]

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-button ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          aria-label={`Switch to ${lang.label} language`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher