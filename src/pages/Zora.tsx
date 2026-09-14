import { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '@/components/ui/Arrow'
import Beta from '@/components/ui/Beta'
import Container from '@/components/ui/Container'
import Seo from '@/components/ui/Seo'
import NightBrief from '@/components/product/NightBrief'
import { briefs, type Brief } from '@/content/briefs'

const FACTS: { k: string; v: string }[] = [
  { k: 'Title', v: 'Technical director and chief of staff. Depth across every discipline in the room, plus the executive’s memory of every commitment made.' },
  { k: 'Reports to', v: 'The CTO or VP Engineering. One accountable person, who is also the daily user.' },
  { k: 'Outcome', v: 'Ship faster, break less. Judged by throughput, stability, and quality in the customer’s own numbers.' },
  { k: 'Mechanism', v: 'Memory. She connects the ticket to the decision to the deploy so the brief can say why. Memory is how she works, not what she is for.' },
  { k: 'Authority today', v: 'Advises with evidence. The record is Silent; every recommendation is Proposed. She names the decider and does not decide.' },
  { k: 'Authority within a year', v: 'Acts at Reported, one action at a time, per customer, after Shadow: history added, tickets opened, pages on the published rule, deploys held where release is one click from the on-call.' },
  { k: 'Presence', v: 'A name, a voice, and a 6 px dot. Never a face.' },
]

const QUESTIONS: { id: Brief['id']; k: string; d: string }[] = [
  { id: 'night', k: 'Last night', d: 'Who was affected, how it was mitigated, and what is still open.' },
  { id: 'projects', k: 'Projects', d: 'The decision, the dependency, and the reason, with the record attached.' },
  { id: 'risk', k: 'Risk', d: 'Where the same conditions exist, what to do there, and who decides.' },
]

export default function Zora() {
  const [active, setActive] = useState<Brief['id']>('night')
  const brief = briefs.find((b) => b.id === active) ?? briefs[0]

  const show = (id: Brief['id']) => {
    setActive(id)
    const frame = document.getElementById('brief')
    frame?.scrollIntoView({ block: 'start' })
    frame?.querySelector<HTMLElement>(`[role="tab"][id$="-tab-${id}"]`)?.focus({ preventScroll: true })
  }

  return (
    <>
      <Seo
        title="Zora · She reads the night. You read the brief."
        description="Zora is an AI agent: a technical director who reports to the CTO. Overnight she reads what Linear, GitHub, Datadog, PagerDuty, and Slack recorded and finishes the brief by 06:00. Ship faster. Break less."
        path="/zora"
        image="og-zora.png"
        imageAlt="Zora. She reads the night. You read the brief."
      />

      {/* Hero. The 06:00 plate goes behind this section once it is shot; until then the ground is Night Floor. */}
      <section className="border-b border-nline">
        <Container className="pb-12 pt-16 md:pt-24">
          <p className="eyebrow text-ash">Zora by DORA Research</p>
          <h1 className="z-display mt-5 max-w-[14em]">She reads the night. You read the brief.</h1>
          <p className="z-section mt-3 text-ash">Ship faster. Break less.</p>
          <p className="mt-6 max-w-reading text-[16px] leading-[26px]">
            Zora is an AI agent: a technical director who reports to the CTO. Overnight she reads what Linear, GitHub, Datadog,
            PagerDuty, and Slack recorded, connects it to what the team decided, and finishes the brief by 06:00. She answers three
            questions before anyone asks them. Today she advises with evidence. Within a year she will hold a deploy, open a ticket,
            or page the on-call, on the CTO’s authority.
          </p>
        </Container>
        <Container id="brief" className="scroll-mt-[84px] pb-16 md:pb-20">
          <NightBrief variant="full" titleLevel={2} active={active} onChange={setActive} />
          <p className="timecode mt-3 text-ash">Fig. 1 · {brief.caption} · 2026-09-10 · 06:00 · demo data. Select a question to read her answer.</p>
        </Container>
      </section>

      <section id="questions" className="border-b border-nline">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-ash">Three questions</p>
          <h2 className="z-display mt-4 max-w-[14em]">Three questions. Answered before the meeting.</h2>
          <p className="mt-5 max-w-reading text-[16px] leading-[26px] text-ash">
            The three questions a CTO dreads answering with less evidence than they wanted. They are the product's tabs and the test
            of every brief.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {QUESTIONS.map((q) => {
              const brief = briefs.find((b) => b.id === q.id)
              const selected = active === q.id
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => show(q.id)}
                  aria-pressed={selected}
                  className={`group border-t pt-3 text-left transition-colors duration-120 ease-house ${selected ? 'border-npaper' : 'border-nline hover:border-nstrong'}`}
                >
                  <span className="eyebrow block text-ash">{q.k}</span>
                  <span className="z-section mt-2 block">{brief?.question}</span>
                  <span className="mt-2 block text-[13px] leading-[18px] text-ash">{q.d}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium leading-5 text-ash transition-colors duration-120 ease-house group-hover:text-npaper">
                    Read the brief <Arrow />
                  </span>
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <section id="who" className="border-b border-nline">
        <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-ash">Who she is</p>
            <h2 className="z-display mt-4 max-w-[14em]">A technical director who reports to the CTO.</h2>
            <dl className="mt-8 border-t border-nline">
              {FACTS.map((f) => (
                <div key={f.k} className="grid gap-1 border-b border-nline py-3 text-[16px] leading-[26px] md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
                  <dt className="font-medium">{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:pt-16">
            <div className="border border-nline bg-raised p-6">
              <p className="timecode text-ash">Zora, in her own words</p>
              <p className="mt-3 text-[16px] leading-[26px]">
                I am Zora. I report to the CTO. Overnight I read what the organization produced: the deploys, the alerts, the tickets,
                the threads. At 06:00 you get a finished brief: who was affected, what led to it, what we change, and where else it
                applies. Then I stay in the room for the questions. I will tell you what I know and what I do not.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-npaper pl-5 text-[16px] leading-[26px] text-ash">
              <p className="eyebrow text-ash">Two enemies</p>
              <p className="mt-2 text-npaper">The status meeting that reconstructs last week.</p>
              <p className="mt-1">The past you should already have. The brief exists so the meeting does not have to.</p>
              <p className="mt-3 text-npaper">Being caught off guard.</p>
              <p className="mt-1">The future you should have seen. The conditions were there on Tuesday; the brief says so on Tuesday.</p>
            </div>
            <p className="z-section mt-8 max-w-[26em]">
              It is 06:04. The CTO has finished the brief. They are calm and in control, and they know exactly which question to ask
              first.
            </p>
          </div>
        </Container>
      </section>

      <section id="line" className="border-b border-nline">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-ash">The accountability line</p>
          <h2 className="z-display mt-4 max-w-[14em]">She takes the task. You keep the call.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="border-t border-npaper pt-3">
              <p className="eyebrow text-ash">Today</p>
              <p className="z-section mt-2">She advises with evidence.</p>
              <p className="mt-3 text-[16px] leading-[26px] text-ash">
                The record is Silent; every recommendation is Proposed. She names the person who should decide and does not decide.
                Where she would have acted, the brief says so, with the evidence, so the pattern is visible before anything is
                switched on.
              </p>
            </div>
            <div className="border-t border-npaper pt-3">
              <p className="eyebrow text-ash">Within a year</p>
              <p className="z-section mt-2">She acts at Reported, one action at a time.</p>
              <p className="mt-3 text-[16px] leading-[26px] text-ash">
                History added where the work already is. A ticket opened when a written condition is met. A page on the published
                rule. A deploy held where release is one click from the named on-call. Each action runs in shadow first and appears
                in the next brief with the rule that fired and who wrote it. Demotion is one message.
              </p>
            </div>
          </div>
          <p className="mt-8 text-[16px] leading-[26px] text-ash">
            The line is published, versioned, and moved only on evidence.{' '}
            <Link to="/research#dr-fw-001" className="inline-flex items-center gap-2 text-npaper hover:text-ash">
              Read DR-FW-001 <Arrow />
            </Link>
          </p>
        </Container>
      </section>

      <Beta register="night" />
    </>
  )
}
