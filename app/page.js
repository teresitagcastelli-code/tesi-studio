'use client'
import Link from 'next/link'
import { useLang } from '../components/LangProvider'
import { CONTENT, HERO_VARIANT } from '../lib/content'
import { VideoSlot, AxonometricFigure } from '../components/Figures'

export default function Home() {
  const { lang } = useLang()
  const h = CONTENT[lang].home
  const brand = CONTENT[lang].brand

  return (
    <section className="dirA__hero dirA__hero--simple dirA__page">
      <div className="dirA__hero-inner">
        <p className="tts-eyebrow">{h.eyebrow}</p>
        <h1 className="dirA__display">
          {brand.tagline1.replace(/\.$/, '')}<em>.</em>
          <br/>
          <span className="dirA__display-line2">{brand.tagline2}</span>
        </h1>
        <p className="dirA__lede">{h.lede}</p>
        <div className="dirA__hero-cta">
          <Link href="/portfolio" className="tts-btn is-primary">
            {lang === 'es' ? 'Ver obra' : 'View work'}
          </Link>
          <Link href="/about" className="tts-btn is-ghost">
            {lang === 'es' ? 'Leer statement →' : 'Read statement →'}
          </Link>
        </div>
        <div className="dirA__hero-figure dirA__hero-figure--wide" data-variant={HERO_VARIANT}>
          {HERO_VARIANT === 'portrait' && (
            <div className="dirA__hero-portrait">
              <img src="/assets/portrait.jpg" alt="Tesi Gómez Castelli"/>
            </div>
          )}
          {HERO_VARIANT === 'video' && (
            <VideoSlot caption={lang === 'es' ? 'Video del estudio' : 'Studio video'}/>
          )}
          {HERO_VARIANT === 'text' && (
            <AxonometricFigure variant="open-book"/>
          )}
        </div>
      </div>
    </section>
  )
}
