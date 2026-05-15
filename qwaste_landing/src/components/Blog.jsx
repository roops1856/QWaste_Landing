const featured = {
  category: 'Feature',
  title: 'How Real-Time Machine Monitoring Transforms Factory Operations',
  date: 'May 8, 2026',
  readTime: '5 min read',
}

const posts = [
  { category: 'Category', title: 'Post title here', date: 'Apr 14, 2026', readTime: '3 min read' },
  { category: 'Category', title: 'Post title here', date: 'Apr 16, 2026', readTime: '4 min read' },
  { category: 'Category', title: 'Post title here', date: 'Apr 15, 2026', readTime: '3 min read' },
]

function CategoryBadge({ label }) {
  return (
    <span style={{
      display: 'inline-block', background: '#EFF6FF', color: '#2563EB',
      padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
    }}>
      {label}
    </span>
  )
}

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '80px 32px', background: '#F9FAFB' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 32,
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0, letterSpacing: '-0.5px' }}>
            Latest from QWaste
          </h2>
          <a href="#" style={{ color: '#6B7280', fontSize: 14, fontWeight: 500 }}>
            See all →
          </a>
        </div>

        {/* Featured post */}
        <div style={{
          background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
          overflow: 'hidden', marginBottom: 20,
          display: 'flex',
        }}>
          <div style={{ width: 280, flexShrink: 0, background: '#E5E7EB', minHeight: 210 }} />
          <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: 12 }}>
              <CategoryBadge label={featured.category} />
            </div>
            <h3 style={{
              fontSize: 20, fontWeight: 700, color: '#111827',
              margin: '0 0 16px', lineHeight: 1.4,
            }}>
              {featured.title}
            </h3>
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
              {featured.date} · {featured.readTime}
            </p>
          </div>
        </div>

        {/* Smaller posts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {posts.map((post, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #E5E7EB',
              borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
            }}>
              <div style={{ height: 148, background: '#E5E7EB' }} />
              <div style={{ padding: '16px 20px' }}>
                <div style={{ marginBottom: 10 }}>
                  <CategoryBadge label={post.category} />
                </div>
                <h3 style={{
                  fontSize: 15, fontWeight: 600, color: '#111827',
                  margin: '0 0 12px', lineHeight: 1.4,
                }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 12, color: '#9CA3AF', margin: 0 }}>
                  {post.date} · {post.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
