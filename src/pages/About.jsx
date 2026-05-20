import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import CountUp from '../components/CountUp'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'John Smith',    role: 'CEO & Founder',      bio: '15+ years shaping digital brands across the USA.',  img: '/imgs/user1.webp' },
  { name: 'Emily Johnson', role: 'Lead Designer',       bio: 'Award-winning UI/UX & brand identity designer.',    img: '/imgs/user2.webp' },
  { name: 'David Lee',     role: 'Head of Development', bio: 'Full-stack engineer building scalable web apps.',   img: '/imgs/user3.webp' },
  { name: 'Sarah Chen',    role: 'Marketing Head',      bio: 'Expert in SEO, PPC, and social media growth.',      img: '/imgs/user1.webp' },
]

const whyUs = [
  { num: '01', sym: '◈', title: 'Expert Team',         desc: 'Seasoned professionals in design, development, SEO, and digital marketing.' },
  { num: '02', sym: '◉', title: 'Custom Solutions',    desc: 'No templates. Everything built from scratch to match your unique brand.' },
  { num: '03', sym: '◆', title: 'Proven Results',      desc: '95% client satisfaction rate with measurable, data-backed ROI.' },
  { num: '04', sym: '◇', title: 'Transparent Pricing', desc: 'Premium quality without the premium price tag — clear, honest plans.' },
]

const stats = [
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 120, suffix: '+', label: 'Happy Clients' },
  { end: 15,  suffix: '+', label: 'Years Experience' },
  { end: 50,  suffix: '+', label: 'Team Members' },
]

const clients = Array.from({ length: 6 }, (_, i) => `/imgs/clients_clients0${i + 1}.webp`)

