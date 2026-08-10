import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import TrustStrip from '@/components/home/TrustStrip'
import WaitlistCTA from '@/components/home/WaitlistCTA'
import WorkdayTimeline from '@/components/home/WorkdayTimeline'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkdayTimeline />
      <HowItWorks />
      <TrustStrip />
      <WaitlistCTA />
    </>
  )
}
