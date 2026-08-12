import Container from '@/components/ui/Container'
import { scenarioMetrics } from '@/content/home'

export default function ScenarioMetrics() {
  return (
    <section className="min-h-[760px] bg-canvas lg:min-h-[500px]">
      <Container className="min-h-[760px] border-t border-line pt-12 lg:min-h-[500px] lg:pt-[68px]">
        <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
          One Atlas release
        </p>
        <h2 className="mt-5 text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-ink">
          A whole workday, connected.
        </h2>

        <div className="mt-[10px] grid border-y border-line lg:mt-[42px] lg:grid-cols-3 lg:divide-x lg:divide-line">
          {scenarioMetrics.map((metric) => (
            <article
              key={metric.label}
              className="flex h-[190px] flex-col border-b border-line p-5 last:border-b-0 lg:h-[272px] lg:border-b-0 lg:px-6 lg:py-7"
            >
              <p
                className={`text-[64px] font-normal leading-[68px] tracking-[-0.04em] lg:text-[84px] lg:leading-[86px] lg:tracking-[-0.045em] xl:text-[96px] xl:leading-[96px] xl:tracking-[-0.05em] ${
                  metric.accent ? 'text-signal' : 'text-ink'
                }`}
              >
                {metric.numeral}
              </p>
              <p className="mt-auto font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-ink">
                {metric.label}
              </p>
              <p className="mt-1 text-[13px] leading-[19px] text-secondary">{metric.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
