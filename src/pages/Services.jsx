import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from '../components/CountUp'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { name: 'Web Design',             desc: 'Creative, modern designs that captivate and convert. Mobile-first, pixel-perfect across all devices.',             img: '/imgs/services_webapp.webp',             num: '01' },
  { name: 'Website Development',    desc: 'Robust, scalable web solutions using the latest technologies for optimal performance and security.',               img: '/imgs/services_backend.webp',            num: '02' },
  { name: 'Mobile App Development', desc: 'Native & cross-platform apps for iOS and Android with exceptional user experiences.',                             img: '/imgs/services_mobile.webp',             num: '03' },
  { name: 'E-Commerce Solutions',   desc: 'Complete e-commerce with secure payments, inventory management and smooth checkout flow.',                         img: '/imgs/services_ecom.webp',               num: '04' },
  { name: 'SEO Optimization',       desc: 'Data-driven strategies that boost your Google rankings and drive targeted organic traffic.',                       img: '/imgs/services_seo.webp',                num: '05' },
  { name: 'Social Media Marketing', desc: 'Strategic campaigns that build your brand, engage your audience and generate quality leads.',                      img: '/imgs/services_smm.webp',                num: '06' },
  { name: 'UI/UX Design',           desc: 'User-centered design that makes your product intuitive, beautiful and highly effective.',                          img: '/imgs/services_ui.webp',                 num: '07' },
  { name: 'Logo & Branding',        desc: 'Professional logo design and complete brand identity packages that make you stand out.',                           img: '/imgs/services_logoandbranding.webp',    num: '08' },
  { name: 'WordPress Development',  desc: 'Custom WordPress themes and plugins tailored to your specific business needs and goals.',                          img: '/imgs/services_wordpress.webp',          num: '09' },
  { name: 'Website Maintenance',    desc: 'Ongoing maintenance, updates, backups and security monitoring — we keep you running 24/7.',                        img: '/imgs/services_websitemaintenance.webp', num: '10' },
  { name: 'Domain & Hosting',       desc: 'Reliable domain registration and fast, secure hosting for websites of all sizes.',                                 img: '/imgs/services_domainandhosting.webp',   num: '11' },
  { name: 'Video & Animation',      desc: 'Compelling explainer videos and animations that communicate your message powerfully.',                              img: '/imgs/services_videoandanimation.webp',  num: '12' },
]

const process = [
  { num: '01', title: 'Discovery',    desc: 'We start by understanding your business, goals, target audience and competitive landscape in depth.' },
  { num: '02', title: 'Strategy',     desc: 'We craft a tailored digital strategy and detailed project roadmap aligned to your objectives.' },
  { num: '03', title: 'Design',       desc: 'Our creative team designs stunning visuals, wireframes and intuitive user experiences.' },
  { num: '04', title: 'Development',  desc: 'We build robust, scalable solutions using cutting-edge technology stacks and best practices.' },
  { num: '05', title: 'Launch',       desc: 'We deploy, test thoroughly and go live — then monitor continuously for peak performance.' },
]

const stats = [
  { end: 12,  suffix: '+', label: 'Services Offered' },
  { end: 120, suffix: '+', label: 'Happy Clients' },
  { end: 98,  suffix: '%', label: 'Satisfaction Rate' },
  { end: 15,  suffix: '+', label: 'Years Experience' },
]

