export default function Footer() {
  return (
    <footer className="border-t border-[#F8FAFC]/12 bg-[#111418] text-[#CBD5E1]">
      <div className="mx-auto max-w-[1280px] px-5 py-11 md:px-[clamp(20px,4vw,72px)]">
        <div className="flex flex-col justify-between gap-10 text-[13px] md:flex-row md:items-start">
          <div className="max-w-md">
            <strong className="mb-3 block text-lg text-[#F8FAFC]">DORA</strong>
            <span>Enterprise AI above the model layer.</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#how-it-works" className="hover:text-[#F8FAFC]">How it works</a>
            <a href="#primitives" className="hover:text-[#F8FAFC]">Primitives</a>
            <a href="#use-cases" className="hover:text-[#F8FAFC]">Use cases</a>
            <a href="#research" className="hover:text-[#F8FAFC]">Research</a>
            <a href="mailto:hello@dorareason.com" className="hover:text-[#F8FAFC]">Contact</a>
          </div>
        </div>
        <div className="mt-11 flex flex-col gap-3 border-t border-[#F8FAFC]/12 pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-[#CBD5E1] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DORA Research, Inc.</p>
          <p>Application / Orchestration / Harness</p>
        </div>
      </div>
    </footer>
  )
}
