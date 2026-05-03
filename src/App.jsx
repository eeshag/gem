import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { ComingSoonPage } from './pages/ComingSoonPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { MeetTheTeamPage } from './pages/MeetTheTeamPage.jsx'
import { TimelinePage } from './pages/TimelinePage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/about" element={<MeetTheTeamPage />} />
          <Route
            path="/programs"
            element={<ComingSoonPage title="Programs & Services" />}
          />
          <Route path="/contact" element={<ComingSoonPage title="Contact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
