import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="bg-base">
      <Container className="flex min-h-[510px] items-center justify-center py-20 text-center lg:py-0">
        <Reveal className="w-full">
          <h2 className="mx-auto max-w-[720px] text-balance font-display text-[42px] font-bold leading-[1.07] tracking-[-0.03em] text-ink sm:text-[52px] lg:text-[58px] lg:leading-[62px]">
            Your mind, with a perfect memory.
          </h2>
          <p className="mx-auto mt-[22px] max-w-[520px] text-[16px] leading-[1.6] text-muted lg:text-[17px] lg:leading-[26px]">
            A private place for every note, thought, and thread you want to keep.
          </p>
          <div className="mt-[22px] flex justify-center">
            <WaitlistForm inputWidth="sm:w-[280px]" />
          </div>
          <p className="mt-[22px] font-mono text-[10px] tracking-[0.04em] text-green">
            PRIVATE BETA · FALL 2026
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
