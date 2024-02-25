import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Projects() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }
    return (
        <div className='w-full rounded-3xl pb-20'>
            <div className='px-12 pt-20 pb-10 border-b-[1px] border-zinc-500'>
                <h1 className=' text-white text-7xl font-secondary tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-12'>
                <div className='title&buttons'>
                    <div className='title flex gap-[43.3vw] mt-20'>
                        <div className='font-secondary flex items-center'>
                            <div className='h-3 w-3 rounded-full mr-4 bg-zinc-200'></div>
                            <h1>FYDE</h1>
                        </div>
                        <div className='font-secondary flex items-center'>
                            <div className='h-3 w-3 rounded-full mr-4 bg-zinc-200'></div>
                            <h1>VISE</h1>
                        </div>
                    </div>
                    <div className='cards w-full flex whitespace-wrap gap-10 mt-4'>
                        <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardContainer relative w-1/2 h-[65vh]'>
                            <h1 className='absolute flex overflow-hidden z-[9] font-primary text-9xl text-[#CDEA68] left-full top-1/2 -translate-x-[33%] -translate-y-[50%]'>
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block'>
                                        {item}
                                    </motion.span>))
                                }
                            </h1>
                            <div className='card w-full h-full overflow-hidden rounded-xl'>
                                <img className='w-full h-full bg-cover bg-center' src="../images/fyde.png" alt="FYDE" />
                            </div>
                        </motion.div>
                        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardContainer relative w-1/2 h-[65vh]'>
                            <h1 className='absolute flex overflow-hidden z-[9] font-primary text-9xl text-[#CDEA68] right-full top-1/2 translate-x-[46%] -translate-y-[50%]'>
                                {"VISE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block'>
                                        {item}
                                    </motion.span>))}
                            </h1>
                            <div className='card w-full h-full overflow-hidden rounded-xl'>
                                <img className='w-full h-full bg-cover bg-center' src="../images/vise.jpg" alt="vise" />
                            </div>
                        </motion.div>
                    </div>
                    <div className='btn flex gap-[18vw] mt-4'>
                        <div className='left font-extralight'>
                            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map((item, index) => (
                                <button key={index} className='px-3 py-1 border-[1px] rounded-full mr-2'>{item}</button>
                            ))}
                        </div>
                        <div className='right font-extralight'>
                            {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
                                <button key={index} className='px-3 py-1 border-[1px] rounded-full mr-2'>{item}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='title&buttons'>
                    <div className='title flex gap-[43vw] mt-12'>
                        <div className='font-secondary flex items-center'>
                            <div className='h-3 w-3 rounded-full mr-4 bg-zinc-200'></div>
                            <h1>TRAWA</h1>
                        </div>
                        <div className='font-secondary flex items-center'>
                            <div className='h-3 w-3 rounded-full mr-4 bg-zinc-200'></div>
                            <h1>PREMIUM BLEND</h1>
                        </div>
                    </div>
                    <div className='cards w-full flex whitespace-wrap gap-10 mt-4'>
                        <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className='cardContainer relative w-1/2 h-[65vh]'>
                            <h1 className='absolute flex overflow-hidden z-[9] font-primary text-9xl text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                {"TRAWA".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block'>
                                        {item}
                                    </motion.span>))}
                            </h1>
                            <div className='card w-full h-full overflow-hidden rounded-xl'>
                                <img className='w-full h-full bg-cover bg-center' src="../images/trawa.jpg" alt="vise" />
                            </div>
                        </motion.div>
                        <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className='cardContainer relative w-1/2 h-[65vh]'>
                            <h1 className='absolute flex overflow-hidden z-[9] font-primary text-9xl text-[#CDEA68] right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                                {"PREMIUM".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block'>
                                        {item}
                                    </motion.span>))}
                                <span>&nbsp;</span>
                                {"BLEND".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block'>
                                        {item}
                                    </motion.span>))}
                            </h1>
                            <div className='card w-full h-full overflow-hidden rounded-xl'>
                                <img className='w-full h-full bg-cover bg-center' src="../images/premium-blend.png" alt="vise" />
                            </div>
                        </motion.div>
                    </div>
                    <div className='btn flex gap-[18vw] mt-4'>
                        <div className='left font-extralight'>
                            {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map((item, index) => (
                                <button key={index} className='px-3 py-1 border-[1px] rounded-full mr-2'>{item}</button>
                            ))}
                        </div>
                        <div className='right font-extralight'>
                            {["BRANDED TEMPLATE"].map((item, index) => (
                                <button key={index} className='px-3 py-1 border-[1px] rounded-full mr-2'>{item}</button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
