export default function CTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #3B82F6 100%)',
      padding: '80px 32px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 40, fontWeight: 700, color: '#fff',
          marginBottom: 14, letterSpacing: '-1px', lineHeight: 1.2,
        }}>
          Ready to transform your factory?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 36 }}>
          Sign up for free. No credit card required.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'transparent', color: '#fff',
            border: '2px solid rgba(255,255,255,0.55)',
            padding: '13px 28px', borderRadius: 8, fontWeight: 600,
            fontSize: 15, cursor: 'pointer',
          }}>
            Book a demo
          </button>
          <button style={{
            background: '#fff', color: '#2563EB', border: 'none',
            padding: '13px 28px', borderRadius: 8, fontWeight: 600,
            fontSize: 15, cursor: 'pointer',
          }}>
            Get started free
          </button>
        </div>
      </div>
    </section>
  )
}
