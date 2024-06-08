"use client"
import Image from 'next/image'
import Logo from "@../../../public/images/clmhomes.png"
import Icon1 from "@../../../public/images/icon1.png"
import Icon2 from "@../../../public/images/icon2.png"
import Icon3 from "@../../../public/images/icon3.png"
import Arrow1 from "@../../../public/images/arrow1.png"
import Arrow2 from "@../../../public/images/arrow1.png"
import TypeWriterComponent from "typewriter-effect"
import DownArrow from "@../../../public/images/dowarrow.png"
import Link from 'next/link'
import ResponsiveHowItWork from '../components/ResponsiveHowItWork'
import { useState, useEffect } from 'react';



export default function HowItWorks() {


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
 <div className="relative h-[39vh] bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://static.tildacdn.net/lib/unsplash/d43bc2fb-7a1a-dceb-040b-c2cdeae42197/photo.jpg")' }}>
 <div className="absolute inset-0 bg-black opacity-20"></div>
 <div className="relative z-10 flex items-center justify-center h-full text-white">
 <h1 className="a8:text-5xl text-4xl font-bold roboto">How it Works</h1>
 </div>
 </div>

{/* <div className=''>
    <div className='flex justify-center items-center gap-x-2 mt-[32px] a12:px-0 px-4'>
    <h2 className="text-[#171717] a4:text-[30px] a12:text-[25px] a14:text-[20px] text-[18px] mt-5 font-medium items-center">How It Works at</h2>
    <Image src={Logo} alt="clm homes" className='a12:w-[200px] a14:w-[150px] w-[100px] a12:mt-0 a14:mt-2 mt-3'/> 
</div>
<h2 className='text-[#201F1E] flex justify-center items-center a14:text-[18px] text-[15px]'>Easy, Quick, 3 step process</h2>
</div>


    <div className=' mt-10  max-w-screen-2xl mx-auto a2:px-[12px] a3:block hidden '>
    <div className="flex a3:flex-row flex-col justify-center ">

    <div className=''>
    <div className='flex items-center  '>
    <Image src={Icon1} alt="number-icon" className='w-[59px] h-[59px] mt-[3px]'/>
    <h2 className='font-bold a2:text-[18px] text-[16px]  italic '>Submit The Form</h2>
    </div>
    <p className='a2:text-[18px] text-[16px] pl-[60px] a1:w-[300px] a2:w-[250px] w-[200px] mt-0 '>Answer a few questions to help us come up with a preliminary offer for your home.</p>
    </div>
    
     <div>
     <Image src={Arrow1} alt="image" className=' mt-4 h-[140px]'/>

     </div>

    <div>
    <div className='flex items-center'>
    <Image src={Icon2} alt="number-icon" className='w-[59px] h-[59px]mt-1 '/>
    <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Show Your Home</h2>
    </div>
    <p className='a2:text-[18px] text-[16px] pl-[60px] w-[290px] '>Invite us for a showing to give us a better idea of your home, so that we can give you a more accurate offer.</p>
    </div>


   <div className=''>
   <Image src={Arrow2} alt="image" className='mt-4 h-[140px]'/>
   
   </div> 
    
    <div>
    <div className='flex items-center ]'>
    <Image src={Icon3} alt="number-icon" className=' w-[59px] h-[59px] mt-1'/>
    <h2 className='font-bold a2:text-[18px] text-[16px]  italic'>Collect Your Money</h2>
    </div>
    <p className='a2:text-[18px] text-[16px]  pl-[60px]  a1:w-[350px] a2:w-[290px] w-[270px]'>Once you have accepted the offer, and the transaction is closed with a 
    title company, you will receive the funds! If you need money ASAP? Learn more about <span className='font-bold'> Cash before Closing!</span></p>
    </div>
    
    </div>
    </div> */}


