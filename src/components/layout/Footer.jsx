import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-ink font-medium">
              <span className="text-ochre">§</span>&nbsp;&nbsp;DORA Research
            </p>
            <p className="text-body text-sm mt-4 max-w-xs leading-relaxed">
              An applied AI lab building systems that turn intelligence into execution.
            </p>
          </div>
          <nav className="flex gap-8 items-start flex-wrap">
            <Link to="/" className="text-sm text-body hover:text-ink transition-colors">Home</Link>
            <Link to="/thesis" className="text-sm text-body hover:text-ink transition-colors">Thesis</Link>
            <Link to="/research" className="text-sm text-body hover:text-ink transition-colors">Research</Link>
            <Link to="/about" className="text-sm text-body hover:text-ink transition-colors">About</Link>
          </nav>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex items-baseline justify-between">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">© 2026 DORA Research, Inc.</p>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">Working paper · 2026.04</p>
        </div>
      </div>
    </footer>
  )
}
