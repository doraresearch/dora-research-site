import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

export default function EditorialThesis() {
  return (
    <section className="min-h-[420px] bg-canvas lg:min-h-[560px]">
      <Container className="relative min-h-[420px] border-t border-line lg:min-h-[560px]">
        <Reveal className="pt-[100px] lg:mx-auto lg:max-w-[1120px] lg:pt-[144px]">
          <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
            A second brain for work
          </p>
          <h2 className="mt-5 max-w-[1120px] text-[40px] font-normal leading-[44px] tracking-[-0.025em] text-ink lg:text-[54px] lg:leading-[58px] lg:tracking-[-0.03em] xl:text-[64px] xl:leading-[68px] xl:tracking-[-0.035em]">
            The work is everywhere.
            <br />
            The memory should be shared.
          </h2>
          <div className="signal-rule mt-8 h-1 w-[140px] lg:w-[220px]" aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  )
}
