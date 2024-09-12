import React from 'react'
import AboutHero from './AboutHero'
import AboutBody from './AboutBody'
import AboutExp from './AboutExp'
import AboutAccordion from './AboutAccordion'
import AboutBranded from './AboutBranded'
import AboutStroy from './AboutStroy'
import AboutCreations from './AboutCreations'
import AboutQuickConnect from './AboutQuickConnect'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutBody/>
      <AboutAccordion/>
      <AboutExp/>
      <AboutBranded/>
      <AboutStroy/>
      
      <AboutQuickConnect/>
      <AboutCreations/>
    </div>
  )
}

export default About
