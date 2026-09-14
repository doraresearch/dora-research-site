import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import type { Register } from '@/components/layout/SiteLayout'

const BETA = 'mailto:hello@dorareason.com?subject=Zora%20private%20beta'

// The beta invitation. One line, one paragraph, one action. Same on both grounds.
export default function Beta({ register }: { register: Register }) {
  const night = register === 'night'
  return (
    <section id="beta" className={`border-t ${night ? 'border-nline' : 'border-rule'}`}>
      <Container className="py-16 md:py-24">
        <p className={`eyebrow ${night ? 'text-ash' : 'text-pencil'}`}>Private beta</p>
        <h2 className={`mt-4 max-w-[16em] ${night ? 'z-display' : 'section-title'}`}>Give Zora one night. Read the brief at 06:00.</h2>
        <p className={`mt-5 max-w-reading ${night ? 'text-[16px] leading-[26px]' : 'text-[17px] leading-7'}`}>
          The beta starts with one night. Connect Linear, GitHub, Datadog, PagerDuty, and Slack in the afternoon; the brief is on your desk at 06:00.
          Zora is working with a small number of CTOs, and we will tell you plainly if she is not ready for your setup.
        </p>
        <div className="mt-8">
          <Button href={BETA} tone={register}>
            Request private beta
          </Button>
          <p className={night ? 'mt-3 text-[13px] leading-[18px] text-ash' : 'mt-3 text-[14px] leading-5 text-pencil'}>
            Or write to{' '}
            <a href={BETA} className={night ? 'underline decoration-1 underline-offset-4 hover:text-npaper' : 'text-green underline decoration-1 underline-offset-4 hover:text-ink'}>
              hello@dorareason.com
            </a>{' '}
            with the subject “Zora private beta”.
          </p>
        </div>
      </Container>
    </section>
  )
}
