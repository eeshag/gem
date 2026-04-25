import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [apiStatus, setApiStatus] = useState('checking')

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/health`)
        if (!response.ok) {
          throw new Error('Backend health check failed')
        }
        setApiStatus('online')
      } catch (_error) {
        setApiStatus('offline')
      }
    }

    checkBackend()
  }, [apiBaseUrl])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className="page">
      <header className="topbar">
        <a href="/" className="logo">
          GEM
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <a href="/about">Meet the Team</a>
            </li>
            <li>
              <a href="/programs">Programs & Services</a>
            </li>
            <li>
              <a href="/timeline">Timeline</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <p className="tagline">Girls Empowerment in STEM</p>
          <p className="tagline">
            Backend status:{' '}
            {apiStatus === 'checking'
              ? 'Checking...'
              : apiStatus === 'online'
                ? 'Online'
                : 'Offline'}
          </p>
          <h1>Inspiring the next generation of women in STEM.</h1>
          <p className="hero-copy">
            GEM helps girls discover confidence, community, and career pathways
            through hands-on STEM experiences.
          </p>
          <div className="hero-actions">
            <a href="/programs" className="button primary">
              Explore Programs
            </a>
            <a href="/about" className="button secondary">
              Our Story
            </a>
          </div>
        </section>

        <section className="stats-section" aria-label="Key statistics">
          <article className="stat-card">
            <h2>28%</h2>
            <p>Women represent about 28% of the STEM workforce today.</p>
          </article>
          <article className="stat-card">
            <h2>1 in 3</h2>
            <p>Girls report reduced confidence in STEM by middle school.</p>
          </article>
          <article className="stat-card">
            <h2>100%</h2>
            <p>
              Every GEM workshop is designed to be inclusive, hands-on, and
              mentor-led.
            </p>
          </article>
        </section>

        <section className="signup-section">
          <div>
            <h2>Stay connected</h2>
            <p>
              Sign up for GEM updates, event announcements, and opportunities to
              get involved.
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <div className="signup-controls">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
              <button type="submit">Sign up</button>
            </div>
            {isSubmitted && (
              <p className="success-message" role="status">
                Thanks for joining the GEM community.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Contact us at{' '}
          <a href="mailto:info@norcalrobotics.org">info@norcalrobotics.org</a>
        </p>
        <p>
          Follow us on{' '}
          <a href="https://instagram.com/norcalroboticsgem" target="_blank" rel="noreferrer">
            @norcalroboticsgem
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
