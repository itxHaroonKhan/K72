import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/imgs/portfolio_web1.webp',  tag: 'Web Design',  title: 'Modern Business',  year: '2024', num: '01', total: '07', desc: 'A sleek, conversion-focused website built for a fast-growing tech startup with modern animations and a bold visual identity.' },
  { src: '/imgs/portfolio_web2.webp',  tag: 'Web Design',  title: 'Corporate Site',   year: '2024', num: '02', total: '07', desc: 'Professional corporate website with multi-language support, CMS integration, and enterprise-grade performance optimizations.' },
  { src: '/imgs/portfolio_web3.webp',  tag: 'E-Commerce',  title: 'Premium Store',    year: '2024', num: '03', total: '07', desc: 'Full-featured online store with advanced filtering, seamless checkout flow, and a mobile-first design philosophy.' },
  { src: '/imgs/portfolio_web4.webp',  tag: 'Web Design',  title: 'Creative Agency',  year: '2024', num: '04', total: '07', desc: 'Bold, immersive agency website featuring GSAP scroll animations, 3D transitions, and an award-winning visual language.' },
  { src: '/imgs/portfolio_web5.webp',  tag: 'UI/UX',       title: 'Dashboard Design', year: '2024', num: '05', total: '07', desc: 'Data-rich SaaS dashboard with real-time analytics, customizable widgets, and an intuitive dark-mode interface.' },
  { src: '/imgs/portfolio_mob1.webp',  tag: 'Mobile App',  title: 'Fitness Tracker',  year: '2024', num: '06', total: '07', desc: 'Cross-platform fitness app with real-time tracking, AI-powered goal setting, and integrated social sharing features.' },
  { src: '/imgs/portfolio_brand1.webp',tag: 'Branding',    title: 'Identity System',  year: '2024', num: '07', total: '07', desc: 'Complete brand identity from logo design to full visual language, typography system, and comprehensive brand guidelines.' },
];

