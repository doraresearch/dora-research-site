export default function ResearchCard({ title, text, index }) {
  return (
    <div className="group bg-paper border border-border p-8 flex flex-col gap-4 transition-colors duration-200 hover:bg-card">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ochre font-medium">
        {String(index).padStart(2, '0')} &nbsp;·&nbsp; {title.split(' ')[0]}
      </span>
      <h3 className="font-serif text-xl text-ink leading-tight">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{text}</p>
    </div>
  )
}
