'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLinkedin } from "react-icons/fa";
// Dummy data for slides
const students = [
  {
    name: "Lea Delic",
    role: "Student founder 2023",
    quote:
      "I wasn’t considering pursuing a master’s degree but this course is practical and opens incredible doors. It certainly is the experience that has improved  most life .",
    image: "/lia.png",
  },
  {
    name: "Chalermchon Puapothep",
    role: "Student founder 2023",
    quote:
      "The other students are amazing people, and mentors are incredible. They are at a global level, but they take the time to be with you and are  support you 24/7.",
    image: "/chalermchon.png",
  },
  {
    name: "Lea Delic",
    role: "Student founder 2023",
    quote:
      "I wasn’t considering pursuing a master’s degree but this course is practical and opens incredible doors. It certainly is the experience that has improved  most  life.",
    image: "/lia.png",
  },
  {
    name: "Chalermchon Puapothep",
    role: "Student founder 2023",
    quote:
      "The other students are amazing people, and mentors are incredible. They are at a global level, but they take the time to be with you and are  support you 24/7.",
    image: "/chalermchon.png",
  },
];

const Carousel = () => {
  return (
    <div className="px-[16px] md:px-[24px] lg:px-[40px] py-[40px] lg:my-[80px]">
      <div className="flex flex-col lg:h-[640px] lg:flex-row gap-[24px] md:gap-[40px] lg:gap-[80px]">
        {/* Left Section */}
        <div className="w-full h-full lg:w-[22%] flex lg:flex-col justify-start">
         <div className="w-[80%] lg:w-auto">
         <h2 className="font-[Onest] text-[24px] md:text-[32px] font-[300] leading-[32px]">
            UNDERSTAND THE EXPERIENCE DIRECTLY FROM OUR STUDENTS
          </h2>
         </div>
          <div className="text-primary  lg:mt-[32px] flex items-center justify-center lg:justify-end ">
            <img src="/arrow.png" alt=""  className="rotate-90 md:rotate-0 w-[32px] h-[32px] md:w-[56px] md:h-[56px]" />
          </div>
        </div>

        {/* Right Section - Swiper */}
        <div className="w-full lg:w-[70%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={'8px'}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // pagination={{ clickable: true }}
            // modules={[Pagination]}
            className="mySwiper "
          >
            {students.map((student, index) => (
              <SwiperSlide key={index} className="bg-[#D6E8DD] p-[16px]   w-[436px] ">
               <div className="relative">
                <div className="absolute top-0 right-0">
                    <img src="/quote.png" alt="" />
                </div>
               <p className="text-[20px] leading-[24px] font-[300] text-[#193E2C] ">{student.quote}</p>
               </div>
                <div className="flex flex-col  gap-[8px] mt-[44px] md:mt-[84px]">
                  <div className="bg-[#CFDFD6] w-[40px] text-blackSecondary p-[8px] rounded">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="font-[600]">{student.name}</p>
                    <p className="text-[14px] text-gray-600">{student.role}</p>
                  </div>
                </div>
                <div className=" mt-[8px]">
   <img src={student.image} 
        alt={student.name} 
        className="w-full  md:w-[404px] h-[250px] object-cover " />
</div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
