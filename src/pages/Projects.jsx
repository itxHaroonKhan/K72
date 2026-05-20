import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const projectList = [
  { title: 'E-Commerce Platform', cat: 'Web Development', img: '/imgs/portfolio_web1.webp', desc: 'A fully custom e-commerce solution with real-time inventory, multi-currency support, and AI-powered recommendations.' },
  { title: 'FinTech Dashboard', cat: 'Mobile App', img: '/imgs/portfolio_mob1.webp', desc: 'An intuitive financial analytics dashboard serving 50K+ active users with real-time data visualization.' },
  { title: 'Luxury Brand Identity', cat: 'Branding', img: '/imgs/portfolio_brand1.webp', desc: 'Complete brand overhaul for a premium lifestyle brand including logo, packaging, and digital presence.' },
  { title: 'Healthcare App', cat: 'Mobile App', img: '/imgs/portfolio_mob2.webp', desc: 'Patient-centric healthcare platform connecting doctors and patients with seamless appointment management.' },
  { title: 'SaaS Landing Page', cat: 'Web Design', img: '/imgs/portfolio_web2.webp', desc: 'High-converting landing page for a B2B SaaS startup that increased conversions by 240%.' },
  { title: 'Product Animation Reel', cat: 'Video & Animation', img: '/imgs/portfolio_video-animation_9.webp', desc: 'A compelling 90-second explainer video that simplified complex product features into engaging visuals.' },
  { title: 'Real Estate Portal', cat: 'Web Development', img: '/imgs/portfolio_web3.webp', desc: 'Feature-rich real estate platform with virtual tours, AI property matching, and integrated mortgage tools.' },
  { title: 'Fitness Brand Rebrand', cat: 'Branding', img: '/imgs/portfolio_brand2.webp', desc: 'Complete brand transformation for a fitness chain across 45 locations nationwide.' },
  { title: 'Social Media Campaign', cat: 'Video & Animation', img: '/imgs/portfolio_video-animation_10.webp', desc: 'Viral social media campaign that generated 2M+ impressions in the first week of launch.' },
  { title: 'Education Platform', cat: 'Web Development', img: '/imgs/portfolio_web4.webp', desc: 'Scalable LMS platform serving 100K+ students with live classes, assessments, and progress tracking.' },
  { title: 'Restaurant Mobile App', cat: 'Mobile App', img: '/imgs/portfolio_mob3.webp', desc: 'A seamless ordering and loyalty app for a restaurant chain with 200+ locations.' },
  { title: 'Corporate Website', cat: 'Web Design', img: '/imgs/portfolio_web5.webp', desc: 'Enterprise-level corporate website with CMS integration and multi-language support.' },
]

