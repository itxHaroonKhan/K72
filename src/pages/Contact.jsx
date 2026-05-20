import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube,
} from 'react-icons/fa'
import ContactForm from '../components/home/ContactForm'

gsap.registerPlugin(ScrollTrigger)

const contactItems = [
  { Icon: FaPhoneAlt,     label: 'Phone',    value: '+1 877-513-4503',         href: 'tel:+18775134503' },
  { Icon: FaEnvelope,     label: 'Email',    value: 'info@softwareelites.com',  href: 'mailto:info@softwareelites.com' },
  { Icon: FaMapMarkerAlt, label: 'Location', value: 'New York, United States',  href: null },
  { Icon: FaClock,        label: 'Hours',    value: 'Mon–Fri · 9AM–6PM EST',   href: null },
]

const socials = [
  { Icon: FaFacebook,  href: '#', label: 'Facebook' },
  { Icon: FaTwitter,   href: '#', label: 'Twitter' },
  { Icon: FaLinkedin,  href: '#', label: 'LinkedIn' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaYoutube,   href: '#', label: 'YouTube' },
]

const Contact = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Hero
    const tl = gsap.timeline({ delay: 0.15 })
    tl.fromTo('.ct-tag',  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.ct-h1',   { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=0.3')
      .fromTo('.ct-bar',  { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'expo.out', transformOrigin: 'left' }, '-=0.5')
      .fromTo('.ct-sub',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')

    // Info cards
    gsap.fromTo('.ct-info-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-main', start: 'top 80%', once: true } })

    // Form wrap
    gsap.fromTo('.ct-form-wrap',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.ct-main', start: 'top 78%', once: true } })

    // FAQ
    gsap.fromTo('.ct-faq-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-faq', start: 'top 82%', once: true } })

    gsap.fromTo('.ct-faq-heading',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-faq', start: 'top 82%', once: true } })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='bg-[#020a14] text-white font-[font2] overflow-x-hidden'>

      {/* ══ HERO ══ */}
      <section className='relative pt-28 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-20 min-h-[60vh] lg:min-h-[65vh] flex items-end overflow-hidden'>

        {/* Grid */}
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />

        {/* Blue radial glow */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div style={{ width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 65%)' }} />
        </div>

        {/* Watermark */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[24vw] uppercase leading-none text-white/[0.018]'>CONTACT</span>
        </div>

        {/* Top glow line */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent' />

        <div className='relative z-10 w-full max-w-[1400px] mx-auto'>
          <div className='ct-tag flex items-center gap-3 mb-6'>
            <div className='h-px w-8 bg-[#0066ff]' />
            <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Get In Touch</span>
          </div>

          <h1 className='ct-h1 font-[font2] leading-[0.88] uppercase mb-6'>
            <span className='block text-[11vw] lg:text-[10vw]'>CONTACT</span>
            <span className='block text-[11vw] lg:text-[10vw] text-[#0066ff]'>US</span>
          </h1>

          <div className='ct-bar h-[3px] w-32 bg-[#0066ff] mb-6' />

          <div className='flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20'>
            <p className='ct-sub font-[font1] text-white/35 text-sm lg:text-base leading-[1.9] max-w-[440px]'>
              We'd love to hear about your project. Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className='flex flex-wrap gap-3 items-center'>
              <a href='tel:+18775134503'
                className='font-[font1] text-sm uppercase tracking-[3px] px-7 py-3.5 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300'
                style={{ borderRadius: '10px' }}>
                Call Now
              </a>
              <a href='mailto:info@softwareelites.com'
                className='font-[font1] text-sm uppercase tracking-[3px] px-7 py-3.5 border-2 border-white/[0.12] text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300'
                style={{ borderRadius: '10px' }}>
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#020a14] to-transparent pointer-events-none' />
      </section>

      {/* ══ MAIN — INFO + FORM ══ */}
      <section className='ct-main relative py-20 lg:py-28 px-6 lg:px-20 bg-[#00050f] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent' />

        <div className='relative max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start'>

          {/* ── Left: Info Panel ── */}
          <div className='lg:w-[36%] w-full flex flex-col gap-6'>

            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-px w-8 bg-[#0066ff]/60' />
                <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Contact Info</span>
              </div>
              <h2 className='font-[font2] text-3xl lg:text-[2.4vw] uppercase text-white leading-[1.05]'>
                Let's Start A<br /><span className='text-[#0066ff]'>Conversation</span>
              </h2>
              <p className='font-[font1] text-white/30 text-sm leading-[1.9] mt-4 max-w-[340px]'>
                Whether you have a question, a project, or just want to say hello — our team is ready.
              </p>
            </div>

            {/* Contact cards */}
            <div className='flex flex-col gap-3'>
              {contactItems.map(({ Icon, label, value, href }, i) => {
                const inner = (
                  <div className='ct-info-card group flex items-center gap-4 p-5 bg-white/[0.02] border border-white/[0.07] hover:border-[#0066ff]/40 hover:bg-[#0066ff]/[0.05] transition-all duration-300 cursor-default'
                    style={{ borderRadius: '14px' }}>
                    <div className='w-11 h-11 shrink-0 flex items-center justify-center text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-300'
                      style={{ borderRadius: '10px', background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.18)' }}>
                      <Icon className='text-[13px]' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='font-[font1] text-white/25 text-[8px] uppercase tracking-[4px] mb-0.5'>{label}</p>
                      <p className='font-[font1] text-sm text-white/55 group-hover:text-white transition-colors duration-300 truncate'>{value}</p>
                    </div>
                    <span className='text-white/15 group-hover:text-[#0066ff] group-hover:translate-x-1 transition-all duration-300 text-xs shrink-0'>→</span>
                  </div>
                )
                return href
                  ? <a key={i} href={href}>{inner}</a>
                  : <div key={i}>{inner}</div>
              })}
            </div>

            {/* Response badge */}
            <div className='flex items-center gap-4 p-5 bg-[#0066ff]/[0.06] border border-[#0066ff]/20'
              style={{ borderRadius: '14px' }}>
              <div className='w-2.5 h-2.5 rounded-full bg-[#0066ff] shrink-0' style={{ boxShadow: '0 0 10px #0066ff' }} />
              <p className='font-[font1] text-[10px] uppercase tracking-[3px] text-white/40'>
                We respond within <span className='text-[#0066ff]'>24 hours</span>
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className='font-[font1] text-white/20 text-[9px] uppercase tracking-[4px] mb-3'>Follow Us</p>
              <div className='flex gap-2.5 flex-wrap'>
                {socials.map((s, i) => (
                  <a key={i} href={s.href} aria-label={s.label}
                    className='w-10 h-10 flex items-center justify-center text-white/25 hover:text-[#0066ff] transition-all duration-300'
                    style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 14px rgba(0,102,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                    <s.Icon className='text-sm' />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: Form Card ── */}
          <div className='ct-form-wrap lg:w-[64%] w-full'>
            <div className='bg-[#020a14] border border-white/[0.08] p-8 lg:p-10'
              style={{
                borderRadius: '24px',
                boxShadow: '0 0 0 1px rgba(0,102,255,0.1), 0 40px 100px rgba(0,0,0,0.55)',
              }}>

              {/* Form header */}
              <div className='flex items-center justify-between mb-8 pb-6 border-b border-white/[0.06]'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='h-px w-6 bg-[#0066ff]/60' />
                    <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Send A Message</span>
                  </div>
                  <h3 className='font-[font2] text-xl uppercase text-white'>Start Your Project</h3>
                </div>
                <div className='hidden lg:flex items-center gap-2 font-[font1] text-[9px] uppercase tracking-[3px] text-white/20 px-4 py-2 border border-white/[0.07]'
                  style={{ borderRadius: '8px' }}>
                  <div className='w-1.5 h-1.5 rounded-full bg-[#22c55e]' />
                  Online Now
                </div>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* ══ FAQ STRIP ══ */}
      <section className='ct-faq relative py-20 lg:py-28 px-6 lg:px-20 bg-[#020a14] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(0,102,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.02) 1px,transparent 1px)',
            backgroundSize: '70px 70px',
          }} />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent' />
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
          <span className='font-[font2] text-[18vw] uppercase leading-none text-white/[0.015]'>FAQ</span>
        </div>

        <div className='relative max-w-[1400px] mx-auto'>
          <div className='ct-faq-heading flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-px w-8 bg-[#0066ff]/50' />
                <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Common Questions</span>
              </div>
              <h2 className='font-[font2] text-4xl lg:text-5xl uppercase text-white leading-[1.0]'>
                Quick <span className='text-[#0066ff]'>Answers</span>
              </h2>
            </div>
            <Link to='/packages'
              className='font-[font1] text-[10px] uppercase tracking-[3px] text-white/35 hover:text-[#0066ff] transition-colors duration-300 flex items-center gap-2 self-start lg:self-end'>
              <span className='h-px w-5 bg-current' /> View All Packages
            </Link>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {[
              { q: 'How long does a website project take?',       a: 'Typically 2–4 weeks depending on complexity. We provide a detailed timeline before starting.' },
              { q: 'Do you offer ongoing support after launch?',  a: 'Yes. All plans include a maintenance period. We also offer monthly retainer support packages.' },
              { q: 'What information do I need to provide?',      a: 'Brand assets, content, and goals are helpful. We guide you through everything if you\'re starting fresh.' },
              { q: 'Can I upgrade my package later?',             a: 'Absolutely. We design with scalability in mind and can upgrade your solution at any time.' },
            ].map(({ q, a }, i) => (
              <div key={i} className='ct-faq-item group p-7 bg-white/[0.02] border border-white/[0.07] hover:border-[#0066ff]/35 hover:bg-[#0066ff]/[0.04] transition-all duration-300 relative overflow-hidden'
                style={{ borderRadius: '18px' }}>
                <div className='absolute top-0 right-0 w-6 h-6 border-t border-r border-transparent group-hover:border-[#0066ff]/50 transition-all duration-400' />
                <div className='absolute bottom-0 left-0 w-6 h-6 border-b border-l border-transparent group-hover:border-[#0066ff]/50 transition-all duration-400' />
                <div className='flex items-start gap-4'>
                  <span className='font-[font2] text-[#0066ff]/30 text-2xl leading-none shrink-0 group-hover:text-[#0066ff]/70 transition-colors duration-300'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className='font-[font2] text-base uppercase text-white mb-3 group-hover:text-[#0066ff] transition-colors duration-300'>{q}</h4>
                    <p className='font-[font1] text-white/35 text-sm leading-[1.8] group-hover:text-white/55 transition-colors duration-300'>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA STRIP ══ */}
      <section className='relative py-16 px-6 lg:px-20 bg-[#0066ff] overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none select-none'
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        <div className='relative max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8'>
          <div>
            <p className='font-[font1] text-white/60 text-[10px] uppercase tracking-[5px] mb-2'>Ready to start?</p>
            <h3 className='font-[font2] text-2xl lg:text-4xl uppercase text-white leading-tight'>
              Let's Build Something <span className='text-white/60'>Amazing</span>
            </h3>
          </div>
          <div className='flex flex-wrap gap-3'>
            <a href='tel:+18775134503'
              className='font-[font1] text-sm uppercase tracking-[3px] px-7 py-3.5 bg-white text-[#0066ff] hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300'
              style={{ borderRadius: '10px' }}>
              +1 877-513-4503
            </a>
            <Link to='/packages'
              className='font-[font1] text-sm uppercase tracking-[3px] px-7 py-3.5 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300'
              style={{ borderRadius: '10px' }}>
              View Packages
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
