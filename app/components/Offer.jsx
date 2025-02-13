import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Offer = () => {
  return (
    <div className="px-[16px] md:px-[24px] lg:px-[40px] py-[40px]">
      {/* Section Title */}
      <div className=" text-primary leading-[32px] text-[20px] md:text-[24px] font-[400] font-[Roboto]">
        What do we offer?
      </div>
      {/* Underline */}
      <div className="w-full bg-[#BCD4C7] h-[1px] mt-[8px]">
        <div className="bg-[#193E2C] h-[1px] w-[30%] md:w-[250px]"></div>
      </div>

      {/* Offer Content */}
      <div className="mt-[24px]  flex flex-col lg:flex-row ">
        {/* Left - Image */}
        <div className='bg-[url("/offerbg.png")] bg-cover w-full h-[200px] md:h-[300px] lg:h-auto lg:w-[50%]'>
          {/* <img src="./offerbg.png" alt="Offer Background" className="w-full" /> */}
        </div>

        {/* Right - Text Section */}
        <div className="p-[24px] w-full lg:w-[50%] bg-[#193E2C] flex flex-col gap-[16px]">
          <div>
            <h2 className="text-[24px] md:text-[32px]  text-primary  leading-[32px] font-[400] font-[Roboto]">
              Master in <br /> International <br /> Business Creation
            </h2>

            <div className="text-[16px] text-secondary md:text-[20px] leading-[26px] font-[300] font-[Roboto] flex flex-wrap gap-[12px] mt-[24px]">
              <p >
                <span className="text-[14px] md:text-[18px] mr-[8px]">Duration:</span> <span className="text-secondary font-[400] ">8 months</span>
              </p>
              <p>
                <span className="text-[14px] md:text-[18px] mr-[8px]">Idea stage:</span> <span className="text-secondary font-[400] ">from no idea to pre-seed</span>
              </p>
              <p>
                <span className="text-[14px] md:text-[18px]  mr-[8px]">Locations:</span> <span className="text-secondary  font-[400]">Washington D.C., New York, San Francisco, Genoa</span>
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="relative mt-[24px]">
            <div className="absolute top-0 right-0">
              <img src="/quote.png" alt="" width='123' />
            </div>
            <blockquote className="text-[18px] leading-[22px] text-secondary  font-[400] font-[Roboto] p-[8px]">
              “In a word, this course is life-changing. Experiencing Silicon Valley in such depth is something I couldn’t even imagine.”
            </blockquote>
            <p className="text-[14px] text-[#BCD4C7] mt-[12px] mx-[8px]">— Juan Lopez Van Dam, Student Founder 2023</p>
          </div>

          {/* Button */}
          <div className="flex md:justify-end">
            <button className="bg-[#43AA13] text-secondary text-[14px] font-[400]  flex items-center py-[12px] px-[64px] justify-center gap-[6px] w-full md:w-auto  ">
              EXPLORE THE PROGRAM <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      <div className="text-primary text-[20px] leading-[32px] md:text-[24px] font-[400] font-[Roboto] pt-[40px] ">
        Why Genoa Entrepreneurship School?
      </div>

      {/* Underline */}
      <div className="w-full bg-[#BCD4C7] h-[1px]">
        <div className="bg-[#193E2C] h-[1px] w-[30%] md:w-[250px]"></div>
      </div>

      {/* Description */}
      <div className="text-[22px] leading-[26px] w-full md:text-[40px] md:leading-[48px]  font-[400] font-[roboto] text-primary mt-[40px]  md:text-center">
        <p className="md:w-[80%] lg:w-[65%]  md:mx-auto "> Learn and grow{" "}
          <span className="text-black font-[Roboto] font-[300]">
            with personalized expert guidance in the world’s most stimulating
            cities while studying
          </span></p>
      </div>

      {/* Three Columns */}
      <div className="mt-[40px] py-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[24px] lg:gap-[40px]">
        {/* Column 1 */}
        <div className="flex gap-[12px] lg:gap-[24px]">
          <div className="hidden md:block bg-[#BCD4C7] h-full w-[1px]">
            <div className="bg-primary w-[1px] h-[50%]"></div>
          </div>
          <div className="">
           <div className="flex gap-[12px] md:flex-col border-[#BCD4C7] border-b-[1px] md:border-none pb-[12px] md:pb-0">
           <h3 className="text-[#43AA13] text-[24px] leading-[24px] md:text-[32px] font-[400] md:leading-[32px] font-[Roboto] ">01</h3>
            <p className="text-[18px] leading-[24px] md:text-[20px] lg:text-[24px] text-blackSecondary md:leading-[28px] lg:leading-[32px] font-[400] font-[Onest] md:mt-[12px]">
              Personalized guidance from the best startup experts for life, even
              if you don’t launch.
            </p>
           </div>
            <ul className="text-[16px]  lg:text-[18px] font-[300] leading-[20px] lg:leading-[24px] font-[Roboto]  list-disc  mt-[24px] pl-[24px] text-blackSecondary">
              <li>1:1 meetings at any time with field-specific experts and founders.</li>
              <li>A personal mentor will follow you throughout the year, every week.</li>
              <li>Daily workshops provide industry tips and adapt to your full-time startup commitments.</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex gap-[12px] lg:gap-[24px]">
          <div className="hidden md:block bg-[#BCD4C7] h-full w-[1px]">
            <div className="bg-primary w-[1px] h-[50%]"></div>
          </div>
          <div className="">
           <div className="flex gap-[12px] md:flex-col border-[#BCD4C7] border-b-[1px] md:border-none pb-[12px] md:pb-0">
           <h3 className="text-[#43AA13] text-[24px] leading-[24px] md:text-[32px] font-[400] md:leading-[32px] font-[Roboto] ">02</h3>
            <p className="text-[18px] leading-[24px] md:text-[20px] lg:text-[24px] text-blackSecondary md:leading-[28px] lg:leading-[32px] font-[400] font-[Onest] md:mt-[12px]">
              Learn by combining theory and practice by building in the most stimulating US & EU cities
            </p>
           </div>
            <ul className="text-[16px] lg:text-[18px] font-[300] leading-[20px] lg:leading-[24px] font-[Roboto]  list-disc  mt-[24px] pl-[24px] text-blackSecondary">
              <li>Enter Meta, Tesla and Google HQ’s to absorb their mindset and practices.
              </li>
              <li>Network and work with EU and US like-minded talent, companies and investors.</li>
              <li>Learn from law to finance for founders from two leading universities.</li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex gap-[12px] lg:gap-[24px]">
          <div className="hidden md:block bg-[#BCD4C7] h-full w-[1px]">
            <div className="bg-primary w-[1px] h-[50%]"></div>
          </div>
          <div className="">
            <div className="flex gap-[12px] md:flex-col border-[#BCD4C7] border-b-[1px] md:border-none pb-[12px] md:pb-0">
            <h3 className="text-[#43AA13] text-[24px] leading-[24px] md:text-[32px] font-[400] md:leading-[32px] font-[Roboto] ">03</h3>
            <p className="text-[18px] leading-[24px] md:text-[20px] lg:text-[24px] text-blackSecondary md:leading-[28px] lg:leading-[32px] font-[400] font-[Onest] md:mt-[12px]">
              75% of our students closed a round within 6 months

            </p>
            </div>
            <ul className="text-[16px] lg:text-[18px] font-[300] leading-[20px] lg:leading-[24px] font-[Roboto]  list-disc  mt-[24px] pl-[24px] text-blackSecondary">
              <li>Enter Meta, Tesla and Google HQ’s to absorb their mindset and practices.

              </li>
              <li>Network and work with EU and US like-minded talent, companies and investors.</li>
              <li>Learn from law to finance for founders from two leading universities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
