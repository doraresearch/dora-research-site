import { Link } from 'react-router-dom'
import Beta from '@/components/ui/Beta'
import Container from '@/components/ui/Container'
import Seo from '@/components/ui/Seo'
import { artifacts, framework } from '@/content/framework'

function Marker({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 font-mono text-[11px] tracking-[0.04em] text-green">
      <span className="sr-only">note </span>
      {n}
    </sup>
  )
}

export default function Research() {
  const fw = framework
  return (
    <>
      <Seo
        title="Research · DORA Research"
        description="Benchmarks first. Products second. DORA Research publishes its frameworks and benchmarks before they become products, starting with The Accountability Line: which work agents should take and which people should keep."
        path="/research"
        image="og-lab.png"
        imageAlt="DORA Research. Benchmarks first. Products second."
      />

      <section className="border-b border-rule">
        <Container className="pb-14 pt-16 md:pt-24 lg:pb-20">
          <p className="eyebrow text-pencil">Research</p>
          <h1 className="display mt-5 max-w-[12em]">Benchmarks first. Products second.</h1>
          <p className="lede mt-7 max-w-[32em]">
            Every product begins as a question, becomes a benchmark, is shaped by a framework, and only then becomes something a CTO
            can use. Everything here is published before it ships, with an ID, a version, and its evidence. Unknowns are marked as
            unknown.
          </p>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-14 md:py-20">
          <h2 className="eyebrow text-pencil">Artifacts</h2>
          <ul className="mt-4 border-t border-ink">
            {artifacts.map((a) => (
              <li key={a.id} className="border-b border-rule">
                <div className="grid gap-2 py-5 md:grid-cols-[160px_minmax(0,1fr)_200px] md:gap-8">
                  <div className="meta text-pencil">
                    <p className="text-ink">{a.id}</p>
                    <p>{a.type}</p>
                  </div>
                  <div>
                    {a.href ? (
                      <a href={a.href} className="font-serif text-[22px] font-medium leading-7 tracking-[-0.005em] underline decoration-rule underline-offset-4 hover:decoration-ink">
                        {a.title}
                      </a>
                    ) : (
                      <p className="font-serif text-[22px] font-medium leading-7 tracking-[-0.005em]">{a.title}</p>
                    )}
                    <p className="mt-1 text-[14px] leading-5 text-pencil">{a.summary}</p>
                  </div>
                  <div className="meta text-pencil md:text-right">
                    <p>{a.status}</p>
                    <p>{a.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* DR-FW-001 */}
      <article id="dr-fw-001" className="border-b border-rule">
        <Container className="py-14 md:py-20">
          <dl className="meta grid grid-cols-2 gap-x-6 gap-y-3 border-b border-rule pb-4 text-pencil md:grid-cols-4">
            <div>
              <dt>Artifact</dt>
              <dd className="mt-0.5 text-ink">{fw.id}</dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd className="mt-0.5 text-ink">{fw.version}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd className="mt-0.5 text-ink">{fw.date}</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd className="mt-0.5 text-ink">{fw.evidence}</dd>
            </div>
          </dl>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,680px)_200px] lg:gap-16">
            <div>
              <h2 className="section-title">{fw.title}</h2>
              <p className="lede mt-5">
                {fw.oneLine}
                <Marker n={1} />
              </p>
              <div className="mt-6 space-y-4 text-[17px] leading-7">
                <p>
                  {fw.thesis[0]}
                  <Marker n={2} />
                </p>
                <p>{fw.thesis[1]}</p>
              </div>
            </div>
            <aside className="meta self-start border-t border-rule pt-3 text-pencil lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0" aria-label="Notes">
              <p>
                <span className="text-green">1</span> Founder interview, 2026-09-13.
              </p>
              <p className="mt-3">
                <span className="text-green">2</span> Blast radius, reversibility, answerability. Tests per tier below.
              </p>
            </aside>
          </div>

          <div className="mt-12 border-t border-ink">
            {fw.tiers.map((t) => (
              <div key={t.name} className="grid gap-4 border-b border-rule py-7 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-8">
                <div>
                  <p className="eyebrow text-pencil">{t.n}</p>
                  <h3 className="mt-1 font-serif text-[26px] font-medium leading-[30px]">{t.name}</h3>
                </div>
                <div className="max-w-[760px]">
                  <p className="text-[17px] leading-7">{t.definition}</p>
                  <p className="mt-3 border border-rule bg-evidence px-3.5 py-2.5 text-[14px] leading-5">
                    <span className="eyebrow block text-pencil">Test</span>
                    {t.test}
                  </p>
                  <div className="mt-3 grid gap-5 sm:grid-cols-2">
                    <div>
                      <h4 className="eyebrow text-pencil">Agents take</h4>
                      <ul className="mt-1.5">
                        {t.take.map((x) => (
                          <li key={x} className="border-t border-rule py-1.5 text-[14px] leading-5">
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="eyebrow text-pencil">People keep</h4>
                      <ul className="mt-1.5">
                        {t.keep.map((x) => (
                          <li key={x} className="border-t border-rule py-1.5 text-[14px] leading-5">
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fw.statuses.map((s) => (
              <div key={s.name} className="border-t border-ink pt-3">
                <p className="eyebrow text-pencil">Status · {s.name}</p>
                <p className="mt-2 text-[14px] leading-5 text-pencil">{s.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-serif text-[26px] font-medium leading-8">Five principles</h3>
          <ol className="mt-4 border-t border-ink">
            {fw.principles.map((p, i) => (
              <li key={p.head} className="grid grid-cols-[32px_minmax(0,1fr)] gap-2.5 border-b border-rule py-3 text-[17px] leading-7">
                <span className="meta pt-0.5 text-pencil">0{i + 1}</span>
                <span className="max-w-[760px]">
                  <strong className="font-semibold">{p.head}</strong> {p.body}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="eyebrow border-b border-ink pb-2 text-ink">Zora today · in the draft’s tiers</h3>
              <ul>
                {fw.zoraToday.map((x) => (
                  <li key={x} className="border-b border-rule py-2.5 text-[17px] leading-7">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow border-b border-ink pb-2 text-ink">Zora within a year · in the draft’s tiers</h3>
              <ul>
                {fw.zoraNext.map((x) => (
                  <li key={x} className="border-b border-rule py-2.5 text-[17px] leading-7">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-[760px] border-l-2 border-risk pl-5 text-[17px] leading-7">
            <p className="eyebrow text-risk">Open questions the draft carries</p>
            <p className="mt-2">{fw.open}</p>
          </div>

          <p className="mt-10 text-[17px] leading-7 text-pencil">
            This is version 0.1. It changes when a named person decides it should, and the change is logged with a reason.{' '}
            <Link to="/zora" className="text-green underline decoration-1 underline-offset-4 hover:text-ink">
              See how Zora applies it.
            </Link>
          </p>
        </Container>
      </article>

      <Beta register="paper" />
    </>
  )
}
