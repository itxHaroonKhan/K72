import { Link } from 'react-router-dom'
import {
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight,
} from 'react-icons/fa'

const navLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Services',     to: '/services' },
  { label: 'Portfolio',    to: '/portfolio' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Packages',     to: '/packages' },
  { label: 'About',        to: '/about' },
  { label: 'Contact',      to: '/contact' },
]

const services = [
  'Web Design', 'Website Development', 'Mobile App Development',
  'E-Commerce Solutions', 'SEO Optimization', 'Social Media Marketing',
  'UI/UX Design', 'Logo & Branding',
]

const socials = [
  { icon: <FaFacebook />,  href: '#', label: 'Facebook' },
  { icon: <FaTwitter />,   href: '#', label: 'Twitter' },
  { icon: <FaLinkedin />,  href: '#', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaYoutube />,   href: '#', label: 'YouTube' },
]

const contacts = [
  { icon: <FaPhoneAlt />,     label: 'Phone',    val: '+1 877-513-4503',          href: 'tel:+18775134503' },
  { icon: <FaEnvelope />,     label: 'Email',    val: 'info@softwareelites.com',  href: 'mailto:info@softwareelites.com' },
  { icon: <FaMapMarkerAlt />, label: 'Location', val: 'New York, United States',  href: null },
]

const Footer = () => {
  return (
    <footer className="relative bg-[#020a14] text-white overflow-hidden">

      {/* Top gradient bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent" />

      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.018) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.018) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Blue glow — top left */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(0,102,255,0.07) 0%, transparent 70%)' }} />

      {/* ── Main grid ── */}
      <div className="relative px-6 lg:px-20 pt-20 pb-14 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">

          {/* ── Brand — 4 cols ── */}
          <div className="ft-brand lg:col-span-4 flex flex-col gap-6">

            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#0066ff]"
                  style={{ boxShadow: '0 0 10px #0066ff' }} />
                <h2 className="font-[font2] text-lg uppercase tracking-[4px] text-white">Software Elites</h2>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-[#0066ff]/40 to-transparent mt-4" />
            </div>

            {/* Tagline */}
            <p className="font-[font1] text-[10px] uppercase tracking-[5px] text-[#0066ff]/70">
              Digital Agency · USA Based
            </p>

            {/* Description */}
            <p className="font-[font1] text-white/30 text-sm leading-[1.9]">
              A full-service digital creative agency helping businesses dominate online — from design and development to marketing and branding.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center text-white/30 hover:text-[#0066ff] transition-all duration-300 text-sm"
                  style={{
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(0,102,255,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Badge */}
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-5 bg-[#0066ff]/30" />
              <span className="font-[font1] text-[9px] uppercase tracking-[3px] text-white/15">
                Trusted by 120+ Clients
              </span>
            </div>
          </div>

          {/* ── Quick Links — 2 cols ── */}
          <div className="ft-col lg:col-span-2 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#0066ff]" />
                <h3 className="font-[font1] text-[10px] uppercase tracking-[4px] text-white/40">Quick Links</h3>
              </div>
              <div className="h-px bg-white/[0.05]" />
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to}
                    className="font-[font1] text-white/35 text-sm hover:text-[#0066ff] transition-colors duration-300 flex items-center gap-2 group">
                    <FaArrowRight className="text-[8px] text-[#0066ff]/0 group-hover:text-[#0066ff] -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services — 3 cols ── */}
          <div className="ft-col lg:col-span-3 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#0066ff]" />
                <h3 className="font-[font1] text-[10px] uppercase tracking-[4px] text-white/40">Services</h3>
              </div>
              <div className="h-px bg-white/[0.05]" />
            </div>
            <ul className="flex flex-col gap-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link to="/services"
                    className="font-[font1] text-white/35 text-sm hover:text-[#0066ff] transition-colors duration-300 flex items-center gap-2 group">
                    <FaArrowRight className="text-[8px] text-[#0066ff]/0 group-hover:text-[#0066ff] -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact — 3 cols ── */}
          <div className="ft-col lg:col-span-3 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#0066ff]" />
                <h3 className="font-[font1] text-[10px] uppercase tracking-[4px] text-white/40">Get In Touch</h3>
              </div>
              <div className="h-px bg-white/[0.05]" />
            </div>

            <div className="flex flex-col gap-5 mt-1">
              {contacts.map((item, i) => {
                const inner = (
                  <div className="flex items-start gap-4 group">
                    <div
                      className="h-9 w-9 shrink-0 flex items-center justify-center text-[#0066ff] text-xs transition-all duration-300 group-hover:bg-[#0066ff]/15"
                      style={{
                        borderRadius: '10px',
                        border: '1px solid rgba(0,102,255,0.2)',
                        background: 'rgba(0,102,255,0.06)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-[font1] text-white/20 text-[9px] uppercase tracking-[3px] mb-1">{item.label}</p>
                      <p className="font-[font1] text-white/50 text-sm group-hover:text-white transition-colors duration-300">{item.val}</p>
                    </div>
                  </div>
                )
                return item.href
                  ? <a key={i} href={item.href}>{inner}</a>
                  : <div key={i}>{inner}</div>
              })}

              {/* Mini CTA */}
              <Link
                to="/contact"
                className="mt-2 flex items-center gap-3 font-[font1] text-[10px] uppercase tracking-[3px] px-5 py-3 border border-[#0066ff]/30 text-[#0066ff] hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all duration-300 w-fit"
                style={{ borderRadius: '8px' }}
              >
                Start a Project <FaArrowRight className="text-[8px]" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom relative px-6 lg:px-20 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="ft-divider h-px bg-gradient-to-r from-[#0066ff]/20 via-white/5 to-transparent mb-6" />
          <div className="ft-bottom-inner flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-[font1] text-white/15 text-[10px] uppercase tracking-[3px]">
              © {new Date().getFullYear()} Software Elites · All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l, i) => (
                <a key={i} href="#"
                  className="font-[font1] text-white/15 text-[10px] uppercase tracking-[2px] hover:text-[#0066ff] transition-colors duration-300">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
