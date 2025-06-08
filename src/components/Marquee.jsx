import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className="w-full py-10 sm:py-20 rounded-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className="text-[13vw] max-[90px]:text-[8xl] leading-none font-edu uppercase font-semibold pt-5 sm:pt-10 mb-5"
        >
          I am Harshit Rai
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className="text-[13vw] max-[90px]:text-[8xl] leading-none font-edu uppercase font-semibold pt-5 sm:pt-10 mb-5"
        >
          I am Harshit Rai
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
