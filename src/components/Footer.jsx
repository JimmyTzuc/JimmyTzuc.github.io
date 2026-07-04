import styles from './Footer.module.css'
export default function Footer({ t }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Jimmy Tzuc</span>
        <span className={styles.sep}>·</span>
        <span className={styles.made}>{t.footer.made}</span>
        <div className={styles.right}>
          <a href="https://github.com/JimmyTzuc" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="mailto:stjimmytzuc@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  )
}
