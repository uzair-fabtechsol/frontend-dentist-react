import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import DashboardPage from './pages/DashboardPage'
import CurriculumPage from './pages/CurriculumPage'
import ChatPage from './pages/ChatPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="curriculum" element={<CurriculumPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}

export default App
