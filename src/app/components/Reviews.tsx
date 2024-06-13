"use client"
import React from 'react'
import Image from "next/image"
import SharpThing from "@/../public/images/sharpThing.png"
import LeftSharpThing from "@/../public/images/leftSharpThing.png"
import review1 from "@/../public/images/reviews1.png"
import review2 from "@/../public/images/reviews6.png"
import review3 from "@/../public/images/reviews9.png"
import review4 from "@/../public/images/review8.png"
import { useEffect, useRef } from 'react';

const Testimonials = [
    {
        image: review1,
        clientname: "D. Schilling",
        location: "Palmdale, CA",
        review: "Dealing with my divorce was hard enough. Having to deal with selling my house was just added insult to injury. Losing my wife and my house was overwhelming. I knew now without her income I was going to be unable to afford my mortgage. I thought my only option would be to walk away, since I owed way more than the house was worth. The team informed me that I did still have options. They were able to buy the house from me and save my credit and my sanity. It really took the pressure off. Thanks!"
    },
    {
        image: review2,
        clientname: "B. Allen",
        location: "Sylmar, CA",
        review: "I was scared to death of my foreclosure. The team came in, explained to me what was happening, helped me deal with my bank, and ended up buying my house for cash. They really took the pressure off of me and my family. Thanks guys!"
    },
    {
        image: review3,
        clientname: "K. Deagan",
        location: "Lancaster, CA",
        review: "After my parents passed away, we inherited the house that I grew up in. The house was not in good shape and needed a lot of work. We live out-of-state and just didn't have time to go fix it up and get it resold. The guys went to take a look, called me with a cash offer very quickly. We were able to accept it and get the house sold with no hassle at all. After they repaired the house they sent me before and after pictures for my scrapbook. You guys are very thoughtful and I would highly recommend."
    },
    {
        image: review4,
        clientname: "T. Diercks",
        location: "Valencia, CA",
        review: "Due to an unforeseen situation, I was unable to make my monthly mortgage payments and my house was placed into foreclosure. I was scared and did not know what to do. So I tried to sell my house. I worked with a buddy of mine who is an agent. He couldn't do anything to help me. So I met with Rid of House and they presented several different options to help me get out of the situation that I was in. The people there are so friendly and understanding of the situation we as homeowners are in. I was able to call anytime when I had a question and someone always helped me. Rid of House was able to negotiate a short sale with the bank and buy our house! I would highly recommend Rid of House"
    },
]

// const Reviews = () => {
//   // Extract the last testimonial

//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-popUp');
//             observerRef.current?.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.testimonial-card');
//     elements.forEach((element) => observerRef.current?.observe(element));

//     return () => {
//       observerRef.current?.disconnect();
//     };
//   }, []);

//   const lastTestimonial = Testimonials[Testimonials.length - 1];
//   const allExceptLast = Testimonials.slice(0, -1);

//   return (
//     <div className='bg-[#EEEEEE] py-[90px] roboto'>
//       <div className='flex justify-center items-center text-center'>
//       <h1 className='text-black  pb-[25px] a4:text-[30px] Whysell13:text-[25px] text-[23px] Whysell13:w-full a15:w-[380px] w-[330px] font-medium Reviews6:mb-7'>
//         Check Out Some of <span className='font-bold'>Our Reviews</span>
//       </h1>
//       </div>
//       {/* Testimonials card */}
//    {allExceptLast.map((items, index) => (
//         <div key={index} className='flex flex-col items-center bg-[#EEEEEE] Reviews5:mt-[58px] mt-[30px]'>
//           <div className={`flex items-center gap-x-5   Review2:px-0 Reviews3:px-8 Reviews6:px-6 px-4 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
   
// <div className={` ${index % 2 !== 0 ? "relative left-[11px] -top-[50px]  overflow-hidden rounded-full" : "relative Reviews6:-left-[12px] -left-[9px] Review2:-top-24 Reviews3:-top-28 Reviews9:-top-32 Reviews6:-top-36 Reviwes10:-top-20 Reviews11:px-4:-top-16 Reviews12:-top-20 Reviews14:-top-24 a13:-top-28 a15:-top-32 Reviews15:-top-36 -top-44 overflow-hidden rounded-full" }`}>
//   <div className="Reviews6:w-24 w-10 Reviews6:h-24 h-10 relative rounded-full overflow-hidden">
//     <Image
//       src={items.image}
//       alt="review images"
//       layout="fill"
//       objectFit="cover"
//       className='rounded-full'
//     />
//   </div>
// </div>



