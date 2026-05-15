import { Activity, ShoppingBag, Zap, Users, Bell, Shield } from 'lucide-react'

const features = [
  {
    Icon: Activity, color: '#2563EB', bg: '#EFF6FF',
    title: 'Real-time monitoring',
    desc: 'Live machine status and alerts across all zones and lines',
  },
  {
    Icon: ShoppingBag, color: '#10B981', bg: '#ECFDF5',
    title: 'Order management',
    desc: 'Full lifecycle tracking from creation to completion',
  },
  {
    Icon: Zap, color: '#F59E0B', bg: '#FFFBEB',
    title: 'Energy tracking',
    desc: 'Consumption monitoring by zone and time range',
  },
  {
    Icon: Users, color: '#8B5CF6', bg: '#F5F3FF',
    title: 'Workforce management',
    desc: 'Operators, tasks and machine assignments',
  },
  {
    Icon: Bell, color: '#8B5CF6', bg: '#F5F3FF',
    title: 'WebSocket alerts',
    desc: 'Instant push notifications for real-time events',
  },
  {
    Icon: Shield, color: '#2563EB', bg: '#EFF6FF',
    title: 'RBAC permissions',
    desc: 'Role-based access control with per-user overrides',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '80px 32px', background: '#F9FAFB' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 36, fontWeight: 700, color: '#111827', textAlign: 'center',
          marginBottom: 52, letterSpacing: '-0.5px',
        }}>
          Everything you need to run a smart factory
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {features.map(({ Icon, color, bg, title, desc }) => (
            <div key={title} style={{
              background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
              padding: '24px 28px',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: 16, color: '#111827', margin: '0 0 8px' }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
