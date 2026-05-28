'use client'
import { useState } from 'react'
import { useLang } from '../../components/LangProvider'
import { CONTENT } from '../../lib/content'
import { PiecePicture } from '../../components/Figures'
import PieceModal from '../../components/PieceModal'

export default function Portfolio() {
  const { lang } = useLang()
  const p = CONTENT[lang].portfolio
  const series = CONTENT[lang].series
  const [active, setActive] = useState(null)

  return (
    <>
      <header className="dirA__page-head dirA__page">
        <p className="tts-eyebrow">{p.eyebrow}</p>
        <h1 className="dirA__page-h1">{p.title}</h1>
        <p className="dirA__page-lede">{p.lede}</p>
        <nav className="dirA__series-nav">
          <span>{p.seriesNav}</span>
          {series.map(s => (
            <a key={s.id} href={'#serie-' + s.id}
               onClick={(e) => {
                 e.preventDefault()
                 document.getElementById('serie-' + s.id)?.scrollIntoView({ behavior: 'smooth' })
               }}>
              <em>{s.title}</em>
              <span>{s.pieces.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {series.map((s, sidx) => (
        <section key={s.id} id={'serie-' + s.id} className="dirA__series">
          <header className="dirA__series-head">
            <p className="tts-eyebrow">{s.eyebrow}</p>
            <h2 className="dirA__series-title">{s.title}</h2>
            <p className="dirA__series-lede">{s.lede}</p>
          </header>
          <div className="dirA__pf dirA__pf--grid">
            <div className="dirA__pf-grid">
              {s.pieces.map((piece, i) => (
                <article key={piece.id} className="dirA__piece dirA__piece--grid"
                         style={{ '--i': i }}>
                  <div className="dirA__piece-img"
                       onClick={() => setActive({ ...piece, _series: s.id, _seriesTitle: s.title })}>
                    <PiecePicture piece={piece} series={s.id}/>
                  </div>
                  <div className="dirA__piece-meta">
                    <h3>{piece.title}</h3>
                    <p className="dirA__piece-desc">{piece.desc}</p>
                    <button className="dirA__piece-view"
                            onClick={() => setActive({ ...piece, _series: s.id, _seriesTitle: s.title })}>
                      {p.view} →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {sidx < series.length - 1 && (
            <a className="dirA__next-series" href={'#serie-' + series[sidx + 1].id}
               onClick={(e) => {
                 e.preventDefault()
                 document.getElementById('serie-' + series[sidx + 1].id)?.scrollIntoView({ behavior: 'smooth' })
               }}>
              <span className="dirA__next-line"/>
              <span>
                <small>{p.nextSeries}</small>
                <strong><em>{series[sidx + 1].title}</em> →</strong>
              </span>
            </a>
          )}
        </section>
      ))}

      {active && (
        <PieceModal piece={active} lang={lang} onClose={() => setActive(null)}/>
      )}
    </>
  )
}
