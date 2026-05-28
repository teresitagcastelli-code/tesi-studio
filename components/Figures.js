'use client'
import { useState } from 'react'
import { ASSETS } from '../lib/content'

// ── Decorative SVG ──────────────────────────────────────────
export function AxonometricFigure({ variant = 'default', className = '' }) {
  const stroke = 'var(--ink)'
  const accent = 'var(--ink-2)'
  if (variant === 'open-book') {
    return (
      <svg viewBox="0 0 600 400" className={className} aria-hidden="true">
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill={stroke} opacity="0.12"/>
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#dotgrid)"/>
        <g fill="none" stroke={stroke} strokeWidth="1.2">
          <path d="M40 280 L240 280 L280 200 L80 200 Z"/>
        </g>
        <line x1="280" y1="200" x2="320" y2="100" stroke={accent} strokeWidth="1.2" strokeDasharray="4 3"/>
        <g fill="none" stroke={stroke} strokeWidth="1.2">
          <path d="M320 100 L480 60 L560 140 L400 180 Z"/>
          <path d="M400 180 L400 300 L560 260 L560 140"/>
          <path d="M320 100 L320 220 L400 260 L400 180" opacity="0.5"/>
          <path d="M320 100 L400 180 M480 60 L400 180 M560 140 L400 180" stroke={accent} opacity="0.6"/>
        </g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 600 400" className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <rect x="80" y="120" width="200" height="160"/>
        <path d="M280 120 L420 60 L420 220 L280 280" />
        <path d="M420 60 L420 220 M280 200 L420 140" stroke={accent} opacity="0.5"/>
      </g>
    </svg>
  )
}

// ── Piece placeholder SVG ──────────────────────────────────
export function PiecePlaceholder({ piece, series }) {
  const ink = 'var(--ink)'
  const accent = 'var(--ink-2)'
  const seriesId = series || (piece?.id?.startsWith('ven') ? 'ventana' : 'miniaturas')
  const seed = piece?.id ? piece.id.charCodeAt(piece.id.length - 1) : 0

  if (seriesId === 'miniaturas') {
    const offset = (seed % 4) * 4
    return (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="500" fill="var(--bg-paper)"/>
        <g>
          <polygon points="80,360 320,360 360,400 40,400" fill="var(--gold-leaf)" opacity="0.45"/>
          <polygon points="100,355 300,355 332,380 68,380" fill="var(--gold)" opacity="0.35"/>
        </g>
        <g fill="none" stroke={ink} strokeWidth="1.1" opacity="0.7">
          <polygon points="80,360 320,360 320,160 80,160"/>
          <polygon points="80,360 320,360 360,400 40,400"/>
          <polygon points="320,360 360,400 360,200 320,160"/>
          <line x1="80" y1="160" x2="120" y2="120" opacity="0.35" strokeDasharray="2 3"/>
          <line x1="320" y1="160" x2="360" y2="120" opacity="0.35" strokeDasharray="2 3"/>
          <line x1="120" y1="120" x2="360" y2="120" opacity="0.35" strokeDasharray="2 3"/>
          <line x1="360" y1="120" x2="360" y2="200" opacity="0.35" strokeDasharray="2 3"/>
        </g>
        <g transform={`translate(${190 + offset}, 240)`}>
          <g fill="none" stroke={accent} strokeWidth="1.1">
            <path d="M0 -30 Q -22 -12 -20 12 Q -10 32 0 40 Q 10 32 20 12 Q 22 -12 0 -30 Z"/>
            <path d="M -16 0 L 16 0 M -12 12 L 12 12 M -8 24 L 8 24" opacity="0.55"/>
          </g>
        </g>
      </svg>
    )
  }

  const empty = /nada|nothing/i.test(piece?.title || '')
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="500" fill="var(--bg-paper-deep)"/>
      <g fill="none" stroke={ink} strokeWidth="1.3">
        <rect x="60" y="80" width="280" height="340" fill="var(--bg-paper)"/>
        <rect x="76" y="96" width="248" height="308"/>
      </g>
      {!empty && (
        <g stroke={accent} strokeWidth="1" fill="none" opacity="0.7" transform="translate(200 250)">
          {seed % 3 === 0 && <>
            <path d="M -60 60 Q 0 -40 60 60"/>
            <path d="M -50 60 Q 0 -20 50 60" opacity="0.65"/>
            <path d="M -40 60 Q 0 0 40 60" opacity="0.45"/>
          </>}
          {seed % 3 === 1 && <>
            {[-50, -30, -10, 10, 30, 50].map(x => (
              <line key={x} x1={x} y1={-60} x2={x + 6} y2={60} opacity="0.65"/>
            ))}
          </>}
          {seed % 3 === 2 && <>
            <circle r="50" opacity="0.45"/>
            <circle r="34" opacity="0.65"/>
            <circle r="18" opacity="0.85"/>
          </>}
        </g>
      )}
      {empty && (
        <g stroke={ink} strokeWidth="0.5" opacity="0.14">
          <line x1="76" y1="96" x2="324" y2="404"/>
          <line x1="324" y1="96" x2="76" y2="404"/>
        </g>
      )}
    </svg>
  )
}

