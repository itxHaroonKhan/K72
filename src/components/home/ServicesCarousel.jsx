import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: 'Web Design',             desc: 'Creative, modern designs that captivate and convert.',          img: '/imgs/services_webapp.webp',             num: '01' },
  { name: 'Website Development',    desc: 'Robust, scalable web solutions using latest technologies.',     img: '/imgs/services_backend.webp',            num: '02' },
  { name: 'Mobile App Development', desc: 'Native & cross-platform apps for iOS and Android.',             img: '/imgs/services_mobile.webp',             num: '03' },
  { name: 'E-Commerce Solutions',   desc: 'Complete e-commerce with secure payments & smooth checkout.',   img: '/imgs/services_ecom.webp',               num: '04' },
  { name: 'SEO Optimization',       desc: 'Data-driven strategies that boost Google rankings.',             img: '/imgs/services_seo.webp',                num: '05' },
  { name: 'Social Media Marketing', desc: 'Strategic campaigns that build your brand and generate leads.', img: '/imgs/services_smm.webp',                num: '06' },
  { name: 'UI/UX Design',           desc: 'User-centered design that makes your product intuitive.',        img: '/imgs/services_ui.webp',                 num: '07' },
  { name: 'Logo & Branding',        desc: 'Professional logos and complete brand identity packages.',       img: '/imgs/services_logoandbranding.webp',    num: '08' },
  { name: 'WordPress Development',  desc: 'Custom WordPress themes and plugins for your business.',         img: '/imgs/services_wordpress.webp',          num: '09' },
  { name: 'Website Maintenance',    desc: 'Ongoing updates, backups and security monitoring.',              img: '/imgs/services_websitemaintenance.webp', num: '10' },
  { name: 'Domain & Hosting',       desc: 'Reliable domain registration and fast, secure hosting.',         img: '/imgs/services_domainandhosting.webp',   num: '11' },
  { name: 'Video & Animation',      desc: 'Compelling videos and animations that communicate powerfully.',  img: '/imgs/services_videoandanimation.webp',  num: '12' },
];

const ServicesCarousel = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    gsap.set(wrapperRef.current, { opacity: 0, x: '-120vw', scale: 0.88 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=350%',
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.from('.srv-label', { y: 40, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0);

    tl.fromTo(wrapperRef.current,
      { x: '-120vw', opacity: 0, scale: 0.88 },
      { x: 0,        opacity: 1, scale: 1,    ease: 'power3.out', duration: 1.2 },
      0.1
    );
    tl.to(wrapperRef.current,
      { scale: 0.25, opacity: 0, ease: 'power2.in', duration: 0.9 },
      1.6
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#020a14] overflow-hidden"
      style={{ perspective: '1400px' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[22vw] uppercase leading-none text-white/[0.02]">SERVICES</span>
      </div>

      {/* Label */}
      <div className="srv-label absolute top-8 lg:top-12 left-1/2 -translate-x-1/2 text-center z-20 whitespace-nowrap">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-8 bg-[#0066ff]/50" />
          <p className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">What We Offer</p>
          <div className="h-px w-8 bg-[#0066ff]/50" />
        </div>
        <h2 className="font-[font2] text-3xl lg:text-4xl uppercase text-white tracking-wider">
          Our <span className="text-[#0066ff]">Services</span>
        </h2>
      </div>

      {/* Sliding wrapper — same old-style animation, new card UI */}
      <div
        ref={wrapperRef}
        className="absolute inset-0 m-auto h-fit w-[92vw] lg:w-[82vw] max-w-[1200px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-[#0066ff]/60" />
            <span className="font-[font1] text-white/30 text-[10px] uppercase tracking-[4px]">12 Services Available</span>
          </div>
          <Link to="/services"
            className="font-[font1] text-[10px] uppercase tracking-[3px] text-[#0066ff] hover:text-white transition-colors duration-300 flex items-center gap-2">
            View All Services →
          </Link>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: '.srv-next', prevEl: '.srv-prev' }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((srv, i) => (
            <SwiperSlide key={i}>
              <div className="group relative bg-white/[0.03] hover:bg-[#0066ff] border border-white/[0.07] hover:border-[#0066ff] transition-all duration-400 p-7 cursor-pointer overflow-hidden h-full"
                style={{ borderRadius: '14px' }}>

                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-[font2] text-[3rem] leading-none text-white/[0.05] group-hover:text-white/[0.12] select-none transition-colors duration-400">
                  {srv.num}
                </span>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-transparent group-hover:border-white/30 transition-all duration-400" />

                {/* Icon */}
                <div className="h-12 w-12 mb-6 bg-white/[0.05] group-hover:bg-white/[0.15] border border-white/[0.08] group-hover:border-white/20 flex items-center justify-center p-3 transition-all duration-400"
                  style={{ borderRadius: '10px' }}>
                  <img src={srv.img} alt={srv.name}
                    className="h-full w-full object-contain filter brightness-0 invert" />
                </div>

                {/* Title */}
                <h3 className="font-[font2] text-base uppercase text-white leading-snug mb-3">
                  {srv.name}
                </h3>

                {/* Blue rule */}
                <div className="h-px w-8 bg-[#0066ff] group-hover:bg-white/40 mb-4 transition-colors duration-300" />

                {/* Description */}
                <p className="font-[font1] text-white/30 group-hover:text-white/80 text-sm leading-[1.7] transition-colors duration-300">
                  {srv.desc}
                </p>

                {/* Learn more */}
                <div className="mt-6 flex items-center gap-2 font-[font1] text-[10px] uppercase tracking-[2px] text-white/20 group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>

                {/* Bottom sweep line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex items-center gap-4 mt-7">
          <button className="srv-prev h-11 w-11 border border-white/20 hover:border-[#0066ff] hover:bg-[#0066ff] flex items-center justify-center transition-all duration-300 font-[font2] text-white text-lg"
            style={{ borderRadius: '8px' }}>←</button>
          <button className="srv-next h-11 w-11 border border-white/20 hover:border-[#0066ff] hover:bg-[#0066ff] flex items-center justify-center transition-all duration-300 font-[font2] text-white text-lg"
            style={{ borderRadius: '8px' }}>→</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