//             <div className='relative bg-white roboto Reviews7:py-[30px] py-[25px] Reviews7:px-[35px] px-[30px] Review2:w-[626px] Reviews3:w-[550px] Reviews4:w-[500px] Reviews5:w-[450px] Reviews6:w-[400px] w-full  Review2:h-[296.03] Reviews3:h-[250] Reviews4:h-[200] Reviews5:h-[150] h-[100] border rounded-xl'>
//               {index % 2 !== 0 ?
//                 <Image src={LeftSharpThing} alt="Left Sharp Thing" className="top-8 w-[38px] -right-[30px] absolute h-[55px]" />
//                 :
//                 <Image src={SharpThing} alt="Sharp Thing" className="top-8 w-[38px] -left-[29px] absolute h-[59px]" />
//               }
//               <div className='flex pt-[20px] items-center gap-x-2 roboto'>
//                 <h2 className='text-bold Reviews7:text-[16px]/[1.35] text-[12px]/[1.27] font-bold'>{items.clientname}</h2>
//                 <span className="font-semibold Reviews7:text-[16px] text-[12px] text-black">⭐⭐⭐⭐⭐</span>
//               </div>
//               <h3 className='Reviews6:text-[14px] text-[12px] text-[#666666]'>{items.location}</h3>
//               <p className='Reviews6:text-[15px]/[1.55] text-[12px]/[1.30] text-[300] pt-[8px] text-black'>"{items.review}"</p>
//             </div>
//           </div>
//         </div>
//       ))}










      
//       {/* Separate last review */}
//       <div className='flex mt-[58px] flex-col items-center bg-[#EEEEEE] Review2:px-0 Reviews3:px-8 Reviews6:px-6 px-4'>
//         <div className='flex gap-x-8  flex-row-reverse items-center '>
      


// <div className="Reviews6:w-24 w-10 Reviews6:h-24 h-10 relative  Review2:-top-24 Reviews3:-top-28 Reviews9:-top-32 Reviews6:-top-36 Reviwes10:-top-20 Reviews11:px-4:-top-16 Reviews12:-top-20 Reviews14:-top-32 a15:-top-36 Reviews16:-top-44 Reviews17:-top-52 Reviews18:-top-60 -top-72 overflow-hidden rounded-full mb-4 flex-shrink-0">
//       <Image
//         src={lastTestimonial.image}
//         alt="review images"
//         layout="fill"
//         objectFit="cover"
//         className='rounded-full'
//       />
//     </div>
//           <div className='flex items-center gap-x-5 flex-row-reverse '>
//             <div className='relative bg-white roboto Reviews6:py-[30px] py-[20px] Reviews8:px-[35px] px-[25px]  Review2:w-[626px] Reviews3:w-[550px] Reviews4:w-[500px] Reviews5:w-[450px] Reviews6:w-[400px] w-full Review2:h-[296.03] Reviews3:h-[250] Reviews4:h-[200] Reviews5:h-[150] h-[100] border rounded-xl'>
//               <Image src={LeftSharpThing} alt="Left Sharp Thing" className="top-8 w-[38px] -right-[30px] absolute h-[55px]" />
//               <div className='flex pt-[20px] items-center gap-x-2 roboto'>
//                 <h2 className='text-bold Reviews:text-[16px]/[1.35] text-[12px]  font-bold'>{lastTestimonial.clientname}</h2>
//                 <span className="font-semibold Reviews6:text-[16px] text-[12px]  text-black">⭐⭐⭐⭐⭐</span>
//               </div>
//               <h3 className='Reviews6:text-[14px] text-[12px] text-[#666666]'>{lastTestimonial.location}</h3>
//               <p className='Reviews6:text-[15px]/[1.55] text-[12px]/[1.35]  text-[300] pt-[8px] text-black'>"{lastTestimonial.review}"</p>
//             </div>
//           </div>
//         </div>
//       </div>
 







    

//     </div>
//   )
// }

// export default Reviews













