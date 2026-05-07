import { useEffect, useCallback } from 'react'
import type { MenuItem } from '../types/menu'
import type { Lang } from '../types/menu'
import { TagBadge } from './TagBadge'
import { fmtPrice } from '../utils/price'
import { I18N } from '../data/site-info'
import { useScrollLock } from '../hooks/useScrollLock'

type Props = {
  item: MenuItem | null
  lang: Lang
  onClose: () => void
}

export function ItemDetailModal({ item, lang, onClose }: Props) {
  const open = item !== null
  useScrollLock(open)

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const t = I18N[lang]

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center transition-opacity duration-[220ms]
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ background: 'rgba(58,46,34,0.55)' }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className={`bg-[#FFFEFB] w-full max-w-[430px] max-h-[92vh] rounded-t-[22px] overflow-hidden flex flex-col
          transition-transform duration-[280ms] ${open ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(.2,.8,.2,1)' }}
      >
        {/* handle */}
        <div className="w-9 h-1 rounded-full bg-[#EDE0C4] mx-auto mt-2 flex-none" />

        {/* close button */}
        <button
          className="absolute top-[18px] right-[14px] w-8 h-8 rounded-full border-0 bg-white/85 text-[#3A2E22] text-[18px] cursor-pointer z-10 flex items-center justify-center shadow-sm"
          onClick={onClose}
          aria-label="Close"
          style={{ position: 'absolute' }}
        >
          ×
        </button>

        {/* image area */}
        <div className="w-full aspect-[4/3] bg-[#F4E9D2] flex items-center justify-center text-[96px] overflow-hidden flex-none">
          {item?.image
            ? <img src={item.image} alt={item?.names[lang] ?? ''} className="w-full h-full object-cover" />
            : <span aria-hidden="true">{item?.emoji || '🍽️'}</span>
          }
        </div>

        {/* body */}
        <div className="px-5 pb-8 pt-[18px] overflow-y-auto flex-1">
          {item && (
            <>
              <h3 className="text-[22px] font-bold m-0 mb-2 text-[#3A2E22]">{item.names[lang]}</h3>

              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-[14px]">
                  {item.tags.map(tag => <TagBadge key={tag} tag={tag} lang={lang} withText />)}
                </div>
              )}

              {/* prices */}
              <div className="mt-4">
                <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#B0A088] m-0 mb-2 font-medium">{t.priceLabel}</h4>
                {item.price.map((p, i) => (
                  <div key={i} className="flex justify-between items-baseline py-2 border-b border-dashed border-[#EDE0C4] last:border-b-0">
                    <span className="text-[14px] text-[#7A6753]">{p.label ? p.label[lang] : ' '}</span>
                    <span className="text-[17px] font-semibold text-[#8B5A1F]">{fmtPrice(p.value, lang)}</span>
                  </div>
                ))}
              </div>

              {/* desc */}
              {item.desc[lang]?.trim() && (
                <div className="mt-4 pt-4 border-t border-[#EDE0C4]">
                  <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#B0A088] m-0 mb-2 font-medium">{t.descLabel}</h4>
                  <p className="text-[14px] text-[#7A6753] leading-[1.65] whitespace-pre-wrap m-0">{item.desc[lang]}</p>
                </div>
              )}

              {/* note */}
              {item.note[lang]?.trim() && (
                <div className="mt-4 pt-4 border-t border-[#EDE0C4]">
                  <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#B0A088] m-0 mb-2 font-medium">{t.noteLabel}</h4>
                  <p className="text-[14px] text-[#7A6753] leading-[1.65] whitespace-pre-wrap m-0">{item.note[lang]}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
