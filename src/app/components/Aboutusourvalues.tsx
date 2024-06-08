"use client"
import React, { useEffect } from 'react';
import Image from "next/image"
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



const YourComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        if (window.innerWidth > 1200) {
          element.classList.add('animate-in-view');
        } else {
          element.classList.remove('animate-in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='text-center lg:hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-[59px] gap-x-3 pt-7'>
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
  );
};

export default YourComponent;
