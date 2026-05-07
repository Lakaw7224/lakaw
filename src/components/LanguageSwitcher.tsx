import type { Lang } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'fr', label: 'FR' },
  { code: 'ami', label: 'Pangcah' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <nav
      className="sticky top-0 z-50 flex gap-[6px] px-3 py-2 border-b border-[#EDE0C4]"
      style={{ background: 'rgba(251,244,228,0.92)', backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)' }}
      role="tablist"
      aria-label="Language"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          role="tab"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`flex-1 rounded-full py-[7px] px-1 text-[12px] font-medium transition-colors duration-150 border
            ${lang === code
              ? 'bg-[#3A2E22] text-[#FBF4E4] border-[#3A2E22]'
              : 'bg-transparent text-[#7A6753] border-transparent'
            }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
