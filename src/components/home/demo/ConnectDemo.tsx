import { useId, useState } from 'react'
import { connectionEdges, connectionNodes, workMoments } from './data'
import type { ConnectionNode, RelationType } from './data'

const relationLabels: Record<RelationType, string> = {
  supports: 'Supports',
  depends_on: 'Depends on',
  constrains: 'Constrains',
  blocks: 'Blocks',
}

function GraphNode({
  node,
  active,
  related,
  detailId,
  onSelect,
}: {
  node: ConnectionNode
  active: boolean
  related: boolean
  detailId: string
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-controls={detailId}
      aria-describedby={active ? detailId : undefined}
      onClick={onSelect}
      style={{ left: `${node.x}%`, top: `${node.y}%`, width: `${node.width}%` }}
      className={active
        ? 'absolute z-10 min-h-14 rounded-[11px] border border-green bg-white p-2.5 text-left shadow-[0_10px_24px_rgba(13,23,19,.13)] transition-all duration-300 motion-reduce:transition-none'
        : related
          ? 'absolute z-10 min-h-14 rounded-[11px] border border-green/40 bg-white p-2.5 text-left shadow-[0_6px_18px_rgba(13,23,19,.08)] transition-all duration-300 hover:border-green motion-reduce:transition-none'
          : 'absolute z-10 min-h-14 rounded-[11px] border border-line bg-white/95 p-2.5 text-left opacity-70 shadow-[0_4px_12px_rgba(13,23,19,.06)] transition-all duration-300 hover:opacity-100 motion-reduce:transition-none'}
    >
      <span className={node.featured || node.relation === 'blocks'
        ? 'block truncate font-mono text-[10px] uppercase tracking-[0.05em] text-orange'
        : 'block truncate font-mono text-[10px] uppercase tracking-[0.05em] text-green'}
      >
        {node.label}
      </span>
      <span className="mt-1 block truncate text-[11px] font-semibold leading-tight text-ink">
        {node.title}
      </span>
      <span className="mt-1 block truncate font-mono text-[10px] text-muted">{node.meta}</span>
    </button>
  )
}

