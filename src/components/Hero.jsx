import styles from './Hero.module.css'
export default function Hero({ t }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Jimmy<br /><em>Tzuc</em></h1>
      <div className={styles.bottom}>
        <p className={styles.role}>// {t.hero.role}</p>
        <p className={styles.desc}>{t.hero.description}</p>
        <div className={styles.links}>
          <a href="mailto:stjimmytzuc@gmail.com" className={styles.link}>stjimmytzuc@gmail.com</a>
          <span className={styles.sep}>·</span>
          <a href="https://github.com/JimmyTzuc" target="_blank" rel="noopener noreferrer" className={styles.link}>github.com/JimmyTzuc</a>
          <span className={styles.sep}>·</span>
          <span className={styles.loc}>Mérida, México</span>
        </div>
      </div>
    </section>
  )
}
