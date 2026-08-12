import Logo from '@/components/Logo'
import Container from '@/components/ui/Container'

function CompanyMasthead() {
  return (
    <a href="/" aria-label="DORA Research, home" className="inline-flex items-center gap-3 text-ink">
      <Logo size={30} />
      <span className="flex items-baseline gap-2" aria-hidden="true">
        <span className="text-[18px] font-semibold leading-[22px] tracking-[-0.025em]">DORA</span>
        <span className="text-[15px] font-medium leading-[22px] tracking-[-0.015em]">Research</span>
      </span>
    </a>
  )
}
export default function Footer() {
  return (
    <footer data-tone="inverse" className="bg-canvas">
      <Container className="relative min-h-[200px] lg:min-h-[140px]">
        <div className="absolute left-6 top-[90px] lg:left-8 lg:top-10">
          <CompanyMasthead />
        </div>
        <p className="absolute left-6 top-36 font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary lg:left-auto lg:right-8 lg:top-12 lg:text-right">
          <span className="block lg:inline">© 2026 DORA Research</span>
          <span className="block lg:ml-3 lg:inline">Zora is the product</span>
        </p>
      </Container>
    </footer>
  )
}
