import { useEffect, useId, useMemo, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import Logo from '@/components/Logo'
import { SearchIcon } from '@/components/ui/icons'
import {
  connectEdges,
  connectNodeLayout,
  enterpriseRecords,
  supportedAnswer,
} from './enterpriseData'
import type { EnterpriseRecordId } from './enterpriseData'
import type { ProofView } from '@/content/home'

type EnterpriseWorkspaceProps = { view: ProofView }
type WorkspaceViewProps = { onSelect?: () => void }

const viewMeta: Record<ProofView, { label: string; code: string; question: string }> = {
  remember: { label: 'Memory', code: 'ME', question: 'What changed this morning?' },
  connect: { label: 'Connections', code: 'CO', question: 'Why did the priority change?' },
  anticipate: { label: 'Attention', code: 'AT', question: 'What needs attention before Friday?' },
  prove: { label: 'Evidence', code: 'EV', question: 'Can Atlas still ship Friday?' },
}

const viewUpdateTime: Record<ProofView, string> = {
  remember: '15:40',
  connect: '11:20',
  anticipate: '11:40',
  prove: '15:10',
}

function TinyArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M3 8h9M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatusDot({ live = false }: { live?: boolean }) {
  return <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-[#03F5F2] shadow-[0_0_0_3px_rgba(3,245,242,.12)]' : 'bg-action'}`} aria-hidden="true" />
}

function WorkspaceRail({ view }: { view: ProofView }) {
  return (
    <aside
      data-workspace-region="navigation"
      className="hidden w-[176px] shrink-0 border-r border-line bg-surface px-3 py-5 xl:flex xl:w-[216px] xl:flex-col"
      aria-label="Atlas release context"
    >
      <div className="flex items-center justify-between px-2">
        <span className="flex items-center gap-2.5">
          <Logo size={20} />
          <span className="text-[13px] font-semibold tracking-[-0.02em] text-ink">Zora</span>
        </span>
        <StatusDot />
      </div>
      <p className="mt-4 px-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-secondary">Atlas release</p>

      <dl className="mt-7 space-y-4 rounded-[8px] border border-line bg-canvas p-3">
        <div>
          <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-secondary">Current view</dt>
          <dd className="mt-1 text-[12px] font-semibold text-ink">{viewMeta[view].label}</dd>
        </div>
        <div>
          <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-secondary">Release target</dt>
          <dd className="mt-1 text-[12px] font-semibold text-ink">Friday · private beta</dd>
        </div>
        <div>
          <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-secondary">Status</dt>
          <dd className="mt-1 flex items-center gap-2 text-[12px] font-semibold text-risk"><span className="h-1.5 w-1.5 rounded-full bg-risk" aria-hidden="true" />Conditional</dd>
        </div>
      </dl>

      <div className="mt-10">
        <p className="px-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-secondary">Connected sources</p>
        <ul className="mt-3 space-y-1">
          {['Linear', 'GitHub', 'Docs', 'Meetings', 'Datadog'].map((source, index) => (
            <li key={source} className="flex h-8 items-center gap-2.5 px-2 text-[11px] text-secondary">
              <StatusDot live={index === 4} />
              {source}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-auto px-2 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">Updated · {viewUpdateTime[view]}</p>
    </aside>
  )
}

function QueryBar({ view, query, submitted, onActivate }: { view: ProofView; query: string; submitted: boolean; onActivate: () => void }) {
  return (
    <button type="button" onClick={onActivate} data-workspace-region="query" className="mx-3 mt-3 flex h-[54px] items-center gap-3 rounded-[8px] border border-line bg-surface px-3 text-left transition-colors hover:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus sm:mx-4 lg:mx-6 lg:mt-5 lg:h-[58px] lg:px-4">
      <SearchIcon className="h-4 w-4 text-action" />
      <div className="min-w-0">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">{submitted ? 'Grounded follow-up' : 'Ask Zora'}</p>
        <p className="truncate text-[12px] font-medium text-ink lg:text-[13px]">{submitted && query ? query : viewMeta[view].question}</p>
      </div>
      <span className={`ml-auto hidden rounded-[5px] px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.06em] sm:inline ${submitted ? 'bg-success-tint text-success' : 'bg-subtle text-secondary'}`}>{submitted ? '6 records' : 'Ask'}</span>
    </button>
  )
}

function MemoryRibbon({ view }: { view: ProofView }) {
  const moments: Record<ProofView, string[][]> = {
    remember: [['08:12', 'Scope'], ['08:26', 'Dependency'], ['11:40', 'Risk'], ['15:30', 'Decision']],
    connect: [['08:04', 'Evidence'], ['08:12', 'Scope'], ['08:26', 'Dependency'], ['10:44', 'Check']],
    anticipate: [['08:26', 'Dependency'], ['10:44', 'Check'], ['11:32', 'Signal'], ['13:00', 'Deadline']],
    prove: [['08:12', 'Scope'], ['08:26', 'Dependency'], ['10:44', 'Check'], ['15:10', 'Verified']],
  }
  return (
    <div data-workspace-region="activity" className="hidden h-9 items-center border-b border-line bg-[#FAFBFB] px-6 md:flex">
      <span className="mr-5 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary">Memory ribbon</span>
      <div className="flex min-w-0 flex-1 items-center">
        {moments[view].map(([time, label], index) => (
          <div key={time} className="flex min-w-0 flex-1 items-center">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${index === 2 ? 'bg-risk' : 'bg-action'}`} aria-hidden="true" />
            <span className="ml-2 truncate font-mono text-[9px] font-medium uppercase tracking-[0.05em] text-secondary">{time} · {label}</span>
            {index < moments[view].length - 1 ? <span className="mx-3 h-px min-w-3 flex-1 bg-line" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function PanelHeading({ eyebrow, title, meta }: { eyebrow: string; title: string; meta: string }) {
  return (
    <header>
      <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action sm:text-[10px]">{eyebrow}</p>
      <h3 className="mt-1.5 text-[18px] font-semibold leading-6 tracking-[-0.025em] text-ink lg:text-[22px] lg:leading-7">{title}</h3>
      <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-secondary">{meta}</p>
    </header>
  )
}

function Inspector({ id, children, label }: { id: string; children: ReactNode; label: string }) {
  return (
    <aside
      id={id}
      data-workspace-region="inspector"
      aria-label={label}
      aria-live="polite"
      aria-atomic="true"
      className="rounded-[10px] border border-line bg-surface p-3.5 lg:p-4"
    >
      {children}
    </aside>
  )
}

function RememberView({ onSelect }: WorkspaceViewProps) {
  const inspectorId = `remember-inspector-${useId().replace(/:/g, '')}`
  const [selectedId, setSelectedId] = useState<EnterpriseRecordId>('dependency')
  const selected = enterpriseRecords.find((item) => item.id === selectedId) ?? enterpriseRecords[0]

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
      <section data-workspace-region="primary" className="overflow-hidden rounded-[10px] border border-line bg-surface">
        <div className="flex h-11 items-center justify-between border-b border-line px-3.5">
          <h4 className="text-[13px] font-semibold text-ink">Release activity</h4>
          <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-action">6 records retained</span>
        </div>
        <div className="divide-y divide-line">
          {enterpriseRecords.map((item) => {
            const active = item.id === selected.id
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                aria-controls={inspectorId}
                onClick={() => { setSelectedId(item.id); onSelect?.() }}
                className={`relative grid min-h-[58px] w-full grid-cols-[42px_minmax(0,1fr)_auto] items-center gap-2 px-3 text-left transition-colors duration-160 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus motion-reduce:transition-none ${active ? 'bg-context before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-action' : 'hover:bg-[#F8FAFB]'}`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-[6px] border border-line bg-surface font-mono text-[9px] font-semibold text-secondary">{item.mark}</span>
                <span className="min-w-0">
                  <span className="block truncate text-[12px] font-semibold text-ink">{item.title}</span>
                  <span className="mt-0.5 block truncate text-[10px] text-secondary">{item.source} · {item.owner}</span>
                </span>
                <span className="font-mono text-[9px] text-secondary">{item.time}</span>
              </button>
            )
          })}
        </div>
      </section>
      <Inspector id={inspectorId} label="Selected memory record">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">Original record · {selected.source}</p>
        <h4 className="mt-2 text-[16px] font-semibold leading-5 text-ink">{selected.title}</h4>
        <p className="mt-3 text-[12px] leading-[18px] text-secondary">{selected.summary}</p>
        <blockquote className="mt-4 border-l-2 border-action pl-3 text-[11px] leading-[17px] text-ink">{selected.excerpt}</blockquote>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-3">
          <div><dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-secondary">Owner</dt><dd className="mt-1 text-[10px] font-medium text-ink">{selected.owner}</dd></div>
          <div><dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-secondary">Due</dt><dd className="mt-1 text-[10px] font-medium text-ink">{selected.due}</dd></div>
        </dl>
      </Inspector>
    </div>
  )
}

function ConnectView({ onSelect }: WorkspaceViewProps) {
  const inspectorId = `connect-inspector-${useId().replace(/:/g, '')}`
  const [selectedId, setSelectedId] = useState<EnterpriseRecordId>('scope')
  const selected = enterpriseRecords.find((item) => item.id === selectedId) ?? enterpriseRecords[0]
  const related = useMemo<Set<EnterpriseRecordId>>(() => new Set(connectEdges.flatMap((edge) => edge.from === selectedId ? [edge.to] : edge.to === selectedId ? [edge.from] : [])), [selectedId])
  const nodes = connectNodeLayout.map((layout) => ({ ...layout, record: enterpriseRecords.find((item) => item.id === layout.id)! }))

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
      <section data-workspace-region="primary" className="rounded-[10px] border border-line bg-surface p-3.5">
        <div className="flex items-center justify-between gap-3">
          <div><h4 className="text-[13px] font-semibold text-ink">Decision context map</h4><p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-secondary">5 connected records · 5 relationships</p></div>
          <span className="hidden border-b border-line px-1 py-1 font-mono text-[9px] uppercase tracking-[0.06em] text-secondary sm:inline">All relationships shown</span>
        </div>

        <div className="relative mt-3 hidden h-[272px] overflow-hidden rounded-[8px] bg-[#F8FAFB] sm:block" aria-label="Causal map for the Atlas release">
          <svg viewBox="0 0 640 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" role="img" aria-label="Relationships between evidence, scope, dependencies, and the Friday release gate">
            {connectEdges.map((edge) => {
              const active = edge.from === selectedId || edge.to === selectedId
              return <path key={`${edge.from}-${edge.to}`} d={edge.path} fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1} strokeDasharray={active ? undefined : '4 6'} data-relationship-state={active ? 'active' : 'idle'} className={active ? 'text-action transition-colors duration-240 motion-reduce:transition-none' : 'text-line'} />
            })}
          </svg>
          {nodes.map(({ record, ...node }) => {
            const active = record.id === selected.id
            const isRelated = related.has(record.id)
            return (
              <button
                key={record.id}
                type="button"
                aria-pressed={active}
                aria-controls={inspectorId}
                data-node-id={record.id === 'dependency' ? 'sdk-418' : record.id}
                onClick={() => { setSelectedId(record.id); onSelect?.() }}
                style={{ left: `${node.x}%`, top: `${node.y}%`, width: `${node.width}%` }}
                className={`absolute z-10 min-h-[72px] rounded-[8px] border p-2.5 text-left shadow-[0_4px_12px_rgba(13,21,17,.05)] transition-all duration-240 motion-reduce:transition-none ${active ? 'border-action bg-context' : isRelated ? 'border-action/45 bg-surface' : 'border-line bg-surface/95 hover:border-control'}`}
              >
                <span className="block truncate font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-action">{record.source} · {record.time}</span>
                <span className="mt-1 block truncate text-[11px] font-semibold text-ink">{record.title}</span>
                <span className="mt-1 block truncate text-[9px] text-secondary">{record.relationship}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-3 space-y-1.5 sm:hidden" aria-label="Connected release records">
          {nodes.map(({ record }) => {
            const active = record.id === selected.id
            return (
              <button key={record.id} type="button" aria-pressed={active} aria-controls={inspectorId} onClick={() => { setSelectedId(record.id); onSelect?.() }} data-node-id={record.id === 'dependency' ? 'sdk-418' : record.id} className={`relative grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-[6px] border px-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus ${active ? 'border-action bg-context' : 'border-line bg-surface'}`}>
                <span><span className="block font-mono text-[9px] uppercase tracking-[0.06em] text-action">{record.source} · {record.time}</span><span className="mt-0.5 block text-[12px] font-semibold text-ink">{record.title}</span></span>
                <TinyArrow />
              </button>
            )
          })}
        </div>
      </section>
      <Inspector id={inspectorId} label="Selected relationship context">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">Selected context</p>
        <h4 className="mt-2 text-[17px] font-semibold leading-5 text-ink">{selected.title}</h4>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.06em] text-secondary">{selected.source} · {selected.time} · {selected.owner}</p>
        <p className="mt-4 text-[12px] leading-[18px] text-secondary">{selected.summary}</p>
        <blockquote className="mt-4 border-l-2 border-action pl-3 text-[11px] leading-[17px] text-ink">{selected.excerpt}</blockquote>
        <div className="mt-5 border-t border-line pt-3"><p className="font-mono text-[9px] uppercase tracking-[0.07em] text-secondary">Connected effects</p><p className="mt-2 text-[11px] font-medium text-ink">{related.size} linked records update this release decision.</p></div>
      </Inspector>
    </div>
  )
}

const actionOptions = [
  { id: 'sdk', title: 'Confirm SDK-418 owner', owner: 'Ravi · Backend', due: '13:00', source: 'Linear · 08:26', rationale: 'Mobile remains blocked until the auth SDK owner confirms the landing window.' },
  { id: 'auth', title: 'Review PR #8421 evidence', owner: 'Maya · Product', due: 'Now', source: 'GitHub · 10:44', rationale: 'The release gate is still failing and needs a go / no-go recommendation.' },
  { id: 'signal', title: 'Review the 2.8% auth signal', owner: 'Sam · Reliability', due: '14:00', source: 'Datadog · 11:32', rationale: 'Delivery confidence stays conditional until auth errors return to the agreed baseline.' },
]

function AnticipateView({ onSelect }: WorkspaceViewProps) {
  const inspectorId = `anticipate-inspector-${useId().replace(/:/g, '')}`
  const [selectedId, setSelectedId] = useState('sdk')
  const selected = actionOptions.find((item) => item.id === selectedId) ?? actionOptions[0]

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
      <section data-workspace-region="primary" className="space-y-3">
        <div className="rounded-[10px] border border-risk bg-surface p-4 shadow-[inset_3px_0_0_#A73745]">
          <div className="flex flex-wrap items-center justify-between gap-2"><p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-risk">Delivery risk · high</p><span className="rounded-full bg-risk-tint px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-risk">Maya · 13:00</span></div>
          <h4 className="mt-3 text-[17px] font-semibold leading-5 tracking-[-0.02em] text-ink">Auth SDK dependency threatens Friday release.</h4>
          <p className="mt-2 text-[12px] leading-[18px] text-secondary">SDK-418 blocks mobile and PR #8421 still fails the release gate.</p>
        </div>
        <div className="rounded-[10px] border border-line bg-surface p-4">
          <div className="flex items-end justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[0.08em] text-secondary">Delivery confidence</p><p className="mt-1 text-[32px] font-semibold leading-9 tracking-[-0.04em] text-ink">62%</p></div><span className="font-mono text-[9px] text-risk">−18 pts today</span></div>
          <svg viewBox="0 0 560 100" preserveAspectRatio="none" className="mt-3 h-20 w-full" role="img" aria-label="Delivery confidence fell to 62 percent after the dependency and failed checks appeared">
            {[30,140,250,360,470].map((x) => <line key={x} x1={x} y1="8" x2={x} y2="92" stroke="currentColor" className="text-line" />)}
            <polyline points="0,78 90,62 180,68 270,42 360,50 450,22 560,58" fill="none" stroke="currentColor" strokeWidth="2" className="text-risk" />
          </svg>
        </div>
      </section>
      <Inspector id={inspectorId} label="What Zora recommends next">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">Why Zora flagged this</p>
        <h4 className="mt-2 text-[16px] font-semibold leading-5 text-ink">Three signals converge on one release risk.</h4>
        <div className="mt-4 space-y-2">
          {actionOptions.map((action) => {
            const active = action.id === selected.id
            return (
              <button key={action.id} type="button" aria-pressed={active} aria-controls={inspectorId} onClick={() => { setSelectedId(action.id); onSelect?.() }} className={`min-h-12 w-full rounded-[6px] border px-3 py-2 text-left transition-colors duration-160 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus motion-reduce:transition-none ${active ? 'border-action bg-context' : 'border-line bg-surface hover:bg-[#F8FAFB]'}`}>
                <span className="flex items-center justify-between gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-action"><span>{action.source}</span><span>{action.due}</span></span>
                <span className="mt-1 block text-[11px] font-semibold text-ink">{action.title}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-4 border-t border-line pt-3"><p className="font-mono text-[9px] uppercase tracking-[0.07em] text-secondary">Selected action</p><p className="mt-2 text-[12px] font-semibold text-ink">{selected.title}</p><p className="mt-1 text-[11px] leading-[16px] text-secondary">{selected.rationale}</p><p className="mt-2 font-mono text-[9px] text-action">{selected.owner} · {selected.due}</p></div>
      </Inspector>
    </div>
  )
}

function ProveView({ onSelect }: WorkspaceViewProps) {
  const inspectorId = `prove-inspector-${useId().replace(/:/g, '')}`
  const evidence = enterpriseRecords.filter((record) => record.id !== 'decision')
  const [selectedId, setSelectedId] = useState<EnterpriseRecordId>('checks')
  const selected = evidence.find((source) => source.id === selectedId) ?? evidence[0]

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
      <section data-workspace-region="primary" className="space-y-3">
        <div className="rounded-[10px] border border-action bg-context p-3.5">
          <div className="flex items-center justify-between gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-action"><span>Supported answer</span><span>5 verified sources</span></div>
          <p className="mt-2 text-[13px] font-semibold leading-[19px] text-ink">{supportedAnswer}</p>
        </div>
        <div className="overflow-hidden rounded-[10px] border border-line bg-surface">
          <div className="hidden h-9 grid-cols-[88px_minmax(0,1fr)_92px_46px] items-center border-b border-line bg-[#FAFBFB] px-3 font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-secondary sm:grid"><span>Source</span><span>Evidence</span><span>Relationship</span><span className="text-right">Time</span></div>
          {evidence.map((source) => {
            const active = source.id === selected.id
            return (
              <button key={source.id} type="button" aria-pressed={active} aria-controls={inspectorId} data-source-id={source.source.toLowerCase()} onClick={() => { setSelectedId(source.id); onSelect?.() }} className={`relative grid min-h-[52px] w-full grid-cols-[52px_minmax(0,1fr)_40px] items-center gap-2 border-b border-line px-3 text-left last:border-b-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus sm:grid-cols-[88px_minmax(0,1fr)_92px_46px] ${active ? 'bg-context before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-action' : 'hover:bg-[#F8FAFB]'}`}>
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.05em] text-action">{source.mark}</span>
                <span className="min-w-0"><span className="block truncate text-[11px] font-semibold text-ink">{source.title}</span><span className="block truncate text-[9px] text-secondary sm:hidden">{source.source}</span></span>
                <span className="hidden text-[9px] text-secondary sm:block">{source.relationship}</span>
                <span className="text-right font-mono text-[9px] text-secondary">{source.time}</span>
              </button>
            )
          })}
        </div>
      </section>
      <Inspector id={inspectorId} label="Selected original evidence">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-action">Original source</p>
        <h4 className="mt-2 text-[16px] font-semibold leading-5 text-ink">{selected.title}</h4>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.06em] text-secondary">{selected.source} · {selected.time} · {selected.owner}</p>
        <blockquote className="mt-4 rounded-[6px] border border-line bg-[#F8FAFB] p-3 text-[11px] leading-[17px] text-ink">{selected.excerpt}</blockquote>
        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.07em] text-secondary">Decision trail</p>
        <ol className="mt-3 space-y-3">
          {[['08:12', 'Priority changed'], [selected.time, 'Evidence linked'], ['15:10', 'Answer verified']].map(([time, label], index) => (
            <li key={`${time}-${label}`} className="flex items-center gap-2.5 text-[10px] text-secondary"><span className={`h-2 w-2 rounded-full ${index === 1 ? 'bg-action' : 'bg-control'}`} aria-hidden="true" /><span className="font-mono text-[9px]">{time}</span><span className="font-medium text-ink">{label}</span></li>
          ))}
        </ol>
      </Inspector>
    </div>
  )
}

function Composer({ inputId, query, submitted, onQueryChange, onSubmit }: { inputId: string; query: string; submitted: boolean; onQueryChange: (value: string) => void; onSubmit: () => void }) {
  function submit(event: FormEvent) { event.preventDefault(); onSubmit() }
  return (
    <form onSubmit={submit} className="mx-3 mb-3 mt-auto flex h-11 shrink-0 items-center rounded-[8px] border border-line bg-surface px-3 sm:mx-4 lg:mx-6 lg:mb-4">
      <label htmlFor={inputId} className="sr-only">Ask a follow-up about the Atlas release</label>
      <input id={inputId} value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Ask a follow-up about Atlas…" className="min-w-0 flex-1 bg-transparent text-[11px] text-ink outline-none placeholder:text-secondary" />
      <button type="submit" disabled={!query.trim()} className="ml-2 inline-flex h-8 items-center gap-1.5 rounded-[6px] bg-action px-3 text-[10px] font-semibold text-inverse transition-colors hover:bg-action-hover active:bg-action-pressed disabled:cursor-not-allowed disabled:opacity-50"><span>{submitted ? 'Added' : 'Ask'}</span><TinyArrow /></button>
      <span className="sr-only" role="status" aria-live="polite">{submitted ? 'Grounded answer updated from six Atlas release records.' : ''}</span>
    </form>
  )
}

export default function EnterpriseWorkspace({ view }: EnterpriseWorkspaceProps) {
  const meta = viewMeta[view]
  const composerId = `workspace-composer-${useId().replace(/:/g, '')}`
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [interactionCount, setInteractionCount] = useState(0)

  useEffect(() => {
    setQuery('')
    setSubmitted(false)
    setInteractionCount(0)
  }, [view])

  function updateQuery(value: string) {
    setQuery(value)
    setSubmitted(false)
  }

  function submitQuery() {
    if (query.trim()) setSubmitted(true)
  }

  function registerSelection() {
    setInteractionCount((count) => count + 1)
  }

  return (
    <article
      data-enterprise-workspace
      data-workspace-mode={view}
      className="flex h-[820px] w-full overflow-hidden rounded-b-[14px] border border-t-0 border-control bg-canvas shadow-[0_24px_70px_-18px_rgba(18,36,29,.16)] sm:h-[720px] lg:h-[720px] lg:rounded-b-[18px]"
      aria-label={`Zora ${meta.label} workspace for the Atlas release`}
    >
      <WorkspaceRail view={view} />
      <div className="flex min-w-0 flex-1 flex-col bg-canvas">
        <header className="flex h-[54px] shrink-0 items-center border-b border-line bg-surface px-3 sm:px-4 lg:h-14 lg:px-6">
          <div className="flex items-center gap-2.5 xl:hidden"><Logo size={18} /><span className="text-[12px] font-semibold text-ink">Zora</span></div>
          <p className="ml-3 hidden truncate font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary sm:block xl:ml-0">Atlas release / {meta.label}</p>
          <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-success-tint px-2.5 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-success"><StatusDot live /> Updated · {viewUpdateTime[view]}</span>
        </header>
        <MemoryRibbon view={view} />
        <QueryBar view={view} query={query} submitted={submitted || interactionCount > 0} onActivate={() => document.getElementById(composerId)?.focus()} />

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 sm:px-4 lg:px-6 lg:py-5" data-lenis-prevent>
          <PanelHeading
            eyebrow={`Atlas release · ${meta.label}`}
            title={view === 'remember' ? 'Work becomes memory as it happens.' : view === 'connect' ? 'Decisions keep their why.' : view === 'anticipate' ? 'What needs attention comes forward.' : 'Every answer shows its work.'}
            meta={view === 'remember' ? '5 systems · 6 captured moments · updated 15:40' : view === 'connect' ? '5 records · 5 relationships · updated 11:20' : view === 'anticipate' ? '3 release signals · updated 11:40' : 'Supported · 5 original sources · verified 15:10'}
          />
          <div className="mt-4">
            {view === 'remember' ? <RememberView onSelect={registerSelection} /> : null}
            {view === 'connect' ? <ConnectView onSelect={registerSelection} /> : null}
            {view === 'anticipate' ? <AnticipateView onSelect={registerSelection} /> : null}
            {view === 'prove' ? <ProveView onSelect={registerSelection} /> : null}
          </div>
        </div>
        <Composer inputId={composerId} query={query} submitted={submitted} onQueryChange={updateQuery} onSubmit={submitQuery} />
      </div>
    </article>
  )
}
