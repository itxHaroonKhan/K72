import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../CountUp';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '◈', title: 'Design Excellence',  desc: 'Award-winning creative work that sets your brand apart.' },
  { icon: '◈', title: 'Client-First Focus', desc: 'Every decision made with your growth in mind.' },
  { icon: '◈', title: 'USA Based Agency',   desc: 'Trusted across North America, Europe & beyond.' },
];

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imgRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.4, ease: 'power4.inOut',
      }
    );

    gsap.to('.ap-img-inner', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      y: -60, ease: 'none',
    });

    gsap.fromTo('.ap-badge',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.8)', delay: 0.5,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } });

    gsap.fromTo('.ap-float-card',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true } });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.ap-text-block', start: 'top 82%', once: true },
    });
    tl.fromTo('.ap-overtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0)
      .fromTo('.ap-heading',   { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }, 0.1)
      .fromTo('.ap-rule',      { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, 0.3)
      .fromTo('.ap-body',      { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.4)
      .fromTo('.ap-feature',   { y: 25, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out' }, 0.5)
      .fromTo('.ap-cta',       { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' }, 0.85);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#020a14] overflow-hidden py-24 lg:py-36">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/20 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[18vw] uppercase leading-none" style={{ color: 'rgba(255,255,255,0.02)' }}>ABOUT</span>
      </div>

      <div className="relative px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <div className="lg:w-[50%] w-full relative flex-shrink-0">

            {/* Main image */}
            <div ref={imgRef} className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
              <div className="ap-img-inner overflow-hidden" style={{ borderRadius: '20px' }}>
                <img
                  src="/imgs/aboutimg.webp"
                  alt="About Software Elites"
                  className="w-full h-[420px] lg:h-[580px] object-cover scale-110"
                />
              </div>
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                style={{ borderRadius: '20px' }} />

              {/* Bottom-left text overlay */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" style={{ boxShadow: '0 0 10px #0066ff' }} />
                  <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[4px]">Software House</span>
                </div>
                <p className="font-[font2] text-white text-xl lg:text-2xl uppercase leading-tight">
                  Building Digital<br />Excellence Since 2009
                </p>
              </div>
            </div>

            {/* Years badge — top-right overlap */}
            <div className="ap-badge hidden sm:block absolute -top-5 right-2 lg:-right-8 bg-[#0066ff] text-white p-5 lg:p-6 text-center z-10"
              style={{ borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,102,255,0.4)' }}>
              <div className="font-[font2] text-3xl lg:text-5xl leading-none">15+</div>
              <div className="font-[font1] text-[10px] uppercase tracking-[3px] mt-1 text-white/80">Years</div>
            </div>

            {/* Floating stat card — bottom-right overlap */}
            <div className="ap-float-card hidden sm:block absolute -bottom-6 right-2 lg:-right-8 bg-[#020a14] border border-[#0066ff]/20 p-4 lg:p-5 z-10"
              style={{ borderRadius: '14px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-[#0066ff] text-lg">✓</div>
                <div>
                  <div className="font-[font2] text-white text-xl"><CountUp end={120} suffix="+" duration={2.0} /></div>
                  <div className="font-[font1] text-[10px] uppercase tracking-[2px] text-white/35">Happy Clients</div>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: Text ── */}
          <div className="ap-text-block lg:w-[50%] w-full flex flex-col gap-7 lg:pl-4">

            <div className="ap-overtitle flex items-center gap-3">
              <div className="h-px w-8 bg-[#0066ff]/60" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">About Us</span>
              <div className="h-px w-8 bg-[#0066ff]/60" />
            </div>

            <h2 className="ap-heading font-[font2] text-4xl lg:text-5xl xl:text-[3.5vw] uppercase leading-[1.05] text-white">
              Who <span className="text-[#0066ff]">We Are</span> &<br />What We Do
            </h2>

            <div className="ap-rule h-[2px] w-20 bg-gradient-to-r from-[#0066ff] to-transparent" />

            <p className="ap-body font-[font1] text-white/50 text-base lg:text-[1.05rem] leading-[1.9]">
              We are a <strong className="text-white font-semibold">US-based creative software house</strong> with over 15 years of experience delivering web design, development, and digital solutions. Every customer who works with us chooses us again — because we blend style with technology to drive real results.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div key={i}
                  className="ap-feature flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.06] hover:border-[#0066ff]/30 hover:bg-[#0066ff]/[0.05] transition-all duration-300 group"
                  style={{ borderRadius: '12px' }}>
                  <div className="w-9 h-9 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-[#0066ff] shrink-0 group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-300 text-sm">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-[font2] text-white text-sm uppercase tracking-wider mb-0.5">{f.title}</div>
                    <div className="font-[font1] text-white/40 text-sm leading-[1.6]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="ap-cta flex items-center gap-6 flex-wrap pt-2">
              <Link to="/about"
                className="bg-[#0066ff] text-white px-10 py-4 font-[font1] uppercase tracking-[2px] text-sm border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300">
                Learn More →
              </Link>
              <Link to="/contact"
                className="font-[font1] text-[11px] uppercase tracking-[3px] text-white/40 hover:text-[#0066ff] transition-colors duration-300 flex items-center gap-2">
                <span className="h-px w-6 bg-current" />
                Work With Us
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/15 to-transparent" />

    </section>
  );
};

export default AboutPreview;
