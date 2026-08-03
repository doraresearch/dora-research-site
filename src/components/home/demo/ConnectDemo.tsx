import { useId, useState } from 'react'
import { connectionEdges, connectionNodes } from './data'
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
        ? 'absolute z-10 min-h-14 rounded-[11px] border border-green bg-white p-2.5 text-left shadow-[0_10px_24px_rgba(23,37,31,.13)] transition-all duration-300 motion-reduce:transition-none'
        : related
          ? 'absolute z-10 min-h-14 rounded-[11px] border border-green/40 bg-white p-2.5 text-left shadow-[0_6px_18px_rgba(23,37,31,.08)] transition-all duration-300 hover:border-green motion-reduce:transition-none'
          : 'absolute z-10 min-h-14 rounded-[11px] border border-line bg-white/95 p-2.5 text-left opacity-70 shadow-[0_4px_12px_rgba(23,37,31,.06)] transition-all duration-300 hover:opacity-100 motion-reduce:transition-none'}
    >
      <span className={node.featured || node.relation === 'blocks'
        ? 'block truncate font-mono text-[7px] uppercase tracking-[0.08em] text-orange sm:text-[8px]'
        : 'block truncate font-mono text-[7px] uppercase tracking-[0.08em] text-green sm:text-[8px]'}
      >
        {node.label}
      </span>
      <span className="mt-1 block truncate text-[9px] font-semibold leading-tight text-ink sm:text-[10px]">
        {node.title}
      </span>
      <span className="mt-1 block truncate font-mono text-[7px] text-muted sm:text-[8px]">{node.meta}</span>
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
  const patternId = `workday-dots-${instanceId}`
  const detailId = `connection-detail-${instanceId}`
  const selected = connectionNodes.find((node) => node.id === selectedId) ?? connectionNodes[0]
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
    <div className={compact ? 'bg-[#fbfcf9] p-3 sm:p-4' : 'bg-[#fbfcf9] p-4 sm:p-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">
            11:20 context
          </p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
            Audit-log change connected to Friday’s beta
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-orange/30 bg-white px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-orange sm:text-[9px]">
          1 priority change
        </span>
      </div>

      <div className={compact
        ? 'relative mt-3 hidden h-[284px] overflow-hidden rounded-[14px] border border-line-soft bg-white sm:block'
        : 'relative mt-4 hidden h-[310px] overflow-hidden rounded-[14px] border border-line-soft bg-white sm:block'}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 640 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern id={patternId} width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#D8DFD2" opacity=".65" />
            </pattern>
          </defs>
          <rect width="640" height="300" fill={`url(#${patternId})`} />
          <circle cx="320" cy="151" r="62" fill="#E4EADF" opacity=".48" />
          {connectionEdges.map((edge) => {
            const isActive = edge.from === selected.id || edge.to === selected.id
            const isBlocker = edge.relation === 'blocks'
            return (
              <path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                fill="none"
                stroke={isActive ? (isBlocker ? '#D46A3A' : '#3D8B68') : (isBlocker ? '#DFA184' : '#C9D2C2')}
                strokeWidth={isActive ? 2.25 : 1.2}
                strokeDasharray={isActive ? undefined : '4 5'}
                opacity={isActive ? 0.95 : 0.58}
                className="transition-all duration-300 motion-reduce:transition-none"
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
          <span className="block font-mono text-[7px] uppercase tracking-[0.08em] text-orange">Release decision</span>
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
                    ? 'block font-mono text-[7px] uppercase tracking-[0.07em] text-orange'
                    : 'block font-mono text-[7px] uppercase tracking-[0.07em] text-green'}
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
        className="mt-3 grid gap-2 border-l-2 border-green bg-sage/60 px-3.5 py-3 sm:grid-cols-[140px_1fr] sm:items-start"
        aria-live="polite"
      >
        <div>
          <p className={selected.featured || selected.relation === 'blocks'
            ? 'font-mono text-[8px] uppercase tracking-[0.08em] text-orange'
            : 'font-mono text-[8px] uppercase tracking-[0.08em] text-green'}
          >
            {selected.relation ? relationLabels[selected.relation] : 'Connected decision'}
          </p>
          <p className="mt-1 text-[10px] font-semibold leading-tight text-ink sm:text-[11px]">{selected.title}</p>
        </div>
        <p className="text-[10px] leading-[1.5] text-muted sm:text-[11px]">
          {selected.relationship}
        </p>
      </div>
    </div>
  )
}
