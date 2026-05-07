import type { MenuItem } from '../types/menu'
import type { Lang } from '../types/menu'
import { TagBadge } from './TagBadge'
import { fmtPrice } from '../utils/price'

type Props = {
  item: MenuItem
  lang: Lang
  onClick: (id: string) => void
}

export function MenuCard({ item, lang, onClick }: Props) {
  return (
    <button
      className="w-full text-left bg-[#FFFEFB] border border-[#EDE0C4] rounded-[14px] p-3 flex gap-[14px] items-stretch cursor-pointer transition-transform duration-100 active:scale-[0.985] active:border-[#E0A52A] font-[inherit] text-inherit"
      onClick={() => onClick(item.id)}
    >
      {/* thumbnail */}
      <div className="flex-none w-[84px] h-[84px] rounded-[10px] bg-[#F4E9D2] flex items-center justify-center text-[38px] leading-none overflow-hidden">
        {item.image
          ? <img loading="lazy" src={item.image} alt="" className="w-full h-full object-cover" />
          : <span aria-hidden="true">{item.emoji || '🍽️'}</span>
        }
      </div>

      {/* body */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-[16px] font-semibold leading-[1.35] text-[#3A2E22] m-0 break-words">
            {item.names[lang]}
          </h3>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-[6px]">
              {item.tags.map(tag => <TagBadge key={tag} tag={tag} lang={lang} />)}
            </div>
          )}
        </div>

        {/* prices */}
        <div className="flex flex-wrap gap-x-[10px] gap-y-1 mt-1">
          {item.price.map((p, i) => (
            <span key={i} className="text-[13px] text-[#3A2E22] inline-flex items-baseline gap-1">
              {p.label && <span className="text-[11px] text-[#7A6753]">{p.label[lang]}</span>}
              <span className="font-semibold text-[#8B5A1F]">{fmtPrice(p.value, lang)}</span>
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
