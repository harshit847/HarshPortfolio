import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import chat from "../assets/chat.png";
import bags from "../assets/bags.png";

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className="font-edu text-black bg-slate-400 rounded-3xl container mx-auto sm:pt-20 pt-10 px-5 sm:px-10">
            <div className="w-full border-b-[1px] border-zinc-700 pb-5">
                <h1 className="text-4xl sm:text-6xl px-2 sm:px-10 py-1">My Projects</h1>
            </div>

            <div className="py-10 flex flex-col md:flex-row gap-10 justify-center items-center">
                {/* Chat App Card */}
                <motion.div
                    onHoverStart={() => handleHoverStart(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="cardcontainer cursor-pointer relative w-full md:max-w-[500px]"
                >
                    <h1 className="mb-4 flex gap-2 items-center tracking-wide">
                        <span className="w-2 h-2 bg-black rounded-full"></span> Chat-App
                    </h1>
                    

                    <div className="card w-full h-[250px] sm:h-[300px] flex items-center rounded-xl overflow-hidden">
                        <img
                            className="w-full h-auto object-cover hover:scale-105 transition-all"
                            src={chat}
                            alt="chat app"
                        />
                    </div>
                </motion.div>

                {/* E-Commerce Card */}
                <motion.div
                    onHoverStart={() => handleHoverStart(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="cardcontainer cursor-pointer relative w-full md:max-w-[500px]"
                >
                    <h1 className="mb-4 flex gap-2 items-center tracking-wide">
                        <span className="w-2 h-2 bg-black rounded-full"></span> E-commerce Website
                    </h1>

                    

                    <div className="card w-full h-[250px] sm:h-[300px] flex items-center rounded-xl overflow-hidden">
                        <img
                            className="w-full h-auto object-cover hover:scale-105 transition-all"
                            src={bags}
                            alt="e-commerce site"
                        />
                    </div>
                </motion.div>
            </div>

            <div className="m-auto mt-5 rounded-full flex gap-2 justify-center w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase cursor-pointer hover:scale-105 transition-all">
                <a href="https://github.com/harshit847" target="_blank" className="transparent-decoration">View My Github Repository</a>
                <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
            <br></br>
        </div>
    );
}

export default Featured;
