// components
import { Hero, AboutUsSection, Features, Projects, OurPrinciples } from 'components'

export function Home () {
  return (
    <>
      <Hero fullScreen />
      <AboutUsSection />
      <Features />
      <Projects />
      <OurPrinciples />
    </>
  )
}