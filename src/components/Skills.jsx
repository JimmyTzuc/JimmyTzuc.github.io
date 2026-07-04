import styles from './Section.module.css'
import sk from './Skills.module.css'
export default function Skills({ t }) {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>{t.skills.label}</p>
      <div className={sk.grid}>
        {t.skills.categories.map((cat) => (
          <div key={cat.name} className={sk.cat}>
            <p className={sk.catName}>{cat.name}</p>
            <div className={sk.items}>{cat.items.map(item => <span key={item} className={sk.pill}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
