import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const styles = {
  nav: (scrolled, menuOpen) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? '14px 48px' : '24px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: scrolled ? 'rgba(253,250,245,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(196,98,45,0.15)' : 'none',
    transition: 'all 0.4s ease',
  }),
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: 'var(--charcoal)',
  },
  logoAccent: {
    color: 'var(--terracotta)',
  },
  links: {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
    alignItems: 'center',
  },
  link: (isActive) => ({
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: '0.8rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: isActive ? 'var(--terracotta)' : 'var(--charcoal)',
    position: 'relative',
    transition: 'color 0.3s',
  }),
  cta: {
    padding: '10px 28px',
    background: 'var(--terracotta)',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    border: '1px solid var(--terracotta)',
    transition: 'all 0.3s',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '4px',
    background: 'none',
    border: 'none',
  },
  bar: (open, i) => ({
    width: '24px',
    height: '1.5px',
    background: 'var(--charcoal)',
    transition: 'all 0.3s',
    transform: open && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' :
               open && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
    opacity: open && i === 1 ? 0 : 1,
  }),
  mobileMenu: (open) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--charcoal)',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s cubic-bezier(0.76,0,0.24,1)',
  }),
  mobileLink: {
    fontFamily: 'var(--font-display)',
    fontSize: '2.5rem',
    color: 'var(--cream)',
    fontWeight: 300,
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/tours', label: 'Tours' },
    { to: '/about', label: 'About' },
  ]

  return (
    <>
      <nav style={styles.nav(scrolled, menuOpen)}>
        <Link to="/" style={styles.logo}>
          Voya<span style={styles.logoAccent}>.</span>
        </Link>

        {/* Desktop Nav */}
        <ul style={styles.links} className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} style={({ isActive }) => styles.link(isActive)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" style={styles.cta} className="desktop-nav"
          onMouseEnter={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--terracotta)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--terracotta)'; e.target.style.color = '#fff' }}>
          Plan Trip
        </Link>

        {/* Hamburger */}
        <button style={{ ...styles.hamburger, display: 'flex' }} className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map(i => <span key={i} style={styles.bar(menuOpen, i)} />)}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu(menuOpen)}>
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} style={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
        <Link to="/contact" style={{ ...styles.mobileLink, color: 'var(--terracotta)' }}
          onClick={() => setMenuOpen(false)}>
          Plan Trip
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          nav { padding: 20px 24px !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        a[style*="letterSpacing"]::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--terracotta);
          transition: width 0.3s;
        }
        a[style*="letterSpacing"]:hover::after { width: 100%; }
      `}</style>
    </>
  )
}
