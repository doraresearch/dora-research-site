export default function ComparisonBlock({ left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-12 border-t border-l border-border">
      <div className="bg-card p-8 md:p-10 border-r border-b border-border">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-muted mb-6">{left.title}</p>
        <p className="font-mono text-[13px] leading-loose tracking-wide text-body">
          {left.text}
        </p>
      </div>
      <div className="bg-card p-8 md:p-10 border-r border-b border-border relative">
        <span className="absolute top-0 left-0 w-full h-[2px] bg-ochre" aria-hidden="true" />
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ochre mb-6">{right.title}</p>
        <p className="font-mono text-[13px] leading-loose tracking-wide text-ink">
          {right.text}
        </p>
      </div>
    </div>
  )
}
