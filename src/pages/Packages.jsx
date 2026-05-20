import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ImageTrail from '../components/home/ImageTrail'

gsap.registerPlugin(ScrollTrigger)

const tabs = ['Logo Design', 'Website', 'E-Commerce', 'Social Media', 'SEO', 'Video', 'Branding']

const pricingData = {
  'Logo Design': [
    { name: 'Basic', price: '35', features: ['3 Custom Concepts', '1 Designer', '4 Revisions', '48-72 hrs TAT', 'Unique Design Guarantee'] },
    { name: 'Professional', price: '125', features: ['Unlimited Concepts', '4 Designers', 'Unlimited Revisions', 'Stationary Design', 'All File Formats', 'MS Word Letterhead'], popular: true },
    { name: 'Elite', price: '175', features: ['Unlimited Concepts', '5 Award-Winning Designers', 'Icon Design', 'Free Email Signature', 'Ownership Rights'] },
  ],
  'Website': [
    { name: 'Basic', price: '299', features: ['5 Pages', 'Custom Design', '2 Stock Photos', 'SEO Setup', 'Contact Form', '1 Month Maintenance'] },
    { name: 'Standard', price: '499', features: ['10 Pages', 'Custom Design', 'Advanced SEO', 'Live Chat', 'Google Analytics', '3 Months Maintenance'], popular: true },
    { name: 'Premium', price: '899', features: ['20 Pages', 'Premium Design', 'Full SEO', 'Speed Optimization', 'All Integrations', '6 Months Maintenance'] },
  ],
  'E-Commerce': [
    { name: 'Starter', price: '599', features: ['50 Products', 'PayPal/Stripe', 'Inventory Mgmt', 'Mobile Responsive', 'SSL Certificate'] },
    { name: 'Business', price: '999', features: ['200 Products', 'Multiple Gateways', 'Coupon System', 'SEO Optimized', 'PWA Support', '3 Months Support'], popular: true },
    { name: 'Enterprise', price: '1,999', features: ['Unlimited Products', 'All Gateways', 'Multi-Currency', 'Advanced Analytics', '12 Months Support'] },
  ],
  'Social Media': [
    { name: 'Starter', price: '199', features: ['2 Platforms', '12 Posts/Month', 'Basic Graphics', 'Monthly Report'] },
    { name: 'Growth', price: '349', features: ['4 Platforms', '20 Posts/Month', 'Custom Graphics', 'Paid Ad Mgmt', 'Bi-weekly Reports'], popular: true },
    { name: 'Enterprise', price: '599', features: ['All Platforms', '30 Posts/Month', 'Premium Graphics', 'Paid Ads ($500)', 'Weekly Strategy Call'] },
  ],
  'SEO': [
    { name: 'Basic', price: '299', features: ['10 Keywords', 'On-Page Optimization', 'Monthly Report', 'Google Analytics'] },
    { name: 'Advanced', price: '499', features: ['25 Keywords', 'On+Off Page', '10 Backlinks/mo', 'Local SEO', 'Bi-weekly Reports'], popular: true },
    { name: 'Enterprise', price: '899', features: ['Unlimited Keywords', '30+ Backlinks/mo', 'Content Marketing', 'Competitor Analysis', 'Weekly Reports'] },
  ],
  'Video': [
    { name: 'Basic', price: '199', features: ['30 Sec Video', 'Script Writing', 'Voiceover', 'Background Music', '2 Revisions'] },
    { name: 'Standard', price: '399', features: ['60 Sec Video', 'Custom Illustrations', 'Voiceover', 'Background Music', 'Unlimited Revisions'], popular: true },
    { name: 'Premium', price: '699', features: ['90 Sec Video', '3D Elements', 'Premium Voiceover', 'All File Formats', 'Unlimited Revisions'] },
  ],
  'Branding': [
    { name: 'Basic', price: '499', features: ['Logo Design', 'Business Card', 'Color Palette', 'Brand Guidelines'] },
    { name: 'Complete', price: '999', features: ['Logo + Variations', 'Full Stationery', 'Brand Style Guide', 'Social Media Kit', 'Email Signature'], popular: true },
    { name: 'Premium', price: '1,999', features: ['Full Brand Identity', 'All Print Materials', 'Digital Assets Pack', 'Brand Strategy Doc', '6 Months Support'] },
  ],
}

