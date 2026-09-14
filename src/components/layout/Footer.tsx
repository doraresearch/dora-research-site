import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import type { Register } from './SiteLayout'

export default function Footer({ register }: { register: Register }) {
  const night = register === 'night'
  return (
    <footer className={`border-t ${night ? 'border-nline' : 'border-rule'}`}>
      <div className="mx-auto flex w-full max-w-rail flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link to="/" className="flex items-center gap-2.5" aria-label="DORA Research, company page">
          <Logo size={24} variant={night ? 'paper' : 'ink'} />
          <span className="text-[15px] font-medium leading-5 tracking-[-0.01em]">DORA Research</span>
        </Link>
        <p className={night ? 'provenance text-ash' : 'font-mono text-[13px] leading-5 text-pencil'}>
          DORA Research. An applied AI lab. <span className="mx-2">·</span> © 2026
        </p>
      </div>
    </footer>
  )
}