const Services = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // ── Hero ──
    gsap.fromTo('.sh-tag',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 })

    gsap.fromTo('.sh-h1',
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.35 })

    gsap.fromTo('.sh-bar',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'expo.out', transformOrigin: 'left', delay: 0.55 })

    gsap.fromTo('.sh-sub',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.65 })

    gsap.fromTo('.sh-btns',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.8 })

    gsap.fromTo('.sh-img',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'power4.inOut', delay: 0.4 })

    gsap.fromTo('.sh-stat',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 1.0 })

    // ── Services grid ──
    const gridEl = containerRef.current?.querySelector('.sg-section')
    gsap.fromTo('.sg-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: gridEl, start: 'top 82%', once: true } })

    gsap.fromTo('.sg-card',
      { y: 55, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.65, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: gridEl, start: 'top 80%', once: true } })

    // ── Process ──
    const procEl = containerRef.current?.querySelector('.sp-section')
    gsap.fromTo('.sp-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: procEl, start: 'top 82%', once: true } })

    gsap.fromTo('.sp-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: procEl, start: 'top 80%', once: true } })

    // ── CTA ──
    const ctaEl = containerRef.current?.querySelector('.sc-section')
    gsap.fromTo('.sc-inner > *',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ctaEl, start: 'top 82%', once: true } })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-[#020a14] text-white font-[font2] overflow-x-hidden">

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />

        {/* Left — text */}
        <div className="relative z-10 flex flex-col justify-center pt-28 lg:pt-36 pb-12 lg:pb-16 px-6 lg:px-20 lg:w-[55%]">
          <div className="max-w-[680px]">

            <div className="sh-tag inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0066ff]/60" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">What We Do</span>
            </div>

            <h1 className="sh-h1 font-[font2] text-[12vw] lg:text-[8vw] uppercase leading-[0.9] text-white mb-6">
              Our<br /><span className="text-[#0066ff]">Services</span>
            </h1>

            <div className="sh-bar h-[3px] w-24 bg-gradient-to-r from-[#0066ff] to-transparent mb-7" />

            <p className="sh-sub font-[font1] text-white/35 text-sm lg:text-base leading-[1.95] max-w-[460px] mb-10">
              From creative web design to powerful SEO — we offer everything your business needs to dominate the digital landscape.
            </p>

            <div className="sh-btns flex flex-wrap gap-3 mb-8 lg:mb-14">
              <Link to="/contact"
                className="font-[font1] text-sm uppercase tracking-[2px] px-9 py-4 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300"
                style={{ borderRadius: '10px' }}>
                Start a Project →
              </Link>
              <Link to="/packages"
                className="font-[font1] text-sm uppercase tracking-[2px] px-9 py-4 border-2 border-white/12 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300"
                style={{ borderRadius: '10px' }}>
                View Packages
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-5 lg:gap-8 pt-8 border-t border-white/[0.07]">
              {stats.map((s, i) => (
                <div key={i} className="sh-stat">
                  <div className="font-[font2] text-3xl text-white">
                    <CountUp end={s.end} suffix={s.suffix} duration={2.0} />
                  </div>
                  <div className="font-[font1] text-[9px] uppercase tracking-[3px] text-white/30 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-screen overflow-hidden">
          <div className="sh-img absolute inset-0" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <img src="/imgs/designanddevelopment.webp" alt="Services"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, #020a14 0%, transparent 30%), linear-gradient(to top, #020a14 0%, transparent 40%)' }} />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-12 right-8 z-10 text-center"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(145deg,#0052cc,#0066ff)',
              boxShadow: '0 20px 50px rgba(0,102,255,0.5)',
              padding: '24px 30px',
            }}>
            <div className="font-[font2] text-6xl leading-none text-white">12</div>
            <div className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/70 mt-1">Services</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020a14] to-transparent pointer-events-none z-20" />
      </section>

      {/* ══════════════ SERVICES GRID ══════════════ */}
      <section className="sg-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[18vw] uppercase leading-none text-white/[0.018]">ALL</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="sg-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0066ff]/60" />
                <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Complete List</span>
              </div>
              <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]">
                All <span className="text-[#0066ff]">12</span> Services
              </h2>
            </div>
            <p className="font-[font1] text-white/25 text-sm leading-[1.9] max-w-[300px] lg:text-right">
              Hover any card to explore what we offer for your business growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.04]"
            style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,102,255,0.1)' }}>
            {services.map((srv, i) => (
              <div key={i}
                className="sg-card group relative bg-[#00050f] hover:bg-[#0066ff] transition-all duration-400 p-8 lg:p-9 cursor-pointer overflow-hidden">

                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-[font2] text-[3.5rem] leading-none text-white/[0.04] group-hover:text-white/[0.12] select-none transition-colors duration-400">
                  {srv.num}
                </span>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-transparent group-hover:border-white/30 transition-all duration-400" />

                {/* Icon */}
                <div className="h-14 w-14 mb-7 flex items-center justify-center p-3.5 transition-all duration-400"
                  style={{
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  ref={el => el && el.classList.add('group-hover:bg-white/15', 'group-hover:border-white/20')}
                >
                  <img src={srv.img} alt={srv.name} className="h-full w-full object-contain brightness-0 invert" />
                </div>

                <h3 className="font-[font2] text-base lg:text-[1.05rem] uppercase text-white leading-snug mb-3">{srv.name}</h3>
                <div className="h-px w-8 bg-[#0066ff] group-hover:bg-white/50 mb-4 transition-colors duration-300" />
                <p className="font-[font1] text-white/30 group-hover:text-white/80 text-sm leading-[1.75] transition-colors duration-300">{srv.desc}</p>

                <div className="mt-6 flex items-center gap-2 font-[font1] text-[10px] uppercase tracking-[3px] text-white/20 group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ OUR PROCESS ══════════════ */}
      <section className="sp-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#020a14] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[16vw] uppercase leading-none text-white/[0.018]">PROCESS</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto">

          <div className="sp-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0066ff]/60" />
                <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">How We Work</span>
              </div>
              <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]">
                Our <span className="text-[#0066ff]">Process</span>
              </h2>
            </div>
            <p className="font-[font1] text-white/25 text-sm leading-[1.9] max-w-[300px] lg:text-right">
              A proven 5-step framework that delivers results consistently.
            </p>
          </div>

          <div className="flex flex-col">
            {process.map((step, i) => (
              <div key={i}
                className="sp-item group flex flex-col lg:flex-row items-start gap-4 lg:gap-12 py-7 lg:py-12 border-t border-white/[0.06] hover:border-[#0066ff]/35 transition-colors duration-400 cursor-default">

                {/* Number */}
                <div className="font-[font2] text-5xl lg:text-7xl text-[#0066ff]/12 group-hover:text-[#0066ff]/35 transition-colors duration-400 w-24 shrink-0 leading-none">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-white mb-4 group-hover:text-[#0066ff] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-[font1] text-white/30 text-base leading-[1.95] max-w-[580px] group-hover:text-white/55 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block text-white/10 group-hover:text-[#0066ff] text-2xl shrink-0 self-center group-hover:translate-x-2 transition-all duration-300">→</div>
              </div>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="sc-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[16vw] uppercase leading-none text-white/[0.018]">BUILD</span>
        </div>

        <div className="sc-inner relative max-w-[860px] mx-auto text-center flex flex-col items-center gap-7">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#0066ff]/50" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Ready To Start?</span>
            <div className="h-px w-8 bg-[#0066ff]/50" />
          </div>

          <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.05]">
            Let&apos;s Build Something<br />
            <span className="text-[#0066ff]">Amazing Together</span>
          </h2>

          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent" />

          <p className="font-[font1] text-white/35 text-base leading-[1.95] max-w-[560px]">
            Our dedicated teams work tirelessly to deliver result-guaranteed solutions — on time, every time.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/contact"
              className="font-[font1] text-sm uppercase tracking-[2px] px-10 py-5 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300"
              style={{ borderRadius: '10px' }}>
              Contact Us →
            </Link>
            <Link to="/packages"
              className="font-[font1] text-sm uppercase tracking-[2px] px-10 py-5 border-2 border-white/12 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300"
              style={{ borderRadius: '10px' }}>
              View Packages
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
