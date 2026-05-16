import { Link } from 'react-router-dom'

const navItems = [
  ['How it works', '#how-it-works'],
  ['Primitives', '#primitives'],
  ['Use cases', '#use-cases'],
  ['Research', '#research'],
  ['Contact', '#contact'],
]

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#101310]/12 bg-[#F7F4ED]/95 text-[#101310] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="font-mono text-[12px] font-medium uppercase tracking-[0.12em]">
          DORA Research
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium opacity-75 transition-opacity duration-200 hover:opacity-100">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hello@dorareason.com"
          className="hidden h-10 items-center justify-center border border-[#101310]/12 bg-[#DDE8D2] px-4 text-sm font-semibold text-[#101310] transition-colors duration-150 hover:bg-[#C9DABC] sm:inline-flex"
        >
          Talk to DORA
        </a>
      </div>
    </header>
  )
}
