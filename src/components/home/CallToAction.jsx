import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  { icon: FaPhoneAlt,     label: 'Phone',    value: '+1 877-513-4503',        href: 'tel:+18775134503' },
  { icon: FaEnvelope,     label: 'Email',    value: 'info@softwareelites.com', href: 'mailto:info@softwareelites.com' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'United States',           href: null },
  { icon: FaClock,        label: 'Hours',    value: 'Mon–Fri · 9AM–6PM EST',   href: null },
];

const CallToAction = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    gsap.fromTo('.cta-tag',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true } });

    gsap.fromTo('.cta-line1',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1,
        scrollTrigger: { trigger: el, start: 'top 78%', once: true } });

    gsap.fromTo('.cta-line2',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.22,
        scrollTrigger: { trigger: el, start: 'top 78%', once: true } });

    gsap.fromTo('.cta-rule',
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1.1, ease: 'expo.out', transformOrigin: 'center', delay: 0.35,
        scrollTrigger: { trigger: el, start: 'top 76%', once: true } });

    gsap.fromTo('.cta-sub',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4,
        scrollTrigger: { trigger: el, start: 'top 74%', once: true } });

    gsap.fromTo('.cta-btn',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.5,
        scrollTrigger: { trigger: el, start: 'top 72%', once: true } });

    gsap.fromTo('.cta-info-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: el, start: 'top 60%', once: true } });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020a14] overflow-hidden py-28 lg:py-40"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Radial blue glow — center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)',
        }} />
      </div>

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.018]">TALK</span>
      </div>

      <div className="relative px-6 lg:px-20 max-w-[1200px] mx-auto text-center">

        {/* Tag */}
        <div className="cta-tag flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-8 bg-[#0066ff]/50" />
          <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Get In Touch</span>
          <div className="h-px w-8 bg-[#0066ff]/50" />
        </div>

        {/* Heading */}
        <div className="overflow-hidden mb-1">
          <h2 className="cta-line1 font-[font2] text-5xl lg:text-7xl xl:text-[7vw] uppercase text-white leading-[1]">
            Let&apos;s Build
          </h2>
        </div>
        <div className="overflow-hidden mb-8">
          <h2 className="cta-line2 font-[font2] text-5xl lg:text-7xl xl:text-[7vw] uppercase leading-[1]"
            style={{
              background: 'linear-gradient(90deg,#0066ff 0%,#4d99ff 50%,#0066ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Something Great
          </h2>
        </div>

        {/* Rule */}
        <div className="cta-rule h-[2px] w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent mx-auto mb-7" />

        {/* Subtitle */}
        <p className="cta-sub font-[font1] text-white/30 text-sm lg:text-base leading-[1.95] max-w-[520px] mx-auto mb-12">
          Our dedicated teams deliver result-guaranteed solutions on time, every time. Ready when you are.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Link
            to="/contact"
            className="cta-btn font-[font1] text-sm uppercase tracking-[3px] px-10 py-4 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300"
            style={{ borderRadius: '10px' }}
          >
            Start a Project →
          </Link>
          <a
            href="tel:+18775134503"
            className="cta-btn font-[font1] text-sm uppercase tracking-[3px] px-10 py-4 border-2 border-white/12 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] transition-all duration-300 flex items-center gap-3"
            style={{ borderRadius: '10px' }}
          >
            <FaPhoneAlt className="text-xs" /> +1 877-513-4503
          </a>
        </div>

        {/* Contact info strip */}
        <div className="border-t border-white/[0.07] pt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="cta-info-item flex flex-col items-center gap-3 group cursor-default">
                <div
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0066ff]/20 group-hover:border-[#0066ff]/50"
                  style={{
                    borderRadius: '14px',
                    background: 'rgba(0,102,255,0.07)',
                    border: '1px solid rgba(0,102,255,0.15)',
                  }}
                >
                  <Icon className="text-[#0066ff] text-sm" />
                </div>
                <div className="text-center">
                  <p className="font-[font1] text-[9px] uppercase tracking-[4px] text-white/20 mb-1">{label}</p>
                  <p className="font-[font2] text-xs uppercase text-white/50 group-hover:text-white transition-colors duration-300">{value}</p>
                </div>
              </div>
            );
            return href
              ? <a key={label} href={href}>{inner}</a>
              : <div key={label}>{inner}</div>;
          })}
        </div>

      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
    </section>
  );
};

export default CallToAction;
