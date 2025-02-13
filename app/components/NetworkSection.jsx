import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

const NetworkSection = () => {
    return (
        <div className="px-[16px] md:px-[24px] lg:px-[40px] pt-[40px]">
            {/* Section Title */}
            <div className="text-primary leading-[32px] text-[20px] md:text-[24px] font-[400] font-[Roboto]">
                Who is in our network?
            </div>

            {/* Underline */}
            <div className="w-full bg-[#BCD4C7] h-[1px] mt-[8px]">
                <div className="bg-[#193E2C] h-[1px] w-[30%] md:w-[250px]"></div>
            </div>

            {/* Main Content */}
            <div className="mt-[24px] relative w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/networkbg.png" alt="Network Background" className="w-full h-full object-cover " />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r to-[#20202000] from-blackSecondary z-10 "></div>



                <div className='relative z-30 right-0 top-0 w-full md:w-[80%] flex flex-col items-center justify-end'>
                    {/* Main Content */}
                    <div className=" p-[16px] md:p-[24px] lg:p-[40px] text-white w-full  flex flex-col justify-between ">
                        <div className='flex justify-end flex-col'>
                            <h3 className="font-[Onest] text-[24px] md:text-[32px] lg:text-[48px] leading-[32px] md:leading-[48px] font-[300] ">
                                Joined by experts who <span className="text-[#50C878]">raised over $7.5 billion</span> and <span className="text-[#50C878]">manage $100 billion</span> in assets combined.
                            </h3>
                            <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] font-[300] text-gray-300">
                                World experts dedicate their time to help our students grow.
                            </p>
                        </div>

                        {/* Discover Button */}
                        <div className="mt-[24px] md:mt-[32px]">
                            <button className="w-full md:w-auto font-[Roboto] font-[400] text-[16px] leading-[24px] text-black bg-white py-[12px] px-[24px] flex items-center justify-center gap-[8px] rounded-md">
                                DISCOVER THE NETWORK <BiRightArrowAlt />
                            </button>
                        </div>
                    </div>

                    {/* Logos Section */}
                    <div className="p-[16px] md:p-[24px] lg:p-[40px] mt-[40px] flex flex-col w-full ">
                        <p className="text-[16px] md:text-[18px] font-[400] font-[Roboto] leading-[24px] text-secondary mb-[12px]">
                            Where our mentors worked in:
                        </p>
                        <div className="flex flex-wrap gap-[12px] md:gap-[24px] lg:gap-[30px] ">
                            {["google", "tesla", "microsoft", "oracle", "sequoia"].map((logo, index) => (
                                <img key={index} src={`/${logo}.svg`} alt={logo} className="h-[30px] md:h-[40px] w-[80px]" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NetworkSection;
