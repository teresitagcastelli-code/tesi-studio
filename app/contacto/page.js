'use client'
import { useState } from 'react'
import { useLang } from '../../components/LangProvider'
import { CONTENT } from '../../lib/content'

export default function Contacto() {
  const { lang } = useLang()
  const c = CONTENT[lang].contacto
  const brand = CONTENT[lang].brand
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name    = fd.get('name') || ''
    const email   = fd.get('email') || ''
    const message = fd.get('message') || ''
    const subject = encodeURIComponent('Contacto desde tesistudio.com — ' + name)
    const body    = encodeURIComponent(message + '\n\n— ' + name + '\n' + email)
    window.location.href = 'mailto:' + brand.email + '?subject=' + subject + '&body=' + body
    setSent(true)
  }

  return (
    <section className="dirA__contact dirA__page">
      <header className="dirA__contact-head">
        <p className="tts-eyebrow">{c.eyebrow}</p>
        <p className="dirA__page-lede">{c.lede}</p>
      </header>

      <div className="dirA__contact-grid">
        <div className="dirA__contact-left">
          <ul className="dirA__contact-direct">
            {c.directs.map(([k, v, href], i) => (
              <li key={i}>
                <span>{k}</span>
                <a href={href || '#'}
                   target={href?.startsWith('http') ? '_blank' : undefined}
                   rel="noopener noreferrer">{v}</a>
              </li>
            ))}
          </ul>
        </div>

        <form className="dirA__contact-form" onSubmit={onSubmit}>
          {sent ? (
            <div className="dirA__form-sent">
              <p className="tts-eyebrow">✓</p>
              <p>{c.sent}</p>
              <button type="button" className="tts-link" onClick={() => setSent(false)}>
                {lang === 'es' ? 'Enviar otro mensaje →' : 'Send another →'}
              </button>
            </div>
          ) : (
            <>
              <div className="dirA__form-row">
                <div className="tts-field">
                  <label>{c.formName}</label>
                  <input name="name" required placeholder="—"/>
                </div>
                <div className="tts-field">
                  <label>{c.formEmail}</label>
                  <input name="email" type="email" required placeholder="—"/>
                </div>
              </div>
              <div className="tts-field">
                <label>{c.formMessage}</label>
                <textarea name="message" rows="5" required placeholder={c.formMessagePh}/>
              </div>
              <div className="dirA__form-foot">
                <button type="submit" className="tts-btn is-primary">{c.send}</button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
