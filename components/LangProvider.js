'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LangCtx = createContext({ lang: 'es', toggle: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tesi.lang')
      if (saved === 'en' || saved === 'es') setLang(saved)
    } catch {}
  }, [])

  const toggle = () => {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    try { localStorage.setItem('tesi.lang', next) } catch {}
  }

  return <LangCtx.Provider value={{ lang, toggle }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}