const Packages = () => {
  const [activeTab, setActiveTab] = useState('Logo Design')
  const containerRef = useRef(null)
  const introRef = useRef(null)
  const tabsRef2 = useRef(null)
  const cardsRef = useRef(null)

  const switchTab = (tab) => {
    setActiveTab(tab)
    gsap.fromTo('.pkg-card',
      { opacity: 0, y: 40, rotationX: -10 },
      { opacity: 1, y: 0, rotationX: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }
    )
  }

  useGSAP(() => {
    const heroTl = gsap.timeline({ delay: 0.1 })
    heroTl
      .from('.pk-tag', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.pk-h1 .word', { y: '110%', opacity: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
      .from('.pk-bar', { scaleX: 0, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, '-=0.5')
      .from('.pk-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

    gsap.set(introRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl1 = gsap.timeline({
      scrollTrigger: { trigger: '.pkg-intro', start: 'top top', end: '+=400%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl1.fromTo(introRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl1.to(introRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.set(tabsRef2.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl2 = gsap.timeline({
      scrollTrigger: { trigger: '.tabs-row', start: 'top top', end: '+=400%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl2.fromTo(tabsRef2.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl2.to(tabsRef2.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.set(cardsRef.current, { opacity: 0, x: '-120vw', scale: 0.9 })
    const tl3 = gsap.timeline({
      scrollTrigger: { trigger: '.cards-wrap', start: 'top top', end: '+=500%', pin: true, scrub: 2.0, anticipatePin: 1, invalidateOnRefresh: true },
    })
    tl3.fromTo(cardsRef.current, { x: '-120vw', opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 }, 0.1)
    tl3.to(cardsRef.current, { scale: 0.3, opacity: 0, ease: 'power2.in', duration: 0.9 }, 1.5)

    gsap.from('.trail-head > *', {
      scrollTrigger: { trigger: '.trail-section', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out'
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='text-white bg-black font-[font2]'>
      <div className='relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-20 min-h-[60vh] lg:min-h-[70vh] flex items-end bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/imgs/payment.webp")] bg-contain bg-right-bottom bg-no-repeat opacity-[0.08]'></div>
        <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black'></div>
        <div className='relative z-10 w-full max-w-[1400px] mx-auto'>
          <p className='pk-tag inline-block text-[#0066ff] font-[font1] text-sm uppercase tracking-[5px] mb-6 bg-[#0066ff]/10 px-4 py-2'>Our Pricing</p>
          <div className='pk-h1 overflow-hidden'>
            <h1 className='font-[font2] text-[13vw] uppercase leading-[0.85] flex flex-wrap gap-x-4'>
              {'PACKAGES'.split(' ').map((w, i) => (<span key={i} className='word overflow-hidden inline-block'><span className='inline-block'>{w}</span></span>))}
            </h1>
          </div>
          <div className='pk-bar h-[3px] w-48 bg-[#0066ff] mt-8'></div>
          <p className='pk-sub font-[font1] text-white/40 text-lg mt-6 max-w-xl'>Transparent, affordable pricing tailored to your business needs.</p>
        </div>
      </div>

      <div className='pkg-intro relative h-screen w-full bg-[#00050f] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">PRICING</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={introRef} className="absolute inset-0 m-auto h-fit w-[88vw] lg:w-[44vw] max-w-[620px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="text-center p-10 lg:p-14" style={{ borderRadius: '20px' }}>
            <span className="font-[font1] text-[#0066ff] text-xs uppercase tracking-[5px]">Our Pricing</span>
            <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-white mt-4 mb-6">Choose The Best Plan</h2>
            <p className="font-[font1] text-white/40 text-base leading-relaxed">We value your money and time. Affordable, result-driven plans for every business size.</p>
          </div>
        </div>
      </div>

      <div className='tabs-row relative h-screen w-full bg-[#020a14] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">PLANS</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={tabsRef2} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[80vw] max-w-[1000px]" style={{ transformStyle: 'preserve-3d' }}>
          <h2 className="font-[font2] text-3xl lg:text-5xl uppercase text-white mb-10 text-center">Select Category</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => switchTab(tab)}
                className={`font-[font1] px-6 py-3 text-sm uppercase tracking-wider border transition-all duration-300 ${activeTab === tab ? 'bg-[#0066ff] border-[#0066ff] text-white' : 'border-white/20 text-white/40 hover:text-white hover:border-white/60'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='cards-wrap relative h-screen w-full bg-[#020a14] overflow-hidden' style={{ perspective: '1400px' }}>
        <div className="absolute inset-0 pointer-events-none select-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">DEALS</span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
        <div ref={cardsRef} className="absolute inset-0 m-auto h-fit w-[90vw] lg:w-[80vw] max-w-[1100px]" style={{ transformStyle: 'preserve-3d' }}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 max-h-[75vh] overflow-y-auto scrollbar-hide'>
            {pricingData[activeTab].map((pkg, i) => (
              <div key={i} className={`pkg-card relative flex flex-col bg-[#00050f] p-7 lg:p-10 transition-all duration-400 hover:bg-[#0066ff]/[0.07] group ${pkg.popular ? 'ring-1 ring-[#0066ff]' : ''}`}>
                {pkg.popular && <div className="absolute top-0 right-0 bg-[#0066ff] text-white font-[font1] text-xs uppercase tracking-[2px] px-4 py-2">Most Popular</div>}
                <div className="mb-8">
                  <span className="font-[font1] text-white/30 text-xs uppercase tracking-widest">Starting At</span>
                  <div className="flex items-start gap-1 mt-3 leading-none">
                    <span className="text-[#0066ff] font-[font2] text-2xl mt-1">$</span>
                    <span className="font-[font2] text-6xl">{pkg.price.replace('$', '')}</span>
                  </div>
                </div>
                <h3 className="font-[font2] text-xl uppercase mb-6 pb-6 border-b border-white/10">{pkg.name} Package</h3>
                <ul className="flex flex-col gap-4 flex-grow mb-10">
                  {pkg.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-3 font-[font1] text-white/50 text-sm group-hover:text-white/70 transition-colors">
                      <FaCheck className="text-[#0066ff] text-xs shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-[font1] uppercase tracking-[2px] text-sm border-2 transition-all duration-300 ${pkg.popular ? 'bg-[#0066ff] border-[#0066ff] hover:bg-transparent hover:text-[#0066ff]' : 'border-white/20 hover:border-[#0066ff] hover:text-[#0066ff]'}`}>
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='trail-section py-16 px-6 lg:px-20 bg-[#020a14] border-t border-white/5'>
        <div className='trail-head text-center mb-8'>
          <p className='font-[font1] text-[#0066ff] text-xs uppercase tracking-[4px] mb-3'>Move Your Cursor</p>
          <h2 className='font-[font2] text-3xl lg:text-5xl uppercase'>Our Work In Motion</h2>
        </div>
        <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
          <ImageTrail variant='3' items={['/imgs/portfolio_web1.webp','/imgs/portfolio_web2.webp','/imgs/portfolio_web3.webp','/imgs/portfolio_web4.webp','/imgs/portfolio_web5.webp','/imgs/portfolio_web6.webp','/imgs/portfolio_web7.webp','/imgs/portfolio_web8.webp']} />
        </div>
      </div>
    </div>
  )
}

export default Packages
