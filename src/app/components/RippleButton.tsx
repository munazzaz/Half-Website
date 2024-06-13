"use client"
// components/RippleButton.tsx

// src/app/components/RippleButton.tsx
// import React, { useEffect, useRef } from 'react';
// import clsx from 'clsx';

// interface RippleButtonProps {
//   children: React.ReactNode;
// }

// const RippleButton: React.FC<RippleButtonProps> = ({ children }) => {
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const button = buttonRef.current;

//     if (!button) return;

//     const createRipple = () => {
//       const ripple = document.createElement('span');
//       ripple.classList.add('ripple');
//       ripple.style.width = ripple.style.height = `${Math.max(button.clientWidth, button.clientHeight)}px`;
//       button.appendChild(ripple);

//       setTimeout(() => {
//         ripple.remove();
//       }, 1000); // Remove ripple after animation duration
//     };

//     const intervalId = setInterval(createRipple, 4000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <button
//       ref={buttonRef}
//       className='relative overflow-hidden text-[12px] a5:text-[15px] a5:w-[240px] w-[170px] a5:py-5 py-4 a6:mr-[152px] a7:mr-[12px] text-white bg-[#FC3C3C] font-bold rounded-full'
//     >
//       {children}
//     </button>
//   );
// };

// export default RippleButton;















// src/app/components/RippleButton.tsx
import React, { useEffect, useRef } from 'react';

const RippleButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const createRipple = () => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.width = ripple.style.height = `${Math.max(button.clientWidth, button.clientHeight)}px`;
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000); // Remove ripple after animation duration
    };

    const intervalId = setInterval(createRipple, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className='relative overflow-hidden text-[12px] a5:text-[15px] a5:w-[240px] w-[170px] a5:py-5 py-4 a6:mr-[152px] a7:mr-[12px] text-white bg-[#FC3C3C] font-bold rounded-full'
    >
      Get Your Cash Offer
    </button>
  );
};

export default RippleButton;
