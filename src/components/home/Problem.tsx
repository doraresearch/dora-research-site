import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

export default function Problem() {
  return (
    <section className="bg-base py-20 sm:py-24">
      <Container>
        <Reveal className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow className="mb-3">The gap</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[46px]">
              Models are powerful. Systems are missing.
            </h2>
            <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          </div>
          <div className="space-y-4 text-[17px] leading-[1.7] text-body">
            <p>Foundation models can generate, reason, and respond. But models alone do not make AI operational.</p>
            <p>Enterprises need systems that understand context, coordinate across teams, execute multi-step work, and behave reliably in production environments.</p>
            <p className="font-semibold text-ink">DORA builds the systems layer where AI becomes useful inside real organizations.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
