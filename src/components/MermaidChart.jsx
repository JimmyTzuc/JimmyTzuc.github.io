import { useEffect, useRef, useState } from 'react'
import styles from './MermaidChart.module.css'

let mermaidLoaded = false

async function loadMermaid() {
  if (mermaidLoaded) return
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark',
    darkMode: document.documentElement.getAttribute('data-theme') !== 'light',
    themeVariables: {
      background: 'transparent',
      primaryColor: '#c9a96e',
      primaryTextColor: '#f0ece4',
      primaryBorderColor: '#c9a96e',
      lineColor: '#6a6560',
      secondaryColor: '#1a1a1a',
      tertiaryColor: '#141414',
    },
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: 13,
  })
  mermaidLoaded = true
  return mermaid
}

let idCounter = 0

export default function MermaidChart({ code }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function render() {
      try {
        const mermaid = await loadMermaid()
        const id = `mermaid-${++idCounter}`
        const { svg } = await mermaid.render(id, code)
        if (!cancelled) setSvg(svg)
      } catch (e) {
        if (!cancelled) setError(e.message)
      }
    }
    render()
    return () => { cancelled = true }
  }, [code])

  if (error) return <pre className={styles.error}>{error}</pre>
  if (!svg) return <div className={styles.loading}>Rendering diagram…</div>

  return (
    <div
      className={styles.wrap}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