const Reviews = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
      observerRef.current = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("animate-popUp");
                      observerRef.current?.unobserve(entry.target);
                  }
              });
          },
          { threshold: 0.1 }
      );

      const elements = document.querySelectorAll(".testimonial-card");
      elements.forEach((element) => observerRef.current?.observe(element));

      return () => {
          observerRef.current?.disconnect();
      };
  }, []);

  const lastTestimonial = Testimonials[Testimonials.length - 1];
  const allExceptLast = Testimonials.slice(0, -1);

  return (
      <div className='bg-[#EEEEEE] py-[90px] roboto'>
          <div className='flex justify-center items-center text-center'>
              <h1 className='text-black pb-[25px] a4:text-[30px] Whysell13:text-[25px] text-[23px] Whysell13:w-full a15:w-[380px] w-[330px] font-medium Reviews6:mb-7'>
                  Check Out Some of <span className='font-bold'>Our Reviews</span>
              </h1>
          </div>
          {allExceptLast.map((items, index) => (
              <div key={index} className='flex flex-col items-center bg-[#EEEEEE] Reviews5:mt-[58px] mt-[30px]'>
                  <div className={`flex items-center gap-x-5 Review2:px-0 Reviews3:px-8 Reviews6:px-6 px-4 ${index % 2 !== 0 ? 'flex-row-reverse' : ''} testimonial-card`}>
                      <div className={` ${index % 2 !== 0 ? "relative left-[11px] -top-[50px] overflow-hidden rounded-full" : "relative Reviews6:-left-[12px] -left-[9px] Review2:-top-24 Reviews3:-top-28 Reviews9:-top-32 Reviews6:-top-36 Reviwes10:-top-20 Reviews11:px-4:-top-16 Reviews12:-top-20 Reviews14:-top-24 a13:-top-28 a15:-top-32 Reviews15:-top-36 -top-44 overflow-hidden rounded-full"}`}>
                          <div className="Reviews6:w-24 w-10 Reviews6:h-24 h-10 relative rounded-full overflow-hidden">
                              <Image
                                  src={items.image}
                                  alt="review images"
                                  layout="fill"
                                  objectFit="cover"
                                  className='rounded-full'
                              />
                          </div>
                      </div>
                      <div className='relative bg-white roboto Reviews7:py-[30px] py-[25px] Reviews7:px-[35px] px-[30px] Review2:w-[626px] Reviews3:w-[550px] Reviews4:w-[500px] Reviews5:w-[450px] Reviews6:w-[400px] w-full Review2:h-[296.03] Reviews3:h-[250] Reviews4:h-[200] Reviews5:h-[150] h-[100] border rounded-xl'>
                          {index % 2 !== 0 ?
                              <Image src={LeftSharpThing} alt="Left Sharp Thing" className="top-8 w-[38px] -right-[30px] absolute h-[55px]" />
                              :
                              <Image src={SharpThing} alt="Sharp Thing" className="top-8 w-[38px] -left-[29px] absolute h-[59px]" />
                          }
                          <div className='flex pt-[20px] items-center gap-x-2 roboto'>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                              <h2 className='text-bold Reviews7:text-[16px]/[1.35] text-[12px]/[1.27] font-bold'>{items.clientname}</h2>
                              <span className="font-semibold Reviews7:text-[16px] text-[12px] text-black">⭐⭐⭐⭐⭐</span>
                          </div>
                          <h3 className='Reviews6:text-[14px] text-[12px] text-[#666666]'>{items.location}</h3>
                          <p className='Reviews6:text-[15px]/[1.55] text-[12px]/[1.30] text-[300] pt-[8px] text-black'>
                          {/* "{items.review}" */}
                          {`"${items.review}"`}

                          </p>
                      </div>
                  </div>
              </div>
          ))}
          <div className='flex mt-[58px] flex-col items-center bg-[#EEEEEE] Review2:px-0 Reviews3:px-8 Reviews6:px-6 px-4'>
              <div className='flex gap-x-8 flex-row-reverse items-center'>
                  <div className="Reviews6:w-24 w-10 Reviews6:h-24 h-10 relative Review2:-top-24 Reviews3:-top-28 Reviews9:-top-32 Reviews6:-top-36 Reviwes10:-top-20 Reviews11:px-4:-top-16 Reviews12:-top-20 Reviews14:-top-32 a15:-top-36 Reviews16:-top-44 Reviews17:-top-52 Reviews18:-top-60 -top-72 overflow-hidden rounded-full mb-4 flex-shrink-0">
                      <Image
                          src={lastTestimonial.image}
                          alt="review images"
                          layout="fill"
                          objectFit="cover"
                          className='rounded-full'
                      />
                  </div>
                  <div className='flex items-center gap-x-5 Review2:px-0 Reviews3:px-8 Reviews6:px-6 px-4 testimonial-card'>
                      <div className='relative bg-white roboto Reviews7:py-[30px] py-[25px] Reviews7:px-[35px] px-[30px] Review2:w-[626px] Reviews3:w-[550px] Reviews4:w-[500px] Reviews5:w-[450px] Reviews6:w-[400px] w-full Review2:h-[296.03] Reviews3:h-[250] Reviews4:h-[200] Reviews5:h-[150] h-[100] border rounded-xl testimonial-card'>
                          <Image src={LeftSharpThing} alt="Left Sharp Thing" className="top-8 w-[38px] -right-[30px] absolute h-[55px]" />
                          <div className='flex pt-[20px] items-center gap-x-2 roboto'>
                              <h2 className='text-bold Reviews7:text-[16px]/[1.35] text-[12px] font-bold'>{lastTestimonial.clientname}</h2>
                              <span className="font-semibold Reviews6:text-[16px] text-[12px] text-black">⭐⭐⭐⭐⭐</span>
                          </div>
                          <h3 className='Reviews6:text-[14px] text-[12px] text-[#666666]'>{lastTestimonial.location}</h3>
                          <p className='Reviews6:text-[15px]/[1.55] text-[12px]/[1.35] text-[300] pt-[8px] text-black'>
                          
                          {/* "{lastTestimonial.review}" */}
                          {`"${lastTestimonial.review}"`}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Reviews;