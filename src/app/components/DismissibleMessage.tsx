"use client"



import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import Admin from "@../../../public/images/professional2.webp";
import LiveChatIcon from "@../../../public/images/LiveChatIcon.png";


const DismissibleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger pop-up effect when component mounts
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className='px-[5px] popplivechat3:px-[7px] OurTeam5:px-[10px] popplivechat2:px-[14px] popplivechat1:px-[17.5px] sm:px-8 '>
      <div className="flex justify-center fixed bottom-4 right-4 z-50 items-center popplivechat1:gap-x-5 popplivechat2:gap-x-3 gap-x-2">
        {isVisible && (
          <div className='bg-white OurTeam5:p-4 popplivechat3:p-3 p-2 shadow-lg rounded-lg flex items-start popplivechat3:gap-x-4 gap-x-2 border border-gray-200 animate-scale-in'>
            <button
              onClick={handleClose}
              className="bg-gray-500 text-white rounded-full p-1 absolute -top-0 -left-8 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
            <div>
              <Image src={Admin} alt="Admin" className="popplivechat:w-[47px] popplivechat1:w-[42px] OurTeam5:w-[39px] popplivechat3:w-[35px] w-[25px] popplivechat:h-[47px] popplivechat1:h-[42px] OurTeam5:h-[39px] popplivechat3:h-[35px] h-[25px] rounded-full" />
            </div>
            <div className="popplivechat:text-[17px] popplivechat1:text-[15px] popplivechat2:text-[13px]  OurTeam5:text-[12px] text-[10px] flex-1 popplivechat:w-[240px] popplivechat1:w-[200px] popplivechat2:w-[180px] OurTeam5:w-[160px] w-[140px] ">
              {/* Hi there, I'm [Name], a real person ready to assist you. What can I do for you today? */}
              Hi there 👋🏼 I’m Tony! No, I’m not a bot or AI, I am a real person. Lol how can I assist you or what questions or conerns do you have ? 😊
            </div>
          </div>
        )}
        {/* MessageCircle button always visible */}
        <div className="relative">
          <button className=''>
            {/* <MessageCircle className='popplivechat1:h-[70px] popplivechat2:h-[65px] OurTeam5:h-[55px] popplivechat3:h-[45px] h-[30px] bg-white popplivechat1:w-[70px] popplivechat2:w-[65px] OurTeam5:w-[55px] popplivechat3:w-[45px] w-[30px]'/> */}
            <Image src={LiveChatIcon} alt="live-chat" className='popplivechat1:h-[70px] popplivechat2:h-[65px] OurTeam5:h-[55px] popplivechat3:h-[45px] h-[30px] bg-white popplivechat1:w-[70px] popplivechat2:w-[65px] OurTeam5:w-[55px] popplivechat3:w-[45px] w-[30px]'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DismissibleMessage;








// import { useState } from 'react';
// import { MessageCircle, X } from 'lucide-react';
// import Image from 'next/image';
// import Admin from "@../../../public/images/professional2.webp";
// import ChatWidget from '../../../src/app/components/ChatWidget'; // Import the ChatWidget component

// const DismissibleMessage = () => {
//   const [isChatVisible, setIsChatVisible] = useState(false);

//   const handleChatToggle = () => {
//     setIsChatVisible(!isChatVisible);
//   };

//   return (
//     <div className='px-[5px] popplivechat3:px-[7px] OurTeam5:px-[10px] popplivechat2:px-[14px] popplivechat1:px-[17.5px] sm:px-8 '>
//       <div className="flex justify-center fixed bottom-4 right-4 z-50 items-center popplivechat1:gap-x-5 popplivechat2:gap-x-3 gap-x-2">
//         <div className="relative">
//           <button onClick={handleChatToggle}>
//             <MessageCircle className='popplivechat1:h-[70px] popplivechat2:h-[65px] OurTeam5:h-[55px] popplivechat3:h-[45px] h-[30px] bg-white popplivechat1:w-[70px] popplivechat2:w-[65px] OurTeam5:w-[55px] popplivechat3:w-[45px] w-[30px]' />
//           </button>
//         </div>
//       </div>

//       {/* ChatWidget will be conditionally rendered */}
//       {isChatVisible && <ChatWidget />}
//     </div>
//   );
// };

// export default DismissibleMessage;
