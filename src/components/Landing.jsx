import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-800 pt-1">
            <div className="textStructure uppercase mt-[11vw] px-12">
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex items-end'>
                                {index === 1 && (
                                    <motion.div initial={{ width: "0" }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-[1vw] w-[9vw] rounded-md h-[5.5vw] relative bg-[url("../images/landing-logo.png")] bg-cover bg-center'></motion.div>
                                )}
                                <h1 className="text-[9vw] leading-[6.5vw] font-primary"> {item} </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='border-t-[1px] font-light border-zinc-700 mt-32 py-5 px-12 flex items-center justify-between'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='font-secondary font-light text-md'>
                        {item}
                    </p>
                ))}

                <div className='start flex items-center gap-[7px]'>
                    <div className='border-[1px] rounded-full px-4 py-2 text-sm font-light uppercase'>
                        Start the Project
                    </div>
                    <div className='w-9 h-9 rounded-full border-[1px] flex items-center justify-center'>
                        <span className='rotate-[40deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