export default function ConnectDemo({
  compact = false,
  selectedId: selectedIdProp,
  onSelectedIdChange,
}: {
  compact?: boolean
  selectedId?: ConnectionNode['id']
  onSelectedIdChange?: (nodeId: ConnectionNode['id']) => void
}) {
  const [internalSelectedId, setInternalSelectedId] = useState<ConnectionNode['id']>('commitment')
  const selectedId = selectedIdProp ?? internalSelectedId
  const instanceId = useId().replace(/:/g, '')
  const detailId = `connection-detail-${instanceId}`
  const selected = connectionNodes.find((node) => node.id === selectedId) ?? connectionNodes[0]
  const selectedMoment = workMoments.find((moment) => moment.nodeId === selected.id)
  const connectedIds = new Set(
    connectionEdges.flatMap((edge) => {
      if (edge.from === selected.id) return [edge.to]
      if (edge.to === selected.id) return [edge.from]
      return []
    }),
  )

  function selectNode(nodeId: ConnectionNode['id']) {
    if (selectedIdProp === undefined) setInternalSelectedId(nodeId)
    onSelectedIdChange?.(nodeId)
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-green">
            11:20 · Context
          </p>
          <p className="mt-1 font-display text-[18px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[20px]">
            One decision, full history
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.05em] text-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
          3 open gates
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 border border-line-soft bg-base px-3.5 py-2.5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-green">Release question</p>
          <p className="mt-0.5 text-[11px] font-semibold text-ink sm:text-[12px]">Can Atlas still ship Friday?</p>
        </div>
        <p className="shrink-0 text-right font-mono text-[10px] uppercase leading-[1.4] tracking-[0.04em] text-muted">
          5 linked moments<br />select to inspect
        </p>
      </div>

      <div className={compact
        ? 'relative mt-2.5 hidden h-[250px] overflow-hidden border border-line-soft bg-base sm:block'
        : 'relative mt-3 hidden h-[286px] overflow-hidden border border-line-soft bg-base sm:block'}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 640 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {connectionEdges.map((edge) => {
            const isActive = edge.from === selected.id || edge.to === selected.id
            const isBlocker = edge.relation === 'blocks'
            return (
              <path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                fill="none"
                strokeWidth={isActive ? 2.25 : 1.2}
                strokeDasharray={isActive ? undefined : '4 5'}
                opacity={isActive ? 0.95 : 0.58}
                className={isActive
                  ? isBlocker
                    ? 'stroke-orange transition-all duration-300 motion-reduce:transition-none'
                    : 'stroke-green transition-all duration-300 motion-reduce:transition-none'
                  : 'stroke-line-graph transition-all duration-300 motion-reduce:transition-none'}
              />
            )
          })}
        </svg>

        {connectionNodes.map((node) => (
          <GraphNode
            key={node.id}
            node={node}
            active={node.id === selected.id}
            related={connectedIds.has(node.id)}
            detailId={detailId}
            onSelect={() => selectNode(node.id)}
          />
        ))}
      </div>

      <div className="relative mt-3 sm:hidden" aria-label="Context connected to the Atlas private-beta decision">
        <button
          type="button"
          aria-pressed={selected.id === 'commitment'}
          aria-controls={detailId}
          aria-describedby={selected.id === 'commitment' ? detailId : undefined}
          onClick={() => selectNode('commitment')}
          className={selected.id === 'commitment'
            ? 'min-h-14 w-full border-l-2 border-orange bg-sage/60 px-3 py-2.5 text-left'
            : 'min-h-14 w-full border-l-2 border-line px-3 py-2.5 text-left'}
        >
          <span className="block font-mono text-[10px] uppercase tracking-[0.06em] text-orange">Release decision</span>
          <span className="mt-1 block text-[11px] font-semibold text-ink">Can Atlas still ship Friday?</span>
        </button>

        <div className="relative ml-4 border-l border-line-graph py-1">
          {connectionNodes.filter((node) => !node.featured).map((node) => {
            const active = node.id === selected.id
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={active}
                aria-controls={detailId}
                aria-describedby={active ? detailId : undefined}
                onClick={() => selectNode(node.id)}
                className={active
                  ? 'relative flex min-h-14 w-full items-center border-b border-line-soft bg-sage/55 px-4 py-2 text-left'
                  : 'relative flex min-h-14 w-full items-center border-b border-line-soft px-4 py-2 text-left'}
              >
                <span className={node.relation === 'blocks'
                  ? 'absolute -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-white bg-orange'
                  : 'absolute -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-white bg-green'}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className={node.relation === 'blocks'
                    ? 'block font-mono text-[10px] uppercase tracking-[0.05em] text-orange'
                    : 'block font-mono text-[10px] uppercase tracking-[0.05em] text-green'}
                  >
                    {node.label}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold text-ink">{node.title}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div
        id={detailId}
        className="mt-2.5 grid gap-2 border-l-2 border-green bg-sage/60 px-3.5 py-3 sm:grid-cols-[140px_1fr] sm:items-start"
        aria-live="polite"
      >
        <div>
          <p className={selected.featured || selected.relation === 'blocks'
            ? 'font-mono text-[10px] uppercase tracking-[0.06em] text-orange'
            : 'font-mono text-[10px] uppercase tracking-[0.06em] text-green'}
          >
            {selected.relation ? relationLabels[selected.relation] : 'Connected decision'}
          </p>
          <p className="mt-1 text-[10px] font-semibold leading-tight text-ink sm:text-[11px]">{selected.title}</p>
        </div>
        <div>
          <p className="text-[10px] leading-[1.5] text-muted sm:text-[11px]">{selected.relationship}</p>
          {selectedMoment ? (
            <blockquote className="mt-2 border-l-2 border-yellow pl-2.5 text-[11px] italic leading-[1.45] text-ink">
              {selectedMoment.evidence}
            </blockquote>
          ) : null}
        </div>
      </div>
    </div>
  )
}
