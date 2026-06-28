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
    <section className="relative h-screen overflow-hidden bg-dark">
      {/* Northern-lights Aurora + code-rain (one canvas) */}
      <AuroraCanvas />

      <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="w-full">
            <div className="animate-fade-up">
              <h1 className="mx-auto text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:max-w-[22ch] sm:text-[44px] sm:leading-[0.94] lg:text-[72px] xl:text-[96px]">
                Secure AI teammates for{' '}
                <span className="text-spectral">infrastructure operations.</span>
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
              <p className="mx-auto mt-8 text-[16px] font-medium leading-[1.55] text-white/60 sm:max-w-[56ch] sm:text-[18px] lg:text-xl">
                DORA turns recurring alerts, diagnostics, runbooks, and escalations into AI-executed workflows across your existing stack. Reduce human touches per task while keeping engineers in control.
              </p>
              <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.5] text-white/50 sm:max-w-[48ch] sm:text-[16px]">
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
            <div className="mt-16 flex w-full items-center gap-5 animate-fade-up sm:max-w-[700px]" style={{ animationDelay: '400ms' }}>
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
