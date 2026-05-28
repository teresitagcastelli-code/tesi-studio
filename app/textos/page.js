'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '../../components/LangProvider'
import { CONTENT } from '../../lib/content'

export default function Textos() {
  const { lang } = useLang()
  const t = CONTENT[lang].textos
  const [cat, setCat] = useState(t.categories[0])
  const filtered = t.items.filter(it =>
    cat === t.categories[0] || it.category === cat
  )

  return (
    <>
      <header className="dirA__page-head dirA__page">
        <p className="tts-eyebrow">{t.eyebrow}</p>
        <h1 className="dirA__page-h1">{t.title}</h1>
        <p className="dirA__page-lede">{t.lede}</p>
        <div className="dirA__filters">
          {t.categories.map(c => (
            <button key={c}
                    className={'dirA__chip' + (cat === c ? ' is-active' : '')}
                    onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
          <span className="dirA__count">
            {filtered.length} {filtered.length === 1 ? 'entrada' : 'entradas'}
          </span>
        </div>
      </header>

      <ol className="dirA__textos-list">
        {filtered.map((item) => (
          <li key={item.id}>
            <Link href={'/textos/' + item.id} className="dirA__textos-item">
              <span className="dirA__textos-n">{item.n}</span>
              <div className="dirA__textos-meta">
                <p className="tts-eyebrow">{item.category} · {item.date}</p>
              </div>
              <div className="dirA__textos-body">
                <h3>{item.title}</h3>
                <p className="dirA__textos-dek">{item.dek}</p>
                <p className="dirA__textos-excerpt">{item.excerpt}</p>
                <span className="dirA__piece-view">{t.read}</span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
