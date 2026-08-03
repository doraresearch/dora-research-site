import { useId, useState } from 'react'
import { connectionEdges, connectionNodes } from './data'

function GraphNode({
  node,
  active,
  related,
  detailId,
  onSelect,
}: {
  node: (typeof connectionNodes)[number]
  active: boolean
  related: boolean
  detailId: string
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-describedby={detailId}
      onClick={onSelect}
      style={{ left: `${node.x}%`, top: `${node.y}%`, width: `${node.width}%` }}
      className={active
        ? 'absolute z-10 rounded-[11px] border border-green bg-white p-2.5 text-left shadow-[0_10px_24px_rgba(23,37,31,.13)] transition-all duration-300 motion-reduce:transition-none'
        : related
          ? 'absolute z-10 rounded-[11px] border border-green/40 bg-white p-2.5 text-left shadow-[0_6px_18px_rgba(23,37,31,.08)] transition-all duration-300 hover:border-green motion-reduce:transition-none'
          : 'absolute z-10 rounded-[11px] border border-line bg-white/95 p-2.5 text-left opacity-70 shadow-[0_4px_12px_rgba(23,37,31,.06)] transition-all duration-300 hover:opacity-100 motion-reduce:transition-none'}
    >
      <span className={node.featured
        ? 'block truncate font-mono text-[7px] uppercase tracking-[0.08em] text-orange sm:text-[8px]'
        : 'block truncate font-mono text-[7px] uppercase tracking-[0.08em] text-green sm:text-[8px]'}>
        {node.label}
      </span>
      <span className="mt-1 block truncate text-[10px] font-semibold leading-tight text-ink sm:text-[11px]">
        {node.title}
      </span>
      <span className="mt-1 block truncate font-mono text-[7px] text-muted sm:text-[8px]">{node.meta}</span>
    </button>
  )
}

export default function ConnectDemo({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState('decision')
  const instanceId = useId().replace(/:/g, '')
  const patternId = `memory-dots-${instanceId}`
  const detailId = `connection-detail-${instanceId}`
  const selected = connectionNodes.find((node) => node.id === selectedId) ?? connectionNodes[0]
  const connectedIds = new Set(
    connectionEdges.flatMap((edge) => {
      if (edge.from === selected.id) return [edge.to]
      if (edge.to === selected.id) return [edge.from]
      return []
    }),
  )

  return (
    <div className={compact ? 'bg-[#fbfcf9] p-3 sm:p-4' : 'bg-[#fbfcf9] p-4 sm:p-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">
            Connected context
          </p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
            Select a memory to trace why it belongs
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-green sm:text-[9px]">
          5 memories
        </span>
      </div>

      <div className={compact ? 'relative mt-3 hidden h-[270px] overflow-hidden rounded-[14px] border border-line-soft bg-white sm:block' : 'relative mt-4 hidden h-[300px] overflow-hidden rounded-[14px] border border-line-soft bg-white sm:block'}>
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
          <circle cx="320" cy="151" r="64" fill="#E4EADF" opacity=".48" />
          {connectionEdges.map((edge) => {
            const isActive = edge.from === selected.id || edge.to === selected.id
            return (
              <path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                fill="none"
                stroke={isActive ? '#3D8B68' : '#C9D2C2'}
                strokeWidth={isActive ? 2.25 : 1.2}
                strokeDasharray={isActive ? undefined : '4 5'}
                opacity={isActive ? 0.95 : 0.55}
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
            onSelect={() => setSelectedId(node.id)}
          />
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden" aria-label="Connected memories">
        {connectionNodes.map((node) => {
          const active = node.id === selected.id
          return (
            <button
              key={node.id}
              type="button"
              aria-pressed={active}
              aria-describedby={detailId}
              onClick={() => setSelectedId(node.id)}
              className={active
                ? 'rounded-[11px] border border-green bg-sage/60 p-2.5 text-left shadow-[inset_3px_0_0_#3D8B68]'
                : 'rounded-[11px] border border-line bg-white p-2.5 text-left'}
            >
              <span className={node.featured
                ? 'block truncate font-mono text-[7px] uppercase tracking-[0.07em] text-orange'
                : 'block truncate font-mono text-[7px] uppercase tracking-[0.07em] text-green'}>
                {node.label}
              </span>
              <span className="mt-1 block truncate text-[10px] font-semibold text-ink">{node.title}</span>
            </button>
          )
        })}
      </div>

      <div
        id={detailId}
        className="mt-3 grid gap-2 rounded-[12px] border border-line bg-sage/60 px-3.5 py-3 sm:grid-cols-[130px_1fr] sm:items-start"
        aria-live="polite"
      >
        <div>
          <p className={selected.featured
            ? 'font-mono text-[8px] uppercase tracking-[0.08em] text-orange'
            : 'font-mono text-[8px] uppercase tracking-[0.08em] text-green'}>
            {selected.label}
          </p>
          <p className="mt-1 text-[11px] font-semibold text-ink">{selected.title}</p>
        </div>
        <p className="text-[10px] leading-[1.5] text-muted sm:text-[11px]">
          {selected.relationship}
        </p>
      </div>
    </div>
  )
}
