import React, { useEffect, useState } from 'react'

function Playful() {
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
        <div className='w-full h-screen rounded-3xl overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-screen bg-cover bg-center bg-[url("../images/playful.jpg")]'>
                <div className='absolute flex gap-10 top-[39%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
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
            </div>
        </div>
    )
}

export default Playful
