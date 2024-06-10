import Image from 'next/image'
import React from 'react'
import Logo from "@/../../public/images/logo1 (1).gif"
import ResponsiveLogo from "@/../../public/images/logonew.gif"
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import ResponsiveHeader from './ResponsiveHeader'

const Header = () => {
 return (
 <header className='z-50 sticky top-0 bg-white'>
 <nav className=' max-w-screen-2xl px-[17.5px] head4:py-4 mx-auto '>
 <div className='head4:flex hidden justify-between items-center roboto '>
 <Link href="/" className='head1:block hidden'> <Image src={Logo} alt='Logo' /></Link>
 <Link href="/" className='block head1:hidden'> <Image src={ResponsiveLogo} alt='Responsive clm homes Logo' /></Link>
 


 <ul className='flex gap-x-5 head2:gap-x-7 items-center'>
 <li><Link href="/how-it-works" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>How It Works</Link></li>
 <li><Link href="/reviews" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>Testimonials</Link></li>
 <li><Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>FAQs</Link></li>
 <li><Link href="/about-us" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>About Us</Link></li>
 <li> <Link href="/i-need-to-sell-my-house" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>Why Sell?</Link></li>
 <li><Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[20px] font-semibold'>Contact Us</Link></li>
 </ul>

 <ul className='flex gap-x-[10px] items-center'>
 <li>
 <Button className=' shadow-8xl font-bold py-[20px] px-[20px] head3:px-[30px] text-[14px] hover:bg-[#de3434] bg-[#FC3C3C] text-white rounded-full'>(661) 952-1500</Button>
 </li> 
 <li> 
 <Button className=' shadow-8xl rounded-full font-bold py-[20px] px-[20px] head3:px-[30px] hover:bg-[#2695c1] bg-[#099fdb]'>Get Offer Now</Button>
 </li>
 </ul>
 </div>

 </nav>
 <nav className='block head4:hidden'>
 <ResponsiveHeader/>
 </nav>
 </header>
 )
}

export default Header