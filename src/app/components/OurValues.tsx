import Image from 'next/image'
import React, { useState } from 'react';
import OurTeamParagraphs from './OurTeamParagraphs';
import Aboutusourvalues from './Aboutusourvalues';

const OurValuesData = [
    {
        image:"/images/ourvalues1.png",
        title:"Faithful",
        description:"We are steadfast and committed to our clients and business."
    },
    {
        image:"/images/ourvalues2.png",
        title:"Integrity",
        description:"We believe that our word is our bond and stand behind it to the fullest."
    },
    {
        image:"/images/ourvalues3.png",
        title:"Passion",
        description:"We care deeply about what we do, who we are, and the people we work with."
    },
    {
        image:"/images/ourvalues4.png",
        title:"Hard Work",
        description:"We are the best there is at what we do through good old fashion hard work."
    }
]

const OurValues = () => {


  return (
    <div className='  bg-[#F5F5F5] pb-[60px]'>
        <div className=' max-w-screen-89xl mx-auto'>
             <h1 className='text-[36px] text-center pt-[110px] font-[400] roboto'>Our <span className='font-bold'>Values</span></h1>
       <div className='flex justify-center items-center'>
        <p className='text-center text-[20px] font-[300] pt-[45px] text-black OurValues3:w-full OurValues6:w-[450px] OurValues7:w-[300px] w-[250px]'>Our core values are what makes us the best at what we do for others!</p>
       </div>


        {/* Real Map */}

      {/* <div className='block a1:hidden'>
      <div className='text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-[59px] gap-x-3 pt-7'>
      {OurValuesData.map((item, key) => (
        <div
          key={item.title}
          className={`flex flex-col justify-center items-center animate-on-scroll ${
            key === 0 ? 'mb-4' : ''
          }`}
        >
          <Image src={item.image} alt="Our-Values-Image" width={100} height={100} />
          <h2 className='font-bold text-[24px] mt-[30px]'>{item.title}</h2>
          <p className='font-[300] text-[16px] mt-[27px] md:w-[230px] w-full md:px-0 OurValues7:px-10 px-5'>{item.description}</p>
        </div>
      ))}
      </div>
      </div>
 */}




{/* This map got animation */}

 <div className='a1:block hidden'>
   <div className='text-center  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-[59px] gap-x-3 pt-7'>
  {OurValuesData.map((item, index) => (
    <div
      key={item.title}
      className={`flex flex-col justify-center items-center animate-on-scroll ${index === 0 ? 'mb-4' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }} // Adjust delay as needed
    >
      <Image src={item.image} alt="Our-Values-Image" width={100} height={100} />
      <h2 className='font-bold text-[24px] mt-[30px]'>{item.title}</h2>
      <p className='font-[300] text-[16px] mt-[27px] md:w-[230px] w-full md:px-0 OurValues7:px-10 px-5'>{item.description}</p>
    </div>
  ))}


</div>
 </div>

{/* Without Animation */}
<div className='a1:hidden block'>
<div className='text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-[59px] gap-x-3 pt-7'>
  {OurValuesData.map((item, index) => (
    <div
      key={item.title}
      className={`flex flex-col justify-center items-center `}
       // Adjust delay as needed
    >
      <Image src={item.image} alt="Our-Values-Image" width={100} height={100} />
      <h2 className='font-bold text-[24px] mt-[30px]'>{item.title}</h2>
      <p className='font-[300] text-[16px] mt-[27px] md:w-[230px] w-full md:px-0 OurValues7:px-10 px-5'>{item.description}</p>
    </div>
  ))}


</div>

</div>


           <div className='flex justify-center items-center text-center'>
            <hr className='bg-slate-400 border-0 OurValues6:w-[365px] Reviews19:w-[290px] w-[200px] h-[1px] mt-[42px]'/>
             </div> 








             <div className='a1:hidden block'>
             <div className='flex items-center justify-center '>
                <p className='text-[18px]  mb-4 mt-[50px] xl:w-[870px] OurValues1:w-[750px] OurValues2:w-[650px] OurValues4:w-[550px] OurValues5:w-[450px] OurValues7:w-[350px] w-[250px] font-[300]'>Since 2008, CLM Homes approaches Real Estate Investing differently - we keep the client’s best interest at the forefront and focus on each situation uniquely. Our mission is to make the selling process as quick, easy, accommodating, and enjoyable for as many homeowners as possible, by providing them with creative, innovative, and advantageous solutions for their house selling needs.</p>
              </div>
           
             <div className='flex justify-center items-center'>
             <p className='text-[18px]  text-left xl:w-[880px] OurValues1:w-[760px] OurValues2:w-[660px] OurValues4:w-[560px] OurValues5:w-[460px] OurValues7:w-[360px] w-[260px] font-[300]'>We believe as we help people get what they need in life, we will get what we need in life. Our primary goal is to help People, it’s our lifestyle!</p>
             </div>               
             </div>




<OurTeamParagraphs/>










    </div>

         
        
        
     
        </div>
  )
}

export default OurValues