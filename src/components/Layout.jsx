import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="logo">
          <img src="/gem-logo.png" alt="G.E.M. logo" className="logo-image" />
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link to="/about">Meet the Team</Link>
            </li>
            <li>
              <Link to="/programs">Programs & Services</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <p>
          Contact us at{' '}
          <a href="mailto:info@norcalrobotics.org">info@norcalrobotics.org</a>
        </p>
        <p>
          Follow us on{' '}
          <a
            href="https://instagram.com/norcalroboticsgem"
            target="_blank"
            rel="noreferrer"
          >
            @norcalroboticsgem
          </a>
        </p>
      </footer>
    </div>
  )
}
