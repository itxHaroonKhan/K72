import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const NAV_ITEMS = [
  { title: 'Home',         path: '/',             img1: '/imgs/mainslideimg.webp',    img2: '/imgs/illustrationteenage.webp' },
  { title: 'Services',     path: '/services',     img1: '/imgs/services_webapp.webp', img2: '/imgs/services_seo.webp' },
  { title: 'Portfolio',    path: '/portfolio',    img1: '/imgs/portfolio_web1.webp',  img2: '/imgs/portfolio_web2.webp' },
  { title: 'Technologies', path: '/technologies', img1: '/imgs/technodesign.webp',    img2: '/imgs/technology_html.webp' },
  { title: 'Packages',     path: '/packages',     img1: '/imgs/payment.webp',         img2: '/imgs/ovalcircle.webp' },
  { title: 'About',        path: '/about',        img1: '/imgs/aboutimg.webp',        img2: '/imgs/user1.webp' },
  { title: 'Contact',      path: '/contact',      img1: '/imgs/acheive.webp',         img2: '/imgs/mainslideimg.webp' },
]

const STAIR_COLORS = ['#0066ff', '#0055d4', '#0044aa', '#021830', '#020a14']

const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  const close = () => setNavOpen(false)

  useGSAP(() => {
    if (navOpen) {
      const tl = gsap.timeline()
      // Show container
      tl.set('.fsn-wrap', { display: 'flex' })
      // Stairs wipe in from top, staggered left to right
      tl.fromTo('.fsn-stair',
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 0.5, ease: 'power3.inOut', stagger: { amount: 0.2, from: 'start' } },
        0
      )
      // Header + bottom fade in
      tl.fromTo('.fsn-header, .fsn-footer',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        0.3
      )
      // Links slide up + fade
      tl.fromTo('.fsn-link',
        { y: 60, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.6, ease: 'power3.out', stagger: { amount: 0.35 } },
        0.35
      )
    } else {
      const tl = gsap.timeline()
      // Links out
      tl.to('.fsn-link',
        { y: -40, opacity: 0, rotateX: 20, duration: 0.3, ease: 'power2.in', stagger: { amount: 0.15, from: 'end' } },
        0
      )
      tl.to('.fsn-header, .fsn-footer', { opacity: 0, duration: 0.2 }, 0)
      // Stairs wipe out downward
      tl.to('.fsn-stair',
        { scaleY: 0, transformOrigin: 'bottom', duration: 0.4, ease: 'power3.inOut', stagger: { amount: 0.18, from: 'end' } },
        0.2
      )
      tl.set('.fsn-wrap', { display: 'none' })
    }
  }, [navOpen])

  return (
    <div
      className='fsn-wrap hidden fixed inset-0 z-50 flex-col overflow-hidden'
      style={{ background: '#020a14' }}
    >
      {/* ── Stair columns ── */}
      <div className='absolute inset-0 flex pointer-events-none'>
        {STAIR_COLORS.map((color, i) => (
          <div key={i} className='fsn-stair flex-1 h-full' style={{ background: color, transformOrigin: 'top' }} />
        ))}
      </div>

      {/* ── Subtle grid ── */}
      <div className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      {/* ── Blue radial glow ── */}
      <div className='absolute inset-0 pointer-events-none'
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)' }} />

      {/* ── Content ── */}
      <div className='relative z-10 flex flex-col h-full py-5 lg:py-8'>

        {/* Header */}
        <div className='fsn-header flex items-center justify-between px-6 lg:px-20 flex-shrink-0 mb-4'>
          <Link to="/" onClick={close}>
            <img src="/Logoo.png" alt="Software Elites"
              className='h-7 lg:h-9 w-auto object-contain' style={{ maxWidth: '130px' }} />
          </Link>

          {/* Close button */}
          <div onClick={close}
            className='group w-11 h-11 lg:w-13 lg:h-13 rounded-full border border-white/15 hover:border-[#0066ff] hover:bg-[#0066ff] flex items-center justify-center transition-all duration-300 cursor-pointer flex-shrink-0'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="1" y1="1" x2="15" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="15" y1="1" x2="1" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Nav links */}
        <div className='flex-grow flex flex-col justify-center overflow-y-auto scrollbar-hide'
          style={{ perspective: '800px' }}>
          {NAV_ITEMS.map((item, i) => (
            <div key={i}
              className={`fsn-link relative border-t border-white/[0.06] ${i === NAV_ITEMS.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
              <Link to={item.path} onClick={close}
                className='block w-full group'>
                {/* Static text */}
                <div className='flex items-center justify-between px-6 lg:px-20 py-1.5 lg:py-2.5'>
                  <div className='flex items-center gap-4'>
                    <span className='font-[font1] text-white/25 text-[10px] tracking-[2px]'>0{i + 1}</span>
                    <h3 className='font-[font2] text-lg sm:text-xl lg:text-[3vw] uppercase text-white leading-none tracking-wide'>
                      {item.title}
                    </h3>
                  </div>
                  <span className='font-[font1] text-white/25 text-[10px] uppercase tracking-[3px] hidden lg:block'>
                    View →
                  </span>
                </div>

                {/* Hover reveal row */}
                <div className='moveLink absolute top-0 left-0 w-full h-full flex items-center overflow-hidden'
                  style={{ background: '#0066ff', borderLeft: '3px solid rgba(255,255,255,0.3)' }}>
                  {[...Array(2)].map((_, r) => (
                    <div key={r} className='moveX flex items-center flex-shrink-0'>
                      <h3 className='whitespace-nowrap font-[font2] lg:text-[3vw] text-xl uppercase text-white px-6 leading-none tracking-wide'>{item.title}</h3>
                      <img src={item.img1} alt={item.title} className='lg:h-12 h-8 lg:w-36 w-12 rounded-full object-cover mx-3 flex-shrink-0' />
                      <h3 className='whitespace-nowrap font-[font2] lg:text-[3vw] text-xl uppercase text-white px-6 leading-none tracking-wide'>{item.title}</h3>
                      <img src={item.img2} alt={item.title} className='lg:h-12 h-8 lg:w-36 w-12 rounded-full object-cover mx-3 flex-shrink-0' />
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className='fsn-footer flex items-center justify-between px-6 lg:px-20 pt-4 flex-shrink-0 border-t border-white/[0.04]'>
          <span className='font-[font1] text-white/20 text-[9px] uppercase tracking-[4px]'>Software House — USA</span>
          <div className='flex items-center gap-3'>
            <div className='h-px w-6 bg-[#0066ff]/40' />
            <span className='font-[font1] text-[#0066ff]/50 text-[9px] uppercase tracking-[4px]'>© 2026 Elites</span>
            <div className='h-px w-6 bg-[#0066ff]/40' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FullScreenNav
