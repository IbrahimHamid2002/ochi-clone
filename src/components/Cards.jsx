import React from 'react'

function Cards() {
    return (
        <div className='w-full relative h-screen'>
            <div className='cards absolute top-1/2 -translate-y-2/3 w-full h-[55vh] flex gap-5 px-12'>
                <div className='relative w-1/2 h-full rounded-2xl bg-[#004D43]'>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <span className='absolute top-[85%] left-[5%] text-extralight font-secondary border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full px-3 py-1'>&copy; 2019-2022</span>
                </div>
                <div className='w-1/2 h-full flex gap-5'>
                    <div className='relative w-1/2 h-full rounded-2xl bg-zinc-900'>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className='absolute top-[85%] left-[7%] text-extralight font-secondary border-[1px] rounded-full px-3 py-1'>RATING 5.0 ON CLUTCH</button>
                    </div>
                    <div className='relative w-1/2 h-full rounded-2xl bg-[#212121]'>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8vw]' src="../images/business-alumni.png" alt="" />
                        <button className='absolute top-[85%] left-[9%] text-extralight font-secondary border-[1px] rounded-full px-3 py-1'>BUSINESS BOOTCAMP ALUMNI</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
