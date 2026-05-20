import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeBottomText = () => {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.hbt-btn',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, delay: 2.2, ease: 'power3.out' })
  }, { scope: ref })

  return (
    <div ref={ref} className='font-[font2] flex items-center justify-center gap-2'>
      <div className='hbt-btn lg:border-2 border border-white/70 hover:border-[#0066ff] hover:text-[#0066ff] lg:h-28 h-10 flex items-center px-3 pt-0.5 lg:px-10 rounded-full uppercase transition-all duration-300'>
        <Link className='text-[4vw] lg:text-[2.5vw] lg:mt-4' to='/services'>Services</Link>
      </div>
      <div className='hbt-btn lg:border-2 border border-white/70 hover:border-[#0066ff] hover:text-[#0066ff] lg:h-28 h-10 flex items-center px-3 pt-0.5 lg:px-10 rounded-full uppercase transition-all duration-300'>
        <Link className='text-[4vw] lg:text-[2.5vw] lg:mt-4' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
