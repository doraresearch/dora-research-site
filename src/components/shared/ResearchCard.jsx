export default function ResearchCard({ title, text, index }) {
  return (
    <div className="group bg-white border border-black/[0.07] rounded-2xl p-8 hover:border-black/[0.14] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-3">
      <span className="text-[10px] text-[#9CA3AF] font-mono">{String(index).padStart(2, '0')}</span>
      <h3 className="text-base font-semibold text-[#111111] tracking-tight group-hover:text-[#2563EB] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-[#6B7280] leading-relaxed">{text}</p>
    </div>
  )
}
