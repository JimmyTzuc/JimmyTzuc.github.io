import styles from './Section.module.css'
import exp from './Experience.module.css'

export default function Experience({ t }) {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.label}>{t.experience.label}</p>
      <div className={exp.list}>
        {t.experience.jobs.map((job, i) => (
          <div key={i} className={exp.item}>
            <div className={exp.left}>
              <span className={exp.period}>{job.period}</span>
              {job.current && <span className={exp.currentDot} />}
            </div>
            <div className={exp.right}>
              <div className={exp.header}>
                <span className={exp.company}>{job.company}</span>
                <span className={exp.role}>{job.role}</span>
              </div>
              <ul className={exp.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className={exp.stack}>
                {job.stack.map((s) => (
                  <span key={s} className={exp.tag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
