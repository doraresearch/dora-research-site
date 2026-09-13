import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" data-tone="inverse" className="bg-canvas">
      <Container className="relative min-h-[560px] border-t border-line lg:min-h-[500px]">
        <div className="absolute left-6 right-6 top-16 lg:left-8 lg:right-8 lg:top-[88px]">
          <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">
            Private beta
          </p>
          <h2 className="mt-6 max-w-[860px] text-[40px] font-normal leading-[44px] tracking-[-0.025em] text-ink lg:text-[54px] lg:leading-[58px] lg:tracking-[-0.03em] xl:text-[64px] xl:leading-[68px] xl:tracking-[-0.035em]">
            Give your team a memory
            <br className="hidden lg:block" /> that keeps up.
          </h2>
          <p className="mt-12 max-w-[680px] text-[16px] leading-[26px] text-secondary lg:mt-6 lg:text-[18px] lg:leading-7 xl:text-[20px] xl:leading-[30px]">
            DORA Research is building Zora for teams whose work moves faster than their shared context.
          </p>
        </div>

        <div className="absolute left-6 top-[390px] lg:left-8">
          <Button href="mailto:hello@dorareason.com?subject=Zora%20private%20beta" variant="inverse">
            <span>Request private beta</span>
            <img
              src="/zora-arrow-right.svg"
              alt=""
              className="h-[8.5px] w-[10.5px] brightness-0"
            />
          </Button>
        </div>
      </Container>
    </section>
  )
}
