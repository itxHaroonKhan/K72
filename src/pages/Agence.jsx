import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { num: '01', title: 'Creativity First', desc: 'We believe bold ideas come from curious minds. Every project starts with a blank canvas and endless possibilities.' },
  { num: '02', title: 'Results Driven', desc: 'We measure success by the impact we create. Every pixel, every line of code serves a purpose.' },
  { num: '03', title: 'Transparent Partnership', desc: 'No hidden agendas. We communicate openly, deliver honestly, and build lasting relationships.' },
  { num: '04', title: 'Future Focused', desc: 'We don\'t just build for today — we architect for tomorrow\'s digital landscape.' },
]

const teamImages = ['/imgs/user1.webp', '/imgs/user2.webp', '/imgs/user3.webp', '/imgs/aboutimg.webp', '/imgs/designanddevelopment.webp']

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  const introRef = useRef(null)
  const valuesRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(() => {
    const heroTl = gsap.timeline({ delay: 0.1 })
    heroTl
      .from('.ag-tag', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.ag-h1 .word', { y: '110%', opacity: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
      .from('.ag-bar', { scaleX: 0, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, '-=0.5')
      .from('.ag-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

    gsap.to(imageDivRef.current, {
      scrollTrigger: { trigger: imageDivRef.current, start: 'top 28%', end: 'top -70%', pin: true, pinSpacing: true, pinReparent: true, pinType: 'transform', scrub: 1, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: (self) => { const idx = self.progress < 1 ? Math.floor(self.progress * teamImages.length) : teamImages.length - 1; imageRef.current.src = teamImages[idx] }
      }
    })

    ;[
      { el: introRef, cls: '.ag-intro', end: '+=500%' },
      { el: valuesRef, cls: '.val-section', end: '+=500%' },
      { el: statsRef, cls: '.ag-stats', end: '+=400%' },
      { el: ctaRef, cls: '.ag-cta', end: '+=400%' },
    ].forEach(({ el, cls, end }) => {
      gsap.set(el.current, { opacity: 0, x: '-120vw', scale: 0.9 })
      const tl = gsap.timeline({
        scrollTrigger: { trigger: cls, start: 'top top', end, pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
      })
      tl.fromTo(el.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
      tl.to(el.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='text-white bg-black font-[font2]'>
      <div className='relative pt-36 pb-24 px-6 lg:px-20 min-h-[70vh] flex items-end bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/imgs/illustrationteenage.webp")] bg-right-bottom bg-no-repeat bg-contain opacity-10'></div>
        <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black'></div>
        <div className='relative z-10 w-full max-w-[1400px] mx-auto'>
          <p className='ag-tag inline-block text-[#0066ff] font-[font1] text-sm uppercase tracking-[5px] mb-6 bg-[#0066ff]/10 px-4 py-2'>Our Agency</p>
          <div className='ag-h1 overflow-hidden'>
            <h1 className='font-[font2] text-[13vw] uppercase leading-[0.85] flex flex-wrap gap-x-4'>
              {'OUR AGENCY'.split(' ').map((w, i) => (<span key={i} className='word overflow-hidden inline-block'><span className='inline-block'>{w}</span></span>))}
            </h1>
          </div>
          <div className='ag-bar h-[3px] w-48 bg-[#0066ff] mt-8'></div>
          <p className='ag-sub font-[font1] text-white/40 text-lg mt-6 max-w-xl'>A creative powerhouse where strategy meets design and technology to build digital excellence.</p>
        </div>
      </div>

      <div className='ag-intro relative h-screen w-full bg-white overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-[#0066ff]/[0.04]">AGENCY</span>
        </div>
        <div ref={introRef} className="absolute inset-0 m-auto h-fit w-[88vw] lg:w-[44vw] max-w-[540px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="p-10 lg:p-14" style={{ borderRadius: '20px' }}>
            <span className="font-[font1] text-[#0066ff] text-xs uppercase tracking-[5px]">Who We Are</span>
            <h2 className="font-[font2] text-3xl lg:text-5xl uppercase text-[#222] leading-tight mt-4 mb-4">Creatively Bold. Technically Sound.</h2>
            <p className="font-[font1] text-[#666] text-base leading-[1.9] mb-4">We are a full-service digital agency built on the belief that great work comes from a blend of curiosity, craft, and collaboration. Every brand has a story — we help you tell yours across every touchpoint.</p>
            <p className="font-[font1] text-[#666] text-base leading-[1.9] mb-6">From startups to established enterprises, we partner with businesses to create digital experiences that drive real impact.</p>
            <Link to='/contact' className="inline-block bg-[#0066ff] text-white px-10 py-4 font-[font1] uppercase tracking-[2px] text-sm hover:bg-transparent hover:text-[#0066ff] border-2 border-[#0066ff] transition-all duration-300">Work With Us →</Link>
          </div>
        </div>
      </div>

      <div className='parent relative'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[28vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[22vw] lg:top-80 top-10 lg:left-[32vw] left-[35vw] z-10 shadow-2xl border border-white/10'>
          <img ref={imageRef} className='h-full object-cover w-full transition-all duration-300' src={teamImages[0]} alt='agency' />
        </div>
        <div className='relative'>
          <div className='lg:mt-[50vh] mt-[25vh] px-6 lg:px-20'>
            <h2 className='text-[14vw] text-center uppercase leading-[0.9] text-white/[0.03] select-none'>OUR AGENCY</h2>
          </div>
        </div>
      </div>

      <div className='val-section relative h-screen w-full bg-[#00050f] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">VALUES</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={valuesRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[70vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white mb-14">What Drives Us</h2>
          <div className="flex flex-col max-h-[60vh] overflow-y-auto">
            {values.map((item, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-start gap-8 py-10 border-t border-white/10 hover:border-[#0066ff] transition-colors duration-500 group cursor-pointer">
                <div className="font-[font2] text-8xl text-[#0066ff]/15 group-hover:text-[#0066ff]/40 transition-colors duration-500 w-28 shrink-0 leading-none">{item.num}</div>
                <div className="flex-1">
                  <h3 className="font-[font2] text-2xl lg:text-3xl uppercase mb-3 group-hover:text-[#0066ff] transition-colors duration-300">{item.title}</h3>
                  <p className="font-[font1] text-white/40 text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-white/20 group-hover:text-[#0066ff] transition-colors duration-300 text-2xl shrink-0 self-center">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='ag-stats relative h-screen w-full overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.03]">SCALE</span>
        </div>
        <div ref={statsRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[70vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="bg-[#0066ff] rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(0,102,255,0.2), 0 30px 70px rgba(0,0,0,0.3)' }}>
            <div className='grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20'>
              {[['500+', 'Projects Delivered', '◈'], ['300+', 'Happy Clients', '◉'], ['15+', 'Years Experience', '◆'], ['50+', 'Team Members', '◇']].map(([num, label, icon], i) => (
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

      <div className='ag-cta relative h-screen w-full bg-[#020a14] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">CREATE</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={ctaRef} className="absolute inset-0 m-auto h-fit w-[88vw] lg:w-[50vw] max-w-[700px] text-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="p-14 lg:p-20" style={{ borderRadius: '20px' }}>
            <span className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[5px]'>Let's Collaborate</span>
            <h2 className='font-[font2] text-5xl lg:text-8xl uppercase leading-[0.85] mt-6 mb-8 text-white'>Ready To Create<br />Something Extraordinary?</h2>
            <Link to='/contact' className='inline-flex items-center gap-3 bg-[#0066ff] text-white font-[font1] text-sm uppercase tracking-[3px] px-12 py-5 border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300 group'>
              Start Your Project <span className='group-hover:translate-x-2 transition-transform duration-300'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
