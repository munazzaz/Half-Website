import { Metadata } from 'next'

export const metadata:Metadata = {
  title:{
    absolute:"About CLM Homes | Real Estate Agents In Lancaster CA",
  }
}

import React from 'react'
import AboutUsTopSection from '../components/AboutUsTop.Section'
import OurValues from '../components/OurValues'
import OurTeam from '../components/OurTeam'
import Texteffectsection from '../components/Texteffectsection'
import OurTeamTextEffect from '../components/OurTeamTextEffect'
import ResponsiveOurTeam from '../components/ResponsiveOurTeam'


const AboutUs = () => {
  return (
    <div>
        {/* Top Section */}
        <AboutUsTopSection />
        {/* Our Values */}
        <OurValues />
        {/* Our Team */}
        <OurTeam />
        {/* Responsive Our Team */}
        <ResponsiveOurTeam />
        {/* Last Section */}
        <OurTeamTextEffect />
    </div>
  )
}

export default AboutUs