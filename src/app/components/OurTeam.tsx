"use client"
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
import { motion } from 'framer-motion'


const OurTeamData = [
    { name: 'Tony Woods', position: 'CEO', color: '#099FDB', images: Team1 },
    { name: 'Lena DeYoung', position: 'COO', color: '#09DBDB', images: Team2 },
    { name: 'Steve Silva', position: 'Sales Manager', color: '#09DB87', images: Team3 },
    { name: 'Renee Vasquez', position: 'Acquisitions Manager', color: '#DBD409', images: Team4 },
    { name: 'Tony Onesto', position: 'Project Manager', color: '#DB0952', images: Team5 },
  ];

  const Data2 = [
    { name: 'Patricia Barton', position: 'Transaction Coordinator', color: '#DB2C09', images: Team6 },
    { name: 'Dominic Geiwitz', position: 'Disposition Agent', color: '#095DDB', images: Team7 },
    { name: 'Mike Rangel', position: 'Rehab Manager', color: '#D04FFF', images: Team8},
    { name: 'Irina Gedarevich', position: 'Digital Marketing Manager', color: '#09DB13', images: Team9 },
  ]

const OurTeam = () => {
  
  return (
    <div className='max-w-screen-89xl mx-auto OurTeam1:block hidden'>
       {/* main div */}
       <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220 }}
      className=' duration-150 flex justify-center items-center roboto gap-x-1 mt-[35px]'
    >
      <h1 className='text-[30px] font-[400]'>The Trusted Team at  </h1>
      <Image src={ClmHomesImage} alt="Comapny Logo" className='pb-5 pt-2 w-[200px] '/>
       
      </motion.div>



{/* first row */}
 <div className='flex mt-9 gap-x-[52px] justify-center items-center'>
      {OurTeamData.map((item, key) => {
        const isLastRow = key >= 5; // Check if the item is in the last row
        return (
          <div
            key={key}
            className={`flex flex-col items-center text-center`}
          >
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <h2 className='mt-2 text-[22px] font-[700]' style={{ color: item.color }}></h2>
            <Image
              src={item.images}
              alt={item.name}
              className='rounded-full border-4 border-white shadow-lg w-[130px] h-[130px] object-cover'
            /></motion.div>
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <h2 className='mt-2 text-[22px] font-[700]' style={{ color: item.color }}>
              {item.name}
            </h2></motion.div>
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <h2 className='mt-2 text-[22px] font-[700]' style={{ color: item.color }}></h2>
            <h3 className='text-[14px] font-[400] text-gray-600'>{item.position}</h3></motion.div>
          </div>
        );
      })}
    </div>

{/* last row */}
    <div className='flex justify-center mx-32 gap-x-14 items-center mt-11'>
      {Data2.map((item, key) => {
        const isLastRow = key >= 5; // Check if the item is in the last row
        return (
          <div
            key={key}
            className={`flex flex-col items-center justify-center`}
          >
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <Image
              src={item.images}
              alt={item.name}
              className='rounded-full border-4 border-white shadow-lg w-[130px] h-[130px] object-cover'
            /></motion.div>
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <h2 className='mt-2 text-[22px]  font-[700]' style={{ color: item.color }}>
              {item.name}
            </h2></motion.div>
            <motion.div
      initial={{ y: 90 }} // Initial position off-screen
      animate={{ y: 10 }} // Animate to y=0 (on-screen)
      transition={{ type: '', stiffness: 220, delay: key * 0.1}}>
            <h3 className='text-[14px] font-[400] text-gray-600'>{item.position}</h3></motion.div>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default OurTeam

// "use client"
// import React from 'react'
// import Image from "next/image"
// import ClmHomesImage from "@../../../public/images/meetourteam.png"
// import Team1 from "@../../../public/images/team1.png"
// import Team2 from "@../../../public/images/team2.png"
// import Team3 from "@../../../public/images/team3.png"
// import Team4 from "@../../../public/images/team4.png"
// import Team5 from "@../../../public/images/team5.png"
// import Team6 from "@../../../public/images/team6.png"
// import Team7 from "@../../../public/images/team7.png"
// import Team8 from "@../../../public/images/team8.png"
// import Team9 from "@../../../public/images/team9.png"


// const OurTeamData = [
//     { name: 'Tony Woods', position: 'CEO', color: '#099FDB', images: Team1 },
//     { name: 'Lena DeYoung', position: 'COO', color: '#09DBDB', images: Team2 },
//     { name: 'Steve Silva', position: 'Sales Manager', color: '#09DB87', images: Team3 },
//     { name: 'Renee Vasquez', position: 'Acquisitions Manager', color: '#DBD409', images: Team4 },
//     { name: 'Tony Onesto', position: 'Project Manager', color: '#DB0952', images: Team5 },
//   ];

//   const Data2 = [
//     { name: 'Patricia Barton', position: 'Transaction Coordinator', color: '#DB2C09', images: Team6 },
//     { name: 'Dominic Geiwitz', position: 'Disposition Agent', color: '#095DDB', images: Team7 },
//     { name: 'Mike Rangel', position: 'Rehab Manager', color: '#D04FFF', images: Team8},
//     { name: 'Irina Gedarevich', position: 'Digital Marketing Manager', color: '#09DB13', images: Team9 },
//   ]

// const OurTeam = () => {
  
//   return (
//     <div className='max-w-screen-89xl mx-auto OurTeam1:block hidden'>
//        {/* main div */}
//       <div className='flex justify-center items-center roboto gap-x-1 mt-[35px]'>
//       <h1 className='text-[30px] font-[400]'>The Trusted Team at  </h1>
//       <Image src={ClmHomesImage} alt="Comapny Logo" className='pb-5 pt-2 w-[200px] '/>
       
//       </div>



// {/* first row */}
//  <div className='flex mt-9 gap-x-[52px] justify-center items-center'>
//       {OurTeamData.map((item, key) => {
//         const isLastRow = key >= 5; // Check if the item is in the last row
//         return (
//           <div
//             key={key}
//             className={`flex flex-col items-center text-center`}
//           >
//             <Image
//               src={item.images}
//               alt={item.name}
//               className='rounded-full border-4 border-white shadow-lg w-[130px] h-[130px] object-cover'
//             />
//             <h2 className='mt-2 text-[22px] font-[700]' style={{ color: item.color }}>
//               {item.name}
//             </h2>
//             <h3 className='text-[14px] font-[400] text-gray-600'>{item.position}</h3>
//           </div>
//         );
//       })}
//     </div>

// {/* last row */}
//     <div className='flex justify-center mx-32 gap-x-14 items-center mt-11'>
//       {Data2.map((item, key) => {
//         const isLastRow = key >= 5; // Check if the item is in the last row
//         return (
//           <div
//             key={key}
//             className={`flex flex-col items-center justify-center`}
//           >
//             <Image
//               src={item.images}
//               alt={item.name}
//               className='rounded-full border-4 border-white shadow-lg w-[130px] h-[130px] object-cover'
//             />
//             <h2 className='mt-2 text-[22px]  font-[700]' style={{ color: item.color }}>
//               {item.name}
//             </h2>
//             <h3 className='text-[14px] font-[400] text-gray-600'>{item.position}</h3>
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   )
// }

// export default OurTeam








