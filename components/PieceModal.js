'use client'
import { useEffect } from 'react'
import { PiecePicture } from './Figures'
import { CONTENT } from '../lib/content'

export default function PieceModal({ piece, lang, onClose }) {
  const t = CONTENT[lang]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="dirA__modal-bg" onClick={onClose}>
      <div className="dirA__modal" onClick={(e) => e.stopPropagation()}>
        <button className="dirA__modal-x" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="dirA__modal-img">
          <PiecePicture piece={piece} series={piece._series}/>
        </div>
        <div className="dirA__modal-body">
          <p className="tts-eyebrow">{piece._seriesTitle}</p>
          <h2>{piece.title}</h2>
          <p>{piece.desc}</p>
          <dl className="dirA__modal-data">
            <div>
              <dt>{lang === 'es' ? 'Año' : 'Year'}</dt>
              <dd>{piece.year}</dd>
            </div>
            <div>
              <dt>{lang === 'es' ? 'Materiales' : 'Materials'}</dt>
              <dd>{piece.materials}</dd>
            </div>
            <div>
              <dt>{lang === 'es' ? 'Dimensiones' : 'Dimensions'}</dt>
              <dd>{piece.dims}</dd>
            </div>
          </dl>
          <a
            className="tts-btn is-primary"
            href={'mailto:' + t.brand.email + '?subject=' + encodeURIComponent('Consulta · ' + piece.id)}>
            {lang === 'es' ? 'Consultar' : 'Inquire'}
          </a>
        </div>
      </div>
    </div>
  )
}
