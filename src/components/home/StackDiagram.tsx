import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

type LayerProps = { label: string; meta: string; dora?: boolean; faded?: boolean }

function Layer({ label, meta, dora = false, faded = false }: LayerProps) {
  return (
    <div
      className={`-mt-px flex items-center justify-between gap-3 border px-5 py-[18px] ${
        dora ? 'border-[#bfe9fb] bg-signal-soft pl-6' : faded ? 'border-dashed border-line bg-soft' : 'border-line bg-surface'
      }`}
    >
      <span className={`text-[15px] tracking-[-0.01em] sm:text-[16px] ${dora ? 'font-semibold text-[#063a52]' : faded ? 'font-medium text-muted' : 'font-semibold text-ink'}`}>
        {label}
      </span>
      <span className={`shrink-0 font-mono text-[11px] tracking-[0.08em] sm:text-[12px] ${dora ? 'text-deep-signal' : 'text-muted'}`}>{meta}</span>
    </div>
  )
}

export default function StackDiagram() {
  return (
    <section className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
              Built <span className="font-serif font-normal italic">above</span> the model layer.
            </h2>
            <Eyebrow>DORA is model-agnostic</Eyebrow>
          </div>

          <div className="ml-5 mt-7 sm:ml-6">
            <Layer faded label="Enterprise workflows" meta="INPUT · REAL WORK" />
            <div>
              <span className="mb-2 mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-deep-signal">↳ DORA operates here</span>
              <div className="relative">
                <span className="absolute bottom-0 left-0 top-0 w-1 rounded bg-spectral-v" aria-hidden="true" />
                <Layer dora label="DORA Application Layer" meta="SURFACES · INTERFACES" />
                <Layer dora label="DORA Orchestration Layer" meta="PARALLEL · ROUTING" />
                <Layer dora label="DORA Harness Layer" meta="EVAL · CONSTRAIN · DEPLOY" />
              </div>
            </div>
            <Layer faded label="Existing model layer" meta="FOUNDATION MODELS" />
            <Layer faded label="Data · Infrastructure · Compute" meta="NOT DORA" />
          </div>

          <p className="mt-6 max-w-[74ch] text-[13.5px] leading-[1.6] text-muted">
            DORA does not build foundation models, data infrastructure, compute platforms, or generic AI infrastructure. We build the systems layer that turns existing models into dependable enterprise AI.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
