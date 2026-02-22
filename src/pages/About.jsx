const team = [
  { name: 'Isabelle Laurent', role: 'Founder & CEO', origin: 'Paris, France', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80', bio: 'Former diplomat turned travel visionary. 20+ years crafting extraordinary journeys across 6 continents.' },
  { name: 'Kenji Tanaka', role: 'Head of Asia Pacific', origin: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Cultural immersion specialist with deep expertise in Japan, South Korea, and Southeast Asia.' },
  { name: 'Amara Diallo', role: 'Africa & Middle East Lead', origin: 'Accra, Ghana', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80', bio: 'Safari guide turned luxury curator. Unrivaled access to Africa\'s most exclusive wildlife reserves.' },
  { name: 'Carlos Mendez', role: 'Americas Director', origin: 'Buenos Aires, Argentina', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'Adventure photographer and expedition leader specializing in Patagonia and Amazonian expeditions.' },
]

const values = [
  { icon: '◎', title: 'Authenticity', desc: 'We seek genuine connections with cultures, not curated performances for tourists.' },
  { icon: '◈', title: 'Sustainability', desc: 'Every trip is designed with local communities and environmental impact in mind.' },
  { icon: '◉', title: 'Excellence', desc: 'From the first email to the final farewell, every detail is held to the highest standard.' },
  { icon: '◇', title: 'Curiosity', desc: 'We believe travel\'s greatest gift is the broadening of one\'s perspective of the world.' },
]

export default function About() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--warm-white)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '600px',
      }} className="about-hero">
        <div style={{
          background: 'var(--charcoal)',
          padding: '100px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '24px' }}>
            Our Story
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '32px' }}>
            Born from a<br /><em>Passion to Explore</em>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.9, maxWidth: '420px' }}>
            Founded in 2008 by Isabelle Laurent in a small Paris atelier, Voya began as a personal mission: to make the world's most extraordinary places accessible to those who truly appreciate them.
          </p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="About"
            style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'kenBurns 20s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(196,98,45,0.15)' }} />
        </div>
      </div>

      {/* Mission */}
      <section style={{ padding: '120px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '16px' }}>
            Our Philosophy
          </div>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.5,
            color: 'var(--charcoal)',
          }}>
            "Travel is not about the miles covered, but the depths explored. We design for those who seek not just to see the world — but to understand it."
          </blockquote>
          <div style={{ marginTop: '24px', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--muted)' }}>
            — Isabelle Laurent, Founder
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '12px' }}>
              What We Stand For
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Our Core Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }} className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} style={{ textAlign: 'center', animation: `fadeUp 0.6s ${i * 0.12}s ease both` }}>
                <div style={{ fontSize: '2rem', color: 'var(--terracotta)', marginBottom: '20px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '16px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '0 48px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '12px' }}>
              The People Behind Your Journey
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Meet Our Team
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }} className="team-grid">
            {team.map((m, i) => (
              <div key={m.name} style={{ animation: `fadeUp 0.6s ${i * 0.1}s ease both` }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '20px', position: 'relative' }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,10,0.6) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: '#fff', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                    {m.origin}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '4px' }}>{m.name}</h3>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '12px' }}>{m.role}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-hero { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .values-grid, .team-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </div>
  )
}
