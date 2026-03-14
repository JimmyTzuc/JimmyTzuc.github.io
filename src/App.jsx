import { useState, useEffect } from 'react'
import { content } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import CV from './components/CV'
import Footer from './components/Footer'
import styles from './App.module.css'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const t = content[lang]

  return (
    <div className={styles.app}>
      <Nav
        t={t}
        theme={theme}
        lang={lang}
        toggleTheme={toggleTheme}
        setLang={setLang}
      />
      <main className={styles.main}>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <CV t={t} />
        <Certifications t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
