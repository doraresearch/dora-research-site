export default function ResearchCard({ title, text, index }) {
  return (
    <div className="group flex flex-col gap-4 border border-line bg-base p-8 transition-colors duration-150 hover:bg-surface">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-deep-signal">
        {String(index).padStart(2, '0')} &nbsp;·&nbsp; {title.split(' ')[0]}
      </span>
      <h3 className="text-xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{text}</p>
    </div>
  )
}
