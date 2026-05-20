import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['Logo Design', 'Website', 'E-Commerce', 'Social Media', 'SEO', 'Video', 'Branding'];

const pricingData = {
  'Logo Design': [
    { name: 'Basic',        price: '35',    features: ['3 Custom Concepts', '1 Designer', '4 Revisions', '48-72 hrs TAT', 'Unique Design Guarantee'] },
    { name: 'Professional', price: '125',   features: ['Unlimited Concepts', '4 Designers', 'Unlimited Revisions', 'Stationary Design', 'All File Formats', 'MS Word Letterhead'], popular: true },
    { name: 'Elite',        price: '175',   features: ['Unlimited Concepts', '5 Award-Winning Designers', 'Icon Design', 'Free Email Signature', 'Ownership Rights'] },
  ],
  'Website': [
    { name: 'Basic',    price: '299', features: ['5 Pages', 'Custom Design', '2 Stock Photos', 'SEO Setup', 'Contact Form', '1 Month Maintenance'] },
    { name: 'Standard', price: '499', features: ['10 Pages', 'Custom Design', 'Advanced SEO', 'Live Chat', 'Google Analytics', '3 Months Maintenance'], popular: true },
    { name: 'Premium',  price: '899', features: ['20 Pages', 'Premium Design', 'Full SEO', 'Speed Optimization', 'All Integrations', '6 Months Maintenance'] },
  ],
  'E-Commerce': [
    { name: 'Starter',    price: '599',   features: ['50 Products', 'PayPal/Stripe', 'Inventory Mgmt', 'Mobile Responsive', 'SSL Certificate'] },
    { name: 'Business',   price: '999',   features: ['200 Products', 'Multiple Gateways', 'Coupon System', 'SEO Optimized', 'PWA Support', '3 Months Support'], popular: true },
    { name: 'Enterprise', price: '1,999', features: ['Unlimited Products', 'All Gateways', 'Multi-Currency', 'Advanced Analytics', '12 Months Support'] },
  ],
  'Social Media': [
    { name: 'Starter',    price: '199', features: ['2 Platforms', '12 Posts/Month', 'Basic Graphics', 'Monthly Report'] },
    { name: 'Growth',     price: '349', features: ['4 Platforms', '20 Posts/Month', 'Custom Graphics', 'Paid Ad Mgmt', 'Bi-weekly Reports'], popular: true },
    { name: 'Enterprise', price: '599', features: ['All Platforms', '30 Posts/Month', 'Premium Graphics', 'Paid Ads $500', 'Weekly Strategy Call'] },
  ],
  'SEO': [
    { name: 'Basic',      price: '299', features: ['10 Keywords', 'On-Page Optimization', 'Monthly Report', 'Google Analytics'] },
    { name: 'Advanced',   price: '499', features: ['25 Keywords', 'On+Off Page', '10 Backlinks/mo', 'Local SEO', 'Bi-weekly Reports'], popular: true },
    { name: 'Enterprise', price: '899', features: ['Unlimited Keywords', '30+ Backlinks/mo', 'Content Marketing', 'Competitor Analysis', 'Weekly Reports'] },
  ],
  'Video': [
    { name: 'Basic',    price: '199', features: ['30 Sec Video', 'Script Writing', 'Voiceover', 'Background Music', '2 Revisions'] },
    { name: 'Standard', price: '399', features: ['60 Sec Video', 'Custom Illustrations', 'Voiceover', 'Background Music', 'Unlimited Revisions'], popular: true },
    { name: 'Premium',  price: '699', features: ['90 Sec Video', '3D Elements', 'Premium Voiceover', 'All File Formats', 'Unlimited Revisions'] },
  ],
  'Branding': [
    { name: 'Basic',    price: '499',   features: ['Logo Design', 'Business Card', 'Color Palette', 'Brand Guidelines'] },
    { name: 'Complete', price: '999',   features: ['Logo + Variations', 'Full Stationery', 'Brand Style Guide', 'Social Media Kit', 'Email Signature'], popular: true },
    { name: 'Premium',  price: '1,999', features: ['Full Brand Identity', 'All Print Materials', 'Digital Assets Pack', 'Brand Strategy Doc', '6 Months Support'] },
  ],
};

