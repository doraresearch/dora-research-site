import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

// Competitive separator: DORA operates the business; it is not the gaming platform.
export default function PlatformLine() {
  return (
    <section className="bg-base py-12 sm:py-14">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow className="mb-4">Not a platform</Eyebrow>
            <p className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[30px]">
              DORA is not your gaming platform. It&rsquo;s the agent-native operations layer that runs the business <span className="font-serif font-normal italic">around it</span>.
            </p>
            <p className="mx-auto mt-4 max-w-[58ch] text-[14.5px] leading-[1.65] text-muted">
              The casino, sportsbook, wallet, and CRM stay yours. DORA plugs into them and runs the operational work between them.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
