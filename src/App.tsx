import { useState, useEffect, useCallback } from 'react'
import { LanguageContext, useLanguageState } from './hooks/useLanguage'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import { menuItems } from './data/menu-items'
import { CAT_ORDER } from './data/site-info'
import type { MenuItem } from './types/menu'

export default function App() {
  const langState = useLanguageState()
  const { lang } = langState

  const [activeCategory, setActiveCategory] = useState<string>(CAT_ORDER[0])
  const [modalItem, setModalItem] = useState<MenuItem | null>(null)

  // Scroll spy
  useEffect(() => {
    const sections = CAT_ORDER.map(c => document.getElementById(`section-${c}`)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            setActiveCategory((en.target as HTMLElement).dataset.cat ?? CAT_ORDER[0])
          }
        })
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const openModal = useCallback((id: string) => {
    setModalItem(menuItems.find(i => i.id === id) ?? null)
  }, [])

  const closeModal = useCallback(() => setModalItem(null), [])

  return (
    <LanguageContext.Provider value={langState}>
      <div className="max-w-[430px] mx-auto bg-[#FBF4E4] min-h-screen pb-[60px]">
        <LanguageSwitcher />
        <Header />
        <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />
        <main>
          {CAT_ORDER.map(cat => {
            const items = menuItems.filter(i => i.category === cat)
            if (!items.length) return null
            return (
              <MenuSection
                key={cat}
                category={cat}
                items={items}
                lang={lang}
                onCardClick={openModal}
              />
            )
          })}
        </main>
        <footer className="text-center py-7 text-[11px] tracking-[0.18em] text-[#B0A088]">
          原菓子 · yuansweets · 花蓮豐濱
        </footer>
      </div>
      <ItemDetailModal item={modalItem} lang={lang} onClose={closeModal} />
    </LanguageContext.Provider>
  )
}
