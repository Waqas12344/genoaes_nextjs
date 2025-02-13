import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-[16px] md:px-[24px] lg:px-[40px] pt-[40px] lg:pt-[80px] bg-secondary text-[#1C1C1C]">
            {/* Top Border */}
            <div className="w-full bg-[#BCD4C7] h-[1px]">
                <div className="bg-[#193E2C] h-[1px] w-[30%] md:w-[250px]"></div>
            </div>

            {/* Footer Content */}
            <div className="flex   justify-between my-[40px] lg:my-[81px] text-[14px] ">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[88px]">
                    <div className="flex flex-col gap-[12px]">
                        <img src="/footerImg.png" width={'132px'} alt="" />
                        <p className="text-[16px] leading-[16px] w-[250px] lg:w-[400px] text-blackSecondary font-[400] font-[roboto] mt-[12px]">
                            Schedoys Associazione culturale e di promozione sociale
                            Piazza Santa Maria in Via Lata 11, 16128 Genoa, Italy
                        </p>
                        <p className="font-[400] text-[16px] font-[Roboto] mt-[40px]">
                            Mail :{" "}
                            <a
                                href="3"
                                className="text-primary underline"
                            >
                                admission@genoaes.com
                            </a>
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-[12px] text-[18px] mt-[40px]">
                            <a href="#" className="hover:text-[#43AA13]">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-[#43AA13]">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Navigation */}
                    <div className="mt-[24px] md:mt-0 flex  flex-col lg:flex-row gap-[24px] md:gap-[40px] lg:gap-[80px]">
                        <div>
                            <h3 className="font-[300] font-[roboto] text-[16px]">Navigation</h3>
                        </div>
                        <div className="flex flex-wrap font-[roboto] font-[400] h-[70px] gap-[40px] text-[14px] leading-[16px] text-[#193E2C]">
                            <a href="#" className="hover:underline h-[16px]">↳ About us</a>
                            <a href="#" className="hover:underline h-[16px]">↳ Master Program</a>
                            <a href="#" className="hover:underline h-[16px]">↳ Our network</a>
                            <a href="#" className="hover:underline h-[16px]">↳ Why Choose Us?</a>
                            <a href="#" className="hover:underline h-[16px]">↳ Career</a>
                        </div>
                    </div>
                </div>

                {/* Year & Rights Section */}

                <div className="flex flex-col items-end mt-[24px] md:mt-0">
                    <div className="w-full text-right" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                        <p className="text-[40px] leading-[40px] font-[200] font-[roboto]">
                            2024 ©
                        </p>
                        <p className="text-[16px] leading-[16px] font-[200] text-left">All rights reserved</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
