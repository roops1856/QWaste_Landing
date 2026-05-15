const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E5E7EB',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <a href="#" style={{
          fontWeight: 800, fontSize: 20, color: '#2563EB',
          letterSpacing: '-0.5px', textDecoration: 'none',
        }}>
          QWaste
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: '#374151', fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>
              {label}
            </a>
          ))}
        </div>

        <button style={{
          background: '#2563EB', color: '#fff', border: 'none',
          padding: '9px 20px', borderRadius: 8, fontWeight: 600,
          fontSize: 14, cursor: 'pointer',
        }}>
          Get started
        </button>
      </div>
    </nav>
  )
}
