import styles from './Section.module.css'
import cert from './Certifications.module.css'

export default function Certifications({ t }) {
  return (
    <section id="certifications" className={styles.section}>
      <p className={styles.label}>{t.certifications.label}</p>
      <div className={cert.list}>
        {t.certifications.items.map((item, i) => (
          <div key={i} className={cert.item}>
            <div className={cert.left}>
              <span className={cert.year}>{item.year}</span>
            </div>
            <div className={cert.right}>
              <span className={cert.title}>{item.title}</span>
              <span className={cert.issuer}>{item.issuer}</span>
            </div>
          </div>
        ))}
      </div>
      <p className={cert.note}>{t.certifications.note}</p>
    </section>
  )
}
