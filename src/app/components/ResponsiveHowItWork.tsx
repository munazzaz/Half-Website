import Image from 'next/image';

const HowItWorksData = [
    {
        img: "/images/icon1.png",
        img1: "/images/dowarrow.png",
        heading: "Submit The Form",
        text: "Answer a few questions to help us come up with a preliminary offer for your home."
    },
    {
        img: "/images/icon2.png",
        img1: "/images/dowarrow.png",
        heading: "Show Your Home",
        text: "Invite us for a showing to give us a better idea of your home, so that we can give you a more accurate offer."
    },
    {
        img: "/images/icon3.png",
        img1: "",
        heading: "Collect Your Money",
        text: "Once you have accepted the offer, and the transaction is closed with a title company, you will receive the funds! If you need money ASAP? Learn more about Cash before Closing!",
    },
];

const ResponsiveHowItWork = () => {
    return (
        <div className='a3:hidden block text-black roboto'>
            {HowItWorksData.map((item, key) => {
                const parts = item.text.split('Cash before Closing!');

                return (
                    <div key={item.heading} className='flex flex-col items-center justify-center gap-3 mt-5'>
                        <div className='flex items-center mr-[20px]'>
                            <Image src={item.img} alt="number-icon" width={59} height={59} className='w-[59px] h-[59px] mt-[3px]' />
                            <h2 className='font-bold a12:text-[16px] text-[14px] italic text-center'>{item.heading}</h2>
                        </div>
                        <p className='a2:text-[18px] a11:text-[16px] a13:text-[14px] text-[13.55px] a11:px-0 a17:px-4 px-2 a10:pl-[60px] text-center mt-0 a13:w-[400px] a17:w-[300px] w-[260px]'>
                            {parts[0]}
                            {key === 2 && <strong className='font-bold'>Cash before Closing!</strong>}
                        </p>
                        {item.img1 && item.img1 !== "" && <Image src={item.img1} alt="image" width={150} height={150} />}
                    </div>
                );
            })}
        </div>
    );
};

export default ResponsiveHowItWork;
