import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ["Home", "About", "Projects", "Contact"];

    return (
        <div className="fixed z-[999] h-[75px] w-full px-5 sm:px-10 md:px-20 py-5 flex justify-between items-center backdrop-blur-md bg-zinc-900/60">
            <div className="logo">
                <img src={logo} alt="My Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer" />
            </div>

            <div className="hidden md:flex gap-10">
                {sections.map((item, index) => (
                    <Link
                        key={index}
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className={`text-sm sm:text-md capitalize font-semibold cursor-pointer hover:text-[#004D43] transition-colors ${index === 3 ? "ml-32" : ""}`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX className="text-white text-2xl" /> : <FiMenu className="text-white text-2xl" />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-zinc-900/90 flex flex-col items-center gap-6 py-6 md:hidden">
                    {sections.map((item, index) => (
                        <Link
                            key={index}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="text-lg capitalize font-semibold cursor-pointer hover:text-[#004D43] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
