import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState } from 'react'
import ImageTrail from '../components/home/ImageTrail'

gsap.registerPlugin(ScrollTrigger)

const webProjects = Array.from({ length: 18 }, (_, i) => ({ img: `/imgs/portfolio_web${i + 1}.webp`, cat: 'Web Design', title: `Web Project ${i + 1}` }))
const mobProjects = Array.from({ length: 10 }, (_, i) => ({ img: `/imgs/portfolio_mob${i + 1}.webp`, cat: 'Mobile Apps', title: `Mobile App ${i + 1}` }))
const brandProjects = Array.from({ length: 8 }, (_, i) => ({ img: `/imgs/portfolio_brand${i + 1}.webp`, cat: 'Branding', title: `Brand Project ${i + 1}` }))
const videoProjects = [9, 10, 11, 12, 15, 16].map((n, i) => ({ img: `/imgs/portfolio_video-animation_${n}.webp`, cat: 'Video & Animation', title: `Video Project ${i + 1}` }))

const allProjects = [...webProjects, ...mobProjects, ...brandProjects, ...videoProjects]
const cats = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'Video & Animation']

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All')
  const containerRef = useRef(null)
  const prevRef = useRef(null)
  const statsRef = useRef(null)

  const filtered = activeTab === 'All' ? allProjects : allProjects.filter(p => p.cat === activeTab)

  const switchTab = (cat) => {
    setActiveTab(cat)
    gsap.fromTo('.grid-item',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.03, ease: 'power3.out' }
    )
  }

  useGSAP(() => {
    const heroTl = gsap.timeline({ delay: 0.1 })
    heroTl
      .from('.ph-tag', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.ph-h1 .word', { y: '110%', opacity: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
      .from('.ph-bar', { scaleX: 0, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, '-=0.5')
      .from('.ph-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

    gsap.set(prevRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl1 = gsap.timeline({
      scrollTrigger: { trigger: '.prev-work', start: 'top top', end: '+=500%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl1.fromTo(prevRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl1.to(prevRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.from('.filter-btn', {
      scrollTrigger: { trigger: '.filter-row', start: 'top 90%' },
      y: 30, opacity: 0, duration: 0.4, stagger: 0.07, ease: 'back.out(1.7)'
    })

    gsap.from('.grid-item', {
      scrollTrigger: { trigger: '.grid-wrap', start: 'top 85%' },
      y: 50, opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.03, ease: 'power3.out'
    })

    gsap.set(statsRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl2 = gsap.timeline({
      scrollTrigger: { trigger: '.stats-strip', start: 'top top', end: '+=400%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl2.fromTo(statsRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl2.to(statsRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.from('.trail-heading > *', {
      scrollTrigger: { trigger: '.trail-section', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out'
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='text-white bg-black font-[font2]'>
      <div className='relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-20 min-h-[60vh] lg:min-h-[70vh] flex items-end bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/imgs/portfolio_web1.webp")] bg-cover bg-center opacity-[0.06]'></div>
        <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black'></div>
        <div className='relative z-10 w-full max-w-[1400px] mx-auto'>
          <p className='ph-tag inline-block text-[#0066ff] font-[font1] text-sm uppercase tracking-[5px] mb-6 bg-[#0066ff]/10 px-4 py-2'>Our Work</p>
          <div className='ph-h1 overflow-hidden'>
            <h1 className='font-[font2] text-[13vw] uppercase leading-[0.85] flex flex-wrap gap-x-4'>
              {'PORTFOLIO'.split('').map((c, i) => (<span key={i} className='word overflow-hidden inline-block'><span className='inline-block'>{c}</span></span>))}
            </h1>
          </div>
          <div className='ph-bar h-[3px] w-48 bg-[#0066ff] mt-8'></div>
          <p className='ph-sub font-[font1] text-white/40 text-lg mt-6 max-w-xl'>Over 95 projects completed across web design, mobile apps, branding, and video animation.</p>
        </div>
      </div>

      <div className='prev-work relative h-screen w-full bg-[#00050f] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">WORK</span>
        </div>
        <div ref={prevRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[70vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden group cursor-pointer rounded-2xl">
                <img src='/imgs/prevWork.webp' alt='Previous Work' className='w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                <div className='absolute bottom-6 left-6'>
                  <span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[4px]'>Track Record</span>
                  <h3 className='font-[font2] text-white text-2xl uppercase mt-1'>Digital Excellence</h3>
                </div>
                <div className='absolute top-4 right-4 bg-[#0066ff] text-white font-[font1] text-xs uppercase tracking-[2px] px-3 py-1'>★ Featured</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[6px]'>Track Record</span>
              <h2 className='font-[font2] text-4xl lg:text-5xl uppercase text-white leading-[0.9] mt-4 mb-4'>Decades of Digital Excellence</h2>
              <div className='h-[3px] w-16 bg-[#0066ff] mb-4' />
              <p className='font-[font1] text-white/40 text-base leading-[1.9] mb-6'>We have built a massive portfolio by serving businesses with effective web design and development solutions.</p>
              <div className='grid grid-cols-2 gap-2'>
                {[['57+','Web Projects'],['14+','Brand Projects'],['18+','Mobile Apps'],['6+','Video Projects']].map(([n,l],i)=>(
                  <div key={i} className='bg-[#00050f] p-5 border border-white/5 hover:border-[#0066ff] hover:bg-[#0066ff] transition-all duration-300 group cursor-default rounded-lg'>
                    <div className='font-[font2] text-4xl text-[#0066ff] group-hover:text-white transition-colors duration-300'>{n}</div>
                    <div className='font-[font1] text-xs uppercase tracking-[3px] text-white/30 group-hover:text-white/80 mt-2 transition-colors duration-300'>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='filter-row py-6 px-6 lg:px-20 border-b border-white/5 sticky top-0 bg-black/95 backdrop-blur-sm z-20'>
        <div className='flex flex-wrap gap-2'>
          {cats.map((cat) => (
            <button key={cat} onClick={() => switchTab(cat)}
              className={`filter-btn font-[font1] px-4 py-2 lg:px-6 lg:py-2.5 text-[10px] lg:text-xs uppercase tracking-[2px] border transition-all duration-300 ${activeTab === cat ? 'bg-[#0066ff] border-[#0066ff] text-white' : 'border-white/15 text-white/40 hover:text-white hover:border-white/50'}`}>
              {cat} {activeTab === cat && `(${filtered.length})`}
            </button>
          ))}
        </div>
      </div>

      <div className='grid-wrap py-12 px-6 lg:px-20 bg-[#020a14]'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
          {filtered.map((proj, i) => (
            <div key={i} className='grid-item relative aspect-[4/3] overflow-hidden group cursor-pointer'>
              <img src={proj.img} alt={proj.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' loading='lazy' />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-start justify-end p-4'>
                <span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>{proj.cat}</span>
                <span className='font-[font2] text-white text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>{proj.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='trail-section py-16 px-6 lg:px-20 bg-[#020a14] border-t border-white/5'>
        <div className='trail-heading text-center mb-8'>
          <p className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[4px] mb-3 hidden lg:block'>Move Your Cursor</p>
          <p className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[4px] mb-3 lg:hidden'>Explore Our Work</p>
          <h2 className='font-[font2] text-2xl lg:text-5xl uppercase'>Our Work In Motion</h2>
        </div>
        <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
          <ImageTrail variant='5' items={webProjects.slice(0, 8).map(p => p.img)} />
        </div>
      </div>

      <div className='stats-strip relative h-screen w-full overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.03]">RESULTS</span>
        </div>
        <div ref={statsRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[70vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="bg-[#0066ff] rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(0,102,255,0.2), 0 30px 70px rgba(0,0,0,0.3)' }}>
            <div className='grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20'>
              {[['95+', 'Total Projects', '◈'], ['300+', 'Happy Clients', '◉'], ['15+', 'Years Experience', '◆'], ['100%', 'Satisfaction Rate', '◇']].map(([num, label, icon], i) => (
                <div key={i} className='flex flex-col items-center justify-center py-8 lg:py-12 text-center group cursor-default'>
                  <div className='text-white/40 text-xl mb-3 group-hover:text-white transition-colors duration-300'>{icon}</div>
                  <div className='font-[font2] text-4xl lg:text-8xl text-white leading-none'>{num}</div>
                  <div className='font-[font1] text-white/60 text-[9px] uppercase tracking-[3px] mt-3'>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
