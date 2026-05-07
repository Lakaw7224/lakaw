import { createContext, useContext, useState, useCallback } from 'react'
import type { Lang } from '../types/menu'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  setLang: () => {},
})

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}

export function useLanguageState(): LanguageContextValue {
  const stored = (localStorage.getItem('lang') ?? 'zh') as Lang
  const valid: Lang[] = ['zh', 'en', 'ja', 'ko', 'fr', 'ami']
  const initial: Lang = valid.includes(stored) ? stored : 'zh'

  const [lang, setLangState] = useState<Lang>(initial)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }, [])

  return { lang, setLang }
}
