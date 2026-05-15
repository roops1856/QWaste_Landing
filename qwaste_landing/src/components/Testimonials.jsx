import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 36, fontWeight: 700, color: '#111827',
          marginBottom: 8, letterSpacing: '-0.5px',
        }}>
          What our customers say
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: 15, marginBottom: 48 }}>
          Trusted by manufacturers worldwide
        </p>

        <div style={{
          background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16,
          padding: '40px 52px', maxWidth: 720, margin: '0 auto',
          textAlign: 'left', position: 'relative',
        }}>
          <span style={{
            fontSize: 72, color: '#E5E7EB', lineHeight: 1,
            position: 'absolute', top: 16, left: 48,
            fontFamily: 'Georgia, serif', userSelect: 'none',
          }}>
            "
          </span>

          <p style={{
            fontSize: 17, color: '#374151', lineHeight: 1.75,
            margin: '28px 0 32px', fontStyle: 'italic',
          }}>
            Energy costs dropped 25% after implementing Qwaste's monitoring module
            across our facility. The visibility it gave us was something we never had before.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 16, color: '#2563EB', flexShrink: 0,
              }}>
                L
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 14, color: '#111827', margin: 0 }}>Lê Văn C</p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
                  Operations Manager, GSD Industrial
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 3 }}>
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
