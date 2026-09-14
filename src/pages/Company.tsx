import { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '@/components/ui/Arrow'
import Beta from '@/components/ui/Beta'
import Container from '@/components/ui/Container'
import Seo from '@/components/ui/Seo'
import NightBrief from '@/components/product/NightBrief'
import { artifacts } from '@/content/framework'
import { briefs, type Brief } from '@/content/briefs'

const TAKE = [
  'The overnight reading: the deploys, the alerts, the tickets, the threads, in the systems a person has opened to the agent',
  'The record: what happened, in what order, linked to what was decided',
  'The watch: conditions that match a pattern the organization has seen before',
  'The follow-through: the ticket, the page, the hold, once a person has written the rule',
]

const KEEP = [
  'Judgment: the decision, made by a named person with the authority to make it',
  'Accountability: the name in the incident review is never “the agent”',
  'The rule: agents apply what people wrote and stop where the writing stops',
  'The line itself: which work is delegated is decided in the open and recorded',
]

const PIPELINE = [
  { k: '1 · Question', v: 'What work in an engineering organization should an agent take?' },
  { k: '2 · Benchmark', v: 'How often was the agent’s call the one the person made?' },
  { k: '3 · Framework', v: 'The Accountability Line, v0.1' },
  { k: '4 · Product', v: 'Zora, advising at Proposed today, acting at Reported within a year' },
]

const MEASURES = [
  { k: 'Throughput', v: 'How fast the organization ships', d: 'Lead time and deployment frequency, in the customer’s own numbers, never the lab’s.' },
  { k: 'Stability', v: 'How safely it ships', d: 'Change failure rate and time to restore. The night brief exists to move these.' },
  { k: 'Quality', v: 'Whether it was right', d: 'Decisions that hold, incidents that do not recur, briefs a CTO would forward.' },
]

export default function Company() {
  const [active, setActive] = useState<Brief['id']>('night')
  const brief = briefs.find((b) => b.id === active) ?? briefs[0]
  return (
    <>
      <Seo
        title="DORA Research · An applied AI lab"
        description="DORA Research is an applied AI lab. Agents take the work; people keep the judgment. Zora, its first product, is a technical director who reports to the CTO."
        path="/"
        image="og-lab.png"
        imageAlt="DORA Research. Agents take the work. People keep the judgment."
      />

      {/* Hero: left-anchored, no photography, the artifact header where a hero image would be. */}
      <section className="border-b border-rule">
        <Container className="grid gap-10 pb-16 pt-16 md:pt-24 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 lg:pb-24">
          <div>
            <p className="eyebrow text-pencil">DORA Research · An applied AI lab</p>
            <h1 className="display mt-5 max-w-[12em]">Agents take the work. People keep the judgment.</h1>
            <p className="lede mt-7 max-w-[32em]">
              DORA Research is an applied AI lab. We build agents that take over specific operational work in engineering
              organizations, and we say plainly which work that is. People keep judgment and accountability; the agents keep the
              record, the watch, and the follow-through. Our research, benchmarks, and frameworks are published before they become
              products, and our products are held to the two metrics we are named for, throughput and stability, and to a third we
              add: quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-medium leading-5">
              <Link to="/research#dr-fw-001" className="inline-flex items-center gap-2 text-green underline decoration-1 underline-offset-4 hover:text-ink">
                Read the framework <Arrow />
              </Link>
              <Link to="/zora" className="inline-flex items-center gap-2 text-green underline decoration-1 underline-offset-4 hover:text-ink">
                Meet Zora <Arrow />
              </Link>
            </div>
          </div>
          <dl className="meta grid grid-cols-2 gap-x-6 gap-y-4 self-end border-t border-rule pt-4 text-pencil lg:grid-cols-1">
            <div>
              <dt>Artifact</dt>
              <dd className="mt-0.5 text-ink">DR-FW-001</dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd className="mt-0.5 text-ink">0.1 · draft</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd className="mt-0.5 text-ink">2026-09-13</dd>
            </div>
            <div>
              <dt>First product</dt>
              <dd className="mt-0.5 text-ink">Zora · private beta</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* The division of labor */}
      <section id="division" className="border-b border-rule">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-pencil">The line</p>
          <h2 className="section-title mt-4 max-w-[18em]">What the agents take. What people keep.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="eyebrow border-b border-ink pb-2 text-ink">Agents take</h3>
              <ul>
                {TAKE.map((t) => (
                  <li key={t} className="relative border-b border-rule py-2.5 pl-5 text-[17px] leading-7">
                    <span className="absolute left-0 top-[19px] h-px w-[9px] bg-pencil" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow border-b border-ink pb-2 text-ink">People keep</h3>
              <ul>
                {KEEP.map((t) => (
                  <li key={t} className="relative border-b border-rule py-2.5 pl-5 text-[17px] leading-7">
                    <span className="absolute left-0 top-[19px] h-px w-[9px] bg-pencil" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-reading border-l-2 border-ink pl-5 text-[17px] leading-7">
            The lab publishes where the line sits and moves it only on evidence. That is the research program, the brand position,
            and Zora’s operating contract in one sentence.{' '}
            <Link to="/research#dr-fw-001" className="text-green underline decoration-1 underline-offset-4 hover:text-ink">
              The first draft is DR-FW-001.
            </Link>
          </p>
        </Container>
      </section>

      {/* How the lab works */}
      <section id="how" className="border-b border-rule">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-pencil">How the lab works</p>
          <h2 className="section-title mt-4 max-w-[18em]">Benchmarks first. Products second.</h2>
          <p className="mt-5 max-w-reading text-[17px] leading-7">
            Every product begins as a question, becomes a benchmark, is shaped by a framework, and only then becomes something a CTO
            can use. Each step is published with an ID, a version, and its evidence, so anyone can check what the lab claims against
            what it ships.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE.map((c) => (
              <div key={c.k} className="border-t border-ink pt-3">
                <p className="eyebrow text-pencil">{c.k}</p>
                <p className="mt-2 font-serif text-[22px] font-medium leading-7 tracking-[-0.005em]">{c.v}</p>
              </div>
            ))}
          </div>

          <h3 className="section-title mt-16 max-w-[18em] md:mt-20">What the lab is measured on.</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {MEASURES.map((m) => (
              <div key={m.k} className="border-t border-ink pt-3">
                <p className="eyebrow text-pencil">{m.k}</p>
                <p className="mt-2 font-serif text-[22px] font-medium leading-7 tracking-[-0.005em]">{m.v}</p>
                <p className="mt-2 text-[14px] leading-[21px] text-pencil">{m.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The one Night section: where paper hands to Zora. Hard edge, real product at real density. */}
      <section id="zora" data-register="night" className="bg-night text-npaper">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-ash">Zora by DORA Research</p>
          <h2 className="z-display mt-4 max-w-[14em]">She reads the night. You read the brief.</h2>
          <p className="z-section mt-3 text-ash">Ship faster. Break less.</p>
          <p className="mt-6 max-w-reading text-[16px] leading-[26px]">
            Zora is an AI agent: a technical director who reports to the CTO. Overnight she reads what the organization’s systems
            recorded and finishes the brief by 06:00. She advises with evidence; the CTO keeps the call.
          </p>
          <NightBrief variant="compact" active={active} onChange={setActive} className="mt-10" />
          <p className="timecode mt-3 text-ash">Fig. 1 · {brief.caption} · 2026-09-10 · 06:00 · demo data</p>
          <div className="mt-8">
            <Link to="/zora" className="inline-flex items-center gap-2 text-[14px] font-medium leading-5 text-mint hover:text-npaper">
              Meet Zora <Arrow />
            </Link>
          </div>
        </Container>
      </section>

      {/* Research index */}
      <section id="research" className="border-b border-rule">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-pencil">Research</p>
          <h2 className="section-title mt-4 max-w-[18em]">Published before it ships.</h2>
          <ul className="mt-8 border-t border-ink">
            {artifacts.map((a) => {
              const inner = (
                <div className="grid gap-2 py-5 md:grid-cols-[160px_minmax(0,1fr)_200px] md:gap-8">
                  <div className="meta text-pencil">
                    <p className="text-ink">{a.id}</p>
                    <p>{a.type}</p>
                  </div>
                  <div>
                    <p className="font-serif text-[22px] font-medium leading-7 tracking-[-0.005em]">{a.title}</p>
                    <p className="mt-1 text-[14px] leading-5 text-pencil">{a.summary}</p>
                  </div>
                  <div className="meta text-pencil md:text-right">
                    <p>{a.status}</p>
                    <p>{a.date}</p>
                  </div>
                </div>
              )
              return (
                <li key={a.id} className="border-b border-rule">
                  {a.href ? (
                    <Link to={a.href} className="block transition-colors duration-120 ease-house hover:bg-evidence">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <Beta register="paper" />
    </>
  )
}
