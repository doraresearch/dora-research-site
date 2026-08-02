import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="bg-base">
      <Container className="py-[104px] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-balance font-display text-[36px] font-bold tracking-[-0.02em] text-ink sm:text-[44px]">
            Your mind, with a perfect memory.
          </h2>
          <div className="mt-8 flex justify-center">
            <WaitlistForm inputWidth="sm:w-[280px]" />
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-muted">
            Private beta · Fall 2026
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
