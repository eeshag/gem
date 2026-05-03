import { useState } from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <main>
      <section className="hero-banner" aria-label="GEM community">
        <img src="/gem-logo.png" alt="G.E.M. logo" className="hero-banner-logo" />
      </section>

      <section className="hero-section">
        <p className="tagline">Girls in Engineering and Management</p>
        <h1>Inspiring the next generation of women in STEM.</h1>
        <p className="hero-copy">
          GEM helps girls discover confidence, community, and career pathways
          through hands-on STEM experiences.
        </p>
        <div className="hero-actions">
          <Link to="/programs" className="button primary">
            Explore Programs
          </Link>
          <Link to="/about" className="button secondary">
            Our Story
          </Link>
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
  )
}
