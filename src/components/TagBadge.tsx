import type { TagCode } from '../types/menu'
import type { Lang } from '../types/menu'
import { TAGS } from '../data/tags'

const clsMap: Record<string, string> = {
  recommend: 'bg-[#F4DDA0] text-[#4a3000]',
  spicy:     'bg-[#FBE3D2] text-[#B0431D]',
  meat:      'bg-[#F1E2D3] text-[#7A4B23]',
  veg:       'bg-[#E2EBD0] text-[#4F6B2A]',
  halal:     'bg-[#D8E8DD] text-[#2C5C3D]',
}

type Props = {
  tag: TagCode
  lang: Lang
  withText?: boolean
}

export function TagBadge({ tag, lang, withText = false }: Props) {
  const def = TAGS[tag]
  if (!def) return null
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] px-[7px] py-[2px] rounded-full leading-relaxed ${clsMap[def.cls]}`}>
      <span aria-hidden="true">{def.icon}</span>
      {withText && <span>{def.text[lang]}</span>}
    </span>
  )
}
