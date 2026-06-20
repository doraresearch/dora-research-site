import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

export default function ClosingCTA() {
  return (
    <section className="relative bg-soft py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
              Take recurring work out of{' '}
              <span className="font-serif font-normal italic">the human queue.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-[16px] leading-[1.65] text-body">
              Map one operational workflow. Deploy one secure AI teammate. Measure the human touches removed.
            </p>
            <div className="mt-8">
              <Button href="mailto:hello@dorareason.com">
                Map your first workflow
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
