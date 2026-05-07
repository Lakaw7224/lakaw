import type { TagCode, TagDef } from '../types/menu'

export const TAGS: Record<TagCode, TagDef> = {
  R:  { icon: '⭐',    cls: 'recommend', text: { zh: '本店推薦', en: 'Recommended',               ja: 'おすすめ',         ko: '추천',              fr: 'Recommandé' } },
  '1':{ icon: '🌶️',   cls: 'spicy',     text: { zh: '小辣',     en: 'Mild Spicy',                ja: '少し辛い',         ko: '약간 매운',         fr: 'Légèrement épicé' } },
  '2':{ icon: '🌶️🌶️', cls: 'spicy',     text: { zh: '中辣',     en: 'Medium Spicy',              ja: '中辛',             ko: '보통 매운',         fr: 'Moyennement épicé' } },
  '3':{ icon: '🔥',    cls: 'spicy',     text: { zh: '大辣',     en: 'Very Spicy',                ja: '激辛',             ko: '매우 매운',         fr: 'Très épicé' } },
  P:  { icon: '🐷',    cls: 'meat',      text: { zh: '含豬肉',   en: 'Contains Pork',             ja: '豚肉入り',         ko: '돼지고기 포함',     fr: 'Contient du porc' } },
  B:  { icon: '🐂',    cls: 'meat',      text: { zh: '含牛肉',   en: 'Contains Beef',             ja: '牛肉入り',         ko: '소고기 포함',       fr: 'Contient du bœuf' } },
  L:  { icon: '🐑',    cls: 'meat',      text: { zh: '含羊肉',   en: 'Contains Lamb',             ja: 'ラム入り',         ko: '양고기 포함',       fr: 'Contient de l\'agneau' } },
  V:  { icon: '🥬',    cls: 'veg',       text: { zh: '素食',     en: 'Vegetarian',                ja: 'ベジタリアン',     ko: '채식',              fr: 'Végétarien' } },
  V5: { icon: '🧄',    cls: 'veg',       text: { zh: '五辛素',   en: 'Plant-based with Allium',   ja: '五葷あり精進',     ko: '오신채 포함 채식',  fr: 'Végétarien avec alliacées' } },
  H:  { icon: '☪️',    cls: 'halal',     text: { zh: '清真認證', en: 'Halal Certified',           ja: 'ハラール認証',     ko: '할랄 인증',         fr: 'Certifié Halal' } },
}
