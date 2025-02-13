'use client'
import React, { useState } from "react";
import { navLinks } from "../constant";
import { FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";  

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full z-[50] px-[16px] md:px-[24px] lg:px-[40px]">
            <div className="max-w-[1360px] h-[81px] mx-auto border-b-[1px] border-secondary flex items-center justify-between">

                {/* Logo */}
                <div className="w-[112px] md:w-[150px]">
                    <img src="/logo.png" alt="Logo"  />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <div className="flex items-center gap-[40px]">
                        <ul className="flex items-center gap-[12px]">
                            {navLinks.map((item) => (
                                <li key={item.id} className="py-[8px] px-[18px]">
                                    <a href={item.href || "#"} className="font-[Roboto] font-[400] text-[14px] leading-[24px] text-secondary">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            {/* Language Selector */}
                            <li className="py-[8px] px-[18px]">
                                <a href="#" className="font-[Roboto] font-[400] text-[14px] leading-[24px] text-secondary flex items-center gap-[7px]">
                                    EN <MdKeyboardArrowDown />
                                </a>
                            </li>
                        </ul>

                        {/* Apply Button */}
                        <button className="py-[8px] px-[18px] bg-primary text-[14px] leading-[24px] font-[400] font-[Roboto] text-secondary flex items-center gap-[6px]">
                            Apply <FiArrowRight />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="block lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <img src="/menuIcon.png" alt="Menu" />
                    </button>
                </div>

            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#FCFAF2] shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-[100%]"} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="flex justify-between items-center px-[20px] py-[15px] border-b-[1px] border-gray-200">
                    <span className="text-[18px] font-bold text-secondary">Menu</span>
                    <button onClick={() => setMenuOpen(false)}>
                        <IoMdClose size={34} />
                    </button>
                </div>

                <ul className="flex flex-col px-[20px] py-[10px] gap-[12px]">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href || "#"} className="font-[Roboto] font-[400] text-[14px] leading-[24px] text-black block py-[8px]">
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#" className="font-[Roboto] font-[400] text-[14px] leading-[24px] text-secondary flex items-center gap-[7px] py-[8px]">
                            EN <MdKeyboardArrowDown />
                        </a>
                    </li>
                </ul>

                <div className="px-[20px] mt-[20px]">
                    <button className="w-full py-[8px] bg-primary text-[14px] leading-[24px] font-[400] font-[Roboto] text-secondary flex justify-center items-center gap-[6px]">
                        Apply <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