{/* <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                <div className='flex justify-center items-center gap-x-2 mt-[32px] a12:px-0 px-4'>
                    <h2 className="text-[#171717] a4:text-[30px] a12:text-[25px] a14:text-[20px] text-[18px] mt-5 font-medium items-center">How It Works at</h2>
                    <Image src={Logo} alt="clm homes" className='a12:w-[200px] a14:w-[150px] w-[100px] a12:mt-0 a14:mt-2 mt-3'/> 
                </div>
                <h2 className='text-[#201F1E] flex justify-center items-center a14:text-[18px] text-[15px]'>Easy, Quick, 3 step process</h2>
            </div>

            <div className='mt-10 max-w-screen-2xl mx-auto a2:px-[12px] a3:block hidden'>
                <div className="flex a3:flex-row flex-col justify-center ">
                    <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                        <div className='flex items-center'>
                            <Image src={Icon1} alt="number-icon" className='w-[59px] h-[59px] mt-[3px]'/>
                            <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Submit The Form</h2>
                        </div>
                        <p className='a2:text-[18px] text-[16px] pl-[60px] a1:w-[300px] a2:w-[250px] w-[200px] mt-0'>Answer a few questions to help us come up with a preliminary offer for your home.</p>
                    </div>

                    <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                        <Image src={Arrow1} alt="image" className='mt-4 h-[140px]'/>
                    </div>

                    <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                        <div className='flex items-center'>
                            <Image src={Icon2} alt="number-icon" className='w-[59px] h-[59px]mt-1'/>
                            <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Show Your Home</h2>
                        </div>
                        <p className='a2:text-[18px] text-[16px] pl-[60px] w-[290px]'>Invite us for a showing to give us a better idea of your home, so that we can give you a more accurate offer.</p>
                    </div>

                    <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                        <Image src={Arrow2} alt="image" className='mt-4 h-[140px]'/>
                    </div>

                    <div className={`transition-transform duration-500 transform ${animate ? 'animate-left' : ''}`}>
                        <div className='flex items-center'>
                            <Image src={Icon3} alt="number-icon" className=' w-[59px] h-[59px] mt-1'/>
                            <h2 className='font-bold a2:text-[18px] text-[16px] italic'>Collect Your Money</h2>
                        </div>
                        <p className='a2:text-[18px] text-[16px] pl-[60px] a1:w-[350px] a2:w-[290px] w-[270px]'>Once you have accepted the offer, and the transaction is closed with a title company, you will receive the funds! If you need money ASAP? Learn more about <span className='font-bold'> Cash before Closing!</span></p>
                    </div>
                </div>
            </div> */}

 
    






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

<div className='a3:hidden block'>
    <ResponsiveHowItWork />
</div>

    <div className="relative h-[50vh] bg-fixed bg-cover bg-center mt-[55px]" style={{ backgroundImage: 'url("https://optim.tildacdn.net/tild6636-3730-4333-b063-383833333431/-/format/webp/shutterstock_2181685.jpg")' }}>
 <div className="absolute inset-0 bg-black opacity-70"></div>
 <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
 <div className="a3:text-[44px] a7:text-[30px] a16:text-[23px] text-[18px] italic font-bold ">
 <TypeWriterComponent options={{strings: [
 "100% Customer Satisfaction",
 "525 Happy Customers",
 "$33M+ Cash Payouts",
 "99% Deals Closed "
 ],
 autoStart: true,
 loop: true,
 deleteSpeed: 46,
 delay: 46
 }}/>
 </div> 

 <h1 className="a3:text-[24px] a7:text-[20px] a8:text-[16px] a16:text-[14px] text-[12px] flex-col mt-5 mb-3 font-[500.25]">Are you ready to turn your house into <span className='text-[#4BBC43]'>cash?</span></h1>
 <div className='flex a6:flex-row flex-col items-center justify-center a3:gap-x-16 gap-x-5 gap-y-6 a6:ml-12'>

