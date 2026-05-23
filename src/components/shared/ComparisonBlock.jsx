export default function ComparisonBlock({ left, right }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-0 border-l border-t border-line md:grid-cols-2">
      <div className="border-b border-r border-line bg-surface p-8 md:p-10">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{left.title}</p>
        <p className="font-mono text-[13px] leading-loose tracking-wide text-body">
          {left.text}
        </p>
      </div>
      <div className="relative border-b border-r border-line bg-surface p-8 md:p-10">
        <span className="absolute left-0 top-0 h-[2px] w-full bg-signal" aria-hidden="true" />
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-deep-signal">{right.title}</p>
        <p className="font-mono text-[13px] leading-loose tracking-wide text-ink">
          {right.text}
        </p>
      </div>
    </div>
  )
}
