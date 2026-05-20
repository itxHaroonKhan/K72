import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { useLocation, Link } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/',            label: 'Home' },
  { path: '/services',    label: 'Services' },
  { path: '/portfolio',   label: 'Portfolio' },
  { path: '/technologies',label: 'Tech' },
  { path: '/about',       label: 'About' },
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()
  const isHome   = location.pathname === '/'
  const lineRef1 = useRef(null)
  const lineRef2 = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleEnter = () => {
    if (lineRef1.current) lineRef1.current.style.width = '100%'
    if (lineRef2.current) lineRef2.current.style.width = '60%'
  }
  const handleLeave = () => {
    if (lineRef1.current) lineRef1.current.style.width = '70%'
    if (lineRef2.current) lineRef2.current.style.width = '40%'
  }

  return (
    <nav className={`z-40 flex fixed top-0 w-full items-center justify-between transition-all duration-500 ${
      scrolled || !isHome
        ? 'bg-[#020a14]/95 backdrop-blur-xl border-b border-[#0066ff]/12 shadow-[0_1px_40px_rgba(0,102,255,0.08)]'
        : 'bg-[#020a14]/40 backdrop-blur-sm border-b border-white/[0.04]'
    }`}>

      {/* ── Logo ── */}
      <Link to="/" className='lg:px-8 lg:py-3.5 px-5 py-2.5 flex items-center flex-shrink-0'>
        <img
          src="/Logoo.png"
          alt="Software Elites"
          className='h-7 lg:h-8 w-auto object-contain'
          style={{ maxWidth: '130px' }}
        />
      </Link>

      {/* ── Center links (desktop) ── */}
      <div className='hidden lg:flex items-center gap-1'>
        {NAV_LINKS.map(({ path, label }) => {
          const active = location.pathname === path
          return (
            <Link key={path} to={path}
              className={`relative font-[font1] text-[10px] uppercase tracking-[3px] px-4 py-2 transition-all duration-300 group ${
                active ? 'text-[#0066ff]' : 'text-white/45 hover:text-white'
              }`}>
              {label}
              {/* Active underline */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#0066ff] transition-all duration-300 ${
                active ? 'w-4' : 'w-0 group-hover:w-3'
              }`} />
            </Link>
          )
        })}
      </div>

      {/* ── Right side: contact link + hamburger ── */}
      <div className='flex items-center flex-shrink-0'>

        {/* Contact link (desktop only) */}
        <Link to='/contact'
          className='hidden lg:flex items-center gap-2 font-[font1] text-[10px] uppercase tracking-[3px] text-white/40 hover:text-[#0066ff] transition-colors duration-300 px-6'>
          <span className='h-px w-4 bg-current' />
          Contact
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setNavOpen(true)}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className='lg:h-[54px] h-[44px] lg:w-[160px] w-[110px] relative overflow-hidden cursor-pointer flex items-center justify-between lg:px-8 px-4 border-l border-[#0066ff]/20 group transition-all duration-300'
          style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(0,102,255,0.06) 100%)' }}
        >
          {/* Hover fill */}
          <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.25) 0%, rgba(0,102,255,0.12) 100%)' }} />

          {/* Blue left accent line */}
          <div className='absolute left-0 top-0 bottom-0 w-[2px] bg-[#0066ff] opacity-60 group-hover:opacity-100 transition-opacity duration-300' />

          {/* Lines */}
          <div className='relative flex flex-col gap-[5px]'>
            <div ref={lineRef1} className='h-[1.5px] bg-white transition-all duration-400' style={{ width: '70%' }} />
            <div ref={lineRef2} className='h-[1.5px] bg-white/60 transition-all duration-400' style={{ width: '40%' }} />
          </div>

          {/* Text */}
          <div className='relative flex flex-col items-end'>
            <span className='font-[font1] text-white text-[8px] uppercase tracking-[3px] leading-none'>Menu</span>
            <span className='font-[font2] text-[#0066ff]/70 text-[10px] leading-none mt-[3px]'>07</span>
          </div>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
