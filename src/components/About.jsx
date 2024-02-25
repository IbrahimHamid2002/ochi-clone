import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.16" className='w-full pt-20 pb-[3vw] rounded-3xl bg-[#CDEA68] text-[#212121]'>
            <div className='first font-secondary px-12 font-[400] text-[4vw] leading-[4.5vw] tracking-tight mb-[4vw]'>
                <h1>Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to raise funds, sell prod­ucts,<br /> ex­plain com­plex ideas, and hire great peo­ple.</h1>
            </div>
            <div className='second mb-[6vw] font-secondary border-t-[1px] border-[#a1b562] py-3 px-12 flex text-lg'>
                <div className='left flex gap-[33vw]'>
                    <h3>What you can expect:</h3>
                    <span className='w-[20.5vw] flex flex-col whitespace-wrap'>
                        <h3>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h3>
                        <h3 className='mt-[3.5vw]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h3>
                    </span>
                </div>
                <div className='right flex flex-col ml-[10vw] mt-[9vw]'>
                    <h3>S:</h3>
                    {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index)=>(
                        <a href="">{item}</a>
                    ))}
                </div>
            </div>
            <div className='third font-secondary border-t-[1px] border-[#a1b562] pt-3 px-12 flex justify-between text-lg'>
                <div className='left py-2'>
                    <h1 className='text-[4vw] tracking-tight leading-none mb-[1.5vw]'>Our approach:</h1>
                    <div className=' w-[13vw] flex items-center gap-[2.6vw] bg-zinc-800 text-white px-8 rounded-3xl py-[1vw]'>
                        <h1 className='uppercase text-sm'>Read More</h1>
                        <span className='w-2 h-2 mt-[0.1vw] rounded-full bg-zinc-200'></span>
                    </div>
                </div>
                <div className='right'>
                    <div className='image w-[49vw] h-[30vw] rounded-3xl bg-green-950'></div>
                </div>
            </div>
        </div>
    )
}

export default About
