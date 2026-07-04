import { useParams, Link, Navigate } from 'react-router-dom'
import { getNoteBySlug } from '../data/notes'
import MarkdownRenderer from './MarkdownRenderer'
import styles from './NoteDetail.module.css'

function formatDate(str) {
  if (!str) return ''
  return new Date(str).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function NoteDetail() {
  const { slug } = useParams()
  const note = getNoteBySlug(slug)

  if (!note) return <Navigate to="/notes" replace />

  return (
    <article className={styles.article}>
      <div className={styles.back}>
        <Link to="/notes" className={styles.backLink}>
          ← Notes
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.meta}>
          {note.date && <span className={styles.date}>{formatDate(note.date)}</span>}
          <div className={styles.tags}>
            {note.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </header>

      <MarkdownRenderer content={note.content} />
    </article>
  )
}
