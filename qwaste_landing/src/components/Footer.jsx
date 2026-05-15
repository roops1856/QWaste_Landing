import { Link2, Share2, GitFork } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog'],
  Resources: ['Support', 'Documentation'],
}

const socialIcons = [
  { Icon: Link2, href: '#' },
  { Icon: Share2, href: '#' },
  { Icon: GitFork, href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#9CA3AF', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand column */}
          <div>
            <span style={{
              fontWeight: 800, fontSize: 20, color: '#fff',
              letterSpacing: '-0.5px', display: 'block', marginBottom: 16,
            }}>
              QWaste
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, maxWidth: 260 }}>
              Smart factory management powered by real-time intelligence.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socialIcons.map(({ Icon, href }, i) => (
                <a key={i} href={href} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#1F2937',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9CA3AF',
                }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 style={{ fontWeight: 600, fontSize: 14, color: '#fff', margin: '0 0 16px' }}>
                {col}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ color: '#9CA3AF', fontSize: 14, textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid #1F2937', paddingTop: 24,
          textAlign: 'center', fontSize: 13,
        }}>
          © {new Date().getFullYear()} QWaste. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
