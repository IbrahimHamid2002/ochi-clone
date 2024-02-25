import React, { useState, useEffect } from 'react'

function Question() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    }, [])
    return (
        <div className='relative w-full h-[140vh] bg-[#CDEA68] rounded-3xl overflow-hidden'>
            <div className='absolute z-[99] flex gap-10 top-[39%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[9vw] h-[9vw] rounded-full bg-zinc-900'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-7 px-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[9vw] h-[9vw] rounded-full bg-zinc-900'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-7 px-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] text-zinc-900 question font-primary'>
                <h1 className='text-[15vw] leading-[11vw] tracking-[0.2px] text-center'>READY <br /> TO START <br /> THE PROJECT<span className='font-secondary font-semibold'>?</span></h1>
            </div>
            <div className="absolute w-[100vw] top-[77%] buttons flex flex-col items-center justify-center gap-8">
                <div className='w-[15vw] flex items-center justify-between bg-zinc-800 text-white px-6 rounded-full py-[1.3vw]'>
                    <h1 className='uppercase font-secondary text-sm'>start the project</h1>
                    <span className='w-2 h-2 mt-[0.1vw] rounded-full bg-zinc-200'></span>
                </div>
                <h1 className='leading-none font-secondary text-zinc-800 -mt-2 -mb-2'>OR</h1>
                <div className='w-[16vw] flex items-center justify-between border-[1px] border-zinc-800 px-6 rounded-full py-[1.3vw] text-zinc-800'>
                    <h1 className='uppercase font-secondary text-sm'>HELLO@OCHI.DESIGN</h1>
                    <span className='w-2 h-2 mt-[0.1vw] rounded-full bg-zinc-800'></span>
                </div>
            </div>
        </div>
    )
}

export default Question 
