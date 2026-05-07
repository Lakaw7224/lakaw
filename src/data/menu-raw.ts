import type { TagCode } from '../types/menu'

export type MenuRawItem = {
  category: string
  name: string
  options: string[]
  tags: TagCode[]
  image: string | null
  emoji: string
  note: string
}

export const menuRaw: MenuRawItem[] = [
  // ── Coffee 咖啡 ──────────────────────────────────────────
  { category: 'coffee',    name: '美式',         options: ['70'],  tags: [], image: null, emoji: '☕',  note: '' },
  { category: 'coffee',    name: '拿鐵',         options: ['90'],  tags: [], image: null, emoji: '🥛',  note: '' },
  { category: 'coffee',    name: '美酒加咖啡',   options: ['150'], tags: [], image: null, emoji: '🍶',  note: 'Americano + Sticky rice wine' },
  // ── Pour Over 手沖 ──────────────────────────────────────
  { category: 'pour_over', name: '秘魯 娜魯礄莊園', options: ['160'], tags: [], image: null, emoji: '☕', note: '' },
  // ── Local Herbal Tea 在地花草茶 ─────────────────────────
  { category: 'herbal_tea', name: '野香菜 Pipit',    options: ['80'], tags: [], image: null, emoji: '🌿', note: '' },
  { category: 'herbal_tea', name: '清炒菊花茶',      options: ['60'], tags: [], image: null, emoji: '🌼', note: '' },
  { category: 'herbal_tea', name: '甜洛黎百香花茶',  options: ['60'], tags: [], image: null, emoji: '🌺', note: '' },
  { category: 'herbal_tea', name: '森林泡泡蜜',      options: ['60'], tags: [], image: null, emoji: '🍯', note: '' },
]
