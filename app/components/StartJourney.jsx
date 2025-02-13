import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const StartJourney = () => {
  return (
    <div className='px-[16px] md:px-[24px] lg:px-[40px]'>
        <div className='flex flex-col lg:flex-row '>
            <div className='bg-[url("/journeyImg.png")] w-full lg:w-[45%] h-[300px] md:h-[500px] bg-cover'></div>
            <div className='relative w-full lg:w-[55%] h-auto md:h-[330px] lg:h-[500px]'>
                <div className='absolute bottom-0 right-0 md:left-0'>
                    <img src="/rightArrow.svg" alt="" />
                </div>
                <div className='bg-[#193E2C] w-full h-full p-[24px] lg:p-[40px] flex flex-col lg:justify-between'>
                    <div>
                        <h5 className='font-[Onest] font-[400] text-[18px] leading-[24px] md:text-[32px] md:leading-[40px] lg:text-[24px] lg:leading-[32px] text-primary '>Ready to Start Your Journey?</h5>
                        <p className='mt-[14px] font-[Roboto] font-[300] text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] text-secondary '>
                        Genoa ES can help you achieve your academic, entrepreneurial, and career goals.
                        </p>
                    </div>
                   <div className="flex md:justify-end mt-[80px]">
                              <button className="bg-[#43AA13] text-secondary text-[14px] font-[400]  flex items-center py-[12px] px-[64px] justify-center gap-[6px] w-full md:w-auto  ">
                              Discover Our Program <FiArrowUpRight />
                              </button>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartJourney