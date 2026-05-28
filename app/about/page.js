'use client'
import { useLang } from '../../components/LangProvider'
import { CONTENT } from '../../lib/content'
import { PortraitImg } from '../../components/Figures'

export default function About() {
  const { lang } = useLang()
  const a = CONTENT[lang].about
  const brand = CONTENT[lang].brand

  return (
    <>
      <section className="dirA__statement-section dirA__page">
        <p className="tts-eyebrow">{a.eyebrow} · {a.statementHead}</p>
        <div className="dirA__statement-prose">
          {a.statement.map((para, i) => (
            <p key={i} className={i === 0 ? 'dirA__statement-lead' : ''}>{para}</p>
          ))}
        </div>
      </section>

      <section className="dirA__bio-section">
        <div className="dirA__bio-text">
          {a.bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="dirA__bio-portrait">
          <PortraitImg name={brand.name}/>
        </div>
      </section>
    </>
  )
}