const Projects = () => {
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(() => {
    const heroTl = gsap.timeline({ delay: 0.1 })
    heroTl
      .from('.pr-tag', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.pr-h1 .word', { y: '110%', opacity: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
      .from('.pr-bar', { scaleX: 0, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, '-=0.5')
      .from('.pr-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

    gsap.set(gridRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl1 = gsap.timeline({
      scrollTrigger: { trigger: '.projects-grid', start: 'top top', end: '+=600%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl1.fromTo(gridRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl1.to(gridRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.set(statsRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl2 = gsap.timeline({
      scrollTrigger: { trigger: '.pr-stats', start: 'top top', end: '+=400%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl2.fromTo(statsRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl2.to(statsRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.set(ctaRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl3 = gsap.timeline({
      scrollTrigger: { trigger: '.pr-cta', start: 'top top', end: '+=400%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl3.fromTo(ctaRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl3.to(ctaRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='text-white bg-black font-[font2]'>
      <div className='relative pt-36 pb-24 px-6 lg:px-20 min-h-[70vh] flex items-end bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/imgs/portfolio_web1.webp")] bg-cover bg-center opacity-[0.06]'></div>
        <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black'></div>
        <div className='relative z-10 w-full max-w-[1400px] mx-auto'>
          <p className='pr-tag inline-block text-[#0066ff] font-[font1] text-sm uppercase tracking-[5px] mb-6 bg-[#0066ff]/10 px-4 py-2'>Case Studies</p>
          <div className='pr-h1 overflow-hidden'>
            <h1 className='font-[font2] text-[13vw] uppercase leading-[0.85] flex flex-wrap gap-x-4'>
              {'OUR PROJECTS'.split(' ').map((w, i) => (
                <span key={i} className='word overflow-hidden inline-block'><span className='inline-block'>{w}</span></span>
              ))}
            </h1>
          </div>
          <div className='pr-bar h-[3px] w-48 bg-[#0066ff] mt-8'></div>
          <p className='pr-sub font-[font1] text-white/40 text-lg mt-6 max-w-xl'>Real projects. Real results. Explore our portfolio of digital solutions that drive business growth.</p>
        </div>
      </div>

      <div className='projects-grid relative h-screen w-full bg-[#00050f] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">WORK</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={gridRef} className="absolute inset-0 m-auto h-fit w-[92vw] lg:w-[80vw] max-w-[1200px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="font-[font1] text-[#0066ff] text-xs uppercase tracking-[4px] block mb-3">Featured Work</span>
              <h2 className="font-[font2] text-4xl lg:text-6xl uppercase leading-tight">Selected <span className="text-[#0066ff]">Projects</span></h2>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 max-h-[70vh] overflow-y-auto'>
            {projectList.map((proj, i) => (
              <div key={i} className='group relative bg-[#020a14] overflow-hidden cursor-pointer'>
                <div className='relative aspect-[16/12] overflow-hidden'>
                  <img src={proj.img} alt={proj.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500'></div>
                  <div className='absolute top-4 left-4'><span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[2px] bg-black/60 px-3 py-1 border border-white/10'>{proj.cat}</span></div>
                </div>
                <div className='p-8 bg-[#020a14] border-t border-white/5 group-hover:border-[#0066ff]/30 transition-colors duration-500'>
                  <h3 className='font-[font2] text-xl lg:text-2xl uppercase mb-3 group-hover:text-[#0066ff] transition-colors duration-300'>{proj.title}</h3>
                  <p className='font-[font1] text-white/30 text-sm leading-relaxed'>{proj.desc}</p>
                  <div className='flex items-center gap-3 mt-6 font-[font1] text-xs uppercase tracking-[3px] text-white/20 group-hover:text-[#0066ff] transition-colors duration-300'>
                    <span>View Case Study</span><span className='transform group-hover:translate-x-2 transition-transform duration-300'>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='pr-stats relative h-screen w-full overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.03]">IMPACT</span>
        </div>
        <div ref={statsRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[70vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="bg-[#0066ff] rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(0,102,255,0.2), 0 30px 70px rgba(0,0,0,0.3)' }}>
            <div className='grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20'>
              {[['95+', 'Total Projects', '◈'], ['300+', 'Happy Clients', '◉'], ['15+', 'Years Experience', '◆'], ['100%', 'Satisfaction Rate', '◇']].map(([num, label, icon], i) => (
                <div key={i} className='flex flex-col items-center justify-center py-12 px-6 text-center group cursor-default'>
                  <div className='text-white/40 text-2xl mb-4 group-hover:text-white transition-colors duration-300'>{icon}</div>
                  <div className='font-[font2] text-6xl lg:text-8xl text-white leading-none'>{num}</div>
                  <div className='font-[font1] text-white/60 text-xs uppercase tracking-[4px] mt-4'>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='pr-cta relative h-screen w-full bg-[#020a14] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">BUILD</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={ctaRef} className="absolute inset-0 m-auto h-fit w-[88vw] lg:w-[50vw] max-w-[700px] text-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="p-14 lg:p-20" style={{ borderRadius: '20px' }}>
            <span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[5px]'>Have A Project?</span>
            <h2 className='font-[font2] text-5xl lg:text-8xl uppercase leading-[0.85] mt-6 mb-8 text-white'>Let's Build Your<br />Next Success Story</h2>
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link to='/contact' className='inline-flex items-center gap-3 bg-[#0066ff] text-white font-[font1] text-sm uppercase tracking-[3px] px-12 py-5 border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300 group'>
                Start Your Project <span className='group-hover:translate-x-2 transition-transform duration-300'>→</span>
              </Link>
              <Link to='/portfolio' className='inline-flex items-center gap-3 border-2 border-white/20 text-white font-[font1] text-sm uppercase tracking-[3px] px-12 py-5 hover:border-white transition-all duration-300'>
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