const PricingPackages = () => {
  const [activeTab, setActiveTab] = useState('Logo Design');
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.pp-tag',   { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true } });
    gsap.fromTo('.pp-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
    gsap.fromTo('.pp-rule',  { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'expo.out', transformOrigin: 'center', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true } });
    gsap.fromTo('.pp-sub',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.25, scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', once: true } });
    gsap.fromTo('.pp-tabs',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
    gsap.fromTo('.pkg-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: contentRef.current, start: 'top 82%', once: true } });
    gsap.fromTo('.pp-note',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 50%', once: true } });

  }, { scope: sectionRef });

  const switchTab = (tab) => {
    setActiveTab(tab);
    gsap.fromTo('.pkg-card',
      { y: 20, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.08, ease: 'power3.out' }
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-[#020a14] overflow-hidden py-16 lg:py-36">

      {/* bg grid */}
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
        <span className="font-[font2] text-[18vw] uppercase leading-none text-white/[0.02]">PLANS</span>
      </div>

      <div className="relative px-6 lg:px-20 max-w-[1400px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="pp-tag flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066ff]/50" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Pricing Plans</span>
            <div className="h-px w-8 bg-[#0066ff]/50" />
          </div>
          <h2 className="pp-title font-[font2] text-3xl lg:text-6xl uppercase text-white leading-[1.05]">
            Affordable Plans,<br /><span className="text-[#0066ff]">Real Results</span>
          </h2>
          <div className="pp-rule h-[2px] w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent mx-auto mt-6 mb-5" />
          <p className="pp-sub font-[font1] text-white/35 text-sm lg:text-base leading-[1.9] max-w-[480px] mx-auto">
            We value your time and money. Transparent, result-driven plans for every business size.
          </p>
        </div>

        {/* ── Content ── */}
        <div ref={contentRef}>

          {/* Category tabs */}
          <div className="pp-tabs flex flex-nowrap gap-2 mb-10 overflow-x-auto pb-1 justify-start lg:justify-center"
            style={{ scrollbarWidth: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`whitespace-nowrap font-[font1] px-5 py-2.5 text-[10px] uppercase tracking-[2px] border transition-all duration-300 shrink-0 ${
                  activeTab === tab
                    ? 'bg-[#0066ff] border-[#0066ff] text-white'
                    : 'border-white/10 text-white/35 hover:text-white hover:border-white/40'
                }`}
                style={{ borderRadius: '8px' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingData[activeTab].map((pkg, i) => (
              <div
                key={i}
                className={`pkg-card relative flex flex-col overflow-hidden transition-all duration-400 group ${
                  pkg.popular ? 'ring-2 ring-[#0066ff]' : 'hover:border-[#0066ff]/30'
                }`}
                style={{
                  borderRadius: '20px',
                  background: pkg.popular
                    ? 'linear-gradient(145deg,#0052cc 0%,#0066ff 55%,#1a7aff 100%)'
                    : 'rgba(255,255,255,0.025)',
                  border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: pkg.popular
                    ? '0 0 0 1px rgba(0,102,255,0.5), 0 40px 80px rgba(0,102,255,0.3)'
                    : '0 4px 30px rgba(0,0,0,0.2)',
                }}
              >
                {/* Popular ribbon */}
                {pkg.popular && (
                  <div className="bg-white text-[#0066ff] font-[font1] text-[10px] uppercase tracking-[3px] text-center py-2.5 font-semibold">
                    ★ Most Popular
                  </div>
                )}

                <div className={`flex flex-col flex-grow p-6 lg:p-10 ${pkg.popular && '!pt-5 lg:!pt-7'}`}>

                  {/* Plan name */}
                  <div className="mb-6">
                    <p className={`font-[font1] text-[10px] uppercase tracking-[4px] mb-1.5 ${pkg.popular ? 'text-white/60' : 'text-white/25'}`}>
                      {activeTab}
                    </p>
                    <h3 className="font-[font2] text-2xl uppercase text-white">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className={`pb-6 mb-6 border-b ${pkg.popular ? 'border-white/20' : 'border-white/[0.07]'}`}>
                    <div className="flex items-start gap-1 leading-none">
                      <span className={`font-[font1] text-xl mt-1.5 ${pkg.popular ? 'text-white/70' : 'text-[#0066ff]'}`}>$</span>
                      <span className="font-[font2] text-6xl text-white">{pkg.price}</span>
                    </div>
                    <p className={`font-[font1] text-[10px] uppercase tracking-[3px] mt-2.5 ${pkg.popular ? 'text-white/45' : 'text-white/20'}`}>
                      One-time payment
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3.5 flex-grow mb-8">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className={`flex items-start gap-3 font-[font1] text-sm leading-snug ${
                        pkg.popular ? 'text-white/85' : 'text-white/40 group-hover:text-white/60'
                      } transition-colors duration-300`}>
                        <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          pkg.popular ? 'bg-white/20' : 'bg-[#0066ff]/15'
                        }`}>
                          <FaCheck className={`text-[7px] ${pkg.popular ? 'text-white' : 'text-[#0066ff]'}`} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`block w-full py-4 text-center font-[font1] text-sm uppercase tracking-[2px] border-2 transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-white text-[#0066ff] border-white hover:bg-transparent hover:text-white'
                        : 'border-white/15 text-white/50 hover:border-[#0066ff] hover:text-[#0066ff] hover:bg-[#0066ff]/5'
                    }`}
                    style={{ borderRadius: '10px' }}
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <p className="pp-note text-center font-[font1] text-white/20 text-[10px] uppercase tracking-[4px] mt-10">
          All plans include free consultation · 100% satisfaction guaranteed
        </p>

      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
    </section>
  );
};

export default PricingPackages;
