import React from 'react'
import { companys, experiencetop } from '../constant'
import { BiRightArrowAlt } from "react-icons/bi";

const Experience = () => {
    return (

        <div className=' max-w-[1440px] mx-auto    '>
            <div className='  max-w-[1360px]  bg-secondary    mt-[-34px] md:mt-[-120px]   mx-[12px] md:mx-[24px] lg:mx-[37px]  '>
                <div className=' w-auto lg:w-auto xl:w-full    '>
                    <div className='w-full py-[30px] md:py-[32px] lg:py-[62px] px-[0px] md:px-[24px] lg:px-[42px] flex flex-col gap-[24px] '>
                        {/* upper div  */}
                        <div className=' flex flex-col md:flex-row gap-[40px] w-full'>
                            {
                                experiencetop.map((item) => (
                                    <div className='w-full md:w-auto lg:w-1/3 flex flex-col gap-[4px] lg:gap-[12px] ' key={item.id} >
                                        <div className='font-[Onest] font-[300] text-[56px] md:leading-[56px]  lg:text-[90px]  leading-[56px] lg:leading-[88px] text-blackSecondary text-center '>{item.name} </div>
                                        <p className='text-[18px] font-[400] font-[Roboto] leading-[24px] text-blackSecondary text-center'>{item.desc}</p>
                                    </div>
                                ))
                            }

                        </div>
                        {/* lower div  */}
                        <div className='flex flex-col gap-[10px]'>
                            <div className='w-full'>
                                <h4 className='text-primary font-[Roboto] font-[400] text-[24px] leading-[32px] '>Joined by experts with experience in: </h4>
                            </div>
                            <div className='flex flex-wrap justify-center  md:justify-end gap-[12px] md:gap-[35px] lg:gap-[40px]'>
                                {
                                    companys.map((item) => (
                                        <div key={item.id} className='flex items-center  '>
                                            <img src={item.img} alt={item.alt} className='' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Entrepreneurship section  */}

            <div className=" mx-[12px] md:mx-[24px] lg:mx-[37px]  bg-[#FAF9F4]">
                {/* Title */}
                <div className="mt-[40px] text-primary leading-[32px] text-[20px] md:text-[24px] font-[400] font-[Roboto]">
                    What is Genoa Entrepreneurship School?
                </div>
                <div className='w-full bg-[#BCD4C7] h-[1px] mt-[8px]'>
                    <div className='bg-[#193E2C] h-[1px] w-[70%] md:w-[250px]'></div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-[8px] md:gap-[16px] lg:gap-[40px] mt-[40px]">
                    {/* Left Side - Heading */}
                    <div className="w-full lg:w-[40%]">
                        <h2 className="text-[#222222] font-[300] font-[Onest] text-[28px] leading-[28px] md:text-[40px] lg:text-[48px] md:leading-[48px] lg:leading-[56px]">
                            BRIDGING THE  ACADEMIA AND STARTUP WORLDS
                        </h2>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="w-full lg:w-[60%] ">
                        <p className="text-blackSecondary font-[Roboto] text-[16px] md:text-[20px] leading-[28px] font-[300] lg:mt-[28px]">
                            We are a joint initiative between the University of Genoa, companies, and institutions.
                            We strongly believe that the best time to launch a startup is during university, as
                            Mark Zuckerberg, Bill Gates, Elon Musk, and others have done.
                            <br />
                            Our goal is to empower entrepreneurs through dynamic learning experiences with industry
                            experts, companies, and the University of Georgetown.
                        </p>
                    </div>
                </div>
            </div>

            {/* Academic section  */}
            <div className='px-[16px] md:px-[24px] lg:px-[40px]'>
                <div className='mt-[24px] md:mt-[32px] lg:mt-[48px]'>
                    <p className='font-[Roboto] font-[400] text-[16px] leading-[24px]  '>Academic partners </p>
                </div>
                <div className='flex flex-col md:flex-row gap-[40px] lg:gap-[56px] mt-[12px]'>
                   <div className='flex gap-[16px]'>
                   <div >
                        <img src="/G-uni.svg" alt="" />
                    </div>
                    <div>
                        <h5 className='font-[roboto] font-[400] text-[12px] leading-[14px] text-[#E4602F] '>Bloomberg MBA Ranking</h5>
                        <p className='font-[roboto] font-[600] text-[18px] leading-[24px] '>#1 World's most innovative & creative graduates</p>
                    </div>
                   </div>
                   <div className='flex gap-[16px]'>
                   <div >
                        <img src="/uni-d.svg" alt="" />
                    </div>
                    <div>
                        <h5 className='font-[roboto] font-[400] text-[12px] leading-[14px] text-[#E4602F] '>Censis ranking of Italian universities</h5>
                        <p className='font-[roboto] font-[600] text-[18px] leading-[24px] '>#1 Engineering in Italy</p>
                    </div>
                   </div>
                </div>

                <div className='mt-[40px] flex items-center justify-end'>
                    <button className='w-full md:w-auto font-[Roboto] font-[400] text-[16px] leading-[24px] text-blackSecondary border-[1px] border-blackSecondary py-[12px] px-[24px] flex items-center justify-center gap-[8px]'> Read More About Who We Are <span> <BiRightArrowAlt/> </span> </button>
                </div>
            </div>

            {/* meet your professor section  */}

            <div className='flex flex-col-reverse lg:flex-row h-auto lg:h-[500px] px-[16px] md:px-[24px] lg:px-[40px] mt-[64px] lg:mt-[80px]'>
                <div className='p-[16px] md:p-[24px] lg:p-[40px] bg-[#FAF5E2] w-f lg:w-[35%] h-full flex flex-col justify-between '>
                    <div>
                        <h3 className='font-[roboto] text-[32px] md:text-[40px] text-blackSecondary leading-[32px] md:leading-[48px] font-[300]'>Meet your professor</h3>
                    </div>
                    <div className='pl-[12px] border-primary border-l-[1px] mt-[32px]'>
                        <p className='font-[roboto] text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] lg:text-[18px] lg:leading-[24px] font-[300] text-blackSecondary'>
                        At Georgetown, we believe in entrepreneurship for the common good. <span className=' font-[500] '>
                        Our partnership with Genoa Entrepreneurship School aligns our values perfectly, supporting emerging entrepreneurs worldwide.
                        </span>
                        </p>
                        <div className='flex items-center gap-[8px] md:gap-[16px] mt-[24px] md:mt-[35px]'>
                            <div><img width={'100px'} src="/G-uni.svg" alt="" /></div>
                            <div> 
                                <p className='font-[roboto] font-[400] text-[18px] md:text-[20px] leading-[24px]'>Shye Gilad</p>
                                <p className='font-[roboto] font-[300] text-[14px]  leading-[18px] md:text-[16px] md:leading-[20px] text-blackSecondary'>Professor at Georgetown university</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '  >
                    <img src="/youtube.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Experience