import { useEffect, useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { I18N, CAT_ORDER } from '../data/site-info'

type Props = {
  activeCategory: string
  onSelect: (cat: string) => void
}

export function CategoryNav({ activeCategory, onSelect }: Props) {
  const { lang } = useLanguage()
  const t = I18N[lang]
  const ref = useRef<HTMLDivElement>(null)

  // Scroll active tab into view when activeCategory changes
  useEffect(() => {
    const wrap = ref.current
    if (!wrap) return
    const active = wrap.querySelector<HTMLButtonElement>('[aria-pressed="true"]')
    if (active) {
      active.scrollIntoView({ inline: 'nearest', block: 'nearest' })
    }
  }, [activeCategory])

  function handleClick(cat: string) {
    onSelect(cat)
    const section = document.getElementById(`section-${cat}`)
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div
      ref={ref}
      className="sticky z-40 flex gap-2 px-3 py-[10px] border-b border-[#EDE0C4] overflow-x-auto scrollbar-none"
      style={{
        top: 41,
        background: 'rgba(251,244,228,0.92)',
        backdropFilter: 'saturate(180%) blur(14px)',
        WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      }}
      role="tablist"
    >
      {CAT_ORDER.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-pressed={activeCategory === cat}
          onClick={() => handleClick(cat)}
          className={`flex-none rounded-full px-[14px] py-[6px] text-[12px] whitespace-nowrap border transition-all duration-150
            ${activeCategory === cat
              ? 'bg-[#A8702A] text-white border-[#A8702A]'
              : 'bg-transparent text-[#7A6753] border-[#EDE0C4]'
            }`}
        >
          {t.cats[cat]}
        </button>
      ))}
    </div>
  )
}
