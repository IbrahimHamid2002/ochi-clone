import React from 'react'
import { motion } from "framer-motion"
function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-32 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
            <div className='text flex border-t-[1px] border-b-[1px] whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{ x: "0%" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='-mt-16 -mb-7 font-primary text-[27.5vw] leading-none tracking-tight pr-20'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{ x: "0%" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='-mt-16 -mb-7 font-primary text-[27.5vw] leading-none tracking-tight pr-20'>WE ARE OCHI</motion.h1>
            </div>
        </div>
    )
}

export default Marquee
