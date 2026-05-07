export type Lang = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'ami'

export type I18nString = Record<Lang, string>

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'V5' | 'H'

export type PriceOption = {
  label: I18nString | null
  value: number | 'market'
}

export type MenuItem = {
  id: string
  category: string
  names: I18nString
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: I18nString
  note: I18nString
}

export type TagDef = {
  icon: string
  cls: 'recommend' | 'spicy' | 'meat' | 'veg' | 'halal'
  text: I18nString
}
