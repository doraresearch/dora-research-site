export default function ComparisonBlock({ left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
      <div className="bg-white border border-black/[0.08] rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]" />
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest">{left.title}</p>
        </div>
        <p className="text-sm text-[#374151] font-mono leading-loose tracking-wide bg-[#F9FAFB] rounded-lg px-4 py-3 border border-black/[0.05]">
          {left.text}
        </p>
      </div>
      <div className="bg-white border border-[#2563EB]/20 rounded-2xl p-8 md:p-10 ring-1 ring-[#2563EB]/10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest">{right.title}</p>
        </div>
        <p className="text-sm text-[#111111] font-mono leading-loose tracking-wide bg-[#EFF6FF] rounded-lg px-4 py-3 border border-[#2563EB]/10">
          {right.text}
        </p>
      </div>
    </div>
  )
}