const ScrollImageReveal = () => {
  const sectionRef  = useRef(null);
  const cardRefs    = useRef([]);
  const [progressWidths, setProgressWidths] = useState(images.map(() => 0));

  useEffect(() => {
    images.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'image'; link.href = img.src;
      document.head.appendChild(link);
    });
  }, []);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const total    = images.length;

    cardRefs.current.forEach((ref, i) => {
      const startX = i % 2 === 0 ? '-140vw' : '140vw';
      const rotY   = isMobile ? 0 : (i % 2 === 0 ? -18 : 18);
      gsap.set(ref, { x: startX, opacity: 0, scale: 0.82, rotateY: rotY });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${total * 150}%`,
      onUpdate: self => {
        const p   = self.progress;
        const idx = Math.min(Math.floor(p * total), total - 1);
        setProgressWidths(images.map((_, i) => {
          if (i < idx)  return 100;
          if (i === idx) return (p * total - idx) * 100;
          return 0;
        }));
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${total * 150}%`,
        pin: true,
        scrub: 1.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo('.sir-label',  { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0);
    tl.fromTo('.sir-bottom', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.2);

    cardRefs.current.forEach((ref, i) => {
      const offset   = i * 2.5;
      const fromX    = i % 2 === 0 ? '-140vw' : '140vw';
      const fromRotY = isMobile ? 0 : (i % 2 === 0 ? -18 : 18);

      tl.fromTo(ref,
        { x: fromX, y: 0, opacity: 0, scale: 0.82, rotateY: fromRotY },
        { x: 0,     y: 0, opacity: 1, scale: 1,    rotateY: 0, ease: 'power3.out', duration: 1.4 },
        offset
      );
      tl.to(ref,
        { y: '120vh', opacity: 0, scale: 0.65, rotateX: 20, ease: 'power2.in', duration: 1.1 },
        offset + 1.5
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#020a14] overflow-hidden flex flex-col"
      style={{ perspective: '1600px' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.022) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.022) 1px,transparent 1px)',
          backgroundSize: '65px 65px',
        }} />

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />

      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[24vw] uppercase leading-none text-white/[0.018]">WORK</span>
      </div>

      {/* ── Top Label — block element, always above cards ── */}
      <div className="sir-label relative z-20 flex-shrink-0 px-6 lg:px-20 pt-6 lg:pt-8 pb-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#0066ff]/60" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Scroll to Reveal</span>
          </div>
          <h2 className="font-[font2] text-2xl lg:text-4xl xl:text-[3vw] uppercase text-white leading-[1.1]">
            Our <span className="text-[#0066ff]">Portfolio</span> Showcase
          </h2>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-1 pt-1">
          <span className="font-[font1] text-[10px] uppercase tracking-[4px] text-white/25">Projects</span>
          <span className="font-[font2] text-3xl text-white/10">0{images.length}</span>
        </div>
      </div>

      {/* ── Cards area — flex-grow, cards centered inside ── */}
      <div className="relative flex-grow overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            ref={el => cardRefs.current[i] = el}
            className="absolute"
            style={{
              transformStyle: 'preserve-3d',
              width: 'min(96vw, 1300px)',
              height: 'clamp(300px, 78%, 560px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
          {/* Blue glow */}
          <div className="absolute -inset-4 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)', borderRadius: '40px' }} />

          <div
            className="relative flex flex-col lg:flex-row overflow-hidden w-full h-full"
            style={{
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #070f1e 0%, #050d18 60%, #060e1a 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 0 1px rgba(0,102,255,0.18), 0 60px 120px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#0066ff]/30 pointer-events-none" style={{ borderRadius: '28px 0 0 0' }} />
            <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-[#0066ff]/20 pointer-events-none" style={{ borderRadius: '0 0 28px 0' }} />

            {/* ── Image side ── */}
            <div className="relative overflow-hidden shrink-0 w-full h-[44%] lg:w-[32%] lg:h-full">
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, transparent 45%, #060e1a 98%)' }} />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #060e1a 0%, transparent 45%)' }} />

              {/* Tag pill */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5"
                style={{ borderRadius: '50px', background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.3)', backdropFilter: 'blur(8px)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" style={{ boxShadow: '0 0 8px #0066ff' }} />
                <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[4px]">{img.tag}</span>
              </div>

              {/* Year */}
              <div className="absolute top-5 right-5 font-[font1] text-[10px] uppercase tracking-[3px] text-white/50 px-3 py-1.5"
                style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                {img.year}
              </div>

              {/* Number watermark */}
              <div className="absolute bottom-2 left-5 font-[font2] leading-none select-none text-white/[0.04]"
                style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>
                {img.num}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0066ff]/60 via-[#0066ff]/20 to-transparent" />
            </div>

            {/* ── Content side ── */}
            <div className="flex-grow px-7 py-6 lg:px-10 lg:py-10 flex flex-col justify-between overflow-hidden">

              {/* Counter */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-[font2] text-[#0066ff] text-xl leading-none">{img.num}</span>
                  <span className="font-[font1] text-white/20 text-[10px] uppercase tracking-[2px]">/ {img.total}</span>
                </div>
                <div className="h-px flex-grow mx-5 bg-white/[0.06]" />
                <div className="w-7 h-7 rounded-full border border-[#0066ff]/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" style={{ boxShadow: '0 0 6px #0066ff' }} />
                </div>
              </div>

              {/* Main text */}
              <div className="flex flex-col gap-4">
                <div className="h-[2px] w-10 bg-gradient-to-r from-[#0066ff] to-transparent" />

                <span className="font-[font1] text-[9px] uppercase tracking-[5px] text-[#0066ff]/70 px-3 py-1.5 w-fit"
                  style={{ borderRadius: '6px', background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.15)' }}>
                  {img.tag}
                </span>

                <h3 className="font-[font2] uppercase text-white leading-[1.0]"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 40px)' }}>
                  {img.title}
                </h3>

                <p className="font-[font1] text-white/40 leading-[1.85]"
                  style={{ fontSize: 'clamp(12px, 0.9vw, 14px)', maxWidth: '320px' }}>
                  {img.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 font-[font1] text-[11px] uppercase tracking-[3px] text-white/50 hover:text-[#0066ff] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-[#0066ff]/50 group-hover:bg-[#0066ff]/10 flex items-center justify-center transition-all duration-300 text-base">
                    →
                  </div>
                  View Project
                </Link>
                <span className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/15">{img.year}</span>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>{/* end cards area */}

      {/* ── Bottom bar — flex-shrink-0 so it stays at bottom ── */}
      <div className="sir-bottom relative z-20 flex-shrink-0 px-6 lg:px-20 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/25">Progress</span>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <div key={i} className="h-[3px] w-6 lg:w-10 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0066ff]/60 rounded-full transition-all duration-200 ease-out"
                  style={{ width: `${progressWidths[i]}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#0066ff]/30" />
          <span className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/25">Scroll Down</span>
          <div className="w-4 h-4 border border-white/15 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-2 bg-white/30 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
    </section>
  );
};

export default ScrollImageReveal;
