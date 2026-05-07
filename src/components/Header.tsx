import { useLanguage } from '../hooks/useLanguage'
import { I18N } from '../data/site-info'

export function Header() {
  const { lang } = useLanguage()
  const t = I18N[lang]

  return (
    <header className="pt-6 pb-4 text-center">
      <img
        src="images/logo.png"
        alt="原菓子 yuansweets"
        className="w-[180px] h-[180px] object-contain mx-auto mb-2 block"
      />

      {/* ornament divider */}
      <div
        className="flex items-center justify-center gap-[10px] text-[#E0A52A] my-1 mb-[18px]"
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-[#EDE0C4]" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
          <path d="M12 2 14 9l7 1-5 4 1.5 7L12 17.5 6.5 21 8 14l-5-4 7-1z" />
        </svg>
        <span className="h-px w-10 bg-[#EDE0C4]" />
      </div>

      {/* info card */}
      <div className="bg-[#FFFEFB] border border-[#EDE0C4] rounded-[14px] mx-4 px-4 py-[14px] text-left">
        {/* address */}
        <InfoRow icon={<AddressIcon />}>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#B0A088] mb-[2px]">{t.addressLabel}</div>
          <div className="text-sm text-[#3A2E22] break-words">{t.address}</div>
        </InfoRow>
        {/* phone */}
        <InfoRow icon={<PhoneIcon />} divider>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#B0A088] mb-[2px]">{t.phoneLabel}</div>
          <div className="text-sm text-[#3A2E22]">
            <a href="tel:0978373519" className="text-[#8B5A1F] border-b border-dotted border-[#A8702A] no-underline">
              0978-373-519
            </a>
          </div>
        </InfoRow>
        {/* hours */}
        <InfoRow icon={<ClockIcon />} divider>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#B0A088] mb-[2px]">{t.hoursLabel}</div>
          <div className="text-sm text-[#3A2E22]">{t.hoursValue}</div>
        </InfoRow>
      </div>
    </header>
  )
}

function InfoRow({ icon, children, divider }: { icon: React.ReactNode; children: React.ReactNode; divider?: boolean }) {
  return (
    <div className={`flex items-start gap-3 py-[6px] text-sm leading-[1.5] ${divider ? 'border-t border-dashed border-[#EDE0C4]' : ''}`}>
      <span className="flex-none mt-[2px] text-[#A8702A] w-[18px]" aria-hidden="true">{icon}</span>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

function AddressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}
