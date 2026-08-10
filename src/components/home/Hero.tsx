import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import InteractiveWorkspace from './demo/InteractiveWorkspace'

export default function Hero() {
  return (
    <section id="zora" className="relative overflow-hidden bg-canvas">
      <Container className="grid min-h-[calc(100svh-60px)] items-center gap-8 pb-12 pt-4 sm:min-h-[calc(100svh-72px)] sm:gap-14 sm:py-20 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-20 lg:px-0 lg:py-16">
        <div className="animate-fade-up lg:py-8">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-action sm:mb-5">
            Zora by DORA Research · A second brain for work
          </p>
          <h1 className="max-w-[500px] font-display text-[44px] font-bold leading-[0.96] tracking-[-0.045em] text-ink sm:text-[60px] lg:text-[64px]">
            <span className="block">Work moves.</span>
            <span className="block">Zora remembers.</span>
          </h1>
          <p className="mt-4 max-w-[45ch] text-[15px] leading-[1.5] text-secondary sm:mt-7 sm:text-[18px] sm:leading-[1.6] lg:text-[19px]">
            Zora remembers what your team has seen, discussed, decided, and built—then brings
            forward what matters now.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
            <Button href="#waitlist">Request private beta</Button>
            <a
              href="#workday"
              className="inline-flex min-h-11 items-center text-[14px] font-semibold text-action transition-colors hover:text-deep"
            >
              See one workday <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-secondary">
            Private beta · Starting with product + technology
          </p>
        </div>

        <div className="relative min-w-0 animate-fade-up" style={{ animationDelay: '160ms' }}>
          <InteractiveWorkspace />
        </div>
      </Container>
    </section>
  )
}
