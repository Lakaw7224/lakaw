import type { Lang } from '../types/menu'
import { I18N } from '../data/site-info'

export function fmtPrice(value: number | 'market', lang: Lang): string {
  if (value === 'market') return I18N[lang].market
  return `NT$${value}`
}
