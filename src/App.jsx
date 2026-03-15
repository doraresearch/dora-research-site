import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import Thesis from '@/pages/Thesis'
import Research from '@/pages/Research'
import About from '@/pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="thesis" element={<Thesis />} />
          <Route path="research" element={<Research />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/Home" element={<Navigate to="/" replace />} />
        <Route path="/Thesis" element={<Navigate to="/thesis" replace />} />
        <Route path="/Research" element={<Navigate to="/research" replace />} />
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
