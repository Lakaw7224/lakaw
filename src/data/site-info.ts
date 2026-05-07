import type { Lang } from '../types/menu'

export const SITE_NAME = {
  zh: '原菓子',
  en: 'yuansweets',
  ja: '原菓子',
  ko: '위안스위츠',
}

export const SITE_NAME_ROMAN = 'yuansweets'

export const CAT_ORDER = ['coffee', 'pour_over', 'herbal_tea'] as const

export type I18nKeys = {
  addressLabel: string
  phoneLabel: string
  hoursLabel: string
  hoursValue: string
  address: string
  market: string
  descLabel: string
  noteLabel: string
  priceLabel: string
  cats: Record<string, string>
  catSubs: Record<string, string>
}

export const I18N: Record<Lang, I18nKeys> = {
  zh: {
    addressLabel: '地址',
    phoneLabel: '電話',
    hoursLabel: '營業',
    hoursValue: '採預約制 · 無固定營業時間',
    address: '花蓮縣豐濱鄉民權街20號',
    market: '時價',
    descLabel: '說明',
    noteLabel: '備註',
    priceLabel: '價格',
    cats: { coffee: '咖啡', pour_over: '手沖', herbal_tea: '在地花草茶' },
    catSubs: { coffee: 'COFFEE', pour_over: 'POUR OVER', herbal_tea: 'LOCAL HERBAL TEA' },
  },
  en: {
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    hoursValue: 'By reservation · No fixed hours',
    address: 'No. 20, Minquan St., Fengbin Township, Hualien County, Taiwan',
    market: 'Market Price',
    descLabel: 'About',
    noteLabel: 'Notes',
    priceLabel: 'Price',
    cats: { coffee: 'Coffee', pour_over: 'Pour Over', herbal_tea: 'Local Herbal Tea' },
    catSubs: { coffee: 'COFFEE', pour_over: 'POUR OVER', herbal_tea: 'HERBAL TEA' },
  },
  ja: {
    addressLabel: '住所',
    phoneLabel: '電話',
    hoursLabel: '営業',
    hoursValue: '予約制 · 定休日なし',
    address: '台湾 花蓮県豊浜郷民権街20号',
    market: '時価',
    descLabel: '説明',
    noteLabel: '備考',
    priceLabel: '価格',
    cats: { coffee: 'コーヒー', pour_over: 'ハンドドリップ', herbal_tea: '地元のハーブティー' },
    catSubs: { coffee: 'COFFEE', pour_over: 'POUR OVER', herbal_tea: 'HERBAL TEA' },
  },
  ko: {
    addressLabel: '주소',
    phoneLabel: '전화',
    hoursLabel: '영업',
    hoursValue: '예약제 · 고정 영업시간 없음',
    address: '대만 화롄현 펑빈향 민취안가 20호',
    market: '시가',
    descLabel: '설명',
    noteLabel: '비고',
    priceLabel: '가격',
    cats: { coffee: '커피', pour_over: '핸드드립', herbal_tea: '로컬 허브차' },
    catSubs: { coffee: 'COFFEE', pour_over: 'POUR OVER', herbal_tea: 'HERBAL TEA' },
  },
}
