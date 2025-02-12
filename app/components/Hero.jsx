import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='max-w-[1440px] h-[640px] md:h-[950px] lg:h-[1024px] bg-[url(/bg-Image.png)] mx-auto'>

            <div className='px-[16px] md:[24px] lg:px-[40px]'>
                <h1 className='pt-[240px] sm:pt-[268px] md:pt-[458px] lg:pt-[586px] text-[28px] md:text-[56px] lg:text-[64px] md:leading-[56px] lg:leading-[64px] text-center font-[Onest] text-secondary font-[500]'>Launch Your Startup
                    While Earning a Master's Degree</h1>
                <p className='font-[Roboto] font-[300] text-[18px] md:text-[24px] text-center leading-[32px] mt-[4px] md:mt-[8px] text-secondary'>Go from zero to fundraising with personalized guidance and a strong network while obtaining a Master's degree.</p>
                <div className='mt-[24px] md:mt-[40px] flex flex-col md:flex-row items-center justify-center gap-[18px]'>
                    <button className='w-full md:w-auto font-[Roboto] font-[500] text-[16px] leading-[24px] py-[14px] px-[24px] bg-secondary text-blackSecondary '>Discover Our Difference</button>

                    <button className='w-full md:w-auto font-[Roboto] font-[500] text-[16px] leading-[24px] py-[14px] px-[24px] bg-primary text-secondary justify-center flex items-center gap-[8px]'>Learn More About Our Program <span><FaArrowRight /> </span></button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero