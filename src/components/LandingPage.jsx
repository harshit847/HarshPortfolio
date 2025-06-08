import React from 'react';

function LandingPage() {
    return (
        <div className="min-h-screen overflow-hidden bg-zinc-900">
            <div className="textstructure mt-32 sm:mt-40 px-5 sm:px-10 md:px-20">
                {["I BUILD", "FULL STACK", "WEB APPS"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-end">
                                {index === 1 && (
                                    <div className="mr-3 sm:mr-5 w-[10vw] sm:w-[8vw] h-[10vw] sm:h-[7vw] -top-[1.5vw] sm:-top-[1.2vw] relative bg-[#004D43] rounded-md"></div>
                                )}
                                <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-none tracking-tighter font-edu font-semibold py-2">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="border-t-[1px] border-zinc-100 mt-20 sm:mt-32 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center py-5 px-5 sm:px-10 md:px-20 text-center sm:text-left">
                {[
                    "Passionate full-stack developer",
                    "Looking for opportunities 🚀",
                    "Problem-solving enthusiast 🔧",
                ].map((item, index) => (
                    <p
                        key={index}
                        className="text-sm sm:text-md font-light tracking-tight leading-snug"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
