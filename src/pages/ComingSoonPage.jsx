import { Link } from 'react-router-dom'

export function ComingSoonPage({ title }) {
  return (
    <main className="coming-soon-main">
      <h1>{title}</h1>
      <p>This page is coming soon. Thanks for your patience.</p>
      <Link to="/" className="button primary">
        Back to home
      </Link>
    </main>
  )
}
