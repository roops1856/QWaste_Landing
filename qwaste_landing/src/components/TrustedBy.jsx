export default function TrustedBy() {
  return (
    <section style={{
      padding: '36px 32px',
      borderTop: '1px solid #E5E7EB',
      borderBottom: '1px solid #E5E7EB',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{
          fontSize: 11, fontWeight: 600, color: '#9CA3AF',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          Trusted by industry leaders
        </p>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 32, flexWrap: 'wrap',
        }}>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} style={{
              width: 100, height: 32,
              background: '#E5E7EB', borderRadius: 6,
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}