const About = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // ── Hero ──
    const heroTl = gsap.timeline({ delay: 0.2 })
    heroTl
      .fromTo('.ab-tag',  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.ab-word', { y: '110%', opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
      .fromTo('.ab-sub',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo('.ab-hbar', { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'expo.out', transformOrigin: 'left' }, '-=0.6')
      .fromTo('.ab-hcta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' }, '-=0.4')

    gsap.fromTo('.ab-hero-img',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut', delay: 0.4 })

    // ── Story ──
    gsap.fromTo('.story-img',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.story-section', start: 'top 75%', once: true } })
    gsap.fromTo('.story-tag',  { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.story-section', start: 'top 80%', once: true } })
    gsap.fromTo('.story-h2',   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.15,
      scrollTrigger: { trigger: '.story-section', start: 'top 80%', once: true } })
    gsap.fromTo('.story-rule', { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'expo.out', transformOrigin: 'left', delay: 0.3,
      scrollTrigger: { trigger: '.story-section', start: 'top 78%', once: true } })
    gsap.fromTo('.story-p',    { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.35,
      scrollTrigger: { trigger: '.story-section', start: 'top 76%', once: true } })
    gsap.fromTo('.story-cta',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)', delay: 0.5,
      scrollTrigger: { trigger: '.story-section', start: 'top 74%', once: true } })

    // ── Stats ──
    gsap.fromTo('.stat-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 82%', once: true } })

    // ── Mission ──
    gsap.fromTo('.mission-text',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: '.mission-section', start: 'top 75%', once: true } })
    gsap.fromTo('.mission-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.4, ease: 'expo.out', transformOrigin: 'center',
        scrollTrigger: { trigger: '.mission-section', start: 'top 72%', once: true } })

    // ── Why Us ──
    gsap.fromTo('.why-heading',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: '.why-section', start: 'top 80%', once: true } })
    gsap.fromTo('.why-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.why-section', start: 'top 80%', once: true } })

    // ── Team ──
    gsap.fromTo('.team-heading',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: '.team-section', start: 'top 80%', once: true } })
    gsap.fromTo('.team-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.team-section', start: 'top 80%', once: true } })

    // ── Clients ──
    gsap.fromTo('.client-logo',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.clients-section', start: 'top 85%', once: true } })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='bg-[#020a14] text-white font-[font2] overflow-x-hidden'>

      {/* ══ HERO ══ */}
      <section className='relative min-h-screen flex flex-col lg:flex-row overflow-hidden'>
        <div className='relative z-10 flex flex-col justify-end pb-12 lg:pb-16 pt-28 lg:pt-36 px-6 lg:px-20 lg:w-[55%] bg-[#020a14]'>
          <div className='absolute inset-0 pointer-events-none select-none'
            style={{
              backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)',
              backgroundSize: '70px 70px',
            }} />
          <div className='relative z-10 max-w-[680px]'>
            <div className='ab-tag inline-flex items-center gap-3 mb-6'>
              <div className='h-px w-8 bg-[#0066ff]' />
              <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Who We Are</span>
            </div>
            <div className='overflow-hidden mb-6'>
              <h1 className='font-[font2] text-[14vw] lg:text-[9vw] uppercase leading-[0.9] flex flex-wrap gap-x-5'>
                {'ABOUT US'.split(' ').map((w, i) => (
                  <span key={i} className='ab-word overflow-hidden inline-block'>
                    <span className='inline-block'>{w}</span>
                  </span>
                ))}
              </h1>
            </div>
            <div className='ab-hbar h-[3px] w-28 bg-[#0066ff] mb-6' />
            <p className='ab-sub font-[font1] text-white/40 text-sm lg:text-base leading-[1.9] max-w-[480px] mb-8'>
              A US-based creative software house delivering web design, development & digital solutions for over 15 years — blending bold creativity with cutting-edge technology.
            </p>
            <div className='ab-hcta flex items-center gap-6 flex-wrap'>
              <Link to='/contact'
                className='bg-[#0066ff] text-white px-8 py-4 font-[font1] text-sm uppercase tracking-[2px] border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300'
                style={{ borderRadius: '10px' }}>
                Work With Us →
              </Link>
              <Link to='/portfolio'
                className='font-[font1] text-[11px] uppercase tracking-[3px] text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2'>
                <span className='h-px w-6 bg-current' />
                Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className='lg:w-[45%] relative min-h-[50vh] lg:min-h-screen overflow-hidden'>
          <div className='ab-hero-img absolute inset-0'>
            <img src='/imgs/aboutimg.webp' alt='About Us' className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-r from-[#020a14] via-transparent to-transparent lg:block hidden' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#020a14] via-transparent to-transparent lg:hidden' />
          </div>
          <div className='absolute bottom-10 left-8 lg:left-12 bg-[#0066ff] text-white p-6 z-10'
            style={{ borderRadius: '14px', boxShadow: '0 20px 50px rgba(0,102,255,0.5)' }}>
            <div className='font-[font2] text-5xl leading-none'><CountUp end={15} suffix="+" duration={2.0} /></div>
            <div className='font-[font1] text-[10px] uppercase tracking-[3px] mt-1 text-white/80'>Years Experience</div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020a14] to-transparent pointer-events-none z-20' />
      </section>

      {/* ══ STORY ══ */}
      <section className='story-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[18vw] uppercase leading-none text-white/[0.02]'>STORY</span>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent' />

        <div className='relative max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center'>
          {/* Image */}
          <div className='lg:w-[48%] w-full relative'>
            <div className='story-img overflow-hidden' style={{ borderRadius: '20px' }}>
              <img src='/imgs/illustrationteenage.webp' alt='Our Story'
                className='w-full h-[380px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' style={{ borderRadius: '20px' }} />
            </div>
            <div className='hidden sm:block absolute -bottom-6 right-2 lg:-right-8 bg-[#020a14] border border-[#0066ff]/25 text-white p-5 z-10'
              style={{ borderRadius: '14px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
              <div className='font-[font2] text-3xl text-[#0066ff]'>2009</div>
              <div className='font-[font1] text-[10px] uppercase tracking-[2px] text-white/50 mt-1'>Founded In USA</div>
            </div>
          </div>

          {/* Text */}
          <div className='lg:w-[52%] w-full flex flex-col gap-6 lg:pl-6'>
            <div className='story-tag flex items-center gap-3'>
              <div className='h-px w-8 bg-[#0066ff]/60' />
              <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Our Story</span>
            </div>
            <h2 className='story-h2 font-[font2] text-4xl lg:text-5xl xl:text-[3.5vw] uppercase leading-[1.05] text-white'>
              We Are A Creative<br /><span className='text-[#0066ff]'>Digital Agency</span>
            </h2>
            <div className='story-rule h-[2px] w-20 bg-gradient-to-r from-[#0066ff] to-transparent' />
            <p className='story-p font-[font1] text-white/40 text-base leading-[1.9]'>
              SOFTWARE ELITES is a full-service digital creative agency founded with a singular mission: to help businesses succeed online. With over 15 years of experience and a passionate team, we have helped hundreds of businesses across the USA transform their digital presence.
            </p>
            <p className='story-p font-[font1] text-white/40 text-base leading-[1.9]'>
              Every customer who hands over their project to us, chooses us again for their next one — because we don't just build websites, we build lasting digital partnerships.
            </p>
            <div className='story-cta flex items-center gap-6 pt-2'>
              <Link to='/contact'
                className='bg-[#0066ff] text-white px-7 py-4 lg:px-10 font-[font1] uppercase tracking-[2px] text-sm border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300'
                style={{ borderRadius: '10px' }}>
                Work With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className='stats-section relative bg-[#0066ff] py-16 lg:py-20 overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        <div className='relative max-w-[1400px] mx-auto px-6 lg:px-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x-2 divide-white/20'>
            {stats.map((s, i) => (
              <div key={i} className='stat-item text-center lg:px-10 group cursor-default'>
                <div className='font-[font2] text-4xl lg:text-7xl text-white leading-none mb-3 group-hover:scale-110 transition-transform duration-300'>
                  <CountUp end={s.end} suffix={s.suffix} duration={2.2} />
                </div>
                <div className='font-[font1] text-white/70 text-xs uppercase tracking-[4px]'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className='mission-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#020a14] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.02) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[16vw] uppercase leading-none text-white/[0.018]'>MISSION</span>
        </div>
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)' }} />
        </div>
        <div className='relative max-w-[900px] mx-auto text-center'>
          <div className='mission-line h-px w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent mx-auto mb-12' />
          <p className='mission-text font-[font2] text-3xl lg:text-5xl xl:text-[3.5vw] uppercase leading-[1.25] text-white'>
            We don't just build <span className='text-[#0066ff]'>websites.</span><br />
            We build <span className='text-[#0066ff]'>digital empires</span><br />
            for our clients.
          </p>
          <div className='mission-line h-px w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent mx-auto mt-12' />
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className='why-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[16vw] uppercase leading-none text-white/[0.02]'>WHY</span>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent' />
        <div className='relative max-w-[1400px] mx-auto'>
          <div className='why-heading flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-px w-8 bg-[#0066ff]/60' />
                <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Our Edge</span>
              </div>
              <h2 className='font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]'>
                Why Choose <span className='text-[#0066ff]'>Us?</span>
              </h2>
            </div>
            <p className='font-[font1] text-white/30 text-sm leading-[1.9] max-w-[340px] lg:text-right'>
              We bring together creativity, strategy, and technology to deliver results that actually move the needle.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {whyUs.map((item, i) => (
              <div key={i}
                className='why-item group flex items-start gap-6 p-8 bg-white/[0.02] border border-white/[0.07] hover:border-[#0066ff]/40 hover:bg-[#0066ff]/5 transition-all duration-400 cursor-default relative overflow-hidden'
                style={{ borderRadius: '18px' }}>
                <div className='absolute top-4 right-6 font-[font2] text-[5rem] text-white/[0.025] leading-none select-none group-hover:text-[#0066ff]/[0.06] transition-colors duration-400'>{item.num}</div>
                <div className='w-12 h-12 flex items-center justify-center text-[#0066ff] text-xl shrink-0 group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-400'
                  style={{ borderRadius: '12px', background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.2)' }}>
                  {item.sym}
                </div>
                <div className='flex-1 relative z-10'>
                  <h3 className='font-[font2] text-xl uppercase text-white mb-2 group-hover:text-[#0066ff] transition-colors duration-300'>{item.title}</h3>
                  <p className='font-[font1] text-white/40 text-sm leading-[1.8] group-hover:text-white/60 transition-colors duration-300'>{item.desc}</p>
                </div>
                <div className='text-white/15 group-hover:text-[#0066ff] transition-all duration-300 text-xl shrink-0 self-center group-hover:translate-x-1'>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className='team-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#020a14] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[16vw] uppercase leading-none text-white/[0.02]'>TEAM</span>
        </div>
        <div className='relative max-w-[1400px] mx-auto'>
          <div className='team-heading flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-px w-8 bg-[#0066ff]/60' />
                <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>The People</span>
              </div>
              <h2 className='font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]'>
                Meet Our <span className='text-[#0066ff]'>Team</span>
              </h2>
            </div>
            <p className='font-[font1] text-white/25 text-sm leading-[1.9] max-w-[300px] lg:text-right'>
              Passionate experts dedicated to building your digital success.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {team.map((member, i) => (
              <div key={i}
                className='team-card group relative bg-white/[0.02] border border-white/[0.07] hover:border-[#0066ff]/30 transition-all duration-400 overflow-hidden'
                style={{ borderRadius: '18px' }}>
                <div className='relative overflow-hidden aspect-[3/4]'>
                  <img src={member.img} alt={member.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400' />
                  <div className='absolute top-4 left-4 bg-[#0066ff] text-white font-[font1] text-[10px] uppercase tracking-wider px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    style={{ borderRadius: '6px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className='absolute bottom-5 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400'>
                    {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, j) => (
                      <div key={j} className='w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-[#0066ff] transition-colors duration-300 cursor-pointer'>
                        <Icon className='text-white text-sm' />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='p-6 border-t border-white/5'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-[font2] text-lg uppercase text-white group-hover:text-[#0066ff] transition-colors duration-300'>{member.name}</h3>
                      <span className='font-[font1] text-[#0066ff]/70 text-[10px] uppercase tracking-[3px] block mt-1'>{member.role}</span>
                    </div>
                    <div className='text-white/15 group-hover:text-[#0066ff] transition-all duration-300 text-lg mt-1 group-hover:translate-x-1'>→</div>
                  </div>
                  <p className='font-[font1] text-white/30 text-sm leading-[1.7] mt-3'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENTS ══ */}
      <section className='clients-section relative py-20 lg:py-28 px-6 lg:px-20 bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent' />
        <div className='relative max-w-[1400px] mx-auto text-center'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='h-px w-8 bg-[#0066ff]/50' />
            <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Companies We've Worked With</span>
            <div className='h-px w-8 bg-[#0066ff]/50' />
          </div>
          <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-white mb-14'>
            Trusted By Industry <span className='text-[#0066ff]'>Leaders</span>
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-16'>
            {clients.map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`}
                className='client-logo h-10 object-contain opacity-25 hover:opacity-70 transition-all duration-400 grayscale hover:grayscale-0 cursor-pointer hover:scale-110' />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className='relative py-24 lg:py-36 px-6 lg:px-20 bg-[#020a14] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div style={{ width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent' />
        <div className='relative max-w-[900px] mx-auto text-center'>
          <div className='flex items-center justify-center gap-3 mb-7'>
            <div className='h-px w-8 bg-[#0066ff]/50' />
            <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Ready To Start?</span>
            <div className='h-px w-8 bg-[#0066ff]/50' />
          </div>
          <h2 className='font-[font2] text-5xl lg:text-7xl uppercase text-white leading-[1.0] mb-6'>
            Let's Build<br />
            <span style={{ background: 'linear-gradient(90deg,#0066ff,#4d99ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Together
            </span>
          </h2>
          <p className='font-[font1] text-white/30 text-sm leading-[1.9] max-w-[480px] mx-auto mb-10'>
            Ready to transform your digital presence? Our team is here to make it happen — on time, every time.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link to='/contact'
              className='font-[font1] text-sm uppercase tracking-[3px] px-10 py-4 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300'
              style={{ borderRadius: '10px' }}>
              Start a Project →
            </Link>
            <Link to='/packages'
              className='font-[font1] text-sm uppercase tracking-[3px] px-10 py-4 border-2 border-white/[0.12] text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300'
              style={{ borderRadius: '10px' }}>
              View Packages
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
