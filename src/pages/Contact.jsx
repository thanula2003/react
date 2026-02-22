import { useState } from 'react'

const interests = ['Beach & Island', 'Cultural & Historic', 'Safari & Wildlife', 'Adventure & Hiking', 'City Exploration', 'Culinary Travel', 'Wellness & Spa', 'Arctic & Polar']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', budget: '', travelers: '2', dates: '', interests: [], message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const toggleInterest = i => setForm(f => ({
    ...f,
    interests: f.interests.includes(i) ? f.interests.filter(x => x !== i) : [...f.interests, i],
  }))
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = (name) => ({
    width: '100%',
    padding: '14px 0',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? 'var(--terracotta)' : 'var(--sand)'}`,
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: 'var(--charcoal)',
    outline: 'none',
    transition: 'border-color 0.3s',
    fontWeight: 300,
  })

  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '8px',
  }

  if (submitted) {
    return (
      <div style={{
        paddingTop: '90px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--warm-white)',
        textAlign: 'center',
        padding: '40px',
      }}>
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✦</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, marginBottom: '20px' }}>
            Thank You, <em>{form.name.split(' ')[0]}</em>.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 40px' }}>
            Your dream journey begins here. One of our travel specialists will reach out within 24 hours to begin crafting your bespoke itinerary.
          </p>
          <div style={{
            display: 'inline-block',
            padding: '12px 32px',
            border: '1px solid var(--terracotta)',
            color: 'var(--terracotta)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }} onClick={() => setSubmitted(false)}>
            Submit Another Inquiry
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '90px', background: 'var(--warm-white)', minHeight: '100vh' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        minHeight: 'calc(100vh - 90px)',
      }} className="contact-grid">

        {/* Left Panel */}
        <div style={{
          background: 'var(--charcoal)',
          padding: '80px 56px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '24px' }}>
              Let's Create Something Special
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '32px' }}>
              Plan Your<br /><em>Dream Journey</em>
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.9, marginBottom: '56px' }}>
              Share your vision and our expert team will craft a bespoke itinerary tailored to your desires, timeline, and budget.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { icon: '◉', label: 'Our Studio', val: '12 Rue du Voyage, Paris' },
                { icon: '◎', label: 'Email Us', val: 'hello@voya.travel' },
                { icon: '◈', label: 'Call Us', val: '+33 (0)1 42 00 00 00' },
                { icon: '◇', label: 'Hours', val: 'Mon–Fri, 9am–7pm CET' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--terracotta)', fontSize: '1.2rem', marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.8)' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(245,240,232,0.1)' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.4)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Response Time
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', fontWeight: 300 }}>
              Within <em style={{ color: 'var(--terracotta)' }}>24 hours</em>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div style={{ padding: '80px 64px', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 48px', marginBottom: '40px' }} className="form-grid">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
                { name: 'destination', label: 'Dream Destination', type: 'text', placeholder: 'Where do you want to go?' },
              ].map(f => (
                <div key={f.name}>
                  <label style={labelStyle}>{f.label}{f.required && <span style={{ color: 'var(--terracotta)' }}> *</span>}</label>
                  <input
                    name={f.name} type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused('')}
                    required={f.required}
                    style={inputStyle(f.name)}
                  />
                </div>
              ))}

              <div>
                <label style={labelStyle}>Number of Travelers</label>
                <select name="travelers" value={form.travelers} onChange={handleChange}
                  onFocus={() => setFocused('travelers')} onBlur={() => setFocused('')}
                  style={{ ...inputStyle('travelers'), cursor: 'pointer' }}>
                  {['1', '2', '3', '4', '5–8', '9–12', '12+'].map(n => <option key={n} value={n}>{n} {n === '1' ? 'Traveler' : 'Travelers'}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Approximate Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange}
                  onFocus={() => setFocused('budget')} onBlur={() => setFocused('')}
                  style={{ ...inputStyle('budget'), cursor: 'pointer' }}>
                  <option value="">Select budget range</option>
                  {['Under $3,000', '$3,000–$6,000', '$6,000–$10,000', '$10,000–$20,000', 'Above $20,000'].map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Preferred Travel Dates</label>
                <input name="dates" type="text" placeholder="e.g. June 2025, flexible in autumn..."
                  value={form.dates} onChange={handleChange}
                  onFocus={() => setFocused('dates')} onBlur={() => setFocused('')}
                  style={inputStyle('dates')} />
              </div>
            </div>

            {/* Interests */}
            <div style={{ marginBottom: '40px' }}>
              <label style={{ ...labelStyle, marginBottom: '20px' }}>Travel Interests (select all that apply)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {interests.map(i => (
                  <button key={i} type="button" onClick={() => toggleInterest(i)} style={{
                    padding: '8px 20px',
                    border: '1px solid',
                    borderColor: form.interests.includes(i) ? 'var(--terracotta)' : 'var(--sand)',
                    background: form.interests.includes(i) ? 'var(--terracotta)' : 'transparent',
                    color: form.interests.includes(i) ? '#fff' : 'var(--muted)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    fontFamily: 'var(--font-body)',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}>
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '48px' }}>
              <label style={labelStyle}>Tell Us About Your Dream Trip</label>
              <textarea
                name="message"
                placeholder="Share any special requests, occasions you're celebrating, or specific experiences you'd love..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                rows={5}
                style={{
                  ...inputStyle('message'),
                  borderBottom: 'none',
                  border: `1px solid ${focused === 'message' ? 'var(--terracotta)' : 'var(--sand)'}`,
                  padding: '16px',
                  resize: 'vertical',
                  minHeight: '120px',
                }}
              />
            </div>

            <button type="submit" style={{
              width: '100%',
              padding: '18px',
              background: 'var(--terracotta)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
              onMouseEnter={e => e.target.style.background = 'var(--terracotta-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--terracotta)'}>
              Send My Inquiry →
            </button>

            <p style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
              No commitment required. We'll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          div[style*="padding: '80px 64px'"] { padding: 48px 24px !important; }
          div[style*="padding: '80px 56px'"] { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
