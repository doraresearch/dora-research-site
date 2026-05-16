export default function Footer() {
  return (
    <footer className="border-t border-[#101310]/12 bg-[#101310] text-[#F7F4ED]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.12em]">DORA Research</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F7F4ED]/70">
              DORA builds enterprise AI above the model layer.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-[#F7F4ED]/70 md:text-right">
            <a href="#how-it-works" className="hover:text-[#F7F4ED]">How it works</a>
            <a href="#primitives" className="hover:text-[#F7F4ED]">Primitives</a>
            <a href="#use-cases" className="hover:text-[#F7F4ED]">Use cases</a>
            <a href="#research" className="hover:text-[#F7F4ED]">Research</a>
            <a href="mailto:hello@dorareason.com" className="hover:text-[#F7F4ED]">Contact</a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[#F7F4ED]/12 pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F7F4ED]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DORA Research, Inc.</p>
          <p>Application · Orchestration · Harness</p>
        </div>
      </div>
    </footer>
  )
}