// ── Piece picture (real image with SVG fallback) ────────────
export function PiecePicture({ piece, series }) {
  const [failed, setFailed] = useState(false)
  if (!piece.image || failed) return <PiecePlaceholder piece={piece} series={series}/>
  return (
    <img src={piece.image} alt={piece.title} loading="lazy"
         onError={() => setFailed(true)}
         className="dirA__piece-photo"/>
  )
}

// ── Portrait image ──────────────────────────────────────────
export function PortraitImg({ name }) {
  const [failed, setFailed] = useState(false)
  if (failed) return (
    <div className="dirA__portrait-fallback" aria-hidden="true">
      <AxonometricFigure variant="open-book"/>
    </div>
  )
  return (
    <img src={ASSETS.portrait} alt={name}
         onError={() => setFailed(true)}/>
  )
}

// ── Hero video slot ──────────────────────────────────────────
export function VideoSlot({ caption, className = '' }) {
  const [failed, setFailed] = useState(false)
  const v = ASSETS.heroVideo

  if (failed || (!v.mp4 && !v.webm)) {
    return (
      <div className={'video-slot ' + className}>
        <div className="video-slot__inner">
          <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="800" height="450" fill="var(--bg-paper)"/>
            <defs>
              <linearGradient id="shimmer-g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gold-leaf)" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.38"/>
                <stop offset="100%" stopColor="var(--gold-leaf)" stopOpacity="0.2"/>
                <animate attributeName="x1" values="0%;100%;0%" dur="10s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <rect x="100" y="80" width="600" height="300" fill="url(#shimmer-g)"/>
            <g fill="none" stroke="var(--ink)" strokeWidth="0.8" opacity="0.2">
              <rect x="100" y="80" width="600" height="300"/>
              <line x1="100" y1="80" x2="700" y2="380" strokeDasharray="4 5"/>
              <line x1="700" y1="80" x2="100" y2="380" strokeDasharray="4 5"/>
            </g>
            <g transform="translate(400 230)" stroke="var(--ink-2)" strokeWidth="1" fill="none" opacity="0.5">
              <circle r="36"><animate attributeName="r" values="34;42;34" dur="7s" repeatCount="indefinite"/></circle>
              <circle r="22" opacity="0.8"><animate attributeName="r" values="20;26;20" dur="7s" repeatCount="indefinite"/></circle>
              <circle r="8"><animate attributeName="r" values="6;10;6" dur="7s" repeatCount="indefinite"/></circle>
            </g>
          </svg>
        </div>
        {caption && <span className="video-slot__cap">{caption}</span>}
      </div>
    )
  }

  return (
    <div className={'video-slot video-slot--real ' + className}>
      <video autoPlay muted loop playsInline
             poster={v.poster}
             onError={() => setFailed(true)}>
        {v.webm && <source src={v.webm} type="video/webm"/>}
        {v.mp4  && <source src={v.mp4}  type="video/mp4"/>}
      </video>
      {caption && <span className="video-slot__cap">{caption}</span>}
    </div>
  )
}
