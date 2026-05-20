import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from '../components/CountUp'

gsap.registerPlugin(ScrollTrigger)

const techs = [
  { name: 'HTML5',        cat: 'Markup',    img: '/imgs/technology_html.webp',        num: '01', span: 'full', desc: 'Semantic, accessible markup that structures every modern web experience. The foundation of everything we build — clean, standards-compliant and SEO-ready.', tags: ['Semantic', 'Accessible', 'SEO-Ready'] },
  { name: 'CSS3',         cat: 'Styling',   img: '/imgs/technology_css.webp',         num: '02', span: 'half', desc: 'Advanced styling and fluid animations that make your product beautiful on every screen size.', tags: ['Animations', 'Responsive'] },
  { name: 'JavaScript',   cat: 'Language',  img: '/imgs/technology_code.webp',        num: '03', span: 'half', desc: 'Dynamic, interactive logic that breathes life into your product — fast, modern and standards-compliant.', tags: ['ES2024+', 'Interactive'] },
  { name: 'MongoDB',      cat: 'Database',  img: '/imgs/technology_mongo.webp',       num: '04', span: 'full', desc: 'Flexible, scalable NoSQL database designed for high-performance applications. Handles massive datasets with unmatched speed and reliability at any scale.', tags: ['NoSQL', 'Scalable', 'Real-time'] },
  { name: 'Materialize',  cat: 'Framework', img: '/imgs/technology_materialize.webp', num: '05', span: 'half', desc: 'Material design framework for consistent, beautiful UI components that users instantly trust.', tags: ['UI Kit', 'Material'] },
  { name: 'ZEX Protocol', cat: 'Protocol',  img: '/imgs/technology_zex.webp',         num: '06', span: 'half', desc: 'Advanced API gateway ensuring secure, high-speed communication layers between all services.', tags: ['API', 'Secure'] },
]

const process = [
  { num: '01', title: 'Discovery',   desc: 'We deep-dive into your goals, audience and competitive landscape to craft a winning strategy tailored to your business.',  img: '/imgs/discovery.webp' },
  { num: '02', title: 'Design',      desc: 'Stunning wireframes and interactive prototypes crafted by our creative team — iterated until the vision is exactly right.', img: '/imgs/designanddevelopment.webp' },
  { num: '03', title: 'Development', desc: 'Clean, scalable code built with our chosen tech stack and rigorously tested across all devices, browsers and edge cases.',  img: '/imgs/testing.webp' },
  { num: '04', title: 'Launch',      desc: 'We deploy your project, monitor performance and provide ongoing support for continuous growth and peak optimization.',        img: '/imgs/acheive.webp' },
]

const stats = [
  { end: 6,   suffix: '+', label: 'Core Technologies' },
  { end: 15,  suffix: '+', label: 'Years Experience' },
  { end: 120, suffix: '+', label: 'Projects Delivered' },
  { end: 98,  suffix: '%', label: 'Client Satisfaction' },
]

