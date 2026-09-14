import { useEffect, useRef } from 'react'
import { Head } from 'vite-react-ssg'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export type Register = 'paper' | 'night'

export function registerFor(pathname: string): Register {
  return pathname.startsWith('/zora') ? 'night' : 'paper'
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  const firstRun = useRef(true)
  const register = registerFor(pathname)

  // Prerendered pages carry the register on <html> through Head; this keeps client navigation in step.
  useEffect(() => {
    document.documentElement.setAttribute('data-register', register)
  }, [register])

  // Route change: land on the hash target if there is one (the [id] scroll margin clears the sticky header), else at the top.
  // A fresh load and back/forward are the browser's: it already restored the position or handled the fragment.
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    if (navType === 'POP') return
    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    if (id) {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, navType])

  const ground = register === 'night' ? 'bg-night text-npaper' : 'bg-paper text-ink'

  return (
    <div className={`min-h-screen ${ground}`}>
      <Head>
        <html lang="en" data-register={register} />
      </Head>
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-[14px] focus:font-medium ${
          register === 'night' ? 'focus:bg-raised focus:text-npaper' : 'focus:bg-evidence focus:text-ink'
        }`}
      >
        Skip to content
      </a>
      <Header register={register} />
      <main id="main">
        <Outlet />
      </main>
      <Footer register={register} />
    </div>
  )
}
