import { Metadata } from 'next'

export const metadata:Metadata = {
  title:{
    absolute:"CLM Homes Review | Sell your House in Lancaster",
  }
}

import React from 'react'
import TestimonialHerosection from '../components/TestimonialHerosection'
import Reviews from "@../../../src/app/components/Reviews"
import Texteffectsection from '../components/Texteffectsection'
import ReviewTextEffect from '../components/ReviewTextEffect'


const Testimonials = () => {
  return (
    <div>
    {/* Hero section */}
    <TestimonialHerosection/>
    {/* Reviews */}
    <Reviews />
    {/* Last section */}
    <ReviewTextEffect />
    </div>
  )
}

export default Testimonials