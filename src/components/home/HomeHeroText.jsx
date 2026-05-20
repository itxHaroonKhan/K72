import React, { useRef } from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeHeroText = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 1.3 })

        tl.from('.hero-line', {
            y: 120,
            opacity: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: 'power4.out'
        })

        tl.from('.hero-sub', {
            y: 20,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out'
        }, '-=0.5')

        tl.from('.hero-line-bar', {
            scaleX: 0,
            duration: 0.9,
            ease: 'expo.out',
            transformOrigin: 'left'
        }, '-=0.9')
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='font-[font2] text-center overflow-hidden'>

            {/* Line 1 */}
            <div className='overflow-hidden'>
                <div className='hero-line lg:text-[6.5vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[8vw] tracking-tight'>
                    SOFTWARE ELITES
                </div>
            </div>

            {/* Line 2 — with video oval */}
            <div className='overflow-hidden'>
                <div className='hero-line lg:text-[6.5vw] text-[9vw] justify-center flex items-start uppercase lg:leading-[6vw] leading-[8vw]'>
                    BUILDING
                    <div className='h-[8vw] w-[18vw] lg:h-[5vw] lg:w-[12vw] rounded-full -mt-1 lg:-mt-2 overflow-hidden ml-2 mr-2 lg:ml-3 lg:mr-3 border border-white/20'>
                        <Video />
                    </div>
                    DIGITAL
                </div>
            </div>

            {/* Line 3 */}
            <div className='overflow-hidden'>
                <div className='hero-line lg:text-[6.5vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[8vw]'>
                    SOLUTIONS
                </div>
            </div>

            {/* Animated red bar */}
            <div className='flex justify-center mt-5'>
                <div className='hero-line-bar h-[2px] w-32 bg-[#0066ff]'></div>
            </div>

            {/* Subtitle */}
            <div className='hero-sub font-[font1] text-[11px] lg:text-[1.1vw] text-white/50 mt-4 uppercase tracking-[0.3em] lg:tracking-[0.5em]'>
                Creative Software House — USA
            </div>

        </div>
    )
}

export default HomeHeroText