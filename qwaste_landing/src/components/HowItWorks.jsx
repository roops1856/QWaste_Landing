const steps = [
  {
    num: 1,
    title: 'Connect your machines',
    desc: 'Link all your factory equipment to the platform in minutes',
  },
  {
    num: 2,
    title: 'Monitor your factory',
    desc: 'Get real-time visibility across all zones, machines and lines',
  },
  {
    num: 3,
    title: 'Act on insights',
    desc: 'Use smart analytics and alerts to improve operations',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 36, fontWeight: 700, color: '#111827',
          marginBottom: 56, letterSpacing: '-0.5px',
        }}>
          Up and running in 3 steps
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }}>
          {steps.map(({ num, title, desc }) => (
            <div key={num}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                border: '2px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontWeight: 600, fontSize: 18, color: '#374151',
              }}>
                {num}
              </div>
              <h3 style={{ fontWeight: 600, fontSize: 17, color: '#111827', margin: '0 0 10px' }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.65, maxWidth: 260, marginInline: 'auto' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
