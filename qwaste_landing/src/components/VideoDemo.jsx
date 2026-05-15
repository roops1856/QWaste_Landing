import { Play } from 'lucide-react'

export default function VideoDemo() {
  return (
    <section style={{ padding: '80px 32px', background: '#F9FAFB', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <span style={{
          display: 'inline-block', background: '#2563EB', color: '#fff',
          padding: '5px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600,
          marginBottom: 20,
        }}>
          See it in action
        </span>

        <h2 style={{
          fontSize: 36, fontWeight: 700, color: '#111827',
          marginBottom: 14, letterSpacing: '-0.5px',
        }}>
          Watch how QWaste works
        </h2>

        <p style={{
          color: '#6B7280', fontSize: 15, lineHeight: 1.65,
          maxWidth: 560, margin: '0 auto 36px',
        }}>
          A 2-minute walkthrough of the dashboard, machine monitoring, and real-time alerts — no sign-up required.
        </p>

        <div style={{
          background: '#E5E7EB', borderRadius: 16,
          aspectRatio: '16/9', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, cursor: 'pointer', overflow: 'hidden',
        }}>
          <div style={{
            width: 68, height: 68, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}>
            <Play size={28} color="#2563EB" fill="#2563EB" style={{ marginLeft: 3 }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <span style={{ fontSize: 14, color: '#6B7280', fontWeight: 500 }}>Questions?</span>
          <button style={{
            background: '#2563EB', color: '#fff', border: 'none',
            padding: '9px 20px', borderRadius: 8, fontWeight: 600,
            fontSize: 14, cursor: 'pointer',
          }}>
            Book a live demo
          </button>
        </div>
      </div>
    </section>
  )
}
