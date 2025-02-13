import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const GenoaLife = () => {
  return (
    <div className='px-[16px] md:px-[24px] lg:px-[40px] pt-[40px]'>
         {/* Section Title */}
      <div className=" text-primary leading-[32px] text-[20px] md:text-[24px] font-[400] font-[Roboto]">
      How is life at Genoa Entrepreneurship School?
      </div>
      {/* Underline */}
      <div className="w-full bg-[#BCD4C7] h-[1px] mt-[8px]">
        <div className="bg-[#193E2C] h-[1px] w-[30%] md:w-[250px]"></div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row mt-[24px]'>
      <div className='p-[16px] md:p-[24px] lg:p-[40px] bg-[#FAF5E2] w-full lg:w-[50%] h-full flex flex-col justify-between '>
                    <div>
                        <h3 className='font-[Onest] text-[28px] md:text-[40px] text-primary leading-[32px] md:leading-[48px] font-[300]'>
                        Learn and build with the best <span className='text-blackSecondary'>every day</span>
                        </h3>
                    </div>
                    <div className=' mt-[16px] lg:mt-[24px]'>
                        <p className='font-[roboto] text-[16px] md:[18px]  leading-[22px] md:leading-[24px] lg:text-[18px] lg:leading-[24px] font-[300] text-blackSecondary'>
                        Live, work and grow in vibrant cities like New York, Washington or San Francisco. You will explore iconic places like the Google campus, Meta’s Skyscraper and the Tesla Factory.
                        
                        </p>
                        <div className="flex md:justify-end mt-[40px] lg:mt-[316px]">
                                    <button className="text-[14px] md:[16px] md:leading-[24px] font-[400]  flex items-center py-[12px] md:py-[14px] px-[24px] text-blackSecondary border-blackSecondary border-[1px] justify-center gap-[6px] w-full md:w-auto  ">
                                    <span className='hidden md:block'>Discover How is Life during the program </span> <span className='md:hidden'>Discover More</span><FiArrowRight />
                                    </button>
                                  </div>
                    </div>
                </div>
                <div className='bg-[url("/genoaLife.png")] bg-cover w-full lg:w-[50%] h-[320px] md:h-[400px] lg:h-auto '  >
               
                </div>
            </div>
      </div>
    
  )
}

export default GenoaLife