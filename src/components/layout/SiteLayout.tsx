import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
