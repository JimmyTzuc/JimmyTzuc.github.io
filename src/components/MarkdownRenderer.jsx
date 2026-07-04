import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MermaidChart from './MermaidChart'
import styles from './MarkdownRenderer.module.css'

function CodeBlock({ className, children }) {
  const language = (className || '').replace('language-', '')
  const code = String(children).trimEnd()

  if (language === 'mermaid') {
    return <MermaidChart code={code} />
  }

  return (
    <div className={styles.codeWrap}>
      {language && <span className={styles.lang}>{language}</span>}
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  )
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const isBlock = className || String(children).includes('\n')
            if (isBlock) return <CodeBlock className={className}>{children}</CodeBlock>
            return <code className={styles.inlineCode} {...props}>{children}</code>
          },
          h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
          h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
          h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
          p: ({ children }) => <p className={styles.p}>{children}</p>,
          ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
          li: ({ children }) => <li className={styles.li}>{children}</li>,
          a: ({ href, children }) => (
            <a href={href} className={styles.a} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className={styles.blockquote}>{children}</blockquote>
          ),
          hr: () => <hr className={styles.hr} />,
          table: ({ children }) => (
            <div className={styles.tableWrap}><table className={styles.table}>{children}</table></div>
          ),
          th: ({ children }) => <th className={styles.th}>{children}</th>,
          td: ({ children }) => <td className={styles.td}>{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
