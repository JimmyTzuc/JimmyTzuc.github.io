import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const CV_URL = '/CV-Jimmy-Tzuc.pdf'

export default function Nav({ t, theme, lang, toggleTheme, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'about',          label: t.nav.about },
    { id: 'experience',     label: t.nav.experience },
    { id: 'skills',         label: t.nav.skills },
    { id: 'certifications', label: t.nav.certifications },
  ]

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoBtn}>
          <img src="/logo.svg" alt="Jimmy Tzuc" className={styles.logoImg} />
        </Link>

        <div className={styles.links}>
          {navItems.map(({ id, label }) => (
            <button key={id} className={styles.link} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <Link to="/notes" className={`${styles.link} ${location.pathname.startsWith('/notes') ? styles.linkActive : ''}`}>
            {t.nav.notes}
          </Link>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v8M3.5 6.5L6.5 9.5l3-3M1.5 11.5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.nav.downloadCv}
          </a>
        </div>

        <div className={styles.controls}>
          <div className={styles.langToggle}>
            <button className={`${styles.langBtn} ${lang==='es'?styles.langActive:''}`} onClick={()=>setLang('es')}>ES</button>
            <span className={styles.langDivider}>/</span>
            <button className={`${styles.langBtn} ${lang==='en'?styles.langActive:''}`} onClick={()=>setLang('en')}>EN</button>
          </div>
          <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="7.5" y1="1" x2="7.5" y2="2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="7.5" y1="12.5" x2="7.5" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="1" y1="7.5" x2="2.5" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="12.5" y1="7.5" x2="14" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="2.8" y1="2.8" x2="3.86" y2="3.86" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11.14" y1="11.14" x2="12.2" y2="12.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="12.2" y1="2.8" x2="11.14" y2="3.86" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="3.86" y1="11.14" x2="2.8" y2="12.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M12.5 9A5.5 5.5 0 0 1 6 2.5a5.5 5.5 0 1 0 6.5 6.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="2" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="2" y1="7.5" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="2" y1="11" x2="12" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        {navItems.map(({ id, label }) => (
          <button key={id} className={styles.drawerLink} onClick={() => scrollTo(id)}>{label}</button>
        ))}
        <Link to="/notes" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t.nav.notes}</Link>
        <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={styles.drawerCvLink} onClick={() => setMenuOpen(false)}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 1v8M3.5 6.5L6.5 9.5l3-3M1.5 11.5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.nav.downloadCv}
        </a>
      </div>
    </>
  )
}
