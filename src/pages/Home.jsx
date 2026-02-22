import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const destinations = [
  {
    name: 'Santorini',
    country: 'Greece',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    tag: 'Island Escape',
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    img: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80',
    tag: 'Cultural Immersion',
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80',
    tag: 'Exotic Journey',
  },
  {
    name: 'Patagonia',
    country: 'Argentina',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80',
    tag: 'Wild Adventure',
  },
]

const stats = [
  { num: '180+', label: 'Destinations' },
  { num: '12K+', label: 'Happy Travelers' },
  { num: '15', label: 'Years of Craft' },
  { num: '98%', label: 'Satisfaction' },
]

function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return inView
}

function DestinationCard({ d, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: i === 0 ? '3/4' : '3/4',
        gridRow: i === 0 ? 'span 2' : 'auto',
        animation: `fadeUp 0.7s ${i * 0.15}s ease both`,
      }}>
      <img src={d.img} alt={d.name} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(28,25,23,0.85) 0%, rgba(28,25,23,0.2) 50%, transparent 100%)'
          : 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)',
        transition: 'all 0.5s',
      }} />
      <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
        <div style={{
          fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--terracotta)', marginBottom: '6px',
          fontFamily: 'var(--font-body)',
        }}>
          {d.tag}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', fontWeight: 400 }}>
          {d.name}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
          {d.country}
        </div>
        <div style={{
          marginTop: '16px',
          padding: '8px 20px',
          border: '1px solid rgba(255,255,255,0.4)',
          color: '#fff',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          display: 'inline-block',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.4s',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(4px)',
        }}>
          Explore →
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ background: 'var(--warm-white)' }}>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '680px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=85"
          alt="Hero"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            animation: 'kenBurns 20s ease-in-out infinite alternate',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(13,11,10,0.75) 0%, rgba(13,11,10,0.35) 60%, transparent 100%)',
        }} />

        {/* Decorative line */}
        <div style={{
          position: 'absolute', left: '48px', top: '50%',
          width: '1px', height: '120px', marginTop: '-60px',
          background: 'linear-gradient(to bottom, transparent, var(--terracotta), transparent)',
          opacity: heroLoaded ? 1 : 0,
          transition: 'opacity 1.5s 0.5s',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          padding: '0 80px',
          maxWidth: '900px',
        }} className="hero-content">
          <div style={{
            fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--terracotta)', marginBottom: '24px',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s 0.2s',
          }}>
            Luxury Travel Redefined
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '32px',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(30px)',
            transition: 'all 0.9s 0.4s',
          }}>
            The World<br />
            <em style={{ fontStyle: 'italic' }}>Awaits</em> You.
          </h1>
          <p style={{
            fontSize: '1rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '420px', lineHeight: 1.8,
            marginBottom: '48px',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.9s 0.6s',
          }}>
            From hidden temples in Kyoto to pristine beaches in Maldives — we craft journeys that transcend the ordinary.
          </p>
          <div style={{
            display: 'flex', gap: '20px', flexWrap: 'wrap',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.9s 0.8s',
          }}>
            <Link to="/destinations" style={{
              padding: '16px 40px',
              background: 'var(--terracotta)',
              color: '#fff', fontSize: '0.75rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
              onMouseEnter={e => e.target.style.background = 'var(--terracotta-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--terracotta)'}>
              Explore Destinations
            </Link>
            <Link to="/tours" style={{
              padding: '16px 40px',
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#fff', fontSize: '0.75rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              transition: 'all 0.3s',
              display: 'inline-block',
              backdropFilter: 'blur(4px)',
            }}
              onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent' }}>
              View Tours
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center', color: 'rgba(255,255,255,0.5)',
          opacity: heroLoaded ? 1 : 0,
          transition: 'opacity 1s 1.5s',
        }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '10px' }}>SCROLL</div>
          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.3)', margin: '0 auto', animation: 'fadeUp 1.5s infinite' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{
        background: 'var(--charcoal)',
        padding: '60px 48px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          textAlign: 'center',
        }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ${i * 0.1}s`,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem', fontWeight: 300,
                color: 'var(--terracotta)',
              }}>{s.num}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', marginTop: '8px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <section style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '12px' }}>
                Curated for You
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
                Featured<br /><em>Destinations</em>
              </h2>
            </div>
            <Link to="/destinations" style={{
              fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--terracotta)', borderBottom: '1px solid var(--terracotta)',
              paddingBottom: '4px',
            }}>
              View All →
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '16px',
          }} className="dest-grid">
            {destinations.map((d, i) => (
              <DestinationCard key={d.name} d={d} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VOYA ── */}
      <section style={{ background: 'var(--cream)', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '12px' }}>
              The Voya Difference
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Why Travelers Choose Us
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
          }} className="features-grid">
            {[
              { icon: '◎', title: 'Bespoke Itineraries', desc: 'Every journey is tailored to your unique desires, timeline, and travel style. No two Voya trips are the same.' },
              { icon: '◈', title: 'Expert Local Guides', desc: 'Our network of hand-picked local experts opens doors that ordinary tours never reach.' },
              { icon: '◉', title: 'Seamless Experience', desc: 'From first inquiry to final return, our concierge team handles every detail with precision and care.' },
            ].map((f, i) => (
              <div key={f.title} style={{ animation: `fadeUp 0.7s ${i * 0.15}s ease both` }}>
                <div style={{ fontSize: '2rem', color: 'var(--terracotta)', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80" alt="CTA"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,10,0.65)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--terracotta)', marginBottom: '16px', textTransform: 'uppercase' }}>
            Begin Your Journey
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', fontWeight: 300, marginBottom: '32px' }}>
            Ready to Explore?
          </h2>
          <Link to="/contact" style={{
            padding: '18px 52px',
            background: 'var(--terracotta)',
            color: '#fff', fontSize: '0.75rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            display: 'inline-block',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--terracotta-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--terracotta)'}>
            Plan My Dream Trip
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .dest-grid { grid-template-columns: 1fr 1fr !important; }
          .dest-grid > div:first-child { grid-row: auto !important; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px !important; }
          .dest-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </div>
  )
}
