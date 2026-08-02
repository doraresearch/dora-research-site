import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { DocIcon, MailIcon, MicIcon, PenIcon, SearchIcon } from '@/components/ui/icons'

const WAVE = [5, 9, 7, 12, 16, 10, 13, 8, 11, 6, 10, 5]

function ProductFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-window border border-line bg-white shadow-[0_12px_32px_rgba(23,37,31,.08)]" aria-hidden="true">
      <div className="flex h-9 items-center border-b border-line-soft px-3.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-orange/75" />
          <span className="h-2 w-2 rounded-full bg-yellow/85" />
          <span className="h-2 w-2 rounded-full bg-green/75" />
        </div>
        <span className="mx-auto font-mono text-[8px] uppercase tracking-[0.16em] text-muted">{label}</span>
        <span className="w-9" />
      </div>
      {children}
    </div>
  )
}

function CaptureSurface() {
  return (
    <ProductFrame label="Zora · inbox">
      <div className="grid min-h-[278px] sm:grid-cols-[104px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line-soft bg-base p-3 sm:block">
          <div className="font-display text-[15px] font-bold text-ink">Zora</div>
          <div className="mt-5 space-y-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
            <div className="rounded-md bg-green/[.09] px-2 py-1.5 text-green">Inbox <span className="float-right">12</span></div>
            <div className="px-2 py-1.5">All memories</div>
            <div className="px-2 py-1.5">People</div>
            <div className="px-2 py-1.5">Projects</div>
          </div>
        </aside>
        <div className="min-w-0 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">Inbox</p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-muted">Today · newest first</p>
            </div>
            <SearchIcon className="h-4 w-4 text-green" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="grid grid-cols-[34px_minmax(0,1fr)_auto] items-center gap-2.5 rounded-md border border-line-soft bg-white px-2.5 py-2">
              <div className="grid h-[34px] w-[34px] place-items-center rounded-md bg-green/[.09] text-green"><MicIcon className="h-4 w-4" /></div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-ink">Voice memo</p>
                <p className="truncate text-[9px] text-muted">Maya · 9:41 AM</p>
              </div>
              <span className="font-mono text-[8px] text-muted">0:47</span>
            </div>
            <div className="grid grid-cols-[34px_minmax(0,1fr)_auto] items-center gap-2.5 rounded-md border border-line-soft bg-white px-2.5 py-2">
              <div className="grid h-[34px] w-[34px] place-items-center rounded-md bg-yellow/35 text-ink"><DocIcon className="h-4 w-4" /></div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-ink">Reading highlight</p>
                <p className="truncate text-[9px] text-muted">The art of noticing</p>
              </div>
              <span className="font-mono text-[8px] text-muted">Saved</span>
            </div>
            <div className="grid grid-cols-[34px_minmax(0,1fr)_auto] items-center gap-2.5 rounded-md border border-line-soft bg-white px-2.5 py-2">
              <div className="grid h-[34px] w-[34px] place-items-center rounded-md bg-sage text-green"><PenIcon className="h-4 w-4" /></div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-ink">A thought from the train</p>
                <p className="truncate text-[9px] text-muted">Note · 7:18 AM</p>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-line-soft pt-2.5 font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-green" /> Captured automatically
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}

function MemoryCard({ className, icon, title, meta }: { className: string; icon: ReactNode; title: string; meta: string }) {
  return (
    <div className={`absolute w-[104px] rounded-md border border-line bg-white px-2.5 py-2 shadow-[0_3px_10px_rgba(23,37,31,.05)] max-sm:w-[78px] max-sm:px-1.5 ${className}`}>
      <div className="flex items-center gap-1.5 text-green">{icon}<span className="font-mono text-[8px] uppercase tracking-[0.08em]">{title}</span></div>
      <p className="mt-1 truncate text-[9px] text-muted">{meta}</p>
    </div>
  )
}

function ConnectSurface() {
  return (
    <ProductFrame label="Zora · memory map">
      <div className="min-h-[278px] p-3 sm:p-4">
        <div className="flex items-center justify-between border-b border-line-soft pb-2.5">
          <div>
            <p className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">Lease renewal</p>
            <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-muted">Memory workspace</p>
          </div>
          <span className="rounded-full border border-green/[.22] bg-green/[.07] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-green">4 links</span>
        </div>
        <div className="relative mt-3 h-[196px]">
          <svg viewBox="0 0 320 196" fill="none" className="absolute inset-0 h-full w-full">
            <path d="M160 98C118 70 80 48 42 35" stroke="#C9D2C2" strokeWidth="1.2" />
            <path d="M160 98C204 72 244 51 278 34" stroke="#C9D2C2" strokeWidth="1.2" />
            <path d="M160 98C118 130 82 152 45 164" stroke="#C9D2C2" strokeWidth="1.2" />
            <path d="M160 98C207 128 246 153 280 164" stroke="#FF785A" strokeWidth="1.4" />
          </svg>
          <MemoryCard className="left-0 top-0" icon={<MicIcon className="h-3 w-3" />} title="Voice" meta="Maya · Mar 14" />
          <MemoryCard className="right-0 top-0" icon={<MailIcon className="h-3 w-3" />} title="Email" meta="Lease terms" />
          <MemoryCard className="bottom-0 left-0" icon={<DocIcon className="h-3 w-3" />} title="Note" meta="April 4 decision" />
          <MemoryCard className="bottom-0 right-0" icon={<PenIcon className="h-3 w-3" />} title="Project" meta="New apartment" />
          <div className="absolute left-1/2 top-1/2 grid h-[70px] w-[124px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-md border border-ink/10 bg-ink px-3 text-center shadow-[0_8px_18px_rgba(23,37,31,.12)] max-sm:h-[66px] max-sm:w-[102px] max-sm:px-2">
            <div>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange motion-safe:animate-node-pulse" />
              <p className="mt-1 text-[10px] font-semibold text-base max-sm:text-[9px]">Lease renewal</p>
              <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.08em] text-base/65">4 related memories</p>
            </div>
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}

function RecallSurface() {
  return (
    <ProductFrame label="Zora · recall">
      <div className="min-h-[278px] p-3 sm:p-4">
        <div className="flex items-center gap-2 rounded-md border border-line bg-base px-3 py-2.5">
          <SearchIcon className="h-3.5 w-3.5 text-green" />
          <span className="min-w-0 flex-1 truncate text-[11px] text-ink">What did Maya say about the lease renewal?</span>
          <span className="font-mono text-[8px] text-muted">⌘K</span>
        </div>
        <div className="mt-3 flex items-center gap-3 border-b border-line-soft pb-2 font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
          <span className="border-b-2 border-green pb-2 -mb-[9px] text-green">Answer</span>
          <span>Memories 2</span>
          <span>Sources</span>
        </div>
        <p className="mt-3 text-[11px] leading-[1.65] text-ink">
          Maya suggested renewing for <span className="border-b-2 border-green/55">18 months instead of 12</span>. The landlord offered a <span className="border-b-2 border-green/55">6% discount</span> for the longer term, with a decision before <strong className="rounded bg-yellow px-1 font-semibold">April 4</strong>.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-line-soft bg-base p-2.5">
            <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-green"><MicIcon className="h-3 w-3" /> Voice · Mar 14</div>
            <div className="mt-2 flex h-4 items-end gap-0.5">
              {WAVE.map((height, index) => <span key={index} className={`w-[2px] rounded-sm ${[5, 6, 7].includes(index) ? 'bg-orange' : 'bg-green/45'}`} style={{ height }} />)}
            </div>
          </div>
          <div className="rounded-md border border-line-soft bg-base p-2.5">
            <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-green"><MailIcon className="h-3 w-3" /> Email · Mar 12</div>
            <p className="mt-2 truncate text-[9px] text-muted"><span className="bg-yellow/80">Matched passage</span> · lease terms</p>
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}

const stages = [
  {
    title: 'Capture',
    copy: 'Every fragment, in seconds. No filing, no tagging, no folders — capture is frictionless by design.',
    visual: <CaptureSurface />,
  },
  {
    title: 'Connect',
    copy: 'A living memory graph links fragments to people, projects, and ideas — new connections light up as structure emerges on its own.',
    visual: <ConnectSurface />,
  },
  {
    title: 'Recall',
    copy: 'Plain-language questions, grounded answers. Every recall cites the original moment.',
    visual: <RecallSurface />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line bg-sage py-24">
      <Container>
        <Reveal>
          <h2 className="font-display text-[32px] font-bold tracking-[-0.02em] text-ink sm:text-[40px]">
            Capture. Connect. Recall.
          </h2>
          <p className="mt-3 max-w-[52ch] text-[16px] text-muted">
            Three stages, one system. Zora does the organizing so you never have to.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-9 lg:grid-cols-3 lg:gap-7">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 80}>
              <article>
                {stage.visual}
                <h3 className="mt-5 font-display text-[21px] font-bold text-ink">{stage.title}</h3>
                <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.6] text-muted">{stage.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
