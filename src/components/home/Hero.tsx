import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

export default function Hero() {
  return (
    <section className="relative isolate bg-base">
      <Container className="pb-8 pt-20 text-center sm:pt-24">
        <span className="inline-block animate-fade-up">
          <Eyebrow chip>DORA · Operational agents for iGaming</Eyebrow>
        </span>

        <div className="mt-7 animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="relative mx-auto inline-block pl-7 text-left">
            <span className="absolute bottom-1 left-0 top-1 w-[6px] rounded bg-spectral-v" aria-hidden="true" />
            <h1 className="max-w-[20ch] text-[44px] font-bold leading-[0.96] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl xl:text-[78px]">
              The AI operations team for <span className="font-serif font-normal italic">iGaming</span>.
            </h1>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
          <p className="mx-auto mt-7 max-w-[58ch] text-[18px] font-medium leading-[1.55] text-body sm:text-xl">
            DORA gives operators operational agents for core functions, helping them launch lean, operate safely, and scale without a traditional operations org.
          </p>
          <p className="mx-auto mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
            The agent-native operations layer for iGaming
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="mailto:hello@dorareason.com" arrow>
              Map your AI operations team
            </Button>
            <Button href="#deployment-pattern" variant="secondary">
              See a workflow example
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
