import { X, Check } from 'lucide-react'

const traditional = [
  { label: 'Paper-Based Records', desc: 'Clipboards, spreadsheets, manual data entry' },
  { label: 'Manual Tracking', desc: 'Walk-around inspections, delayed reporting' },
  { label: 'Disconnected Spreadsheets', desc: 'Siloed data, version conflicts, no real-time sync' },
  { label: 'Reactive Problem Solving', desc: 'Fix issues after they happen, high downtime costs' },
]

const modern = [
  { label: 'Real-Time Data Collection', desc: 'Automatic data capture from all machines and sensors' },
  { label: 'Automated Workflows', desc: 'Smart task assignment, instant notifications, seamless coordination' },
  { label: 'AI-Powered Analytics', desc: 'Centralized dashboard, live KPIs, actionable insights' },
  { label: 'Predictive Maintenance', desc: 'Prevent problems before they occur, minimize downtime' },
]

export default function Comparison() {
  return (
    <section style={{ padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 36, fontWeight: 700, color: '#111827',
          marginBottom: 12, letterSpacing: '-0.5px',
        }}>
          See the difference
        </h2>
        <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 48 }}>
          Discover how QWaste transforms traditional factory management
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          textAlign: 'left',
        }}>
          {/* Traditional */}
          <div style={{
            background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16,
            padding: 32,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 28 }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <X size={18} color="#EF4444" strokeWidth={2.5} />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#111827', margin: '0 0 4px' }}>
                  Traditional Management
                </h3>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
                  Manual Processes, Reactive decisions, limited visibility
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {traditional.map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                    background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <X size={14} color="#D97706" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: '#374151', margin: '0 0 2px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QWaste Modern */}
          <div style={{
            background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 16,
            padding: 32, position: 'relative',
          }}>
            <span style={{
              position: 'absolute', top: 20, right: 20,
              background: '#2563EB', color: '#fff',
              padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            }}>
              Modern Approach
            </span>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 28 }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Check size={18} color="#2563EB" strokeWidth={2.5} />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#1E40AF', margin: '0 0 4px' }}>
                  QWaste Smart Management
                </h3>
                <p style={{ fontSize: 13, color: '#60A5FA', margin: 0 }}>
                  Automated Workflows, Predictive Insights, complete visibility
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {modern.map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                    background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Check size={14} color="#2563EB" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: '#1E40AF', margin: '0 0 2px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 13, color: '#3B82F6', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
