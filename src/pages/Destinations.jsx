import { useState } from 'react'
import { Link } from 'react-router-dom'

const allDestinations = [
  { name: 'Santorini', country: 'Greece', continent: 'Europe', tag: 'Island Escape', price: 'From $3,200', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80', nights: '7 nights', rating: 4.9 },
  { name: 'Kyoto', country: 'Japan', continent: 'Asia', tag: 'Cultural Immersion', price: 'From $4,100', img: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80', nights: '10 nights', rating: 5.0 },
  { name: 'Marrakech', country: 'Morocco', continent: 'Africa', tag: 'Exotic Journey', price: 'From $2,400', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80', nights: '6 nights', rating: 4.8 },
  { name: 'Patagonia', country: 'Argentina', continent: 'Americas', tag: 'Wild Adventure', price: 'From $5,200', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80', nights: '12 nights', rating: 4.9 },
  { name: 'Amalfi Coast', country: 'Italy', continent: 'Europe', tag: 'Coastal Luxury', price: 'From $3,800', img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&q=80', nights: '8 nights', rating: 4.8 },
  { name: 'Bali', country: 'Indonesia', continent: 'Asia', tag: 'Spiritual Retreat', price: 'From $2,100', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', nights: '9 nights', rating: 4.7 },
  { name: 'Maldives', country: 'Maldives', continent: 'Asia', tag: 'Ocean Paradise', price: 'From $6,500', img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80', nights: '7 nights', rating: 5.0 },
  { name: 'Petra', country: 'Jordan', continent: 'Middle East', tag: 'Ancient Wonders', price: 'From $2,900', img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', nights: '5 nights', rating: 4.9 },
  { name: 'Serengeti', country: 'Tanzania', continent: 'Africa', tag: 'Safari Dream', price: 'From $7,200', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', nights: '10 nights', rating: 5.0 },
  { name: 'Iceland', country: 'Iceland', continent: 'Europe', tag: 'Arctic Magic', price: 'From $3,600', img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80', nights: '8 nights', rating: 4.8 },
  { name: 'Machu Picchu', country: 'Peru', continent: 'Americas', tag: 'Inca Heritage', price: 'From $3,400', img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80', nights: '9 nights', rating: 4.9 },
  { name: 'Dubrovnik', country: 'Croatia', continent: 'Europe', tag: 'Adriatic Gem', price: 'From $2,800', img: 'https://images.unsplash.com/photo-1555990538-c4f1cd9f6c84?w=600&q=80', nights: '6 nights', rating: 4.7 },
]

const continents = ['All', 'Europe', 'Asia', 'Africa', 'Americas', 'Middle East']

function DestCard({ d, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        overflow: 'hidden',
        boxShadow: hovered ? '0 20px 60px rgba(28,25,23,0.15)' : '0 4px 20px rgba(28,25,23,0.06)',
        transition: 'all 0.4s',
        transform: hovered ? 'translateY(-6px)' : 'none',
        animation: `fadeUp 0.6s ${(i % 3) * 0.1}s ease both`,
        cursor: 'pointer',
      }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img src={d.img} alt={d.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }} />
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          background: 'var(--terracotta)',
          color: '#fff', fontSize: '0.6rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '5px 12px',
        }}>{d.tag}</div>
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(13,11,10,0.7)',
          color: '#fff', fontSize: '0.7rem',
          padding: '5px 10px',
          backdropFilter: 'blur(4px)',
        }}>★ {d.rating}</div>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
          {d.country}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '12px' }}>
          {d.name}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--cream)' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--terracotta)', fontWeight: 500 }}>{d.price}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{d.nights}</div>
          </div>
          <Link to="/contact" style={{
            padding: '8px 20px',
            border: '1px solid var(--terracotta)',
            color: 'var(--terracotta)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
            background: hovered ? 'var(--terracotta)' : 'transparent',
            color: hovered ? '#fff' : 'var(--terracotta)',
          }}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Destinations() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allDestinations : allDestinations.filter(d => d.continent === active)

  return (
    <div style={{ paddingTop: '90px', background: 'var(--warm-white)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'var(--charcoal)',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '400px', height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(196,98,45,0.15)',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '16px' }}>
            Explore the World
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.05 }}>
            Our <em>Destinations</em>
          </h1>
        </div>
      </div>

      {/* Filter */}
      <div style={{ padding: '40px 48px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {continents.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: '8px 24px',
              border: '1px solid',
              borderColor: active === c ? 'var(--terracotta)' : 'var(--sand)',
              background: active === c ? 'var(--terracotta)' : 'transparent',
              color: active === c ? '#fff' : 'var(--muted)',
              fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              transition: 'all 0.3s', cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="dest-grid">
          {filtered.map((d, i) => <DestCard key={d.name} d={d} i={i} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px', color: 'var(--muted)' }}>
            No destinations found in this region yet.
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .dest-grid { grid-template-columns: 1fr !important; }
          section, div[style*="padding: '48px'"] { padding: 24px !important; }
        }
      `}</style>
    </div>
  )
}
