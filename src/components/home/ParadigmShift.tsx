import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

type MiniCard = { title: string; caption: string; art: ReactNode }
type Way = {
  n: string
  title: string
  tagline: string
  copy: string
  accent: boolean
  cards: MiniCard[]
}

// Mini-illustrations: composed white-on-gray UI sketches (Frontdesk style), not single icons.
// Old way stays monochrome; the new way earns signal/deep-signal accents.
const ways: Way[] = [
  {
    n: '01',
    title: 'Human-heavy operations',
    tagline: 'The old way · a team per function',
    copy: 'Premature headcount, fragmented tools, and Slack-and-ticket handoffs — an expensive operations buildout before volume justifies it.',
    accent: false,
    cards: [
      {
        title: 'Slack & ticket handoffs',
        caption: 'Cases bounce between people and channels',
        art: (
          <>
            <rect x="16" y="6" width="42" height="28" rx="3" fill="#FFFFFF" stroke="#C9D0D9" />
            <path d="M16 13h42" stroke="#C9D0D9" />
            <rect x="34" y="14" width="42" height="28" rx="3" fill="#FFFFFF" stroke="#BBC3CE" />
            <path d="M34 21h42" stroke="#BBC3CE" />
            <rect x="52" y="22" width="44" height="28" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M52 29h44" stroke="#AEB7C2" />
            <circle cx="56.5" cy="25.5" r="1.1" fill="#AEB7C2" stroke="none" />
            <circle cx="60.5" cy="25.5" r="1.1" fill="#AEB7C2" stroke="none" />
            <path d="M58 36h30M58 41h20" stroke="#C9D0D9" />
          </>
        ),
      },
      {
        title: 'Fragmented tools',
        caption: 'Signals split across dashboards and queues',
        art: (
          <>
            <rect x="10" y="16" width="26" height="24" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M15 29h13M15 34h8" stroke="#C9D0D9" />
            <circle cx="31" cy="21.5" r="1.8" fill="#AEB7C2" stroke="none" />
            <rect x="47" y="16" width="26" height="24" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M52 29h13M52 34h8" stroke="#C9D0D9" />
            <circle cx="68" cy="21.5" r="1.8" fill="#AEB7C2" stroke="none" />
            <rect x="84" y="16" width="26" height="24" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M89 29h13M89 34h8" stroke="#C9D0D9" />
            <circle cx="105" cy="21.5" r="1.8" fill="#AEB7C2" stroke="none" />
          </>
        ),
      },
      {
        title: 'Inconsistent escalation',
        caption: 'Outcomes vary by team and analyst',
        art: (
          <>
            <path d="M14 14h54" stroke="#C9D0D9" />
            <circle cx="90" cy="14" r="6" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M87.6 14l1.7 1.7 3-3.2" stroke="#AEB7C2" />
            <path d="M14 28h54" stroke="#C9D0D9" />
            <circle cx="100" cy="28" r="6" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M97.8 25.8l4.4 4.4M102.2 25.8l-4.4 4.4" stroke="#AEB7C2" />
            <path d="M14 42h54" stroke="#C9D0D9" />
            <circle cx="94" cy="42" r="6" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M91.5 42h5" stroke="#AEB7C2" />
          </>
        ),
      },
      {
        title: 'Repetitive reviews',
        caption: 'The same checks, rebuilt case by case',
        art: (
          <>
            <circle cx="27" cy="19" r="6" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M16 42c2.2-7 6-10.5 11-10.5S35.8 35 38 42" fill="#FFFFFF" stroke="#AEB7C2" />
            <rect x="72" y="11" width="26" height="32" rx="3" fill="#FFFFFF" stroke="#BBC3CE" />
            <rect x="78" y="15" width="26" height="32" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M83 25h16M83 30h16M83 35h10" stroke="#C9D0D9" />
            <path d="M46 17c6.5-5 14.5-5 21 0" stroke="#AEB7C2" />
            <path d="M64 12.5l3 4.5-5.4.7" stroke="#AEB7C2" fill="none" />
            <path d="M67 40c-6.5 5-14.5 5-21 0" stroke="#AEB7C2" />
            <path d="M49 44.5l-3-4.5 5.4-.7" stroke="#AEB7C2" fill="none" />
          </>
        ),
      },
    ],
  },
  {
    n: '02',
    title: 'Agent-native operations',
    tagline: 'The new way · one operations layer',
    copy: 'Agents prepare the case, apply your rules, and complete the routine path. Humans approve where judgment matters — with a complete audit trail.',
    accent: true,
    cards: [
      {
        title: 'Context assembled',
        caption: 'Agents build the full case file',
        art: (
          <>
            <rect x="8" y="6" width="24" height="12" rx="2.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M12 12h16" stroke="#C9D0D9" />
            <rect x="8" y="22" width="24" height="12" rx="2.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M12 28h16" stroke="#C9D0D9" />
            <rect x="8" y="38" width="24" height="12" rx="2.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M12 44h16" stroke="#C9D0D9" />
            <path d="M36 12c10 0 14 13 24 15M36 28h24M36 44c10 0 14-13 24-15" stroke="#C9D0D9" />
            <rect x="64" y="10" width="42" height="36" rx="3" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M70 19h30M70 25h30M70 31h20" stroke="#C9D0D9" />
            <circle cx="98" cy="38.5" r="5" fill="#E0F7FF" stroke="#0284C7" />
            <path d="M95.9 38.5l1.5 1.5 2.7-2.9" stroke="#0284C7" />
          </>
        ),
      },
      {
        title: 'Cross-function reasoning',
        caption: 'Signals linked before action',
        art: (
          <>
            <path d="M27 13l26 12M27 43l26-12M93 13L67 25M93 43L67 31" stroke="#C9D0D9" />
            <circle cx="23" cy="12" r="5.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <circle cx="23" cy="44" r="5.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <circle cx="97" cy="12" r="5.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <circle cx="97" cy="44" r="5.5" fill="#FFFFFF" stroke="#AEB7C2" />
            <circle cx="60" cy="28" r="7.5" fill="#E0F7FF" stroke="#0284C7" />
            <circle cx="60" cy="28" r="2.4" fill="#0284C7" stroke="none" />
          </>
        ),
      },
      {
        title: 'Consistent execution',
        caption: 'Policy applied the same way, every time',
        art: (
          <>
            <path d="M14 14h58M14 28h58M14 42h58" stroke="#C9D0D9" />
            <circle cx="96" cy="14" r="6" fill="#E0F7FF" stroke="#0284C7" />
            <path d="M93.6 14l1.7 1.7 3-3.2" stroke="#0284C7" />
            <circle cx="96" cy="28" r="6" fill="#E0F7FF" stroke="#0284C7" />
            <path d="M93.6 28l1.7 1.7 3-3.2" stroke="#0284C7" />
            <circle cx="96" cy="42" r="6" fill="#E0F7FF" stroke="#0284C7" />
            <path d="M93.6 42l1.7 1.7 3-3.2" stroke="#0284C7" />
          </>
        ),
      },
      {
        title: 'Humans on exceptions',
        caption: 'Judgment-heavy cases, supervised',
        art: (
          <>
            <path d="M10 41h100" stroke="#C9D0D9" />
            <circle cx="32" cy="41" r="5" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M30 41l1.4 1.4 2.5-2.7" stroke="#AEB7C2" />
            <circle cx="88" cy="41" r="5" fill="#FFFFFF" stroke="#AEB7C2" />
            <path d="M86 41l1.4 1.4 2.5-2.7" stroke="#AEB7C2" />
            <path d="M60 41V29" stroke="#0284C7" strokeDasharray="2.5 2.5" />
            <circle cx="60" cy="14" r="4.2" fill="#E0F7FF" stroke="#0284C7" />
            <path d="M52 26.5c1.6-4.2 4.4-6.3 8-6.3s6.4 2.1 8 6.3" fill="none" stroke="#0284C7" />
          </>
        ),
      },
    ],
  },
]

