'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from './LangProvider'
import { CONTENT } from '../lib/content'

const ROUTES = [
  { key: 'home',      href: '/' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'about',     href: '/about' },
  { key: 'textos',    href: '/textos' },
  { key: 'contacto',  href: '/contacto' },
]

export default function Nav() {
  const { lang, toggle } = useLang()
  const pathname = usePathname()
  const t = CONTENT[lang].nav
  const brand = CONTENT[lang].brand

  return (
    <header className="tts-nav">
      <Link href="/" className="tts-brand">
        <span className="tts-mark" aria-hidden="true">
          <span>t</span>
          <span>gc</span>
        </span>
        <span className="tts-name">{brand.name}</span>
      </Link>

      <nav className="tts-nav__links">
        {ROUTES.map(({ key, href }) => {
          const isActive = href === '/'
            ? pathname === '/'
            : pathname.startsWith(href)
          return (
            <Link key={key} href={href}
              className={'tts-nav__link' + (isActive ? ' is-active' : '')}>
              {t[key]}
            </Link>
          )
        })}
      </nav>

      <div className="tts-nav__right">
        <a href={brand.tiendaUrl} target="_blank" rel="noopener noreferrer"
           className="tts-nav__shop">
          {t.tienda}<span aria-hidden="true">↗</span>
        </a>
        <button className="tts-lang" onClick={toggle} aria-label="Switch language">
          <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
          <span className="tts-lang-divider">/</span>
          <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
        </button>
      </div>
    </header>
  )
}
