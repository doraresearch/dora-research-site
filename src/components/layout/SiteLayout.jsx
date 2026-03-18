import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackgroundIcons from '../shared/BackgroundIcons'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <BackgroundIcons />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