function WayPanel({ n, title, tagline, copy, accent, cards }: Way) {
  return (
    <div className={`relative overflow-hidden rounded-stage border border-line bg-soft p-6 sm:p-9 lg:p-10`}>
      {accent && <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />}
      <div className="grid items-start gap-7 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div>
          <div className="flex items-baseline gap-3">
            <span
              className={`text-[38px] font-extrabold leading-none tracking-[-0.02em] sm:text-[44px] ${
                accent ? 'bg-spectral bg-clip-text text-transparent' : 'text-line-strong'
              }`}
            >
              {n}
            </span>
            <h3 className="text-[23px] font-bold tracking-[-0.02em] text-ink sm:text-[27px]">{title}</h3>
          </div>
          <p className={`mt-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${accent ? 'text-deep-signal' : 'text-muted'}`}>
            {tagline}
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-body sm:text-[15.5px]">{copy}</p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-[14px] border border-line bg-white p-3.5">
              <div className="flex h-[76px] items-center justify-center overflow-hidden rounded-[10px] bg-surface-alt" aria-hidden="true">
                <svg
                  viewBox="0 0 120 56"
                  fill="none"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full p-1.5"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {c.art}
                </svg>
              </div>
              <p className="mt-3 text-[13.5px] font-bold tracking-[-0.01em] text-ink">{c.title}</p>
              <p className="mt-1 text-[12px] leading-[1.45] text-muted">{c.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ParadigmShift() {
  return (
    <section id="why-now" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <Eyebrow chip className="mb-4">What changes</Eyebrow>
            <h2 className="mx-auto max-w-[22ch] text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[44px]">
              What DORA <span className="font-serif font-normal italic">replaces</span>.
            </h2>
            <span className="mx-auto mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            <p className="mx-auto mt-5 max-w-[68ch] text-[16.5px] leading-[1.7] text-body">
              Instead of hiring separate teams for support, KYC, payments, risk, VIP, compliance, and reporting before scale, DORA gives operators an agent-native operations layer that handles routine workflows and escalates the decisions that need human judgment.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <WayPanel {...ways[0]} />
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center py-5 text-center">
              <span className="h-6 w-px border-l border-dashed border-line-strong" aria-hidden="true" />
              <p className="mt-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">The operating shift</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">from headcount to deployed systems</p>
              <span className="mt-2.5 h-6 w-px border-l border-dashed border-line-strong" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal>
            <WayPanel {...ways[1]} />
          </Reveal>
        </div>

      </Container>
    </section>
  )
}
