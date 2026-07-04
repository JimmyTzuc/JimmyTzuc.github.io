import { Link } from 'react-router-dom'
import { notes } from '../data/notes'
import styles from './NotesList.module.css'

function formatDate(str) {
  if (!str) return ''
  return new Date(str).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function NotesList({ t }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>{t.notes.label}</p>
        <p className={styles.desc}>{t.notes.description}</p>
      </div>

      {notes.length === 0 ? (
        <p className={styles.empty}>{t.notes.empty}</p>
      ) : (
        <div className={styles.list}>
          {notes.map(note => (
            <Link key={note.slug} to={`/notes/${note.slug}`} className={styles.item}>
              <div className={styles.itemMeta}>
                <span className={styles.date}>{formatDate(note.date)}</span>
              </div>
              <div className={styles.itemBody}>
                <h2 className={styles.title}>{note.title}</h2>
                {note.description && (
                  <p className={styles.excerpt}>{note.description}</p>
                )}
                <div className={styles.tags}>
                  {note.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
