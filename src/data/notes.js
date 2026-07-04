// Vite's import.meta.glob loads all .md files at build time
const modules = import.meta.glob('../notes/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/m)
  if (!match) return { meta: {}, content: raw }

  const meta = {}
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':')
    if (!key) return
    let val = rest.join(':').trim()
    // Parse arrays like [tag1, tag2]
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim())
    }
    meta[key.trim()] = val
  })

  return { meta, content: match[2].trim() }
}

export const notes = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace('../notes/', '').replace('.md', '')
    const { meta, content } = parseFrontmatter(raw)
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      description: meta.description || '',
      content,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const getNoteBySlug = (slug) => notes.find(n => n.slug === slug)
