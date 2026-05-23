import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-stage border border-[#1b2027] bg-[radial-gradient(120%_160%_at_50%_-20%,#161a22,#0C0F14_60%)] px-6 py-16 text-center sm:px-10">
          <span className="mx-auto mb-5 block h-[3px] w-[120px] rounded bg-spectral" aria-hidden="true" />
          <h2 className="mx-auto max-w-[18ch] text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-[46px]">
            Build AI your organization can <span className="font-serif font-normal italic">rely on</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-dark-muted">
            From research to deployed systems — workflow design, agent architecture, orchestration, harnesses, and deployment support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="mailto:hello@dorareason.com" variant="signal" arrow>
              Talk to DORA
            </Button>
            <Button href="#how-it-works" variant="white">
              See how it works
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
