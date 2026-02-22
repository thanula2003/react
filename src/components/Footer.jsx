import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--charcoal)',
      color: 'var(--cream)',
      padding: '80px 48px 40px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(245,240,232,0.1)',
          marginBottom: '40px',
        }} className="footer-grid">
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}>
              Voya<span style={{ color: 'var(--terracotta)' }}>.</span>
            </div>
            <p style={{
              fontSize: '0.85rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '260px',
            }}>
              Curating extraordinary journeys for the discerning traveler since 2008. Every detail, meticulously crafted.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '28px' }}>
              {['IG', 'TW', 'FB', 'YT'].map(s => (
                <div key={s} style={{
                  width: '36px', height: '36px',
                  border: '1px solid rgba(245,240,232,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', letterSpacing: '0.05em',
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--terracotta)'; e.target.style.color = 'var(--terracotta)' }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,240,232,0.2)'; e.target.style.color = 'var(--cream)' }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {[
            { title: 'Explore', links: ['Destinations', 'Tours', 'Experiences', 'Luxury Hotels'] },
            { title: 'Company', links: ['About Us', 'Our Team', 'Press', 'Careers'] },
            { title: 'Support', links: ['Contact', 'FAQ', 'Privacy Policy', 'Terms'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--terracotta)',
                marginBottom: '24px',
              }}>
                {col.title}
              </div>
              {col.links.map(link => (
                <div key={link} style={{ marginBottom: '12px' }}>
                  <Link to="/" style={{
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'color 0.3s',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.6)'}>
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'rgba(245,240,232,0.4)',
          letterSpacing: '0.05em',
        }}>
          <span>© 2024 Voya Luxury Travel. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          footer { padding: 60px 24px 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
