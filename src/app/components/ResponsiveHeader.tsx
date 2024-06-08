import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
   } from "@/components/ui/sheet"
   
   import Link from "next/link"
   import {Button} from "@/components/ui/button"
   import Image from "next/image"
   import ResponsiveLogo from "@/../public/images/logonew.gif"
   import Menu from "@/../../public/images/menu.png"
   import { MenuIcon } from "lucide-react"
   
   const ResponsiveHeader = () => {
    return (
    <div className='max-w-screen-2xl px-[17.5px] py-4 bg-white mx-auto flex justify-between items-center roboto '>
    <Link href="/" className='md:block hidden'> <Image src={ResponsiveLogo} alt='Responsive clm homes logo' className="md:block hidden" /></Link>
    <Link href="/" className='block md:hidden'> <Image src={ResponsiveLogo} alt='Responsive clm homes logo' className="block md:hidden h-12 w-[155px] sm:h-14 sm:w-44 " /></Link>
    
    <Sheet>
    <SheetTrigger><Image src={Menu} alt='Responsive clm homes menu' className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"/></SheetTrigger>
    <SheetContent> <Link href="/" className=''> <Image src={ResponsiveLogo} alt='Responsive clm homes logo' className=" h-12 w-[155px] sm:h-14 sm:w-44 " /></Link>
    <ul className=' gap-x-5 my-7 ml-2 head2:gap-x-7 items-center'>
    
    <li className="my-2"><Link href="/HowItWorks" className=' hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>How It Works</Link></li>
    <li className="my-2"><Link href="/Testimonials" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>Testimonials</Link></li>
    <li className="my-2"><Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>FAQs</Link></li>
    <li className="my-2"><Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>About Us</Link></li>
    <li className="my-2"> <Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>Why Sell?</Link></li>
    <li className="my-2"><Link href="/" className='hover:duration-300 text-[#636363] hover:text-[#cecdcd] text-[18px] sm:text-[20px] font-semibold'>Contact Us</Link></li>
    </ul>
   
    <ul className='sm:flex gap-x-[10px] items-center'>
    <li>
    <Button className='mb-3 sm:mb-0 shadow-8xl font-bold py-[20px] px-[20px] head3:px-[30px] text-[14px] hover:bg-[#de3434] bg-[#FC3C3C] text-white rounded-full'>(661) 952-1500</Button>
    </li> 
    <li> 
    <Button className=' shadow-8xl rounded-full font-bold py-[20px] px-[20px] head3:px-[30px] hover:bg-[#2695c1] bg-[#099fdb]'>Get Offer Now</Button>
    </li>
    </ul>
    </SheetContent>
    </Sheet>
    </div>
   
    )
   }
   
   export default ResponsiveHeader