"use client"
// import React, { useEffect } from 'react';

// const YourComponent = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined" && window.innerWidth > 1200) {
//       const observerOptions = {
//         threshold: 0.1,
//       };

//       const observerCallback = (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//           }
//         });
//       };

//       const observer = new IntersectionObserver(observerCallback, observerOptions);

//       const targets = document.querySelectorAll('.pop-up');
//       targets.forEach((target) => observer.observe(target));

//       return () => {
//         targets.forEach((target) => observer.unobserve(target));
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <div className='flex items-center justify-center'>
//         <p className='text-[18px] mb-4 mt-[50px] xl:w-[870px] OurValues1:w-[750px] OurValues2:w-[650px] OurValues4:w-[550px] OurValues5:w-[450px] OurValues7:w-[350px] w-[250px] font-[300] pop-up'>
//           Since 2008, CLM Homes approaches Real Estate Investing differently - we keep the client’s best interest at the forefront and focus on each situation uniquely. Our mission is to make the selling process as quick, easy, accommodating, and enjoyable for as many homeowners as possible, by providing them with creative, innovative, and advantageous solutions for their house selling needs.
//         </p>
//       </div>

//       <div className='flex justify-center items-center'>
//         <p className='text-[18px] text-left xl:w-[880px] OurValues1:w-[760px] OurValues2:w-[660px] OurValues4:w-[560px] OurValues5:w-[460px] OurValues7:w-[360px] w-[260px] font-[300] pop-up'>
//           We believe as we help people get what they need in life, we will get what we need in life. Our primary goal is to help People, it’s our lifestyle!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;




import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    const observerCallback = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting && window.innerWidth > 1200) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    const targets = document.querySelectorAll('.pop-up');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div className='a1:block hidden'>
      <div className='flex items-center justify-center'>
        <p className='text-[18px] mb-4 mt-[50px] xl:w-[870px] OurValues1:w-[750px] OurValues2:w-[650px] OurValues4:w-[550px] OurValues5:w-[450px] OurValues7:w-[350px] w-[250px] font-[300] pop-up'>
          Since 2008, CLM Homes approaches Real Estate Investing differently - we keep the client’s best interest at the forefront and focus on each situation uniquely. Our mission is to make the selling process as quick, easy, accommodating, and enjoyable for as many homeowners as possible, by providing them with creative, innovative, and advantageous solutions for their house selling needs.
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <p className='text-[18px] text-left xl:w-[880px] OurValues1:w-[760px] OurValues2:w-[660px] OurValues4:w-[560px] OurValues5:w-[460px] OurValues7:w-[360px] w-[260px] font-[300] pop-up'>
          We believe as we help people get what they need in life, we will get what we need in life. Our primary goal is to help People, it’s our lifestyle!
        </p>
      </div>
    </div>
  );
};

export default YourComponent;
