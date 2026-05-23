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
    <header className="fixed left-0 right-0 top-0 z-50 w-screen max-w-[100vw] overflow-hidden border-b border-[#DCE1E6] bg-[#F7F8FA] text-[#050608]">
      <div className="mx-auto flex min-h-[68px] w-full min-w-0 max-w-[100vw] items-center justify-between gap-4 px-5 md:max-w-[1440px] md:gap-8 md:px-10 xl:px-14">
        <Link to="/" className="shrink-0 text-[26px] font-semibold leading-none">
          DORA
        </Link>
        <nav className="hidden items-center gap-8 lg:gap-12 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium transition-colors duration-150 hover:text-[#0284C7]">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hello@dorareason.com"
          className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2.5 border border-[#111418] bg-[#111418] px-[18px] text-sm font-semibold leading-none text-[#F8FAFC] transition-colors duration-150 hover:bg-[#050608] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3FC]"
        >
          Talk to DORA
          <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4">
            <path d="M3 9h11M9.5 4.5 14 9l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </header>
  )
}
