import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-[#111111] font-semibold text-sm tracking-tight">DORA Research</p>
            <p className="text-[#6B7280] text-sm mt-2 max-w-xs leading-relaxed">
              An applied AI lab building systems that turn intelligence into execution.
            </p>
          </div>
          <nav className="flex gap-8 items-start flex-wrap">
            <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              Home
            </Link>
            <Link to="/thesis" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              Thesis
            </Link>
            <Link to="/research" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              Research
            </Link>
            <Link to="/about" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="mt-16 pt-8 border-t border-black/[0.06]">
          <p className="text-xs text-[#6B7280]">© 2026 DORA Research, Inc.</p>
        </div>
      </div>
    </footer>
  )
}
