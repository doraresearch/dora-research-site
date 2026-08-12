import ProductFilm from './product/ProductFilm'

export default function ProductFilmSection() {
  return (
    <section id="workday" className="min-h-[710px] bg-section-band px-6 pb-[26px] pt-11 lg:min-h-[1080px] lg:px-8 lg:pb-[100px] lg:pt-[72px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
          One workday with Zora · 00:52
        </p>
        <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[42px] tracking-[-0.025em] text-ink lg:mt-6 lg:text-[46px] lg:leading-[50px] lg:tracking-[-0.03em] xl:text-[52px] xl:leading-[56px] xl:tracking-[-0.035em]">
          Can Atlas still ship Friday?
        </h2>
        <p className="mt-5 max-w-[720px] text-[16px] leading-[26px] text-secondary lg:mt-3 lg:text-[18px] lg:leading-7 xl:text-[20px] xl:leading-[30px] xl:tracking-[-0.01em]">
          <span className="lg:hidden">Scope, dependency, risk, and decision—kept in context.</span>
          <span className="hidden lg:inline">
            Follow scope, dependency, risk, and decision as Zora keeps the context intact.
          </span>
        </p>
        <div className="mt-5 lg:mt-[70px]">
          <ProductFilm />
        </div>
      </div>
    </section>
  )
}
