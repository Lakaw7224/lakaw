import type { MenuItem } from '../types/menu'

export const menuItems: MenuItem[] = [
  // ── coffee ─────────────────────────────────────────────
  {
    id: 'coffee-001', category: 'coffee',
    names: { zh: '美式', en: 'Americano', ja: 'アメリカーノ', ko: '아메리카노', fr: 'Americano', ami: 'Kapi Amerika' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '☕', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  {
    id: 'coffee-002', category: 'coffee',
    names: { zh: '拿鐵', en: 'Latte', ja: 'ラテ', ko: '라떼', fr: 'Latte', ami: 'Latte' },
    price: [{ label: null, value: 90 }],
    image: null, emoji: '🥛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  {
    id: 'coffee-003', category: 'coffee',
    names: { zh: '美酒加咖啡', en: 'Americano + Sticky Rice Wine', ja: 'アメリカーノ＋もち米酒', ko: '아메리카노 + 찹쌀주', fr: 'Americano + Vin de riz gluant', ami: 'Kapi kiso tireng' },
    price: [{ label: null, value: 150 }],
    image: null, emoji: '🍶', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: {
      zh: 'Americano + Sticky rice wine',
      en: 'Americano blended with traditional Taiwanese sticky rice wine.',
      ja: 'アメリカーノに台湾のもち米酒をブレンド。',
      ko: '아메리카노에 대만 전통 찹쌀주를 블렌딩.',
      fr: 'Americano mélangé avec du vin de riz gluant traditionnel taïwanais.',
      ami: 'Kapi kiso tireng no Taiwan.',
    },
  },
  // ── pour over ──────────────────────────────────────────
  {
    id: 'pour_over-001', category: 'pour_over',
    names: { zh: '秘魯 娜魯礄莊園', en: 'Peru — Naruchu Estate', ja: 'ペルー ナルチョ農園', ko: '페루 나루초 농원', fr: 'Pérou — Domaine Naruchu', ami: 'Peru — Naruchu' },
    price: [{ label: null, value: 160 }],
    image: null, emoji: '☕', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  // ── herbal tea ─────────────────────────────────────────
  {
    id: 'herbal_tea-001', category: 'herbal_tea',
    names: { zh: '野香菜 Pipit', en: 'Pipit Wild Herb Tea', ja: 'ピピット 野香菜茶', ko: 'Pipit 야생 향채차', fr: 'Tisane Pipit aux herbes sauvages', ami: 'Pipit' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🌿', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  {
    id: 'herbal_tea-002', category: 'herbal_tea',
    names: { zh: '清炒菊花茶', en: 'Toasted Chrysanthemum Tea', ja: '炒り菊花茶', ko: '볶은 국화차', fr: 'Thé de chrysanthème grillé', ami: 'Teh no kayaw' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🌼', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  {
    id: 'herbal_tea-003', category: 'herbal_tea',
    names: { zh: '甜洛黎百香花茶', en: 'Sweet Roselle & Passion Flower Tea', ja: 'ローゼル＆パッションフラワー茶', ko: '로젤 & 패션플라워 차', fr: 'Tisane oseille de Guinée & fleur de la passion', ami: 'Teh no fonga pasiyenflawar' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🌺', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
  {
    id: 'herbal_tea-004', category: 'herbal_tea',
    names: { zh: '森林泡泡蜜', en: 'Forest Honey Bubble', ja: '森のはちみつバブル', ko: '숲의 꿀 버블', fr: 'Bulle de miel forestier', ami: 'Waco no mochi ci kakalawan' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🍯', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
    note: { zh: '', en: '', ja: '', ko: '', fr: '', ami: '' },
  },
]
