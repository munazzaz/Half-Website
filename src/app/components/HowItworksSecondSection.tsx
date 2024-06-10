"use client"
import React, { useEffect } from 'react'
import Image from "next/image"

import Logo from "@../../../public/images/clmhomes.png"
import Icon1 from "@../../../public/images/icon1.png"
import Icon2 from "@../../../public/images/icon2.png"
import Icon3 from "@../../../public/images/icon3.png"
import Arrow1 from "@../../../public/images/arrow1.png"
import Arrow2 from "@../../../public/images/arrow1.png"

const HowItworksSecondSection = () => {
    useEffect(() => {
        const textElements = document.querySelectorAll('.animate-text');
        const imageElements = document.querySelectorAll('.animate-image');
    
        textElements.forEach((element) => {
          (element as HTMLElement).style.animation = `slideInFromLeft 0.5s forwards`;
          (element as HTMLElement).style.animationDelay = `0.3s`;
        });
    
        imageElements.forEach((element) => {
          (element as HTMLElement).style.animation = `slideInFromLeft 0.5s forwards`;
          (element as HTMLElement).style.animationDelay = `0.8s`; // Reduced delay for images
        });
      }, []);
    
    
  return (
    <div className='roboto'>
<div className='animate-text' style={{ opacity: 0 }}>
        <div className='flex justify-center items-center gap-x-2 mt-[32px] a12:px-0 px-4'>
          <h2 className="text-[#171717] a4:text-[30px] a12:text-[25px] a14:text-[20px] text-[18px] mt-5 font-medium items-center">How It Works at</h2>
          <Image src={Logo} alt="clm homes" className='a12:w-[200px] a14:w-[150px] w-[100px] a12:mt-0 a14:mt-2 mt-3' />
        </div>
        <h2 className='text-[#201F1E] flex justify-center items-center a14:text-[18px] text-[15px]'>Easy, Quick, 3 step process</h2>
      </div>

      <div className='mt-10 max-w-screen-2xl mx-auto a2:px-[12px] a3:block hidden'>
        <div className="flex a3:flex-row flex-col justify-center">
          <div className='animate-text' style={{ opacity: 0 }}>
            <div className='flex items-center'>
              <Image src={Icon1} alt="number-icon" className='w-[59px] h-[59px] mt-[3px]' />
              <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Submit The Form</h2>
            </div>
            <p className='a2:text-[18px] text-[16px] pl-[60px] a1:w-[300px] a2:w-[250px] w-[200px] mt-0'>
              Answer a few questions to help us come up with a preliminary offer for your home.
            </p>
          </div>

          <div className='animate-image' style={{ opacity: 0 }}>
            <Image src={Arrow1} alt="image" className='mt-4 h-[140px]' />
          </div>

          <div className='animate-text' style={{ opacity: 0 }}>
            <div className='flex items-center'>
              <Image src={Icon2} alt="number-icon" className='w-[59px] h-[59px] mt-1' />
              <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Show Your Home</h2>
            </div>
            <p className='a2:text-[18px] text-[16px] pl-[60px] w-[290px]'>
              Invite us for a showing to give us a better idea of your home, so that we can give you a more accurate offer.
            </p>
          </div>

          <div className='animate-image' style={{ opacity: 0 }}>
            <Image src={Arrow2} alt="image" className='mt-4 h-[140px]' />
          </div>

          <div className='animate-text' style={{ opacity: 0 }}>
            <div className='flex items-center'>
              <Image src={Icon3} alt="number-icon" className='w-[59px] h-[59px] mt-1' />
              <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Collect Your Money</h2>
            </div>
            <p className='a2:text-[18px] text-[16px] pl-[60px] a1:w-[350px] a2:w-[290px] w-[270px]'>
              Once you have accepted the offer, and the transaction is closed with a title company, you will receive the funds! If you need money ASAP? Learn more about <span className='font-bold'>Cash before Closing!</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HowItworksSecondSection