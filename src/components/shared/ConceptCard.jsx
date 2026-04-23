export default function ConceptCard({ title, text, index }) {
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
  return (
    <div className="bg-card border border-border p-8 flex flex-col gap-4 transition-colors duration-200 hover:border-border-strong">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ochre font-medium">§ {roman[index - 1] || index}</span>
      <h3 className="font-serif text-xl text-ink leading-tight">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{text}</p>
    </div>
  )
}
