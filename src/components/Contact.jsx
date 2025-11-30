import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useTranslation } from '../data/translations'
import { fadeIn, staggerContainer } from '../utils/animations'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'

const Contact = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mgvdknog', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      {/* Overlay identique aux autres sections */}
      <div className="contact-overlay"></div>
      
      {/* Éléments décoratifs */}
      <div className="contact-decoration contact-decoration-1"></div>
      <div className="contact-decoration contact-decoration-2"></div>
      <div className="contact-decoration contact-decoration-3"></div>
      
      <motion.div
        className="contact-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="contact-title"
          variants={fadeIn('down')}
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          variants={fadeIn('down', 0.2)}
        >
          {t.contact.subtitle}
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={fadeIn('right', 0.3)}
          >
            <h3 className="contact-info-title">
              {language === 'fr' ? 'Informations de contact' : language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
            </h3>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <HiMail size={24} />
                </div>
                <div className="contact-details">
                  <h4>{t.contact.email}</h4>
                  <a href="mailto:ftma.azahra@gmail.com">
                    ftma.azahra@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <HiPhone size={24} />
                </div>
                <div className="contact-details">
                  <h4>{t.contact.phone}</h4>
                  <a href="tel:+33644878865">
                    +33 6 44 87 88 65
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <HiLocationMarker size={24} />
                </div>
                <div className="contact-details">
                  <h4>{t.contact.address}</h4>
                  <p>
                    34 rue Pierre Miquel<br />
                    Avignon, France
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={fadeIn('left', 0.3)}
          >
            <h3 className="contact-form-title">
              {t.contact.sendMessage}
            </h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  {t.contact.name} *
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={language === 'fr' ? 'Votre nom' : language === 'en' ? 'Your name' : 'اسمك'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  {t.contact.email} *
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={language === 'fr' ? 'votre.email@exemple.com' : language === 'en' ? 'your.email@example.com' : 'your.email@example.com'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  {t.contact.subject}
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={language === 'fr' ? 'Objet de votre message' : language === 'en' ? 'Subject of your message' : 'موضوع رسالتك'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  {t.contact.message} *
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={language === 'fr' ? 'Écrivez votre message ici...' : language === 'en' ? 'Write your message here...' : 'اكتب رسالتك هنا...'}
                ></textarea>
              </div>

              <button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>⏳</span>
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <HiPaperAirplane />
                    {t.contact.send}
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ {t.contact.success}
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ {t.contact.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact