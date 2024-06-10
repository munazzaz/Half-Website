import { Metadata } from 'next'

export const metadata:Metadata = {
  title:{
    absolute:"How to sell your home in Lancaster CA | CLM Homes",
  }
}



import ResponsiveHowItWork from "@../../../src/app/components/ResponsiveHowItWork"
import HowItworksTopSection from '@/app/components/HowItworksTopSection'
import HowItworksSecondSection from '../components/HowItworksSecondSection'
import HowItWorksTextEffect from '../components/HowItWorksTextEffect'



export default function HowItWorks() {



 return (
 <div className='roboto'>
 
 <HowItworksTopSection />

<HowItworksSecondSection />

<div className='a3:hidden block'>
    <ResponsiveHowItWork />
</div>

  <HowItWorksTextEffect />
 
 
 
    </div>
 )
}



