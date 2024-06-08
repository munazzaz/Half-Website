import React from 'react'
import Image from "next/image"
import OurReviews from "@../../../public/images/testimonials.jpg"


const TestimonialHerosection = () => {
  return (
    <div className='roboto'>
      <div className='relative w-full h-[325px]'>
    <Image src={OurReviews} alt="Our Reviews" className='w-full h-full object-cover'/>
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <h1 className='font-bold text-center Reviews14:text-[48px] text-[40px] text-white'>Our Reviews</h1>
    </div>
</div>

    </div>

  )
}

export default TestimonialHerosection