'use client'
import { useLang } from './LangProvider'
import { CONTENT } from '../lib/content'

export default function Footer() {
  const { lang } = useLang()
  const f = CONTENT[lang].footer
  const brand = CONTENT[lang].brand

  return (
    <footer className="tts-footer">
      <div className="tts-footer__cols">
        <div className="tts-footer__col">
          <span className="tts-footer__lbl">Contacto</span>
          <a href={'mailto:' + brand.email}>{brand.email}</a>
        </div>
        <div className="tts-footer__col">
          <span className="tts-footer__lbl">Tienda</span>
          <a href={brand.tiendaUrl} target="_blank" rel="noopener noreferrer">
            tienda.tesistudio.com ↗
          </a>
        </div>
        <div className="tts-footer__col tts-footer__col--social">
          <span className="tts-footer__lbl">Redes</span>
          {brand.social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label} <span className="tts-footer__handle">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="tts-footer__line">
        <span>{f.rights}</span>
        <span>tesistudio.com</span>
      </div>
    </footer>
  )
}
