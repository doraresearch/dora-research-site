import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AuroraCanvas from './AuroraCanvas'

const roles = [
  'Database Administrators',
  'Systems Administrators',
  'NOC Agents',
  'Site Reliability Engineers',
  'DevOps Engineers',
  'Platform Operations Engineers',
  'Cloud Operations Engineers',
  'Security Operations Engineers',
  'QA Engineers',
]

export default function Hero() {
  return (
    <section className="relative h-screen bg-dark">
      <AuroraCanvas />

      {/* Radial vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_center,transparent_30%,#050608_90%)]" />

      <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div>
            <span className="inline-block animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Secure AI Teammates
              </span>
            </span>

            <div className="mt-8 animate-fade-up" style={{ animationDelay: '120ms' }}>
              <h1 className="mx-auto max-w-[22ch] text-balance text-[44px] font-bold leading-[0.94] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl xl:text-[96px]">
                Secure AI teammates for{' '}
                <span className="text-spectral">infrastructure operations.</span>
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
              <p className="mx-auto mt-8 max-w-[56ch] text-[18px] font-medium leading-[1.55] text-white/60 sm:text-xl">
                DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across your existing stack. Reduce human touches per task while keeping engineers in control.
              </p>
              <p className="mx-auto mt-4 max-w-[48ch] text-[16px] font-medium leading-[1.5] text-white/40">
                Operate at higher throughput without scaling headcount linearly.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="mailto:hello@dorareason.com" variant="white" arrow>
                  Map your first workflow
                </Button>
                <Button href="#product" variant="dark-ghost">
                  How it works
                </Button>
              </div>
            </div>

            {/* Trusted-by marquee */}
            <div className="mt-16 flex w-full max-w-[700px] items-center gap-5 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Trusted by
              </span>
              <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_8%,white_92%,transparent)]">
                <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none">
                  {[...roles, ...roles].map((role, i) => (
                    <span key={i} className="shrink-0 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
