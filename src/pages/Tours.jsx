import { useState } from 'react'
import { Link } from 'react-router-dom'

const tours = [
  {
    id: 1,
    name: 'Grand Silk Road',
    subtitle: 'Central Asia Odyssey',
    duration: '21 days',
    groupSize: 'Max 8',
    price: '$9,800',
    difficulty: 'Moderate',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
    highlights: ['Samarkand', 'Bukhara', 'Tashkent', 'Khiva'],
    desc: 'Traverse ancient trade routes through breathtaking landscapes and UNESCO World Heritage cities.',
  },
  {
    id: 2,
    name: 'Japanese Seasons',
    subtitle: 'Cherry Blossoms & Autumn Leaves',
    duration: '14 days',
    groupSize: 'Max 10',
    price: '$7,200',
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80',
    highlights: ['Tokyo', 'Kyoto', 'Nara', 'Hakone'],
    desc: 'Experience Japan through the lens of its most magical seasonal transformations.',
  },
  {
    id: 3,
    name: 'African Safari',
    subtitle: 'East Africa Wildlife Circuit',
    duration: '12 days',
    groupSize: 'Max 6',
    price: '$12,400',
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    highlights: ['Serengeti', 'Ngorongoro', 'Amboseli', 'Maasai Mara'],
    desc: 'Witness the Great Migration and encounter the Big Five in their natural habitat.',
  },
  {
    id: 4,
    name: 'Mediterranean Mosaic',
    subtitle: 'Islands & Hidden Coves',
    duration: '16 days',
    groupSize: 'Max 12',
    price: '$8,600',
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&q=80',
    highlights: ['Santorini', 'Amalfi', 'Dubrovnik', 'Montenegro'],
    desc: 'Sail through turquoise waters and explore sun-drenched villages along Europe\'s most beautiful coastlines.',
  },
  {
    id: 5,
    name: 'Andean Expedition',
    subtitle: 'Mountains & Ancient Civilizations',
    duration: '18 days',
    groupSize: 'Max 8',
    price: '$8,100',
    difficulty: 'Challenging',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    highlights: ['Cusco', 'Machu Picchu', 'Sacred Valley', 'Lake Titicaca'],
    desc: 'Follow Inca trails through cloud forests to discover one of the world\'s great archaeological wonders.',
  },
  {
    id: 6,
    name: 'Northern Lights',
    subtitle: 'Arctic Norway & Iceland',
    duration: '10 days',
    groupSize: 'Max 8',
    price: '$6,900',
    difficulty: 'Easy',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    highlights: ['Tromsø', 'Lofoten', 'Reykjavik', 'Blue Lagoon'],
    desc: 'Chase the aurora borealis across dramatic Arctic landscapes of fjords and volcanic plains.',
  },
]

function TourCard({ t, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        boxShadow: hovered ? '0 24px 64px rgba(28,25,23,0.13)' : '0 4px 20px rgba(28,25,23,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.4s',
        animation: `fadeUp 0.7s ${i * 0.1}s ease both`,
      }} className="tour-card">
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px' }}>
        <img src={t.img} alt={t.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(13,11,10,0.3), transparent)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px',
          fontFamily: 'var(--font-display)',
          fontSize: '2rem', color: '#fff', fontWeight: 300, lineHeight: 1.1,
        }}>
          {t.name}
        </div>
      </div>
      <div style={{ padding: '36px' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '8px' }}>
          {t.subtitle}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          {t.desc}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {t.highlights.map(h => (
            <span key={h} style={{
              padding: '4px 12px',
              background: 'var(--cream)',
              fontSize: '0.7rem',
              color: 'var(--charcoal)',
              letterSpacing: '0.05em',
            }}>{h}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '32px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid var(--cream)' }}>
          {[
            { label: 'Duration', val: t.duration },
            { label: 'Group Size', val: t.groupSize },
            { label: 'Difficulty', val: t.difficulty },
          ].map(info => (
            <div key={info.label}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>{info.label}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--charcoal)' }}>{info.val}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>Per Person</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--charcoal)', fontWeight: 400 }}>{t.price}</div>
          </div>
          <Link to="/contact" style={{
            padding: '14px 32px',
            background: 'var(--terracotta)',
            color: '#fff', fontSize: '0.7rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            transition: 'background 0.3s',
            display: 'inline-block',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--terracotta-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--terracotta)'}>
            Book Tour
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Tours() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--warm-white)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        position: 'relative',
        height: '360px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80" alt="Tours"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,10,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px', maxWidth: '1200px' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '16px' }}>
            Curated Experiences
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.05 }}>
            Our <em>Tours</em>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div style={{ padding: '80px 48px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '620px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--charcoal)' }}>
            Each of our tours is a carefully orchestrated adventure — designed to reveal the soul of a destination while surrounding you in comfort.
          </p>
        </div>
      </div>

      {/* Tour List */}
      <div style={{ padding: '0 48px 100px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {tours.map((t, i) => <TourCard key={t.id} t={t} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tour-card { grid-template-columns: 1fr !important; }
          .tour-card > div:first-child { min-height: 240px !important; }
        }
        @media (max-width: 600px) {
          div[style*="padding: '0 48px'"] { padding: 0 24px 80px !important; }
        }
      `}</style>
    </div>
  )
}
