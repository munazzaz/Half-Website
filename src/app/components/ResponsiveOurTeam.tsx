import React from 'react'
import Image from "next/image"
import ClmHomesImage from "@../../../public/images/meetourteam.png"
import Team1 from "@../../../public/images/team1.png"
import Team2 from "@../../../public/images/team2.png"
import Team3 from "@../../../public/images/team3.png"
import Team4 from "@../../../public/images/team4.png"
import Team5 from "@../../../public/images/team5.png"
import Team6 from "@../../../public/images/team6.png"
import Team7 from "@../../../public/images/team7.png"
import Team8 from "@../../../public/images/team8.png"
import Team9 from "@../../../public/images/team9.png"


const OurTeamData = [
    { name: 'Tony Woods', position: 'CEO', color: '#099FDB', images: Team1 },
    { name: 'Lena DeYoung', position: 'COO', color: '#09DBDB', images: Team2 },
    { name: 'Steve Silva', position: 'Sales Manager', color: '#09DB87', images: Team3 },
    { name: 'Renee Vasquez', position: 'Acquisitions Manager', color: '#DBD409', images: Team4 },
    { name: 'Tony Onesto', position: 'Project Manager', color: '#DB0952', images: Team5 },
    { name: 'Patricia Barton', position: 'Transaction Coordinator', color: '#DB2C09', images: Team6 },
    { name: 'Dominic Geiwitz', position: 'Disposition Agent', color: '#095DDB', images: Team7 },
    { name: 'Mike Rangel', position: 'Rehab Manager', color: '#D04FFF', images: Team8},
    { name: 'Irina Gedarevich', position: 'Digital Marketing Manager', color: '#09DB13', images: Team9 },
];
const ResponsiveOurTeam = () => {
  return (
    <div className='max-w-screen-89xl mx-auto OurTeam1:hidden block'>
       
      {/* <div className='flex justify-center items-center roboto gap-x-1 mt-[35px]'>
      <h1 className=' text-center Whysell7:text-[30px] OurTeam3:text-[25px] text-[20px] font-[400]'>The Trusted Team at  </h1>
      <Image src={ClmHomesImage} alt="Comapny Logo" className='pb-5 pt-2  Whysell7:w-[200px] OurTeam3:w-[180px] w-[160px]'/>
       
      </div> */}

<div className='flex flex-col OurTeam5:flex-row justify-center items-center roboto gap-x-1 mt-[35px]'>
  <h1 className='text-center Whysell7:text-[30px] OurTeam3:text-[25px] text-[20px] font-[400]'>
    The Trusted Team at
  </h1>
  <Image
    src={ClmHomesImage}
    alt="Company Logo"
    className='pb-5 pt-2 Whysell7:w-[200px] OurTeam3:w-[180px] OurTeam5:w-[160px] w-[140px]'
  />
</div>


 <div className='grid grid-cols-1 OurTeam6:grid-cols-2 md:grid-cols-3 mt-9 md:mx-0 OurTeam2:mx-14  justify-center items-center'>
      {OurTeamData.map((item, key) => {
        return (
          <div
            key={key}
            className={`flex flex-col items-center text-center`}
          >
            <Image
              src={item.images}
              alt={item.name}
              className='rounded-full border-4 border-white shadow-lg OurTeam4:w-[130px] w-[100px] OurTeam4:h-[130px] h-[100px] object-cover'
            />
            <h2 className='mt-2 OurTeam4:text-[22px] text-[17px] font-[700]' style={{ color: item.color }}>
              {item.name}
            </h2>
            <h3 className='OurTeam4:text-[14px] text-[13px] font-[400] text-gray-600 pb-8'>{item.position}</h3>
          </div>
        );
      })}
    </div>


  
    </div>
  )
}

export default ResponsiveOurTeam



