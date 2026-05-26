import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

export default function Hero() {
  return (
    <section className="relative isolate bg-base">
      <Container className="pb-8 pt-20 text-center sm:pt-24">
        <span className="inline-block animate-fade-up">
          <Eyebrow chip>DORA · AI deployment for iGaming</Eyebrow>
        </span>

        <div className="mt-7 animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="relative mx-auto inline-block pl-7 text-left">
            <span className="absolute bottom-1 left-0 top-1 w-[6px] rounded bg-spectral-v" aria-hidden="true" />
            <h1 className="max-w-[22ch] text-[44px] font-bold leading-[0.96] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl xl:text-[78px]">
              AI-native operations infrastructure for <span className="font-serif font-normal italic">iGaming</span>
            </h1>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
          <p className="mx-auto mt-7 max-w-[62ch] text-[18px] font-medium leading-[1.55] text-body sm:text-xl">
            DORA deploys human-governed agentic systems across gaming operations — helping operators reduce manual workload, accelerate execution, and expand operating margins.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="mailto:hello@dorareason.com" arrow>
              Assess your deployment
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