<svg 
    role="presentation a6:gap-20 gap-16  "
    className="t581__arrow-iconl a6:block hidden"
    style={{ fill: '#00b3ff', width: 70,}}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 180"
  >
    <path d="M54.1 110c-1.1 0-2.2-.5-2.9-1.5-1.1-1.6-.7-3.8.8-4.9 1-.7 4.9-2.9 8.9-5.2-14.8-2-27.2-8.9-36.1-20.2C7.9 56.3 7.5 24.1 12.3 3.2c.4-1.9 2.3-3.1 4.2-2.6 1.9.4 3.1 2.3 2.6 4.2-4.5 19.4-4.2 49.2 11.4 69.1 8.4 10.7 19.9 16.7 34.2 17.9l-.4-.5c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-1.2-1.5-1-3.7.5-4.9s3.7-1 4.9.5l6.4 8c.5.5.9 1.1 1.4 1.6 1.5 1.8 3.1 3.7 4.5 5.6.1.1.1.2.2.3.2.4.4.8.4 1.3v.7c0 .3-.1.7-.2 1-.1.2-.2.4-.3.5-.2.3-.5.6-.7.9-.2.2-.4.3-.7.5-.1 0-.1.1-.2.1-1.7.8-16 8.6-17.9 9.9-.7.5-1.4.7-2.1.7zM74 99.5s-.1 0 0 0c-.1 0 0 0 0 0z"></path>
  </svg>

  <svg role="presentation" className="t581__arrow-icon_mobile a6:hidden block w-[24px] h-[60px]" style={{fill:"#00b3ff;"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 70"><path d="M32.1 46.5c-1.5-1.2-3.7-1-4.9.5l-6 7.4V6c0-1.9-1.6-3.5-3.5-3.5S14.2 4.1 14.2 6v48.4l-6-7.4c-1.2-1.5-3.4-1.7-4.9-.5s-1.7 3.4-.5 4.9L15 66.6c.7.8 1.7 1.3 2.7 1.3s2.1-.5 2.7-1.3l12.2-15.2c1.3-1.5 1-3.7-.5-4.9z"></path></svg> 

    <button className=' a5:text-[15px] text-[12px] a5:w-[240px] w-[170px] a5:py-5 py-4 a6:mr-[152px] a7:mr-[12px] text-white bg-[#FC3C3C]  font-bold  rounded-full'>Get Your Cash Offer</button>
</div>



</div>
<div className='flex justify-center  mt-[85px] a15:gap-5 a14:gap-[11px] gap-[5px] a14:px-0 px-4'>
    <Link href="https://web.facebook.com/profile.php?id=100067352754890" target="_blank">
    <svg className="t-sociallinks__svg" role="presentation" width="50px" height="50pxa" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.3077 14.1204C46.4333 11.1506 50.8581 10.1412 55.0516 10.0244C59.4777 9.98539 63.9037 10.0049 68.3285 10.0049C68.348 14.683 68.348 19.3416 68.3285 24.0197C65.4757 24.0197 62.6021 24.0197 59.7492 24.0197C57.9435 23.9028 56.0805 25.2811 55.7505 27.0868C55.7116 30.2125 55.7311 33.3369 55.7311 36.4625C59.9233 36.482 64.1168 36.4625 68.3091 36.482C67.9986 41.0042 67.436 45.5082 66.7761 49.9732C63.0684 50.0122 59.3608 49.9732 55.6531 49.9927C55.6142 63.3281 55.6726 76.6439 55.6336 89.9805C50.1203 90 44.6276 89.961 39.1142 90C39.0168 76.6646 39.1142 63.3293 39.0558 49.9927C36.377 49.9732 33.6788 50.0122 31 49.9732C31.0195 45.4887 31 41.0054 31 36.5404C33.6788 36.5015 36.377 36.5404 39.0558 36.521C39.1337 32.1728 38.9778 27.8052 39.1337 23.4571C39.4259 19.9833 40.7263 16.5082 43.3077 14.1204Z" fill="#099fdb"></path></svg>
   </Link>

   <Link href="https://twitter.com/clmhomesreal" target='_blank'>
   <svg className="t-sociallinks__svg" role="presentation" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48"><path d="M27.0444 21.5498L38.9571 8H36.1341L25.7903 19.7651L17.5287 8H8L20.4931 25.791L8 40H10.8231L21.7465 27.5757L30.4713 40H40L27.0444 21.5498ZM23.1777 25.9476L21.9119 24.1761L11.8403 10.0795H16.1764L24.3043 21.4559L25.5702 23.2275L36.1354 38.0151H31.7994L23.1777 25.9476Z" fill="#099fdb"></path></svg> 
   </Link>

   <Link href="https://www.instagram.com/clmhomesrealestate/" target='_blank'>
   <svg className="t-sociallinks__svg" role="presentation" width="50px" height="50px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z" fill="#099fdb"></path><path d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z" fill="#099fdb"></path></svg>
  </Link>

  <Link href="https://www.pinterest.ph/clmhomesrealestate/" target='_blank'>
  <svg className="t-sociallinks__svg" role="presentation" width="50px" height="50px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.7878 10C59.2841 10 66.2541 12.5984 71.6978 17.7952C77.1416 22.992 79.8641 29.1368 79.8641 36.231C79.8641 45.3874 77.5548 52.9344 72.935 58.8733C68.3152 64.8121 62.3763 67.7816 55.1184 67.7816C52.726 67.7816 50.4577 67.2046 48.3135 66.0493C46.1692 64.894 44.6839 63.534 43.8587 61.9668C42.1264 69.0609 41.0543 73.2675 40.6423 74.5866C39.322 79.3701 36.5598 84.4019 32.352 89.6819C31.8569 90.177 31.5268 90.0938 31.3618 89.4349C30.3716 82.424 30.4138 76.608 31.4859 71.9894L37.3006 46.8727C36.3104 44.9754 35.8153 42.583 35.8153 39.6967C35.8153 36.3153 36.6814 33.4899 38.4137 31.2215C40.146 28.9532 42.2493 27.819 44.7236 27.819C46.7028 27.819 48.2291 28.4581 49.3012 29.7374C50.3733 31.0168 50.9094 32.6448 50.9094 34.6253C50.9094 35.8624 50.6823 37.3676 50.2294 39.1408C49.7752 40.914 49.1771 42.9764 48.4351 45.3278C47.693 47.6781 47.157 49.5555 46.8269 50.9577C46.2499 53.3501 46.7028 55.4323 48.1881 57.2056C49.6735 58.9788 51.6527 59.866 54.127 59.866C58.3336 59.866 61.7981 57.4736 64.5206 52.69C67.2431 47.9064 68.6031 42.1313 68.6031 35.3685C68.6031 30.1717 66.9329 25.9441 63.5924 22.6868C60.252 19.4294 55.5701 17.7989 49.5494 17.7989C42.7853 17.7989 37.3205 19.9643 33.1549 24.2949C28.9892 28.6256 26.9083 33.7976 26.9083 39.8183C26.9083 43.3648 27.9394 46.3764 30.0018 48.8507C30.6619 49.6759 30.8679 50.4998 30.621 51.325C30.5391 51.4901 30.4349 51.9231 30.312 52.6242C30.1879 53.3253 30.0849 53.8204 30.003 54.1096C29.9211 54.3987 29.7561 54.8318 29.5079 55.4088C29.261 55.9858 28.9719 56.2538 28.6418 56.2128C28.3117 56.1719 27.8997 56.1508 27.4046 56.1508C21.1345 53.5934 18 47.7786 18 38.7053C18 31.4461 20.9285 24.8471 26.7842 18.9083C32.6399 12.9694 40.6423 10 50.7878 10Z" fill="#099fdb"></path></svg> 
  </Link>

  <Link href="https://www.linkedin.com/company/clm-homes/about/" target='_blank'>
  <svg className="t-sociallinks__svg" role="presentation" width="50px" height="50px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90 58.8676V88.444H72.8529V60.8481C72.8529 53.9164 70.3722 49.1856 64.1669 49.1856C59.429 49.1856 56.6096 52.374 55.3686 55.4587C54.9159 56.5614 54.7992 58.0965 54.7992 59.6388V88.444H37.6463C37.6463 88.444 37.877 41.7061 37.6463 36.8644H54.7963V44.1753C54.7617 44.2301 54.717 44.2891 54.6839 44.3425H54.7963V44.1753C57.0752 40.6654 61.1443 35.6522 70.2526 35.6522C81.5403 35.6522 90 43.025 90 58.8676ZM19.705 12C13.837 12 10 15.8486 10 20.9108C10 25.8621 13.7275 29.8274 19.4787 29.8274H19.5926C25.5745 29.8274 29.2933 25.8621 29.2933 20.9108C29.1809 15.8486 25.5745 12 19.705 12ZM11.0191 88.444H28.1647V36.8644H11.0191V88.444Z" fill="#099fdb"></path></svg>
  </Link>

</div>

<div className=' flex justify-center '>
    <hr className='mt-28 w-[1180px] bg-gray-400'/>
    </div>

    <div className='flex flex-col justify-center items-center mt-[40px] pb-24'>
    <h2 className='text-[14px] text-[#616161] font-bold'>All Rights Reserved. CLM Homes 2020.</h2>
    <p className='a9:text-[14px] a4:text-[13px] text-[11px] text-center a6:w-full a6:px-0 px-4 '>One or more people who work with CLM Homes are licensed Real Estate Agents in the states of California, Nevada, and Arizona.</p>
     <Link className='text-[#0078D4] a14:text-[14px] text-[12px] font-[501]' href="https://www.google.com/maps/place/2010+W+Ave+K+%23473,+Lancaster,+CA+93536,+USA/@34.6745977,-118.1661021,17z/data=!3m1!4b1!4m5!3m4!1s0x80c25b1be1f2c7cd:0xf617f268806aba10!8m2!3d34.6745977!4d-118.1661021?entry=ttu" target='_blank' >
     2010 West Avenue K #473 Lancaster CA 93536
     </Link>
    </div>


 </div>
 
 
 
    </div>
 )
}



