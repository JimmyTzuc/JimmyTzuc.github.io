import styles from './Profile.module.css'
export default function Profile({ t }) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <img src="/profile.jpg" alt="Jimmy Tzuc" className={styles.photo}
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
            <div className={styles.placeholder}><span className={styles.initials}>JT</span></div>
          </div>
        </div>
        <div className={styles.textCol}>
          <p className={styles.label}>{t.about.label}</p>
          <p className={styles.text}>{t.about.text}</p>
          <div className={styles.stats}>
            {t.about.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.value}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
