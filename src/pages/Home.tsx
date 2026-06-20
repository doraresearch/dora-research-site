import Hero from '@/components/home/Hero'
import Roles from '@/components/home/Roles'
import Problem from '@/components/home/Problem'
import Capabilities from '@/components/home/Capabilities'
import HowItWorks from '@/components/home/HowItWorks'
import Trust from '@/components/home/Trust'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-24 bg-gradient-to-b from-dark to-white" />
      <Roles />
      <Problem />
      <Capabilities />
      <HowItWorks />
      <Trust />
    </>
  )
}
