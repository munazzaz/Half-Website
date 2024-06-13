import Link from 'next/link'
import React from 'react'

const getLinksData = [
{
  Link:"/how-it-works",
  linktext:"How it works"
},
{
  Link:"/about-us",
  linktext:"About CLM Homes"
},
{
  Link:"/frequently-asked-questions",
  linktext:"Read FAQs"
},
{
  Link:"/Contact Us",
  linktext:"contact-us"
},
{
  Link:"/",
  linktext:"Get free consultation"
},
{
  Link:"/reviews",
  linktext:"Our customer reviews"
},
]

const notfound = () => {
  return (
    <div className='px-9'>
        <div className="flex flex-col justify-center items-center roboto pb-7">
            <h1 className='font-bold Whysell3:text-7xl notfound1:text-5xl text-4xl text-gray-500 mt-14 text-center'>Oops! Wrong Address</h1>
            <p className='Whysell3:text-[25px] notfound1:text-[20px] text-[18px] Reviews8:w-full notfound1:w-[280px] w-[220px] font-[400] text-gray-700 mt-7 text-center'>The requested page doesn’t exist. Sorry about that.</p>
            
               <div>
                <h1 className='font-extrabold Whysell3:text-[105px] notfound1:text-[80px] text-[68px] notfound:mt-[55px] notfound1:mt-[45px] mt-[35px] text-red-400 text-center'>404</h1>
                </div>
         
                <h2 className='notfound1:text-xl text-[20px] text-gray-700 notfound:mt-[55px] notfound1:mt-[40px] mt-[30px] mb-5 text-center'>Are you looking for one of these?</h2>

                <div className='notfound:block hidden'>
               <div className='flex gap-x-8  font-[400] text-blue-500 text-center'>
               <Link href={"/how-it-works"} className=''>How it works</Link>
               <Link href={"/about-us"} className=''>About CLM Homes</Link>
               <Link href={"/how-it-works"} className=''>Read FAQs</Link>
               </div>
               <div className='flex gap-x-8 font-[400] text-blue-500 text-center'>
               <Link href={"/"} className=''>Contact Us</Link>
               <Link href={"/"} className=''>Get free consultation</Link>
               <Link href={"/reviews"} className=''>Our customer reviews</Link>
               </div>
               </div>
                

                <div className='notfound:hidden block'>
                   <div className='grid grid-cols-1 notfound1:grid-cols-2 gap-x-5'>
                { 
                  getLinksData.map((item,any) => {
                   return (
                    <div key={item.linktext}
                    className='flex gap-x-8 items-center justify-center  font-[400] text-blue-500 text-center'>
                       <Link href={item.Link} className='text-[16px]'>{item.linktext}</Link>
                      </div>
                   )
                  })
                }
               </div>
                  
                </div>
              
                <Link href="/">
               <button className='hover:bg-[#4886a4] bg-[#099fdb]  text-white px-3 py-2 mt-6 rounded-xl'>
                Home
               </button></Link>  
                 
    </div></div>
  )
}

export default notfound