import React from 'react'
import { AboutSections, ContactSection, HomeSections, SkillsSectio } from './HomeSections'

const Home: React.FC = () => {
  return (
    <main>
      <HomeSections />
      <AboutSections />
      <SkillsSectio />
      <ContactSection />
    </main>
  )
}

export default Home
