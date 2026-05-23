export default function ConceptCard({ title, text, index }) {
  return (
    <div className="flex flex-col gap-4 border border-line bg-surface p-8 transition-colors duration-150 hover:border-line-strong">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-deep-signal">Layer {String(index).padStart(2, '0')}</span>
      <h3 className="text-xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{text}</p>
    </div>
  )
}
