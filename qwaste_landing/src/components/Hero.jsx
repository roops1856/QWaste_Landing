import { Check } from 'lucide-react'

const badges = [
  { label: 'Live Notifications', bg: '#ECFDF5', color: '#065F46', check: '#16A34A' },
  { label: 'Real-time Availability', bg: '#EFF6FF', color: '#1E40AF', check: '#2563EB' },
  { label: 'Idle detection', bg: '#F5F3FF', color: '#5B21B6', check: '#7C3AED' },
]

export default function Hero() {
  return (
    <section style={{ padding: '80px 32px 64px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{
          fontSize: 52, fontWeight: 700, color: '#111827',
          margin: '0 auto 20px', maxWidth: 660,
          lineHeight: 1.15, letterSpacing: '-1.5px',
        }}>
          Smart Factory Management,<br />Powered by Intelligence
        </h1>

        <p style={{
          fontSize: 17, color: '#6B7280', margin: '0 auto 32px',
          maxWidth: 480, lineHeight: 1.65,
        }}>
          Monitor machines, manage orders, and reduce waste — all in one platform.
        </p>

        <button style={{
          background: '#2563EB', color: '#fff', border: 'none',
          padding: '13px 28px', borderRadius: 8, fontWeight: 600,
          fontSize: 15, cursor: 'pointer', marginBottom: 28,
          display: 'block', margin: '0 auto 28px',
        }}>
          Get started free
        </button>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: 10,
          flexWrap: 'wrap', marginBottom: 52,
        }}>
          {badges.map(({ label, bg, color, check }) => (
            <span key={label} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: bg, color,
              padding: '5px 14px', borderRadius: 20, fontSize: 13, fontWeight: 500,
            }}>
              <Check size={13} color={check} strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </div>

        <div style={{
          maxWidth: 900, margin: '0 auto',
          background: '#F3F4F6', borderRadius: 16,
          border: '1px solid #E5E7EB',
          aspectRatio: '16/9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#9CA3AF', fontSize: 14,
        }}>
          Dashboard / Hero illustration placeholder
        </div>
      </div>
    </section>
  )
}
