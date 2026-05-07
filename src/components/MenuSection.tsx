import type { MenuItem } from '../types/menu'
import type { Lang } from '../types/menu'
import { MenuCard } from './MenuCard'
import { I18N } from '../data/site-info'

type Props = {
  category: string
  items: MenuItem[]
  lang: Lang
  onCardClick: (id: string) => void
}

export function MenuSection({ category, items, lang, onCardClick }: Props) {
  const t = I18N[lang]

  return (
    <section className="px-4 pt-6 pb-2" id={`section-${category}`} data-cat={category}>
      <div className="flex items-baseline justify-between mb-[14px]">
        <h2 className="text-[17px] font-bold text-[#3A2E22] tracking-[0.04em] m-0 flex items-center gap-[10px]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#E0A52A] inline-block" aria-hidden="true" />
          {t.cats[category]}
        </h2>
        <span className="text-[11px] tracking-[0.2em] uppercase text-[#B0A088] font-medium">
          {t.catSubs[category]}
        </span>
      </div>

      <div className="flex flex-col gap-[10px]">
        {items.map(item => (
          <MenuCard key={item.id} item={item} lang={lang} onClick={onCardClick} />
        ))}
      </div>
    </section>
  )
}
