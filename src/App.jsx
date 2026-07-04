import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { content } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Skills from './components/Skills'
import CV from './components/CV'
import Certifications from './components/Certifications'
import NotesList from './components/NotesList'
import NoteDetail from './components/NoteDetail'
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
      <Nav t={t} theme={theme} lang={lang} toggleTheme={toggleTheme} setLang={setLang} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero t={t} />
              <Profile t={t} />
              <Experience t={t} />
              <Skills t={t} />
              <CV t={t} />
              <Certifications t={t} />
            </>
          } />
          <Route path="/notes" element={<NotesList t={t} />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
        </Routes>
      </main>
      <Footer t={t} />
    </div>
  )
}