const Technologies = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Hero
    gsap.fromTo('.th-tag',  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 })
    gsap.fromTo('.th-h1',   { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.35 })
    gsap.fromTo('.th-sub',  { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.55 })
    gsap.fromTo('.th-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.7 })
    gsap.fromTo('.th-icon-card', { y: 35, opacity: 0, scale: 0.88 }, { y: 0, opacity: 1, scale: 1, stagger: 0.09, duration: 0.65, ease: 'power3.out', delay: 0.5 })

    // Stats
    gsap.fromTo('.th-stat',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.th-stats', start: 'top 85%', once: true } })

    // Bento header
    gsap.fromTo('.bento-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: '.bento-section', start: 'top 82%', once: true } })

    // Each bento card individually
    document.querySelectorAll('.bento-card').forEach((card) => {
      gsap.fromTo(card,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%', once: true } })
    })

    // Process
    gsap.fromTo('.proc-head',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: '.proc-section', start: 'top 82%', once: true } })

    document.querySelectorAll('.proc-step').forEach((el) => {
      gsap.fromTo(el,
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
    })

    // CTA
    gsap.fromTo('.cta-inner > *',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 82%', once: true } })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-[#020a14] text-white font-[font2] overflow-x-hidden">

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        <div className="absolute inset-0 pointer-events-none select-none z-0"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

        {/* Left — text */}
        <div className="relative z-10 flex flex-col justify-center pt-28 lg:pt-36 pb-12 lg:pb-16 px-6 lg:px-20 lg:w-[52%]">
          <div className="max-w-[620px]">

            <div className="th-tag inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0066ff]/60" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Our Tech Stack</span>
            </div>

            <h1 className="th-h1 font-[font2] leading-[0.9] uppercase text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              We Build<br />With The<br /><span className="text-[#0066ff]">Best</span>
            </h1>

            <div className="h-[3px] w-24 bg-gradient-to-r from-[#0066ff] to-transparent mb-7" />

            <p className="th-sub font-[font1] text-white/35 text-sm lg:text-base leading-[1.95] max-w-[440px] mb-10">
              Carefully chosen, battle-tested tools that ensure every product we build is fast, secure, scalable and built to last.
            </p>

            <div className="th-btns flex flex-wrap gap-4">
              <Link to="/contact"
                className="font-[font1] text-sm uppercase tracking-[2px] px-9 py-4 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300"
                style={{ borderRadius: '10px' }}>
                Start a Project →
              </Link>
              <Link to="/services"
                className="font-[font1] text-sm uppercase tracking-[2px] px-9 py-4 border-2 border-white/12 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300"
                style={{ borderRadius: '10px' }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Right — icon showcase grid */}
        <div className="relative z-10 lg:w-[48%] flex items-center justify-center p-8 lg:p-16 min-h-[60vh] lg:min-h-screen">
          {/* Glow behind grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 65%)' }} />
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[480px]">
            {techs.map((t, i) => (
              <div key={i}
                className="th-icon-card group relative flex flex-col items-center justify-center gap-3 p-6 cursor-default transition-all duration-400 hover:-translate-y-1"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  aspectRatio: '1',
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(0,102,255,0.12) 0%, transparent 70%)', borderRadius: '20px' }} />

                <img src={t.img} alt={t.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" />

                <div className="text-center relative z-10">
                  <p className="font-[font1] text-[8px] uppercase tracking-[2px] text-[#0066ff]/50 group-hover:text-[#0066ff] transition-colors duration-300 mb-0.5">{t.cat}</p>
                  <p className="font-[font2] text-xs uppercase text-white/60 group-hover:text-white transition-colors duration-300">{t.name}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-500" style={{ borderRadius: '0 0 20px 20px' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020a14] to-transparent pointer-events-none z-20" />
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <div className="th-stats bg-[#0066ff] py-8 lg:py-10 px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x-2 divide-white/20">
          {stats.map((s, i) => (
            <div key={i} className="th-stat text-center lg:px-8 group cursor-default">
              <div className="font-[font2] text-4xl lg:text-6xl text-white leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={s.end} suffix={s.suffix} duration={2.2} />
              </div>
              <div className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/70 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════ BENTO TECH GRID ══════ */}
      <section className="bento-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[18vw] uppercase leading-none text-white/[0.018]">STACK</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto">

          <div className="bento-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-18">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0066ff]/60" />
                <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Core Stack</span>
              </div>
              <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]">
                Our <span className="text-[#0066ff]">6</span> Technologies
              </h2>
            </div>
            <p className="font-[font1] text-white/25 text-sm leading-[1.9] max-w-[280px] lg:text-right">
              Each one chosen for performance, longevity and seamless integration.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Full-width: HTML5 */}
            {(() => {
              const t = techs[0]
              return (
                <div className="bento-card lg:col-span-2 group relative overflow-hidden cursor-default transition-all duration-400"
                  style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', minHeight: '220px' }}>
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Content */}
                    <div className="flex-1 p-9 lg:p-12 flex flex-col justify-center">
                      <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/60 group-hover:text-[#0066ff] transition-colors duration-300 mb-3">{t.cat} · {t.num}</span>
                      <h3 className="font-[font2] text-4xl lg:text-5xl uppercase text-white group-hover:text-[#0066ff] transition-colors duration-400 mb-4">{t.name}</h3>
                      <div className="h-px w-10 bg-[#0066ff]/40 mb-5 group-hover:w-20 transition-all duration-500" />
                      <p className="font-[font1] text-sm text-white/35 group-hover:text-white/60 leading-[1.9] max-w-[520px] transition-colors duration-300 mb-5">{t.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {t.tags.map((tag, j) => (
                          <span key={j} className="font-[font1] text-[9px] uppercase tracking-[3px] px-3 py-1.5 text-white/30 group-hover:text-[#0066ff] transition-all duration-300"
                            style={{ borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    {/* Logo side */}
                    <div className="lg:w-64 flex items-center justify-center p-10 opacity-20 group-hover:opacity-60 transition-opacity duration-400">
                      <img src={t.img} alt={t.name} className="w-32 h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, rgba(0,102,255,0.05) 0%, transparent 60%)', borderRadius: '24px' }} />
                </div>
              )
            })()}

            {/* Half cards: CSS3, JavaScript */}
            {techs.slice(1, 3).map((t, idx) => (
              <div key={idx}
                className="bento-card group relative overflow-hidden cursor-default transition-all duration-400"
                style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', minHeight: '280px' }}>
                <div className="p-8 lg:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 flex items-center justify-center transition-all duration-400"
                        style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <img src={t.img} alt={t.name} className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <span className="font-[font2] text-5xl leading-none text-white/[0.06] group-hover:text-[#0066ff]/20 transition-colors duration-400 select-none">{t.num}</span>
                    </div>
                    <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/50 group-hover:text-[#0066ff] transition-colors duration-300 block mb-2">{t.cat}</span>
                    <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-white group-hover:text-[#0066ff] transition-colors duration-400 mb-4">{t.name}</h3>
                    <div className="h-px w-8 bg-[#0066ff]/30 mb-4 group-hover:w-14 transition-all duration-500" />
                    <p className="font-[font1] text-sm text-white/30 group-hover:text-white/55 leading-[1.85] transition-colors duration-300">{t.desc}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-5">
                    {t.tags.map((tag, j) => (
                      <span key={j} className="font-[font1] text-[9px] uppercase tracking-[3px] px-3 py-1.5 text-white/25 group-hover:text-[#0066ff] transition-all duration-300"
                        style={{ borderRadius: '6px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,102,255,0.07) 0%, transparent 65%)', borderRadius: '24px' }} />
              </div>
            ))}

            {/* Full-width: MongoDB */}
            {(() => {
              const t = techs[3]
              return (
                <div className="bento-card lg:col-span-2 group relative overflow-hidden cursor-default transition-all duration-400"
                  style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', minHeight: '220px' }}>
                  <div className="flex flex-col lg:flex-row-reverse h-full">
                    <div className="flex-1 p-9 lg:p-12 flex flex-col justify-center">
                      <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/60 group-hover:text-[#0066ff] transition-colors duration-300 mb-3">{t.cat} · {t.num}</span>
                      <h3 className="font-[font2] text-4xl lg:text-5xl uppercase text-white group-hover:text-[#0066ff] transition-colors duration-400 mb-4">{t.name}</h3>
                      <div className="h-px w-10 bg-[#0066ff]/40 mb-5 group-hover:w-20 transition-all duration-500" />
                      <p className="font-[font1] text-sm text-white/35 group-hover:text-white/60 leading-[1.9] max-w-[520px] transition-colors duration-300 mb-5">{t.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {t.tags.map((tag, j) => (
                          <span key={j} className="font-[font1] text-[9px] uppercase tracking-[3px] px-3 py-1.5 text-white/30 group-hover:text-[#0066ff] transition-all duration-300"
                            style={{ borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-64 flex items-center justify-center p-10 opacity-20 group-hover:opacity-60 transition-opacity duration-400">
                      <img src={t.img} alt={t.name} className="w-32 h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, rgba(0,102,255,0.05) 0%, transparent 60%)', borderRadius: '24px' }} />
                </div>
              )
            })()}

            {/* Half cards: Materialize, ZEX Protocol */}
            {techs.slice(4, 6).map((t, idx) => (
              <div key={idx}
                className="bento-card group relative overflow-hidden cursor-default transition-all duration-400"
                style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', minHeight: '280px' }}>
                <div className="p-8 lg:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 flex items-center justify-center transition-all duration-400"
                        style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <img src={t.img} alt={t.name} className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <span className="font-[font2] text-5xl leading-none text-white/[0.06] group-hover:text-[#0066ff]/20 transition-colors duration-400 select-none">{t.num}</span>
                    </div>
                    <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/50 group-hover:text-[#0066ff] transition-colors duration-300 block mb-2">{t.cat}</span>
                    <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-white group-hover:text-[#0066ff] transition-colors duration-400 mb-4">{t.name}</h3>
                    <div className="h-px w-8 bg-[#0066ff]/30 mb-4 group-hover:w-14 transition-all duration-500" />
                    <p className="font-[font1] text-sm text-white/30 group-hover:text-white/55 leading-[1.85] transition-colors duration-300">{t.desc}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-5">
                    {t.tags.map((tag, j) => (
                      <span key={j} className="font-[font1] text-[9px] uppercase tracking-[3px] px-3 py-1.5 text-white/25 group-hover:text-[#0066ff] transition-all duration-300"
                        style={{ borderRadius: '6px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,102,255,0.07) 0%, transparent 65%)', borderRadius: '24px' }} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ══════ PROCESS — VERTICAL TIMELINE ══════ */}
      <section className="proc-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#020a14] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto">

          <div className="proc-head text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066ff]/50" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">How We Work</span>
              <div className="h-px w-8 bg-[#0066ff]/50" />
            </div>
            <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]">
              Our <span className="text-[#0066ff]">Process</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0066ff]/40 via-[#0066ff]/20 to-transparent -translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {process.map((step, i) => (
                <div key={i}
                  className={`proc-step flex flex-col lg:flex-row items-center gap-6 lg:gap-0 py-8 lg:py-14 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content side */}
                  <div className={`w-full lg:w-[44%] ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className={`group p-8 lg:p-10 transition-all duration-400 cursor-default`}
                      style={{
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                      <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/60 block mb-3">Step {step.num}</span>
                      <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-white mb-4 group-hover:text-[#0066ff] transition-colors duration-300">{step.title}</h3>
                      <div className={`h-px w-10 bg-[#0066ff]/40 mb-4 ${i % 2 !== 0 ? '' : 'lg:ml-auto'}`} />
                      <p className="font-[font1] text-sm text-white/30 group-hover:text-white/55 leading-[1.9] transition-colors duration-300">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-[12%] items-center justify-center relative z-10">
                    <div className="w-5 h-5 rounded-full bg-[#020a14] border-2 border-[#0066ff] flex items-center justify-center"
                      style={{ boxShadow: '0 0 20px rgba(0,102,255,0.5)' }}>
                      <div className="w-2 h-2 rounded-full bg-[#0066ff]" />
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="w-full lg:w-[44%]">
                    <div className="relative overflow-hidden group"
                      style={{ borderRadius: '20px', height: '220px' }}>
                      <img src={step.img} alt={step.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(2,10,20,0.8) 0%, transparent 60%)' }} />
                      <div className="absolute bottom-5 left-6 font-[font2] text-5xl text-white/20 leading-none select-none">
                        {step.num}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="cta-section relative py-24 lg:py-36 px-6 lg:px-20 bg-[#00050f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
        </div>

        <div className="cta-inner relative max-w-[860px] mx-auto text-center flex flex-col items-center gap-7">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#0066ff]/50" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Ready To Build?</span>
            <div className="h-px w-8 bg-[#0066ff]/50" />
          </div>
          <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.05]">
            Let&apos;s Build Something<br /><span className="text-[#0066ff]">Amazing Together</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent" />
          <p className="font-[font1] text-white/35 text-base leading-[1.95] max-w-[540px]">
            Our expert team leverages the best technologies to deliver powerful, scalable solutions tailored to your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/contact"
              className="font-[font1] text-sm uppercase tracking-[2px] px-10 py-5 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300"
              style={{ borderRadius: '10px' }}>
              Contact Us →
            </Link>
            <Link to="/services"
              className="font-[font1] text-sm uppercase tracking-[2px] px-10 py-5 border-2 border-white/12 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300"
              style={{ borderRadius: '10px' }}>
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Technologies
