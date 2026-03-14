import styles from './Section.module.css'
import about from './About.module.css'

export default function About({ t }) {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>{t.about.label}</p>
      <div className={about.grid}>
        <p className={about.text}>{t.about.text}</p>
        <div className={about.stats}>
          {t.about.stats.map((s) => (
            <div key={s.label} className={about.stat}>
              <span className={about.value}>{s.value}</span>
              <span className={about.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
