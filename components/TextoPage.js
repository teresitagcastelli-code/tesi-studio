'use client'
import Link from 'next/link'
import { useLang } from './LangProvider'
import { CONTENT } from '../lib/content'

export default function TextoPage({ slug }) {
  const { lang } = useLang()
  const items = CONTENT[lang].textos.items
  const item = items.find(i => i.id === slug)

  // fallback to Spanish if EN translation not available
  const esItem = CONTENT.es.textos.items.find(i => i.id === slug)
  const entry = (item?.body?.[0] === '—') ? esItem : item

  if (!entry) {
    return (
      <div className="dirA__article">
        <Link href="/textos" className="dirA__article-back">← Textos</Link>
        <p>Entrada no encontrada.</p>
      </div>
    )
  }

  return (
    <article className="dirA__article dirA__page">
      <Link href="/textos" className="dirA__article-back">
        ← {lang === 'es' ? 'Textos' : 'Writing'}
      </Link>
      <header className="dirA__article-head">
        <p className="tts-eyebrow">{entry.category} · {entry.date}</p>
        <h1>{entry.title}</h1>
        <p className="dirA__article-dek">{entry.dek}</p>
      </header>
      <div className="dirA__article-body">
        {entry.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {entry.attribution && (
        <p className="dirA__article-attr">— {entry.attribution}</p>
      )}
    </article>
  )
}
