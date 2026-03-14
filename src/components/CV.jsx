import styles from './CV.module.css'

const CV_URL = '/CV-Jimmy-Tzuc.pdf'

export default function CV({ t }) {
  return (
    <section id="cv" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{t.cv.heading}</h2>
          <p className={styles.sub}>{t.cv.subheading}</p>
        </div>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.cv.download}
        </a>
      </div>
    </section>
  )
}
