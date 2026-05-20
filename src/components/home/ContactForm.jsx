import { useState } from 'react';
import Swal from 'sweetalert2';

const services = [
  'Web Design', 'Website Development', 'Mobile App', 'E-Commerce',
  'SEO Optimization', 'Social Media', 'Logo & Branding', 'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      Swal.fire({ title: 'Missing Fields', text: 'Please fill in Name and Email.', icon: 'error', confirmButtonColor: '#0066ff' });
      return;
    }
    Swal.fire({ title: 'Message Sent!', text: "Thank you! We'll get back to you within 24 hours.", icon: 'success', confirmButtonColor: '#0066ff' });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputClass = `
    w-full bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/20
    font-[font1] text-sm px-5 py-4 outline-none transition-all duration-300
    focus:border-[#0066ff] focus:bg-[#0066ff]/[0.04]
  `;

  const labelClass = 'block font-[font1] text-[9px] uppercase tracking-[4px] text-white/35 mb-2';

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      {/* Row 1 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <label className={labelClass}>Full Name *</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange}
            placeholder='John Doe' required className={inputClass} style={{ borderRadius: '10px' }} />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange}
            placeholder='john@example.com' required className={inputClass} style={{ borderRadius: '10px' }} />
        </div>
      </div>

      {/* Row 2 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type='tel' name='phone' value={formData.phone} onChange={handleChange}
            placeholder='+1 234 567 8900' className={inputClass} style={{ borderRadius: '10px' }} />
        </div>
        <div>
          <label className={labelClass}>Service Required</label>
          <select name='service' value={formData.service} onChange={handleChange}
            className={inputClass} style={{ borderRadius: '10px' }}>
            <option value='' style={{ background: '#00050f' }}>Select a Service</option>
            {services.map(s => (
              <option key={s} value={s} style={{ background: '#00050f' }}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Your Message</label>
        <textarea name='message' value={formData.message} onChange={handleChange}
          rows={5} placeholder='Tell us about your project...'
          className={inputClass + ' resize-none'} style={{ borderRadius: '10px' }} />
      </div>

      {/* Submit */}
      <button type='submit'
        className='w-full font-[font1] text-sm uppercase tracking-[3px] py-4 bg-[#0066ff] text-white border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300 mt-1'
        style={{ borderRadius: '10px' }}>
        Send Message →
      </button>

      <p className='font-[font1] text-white/15 text-[9px] uppercase tracking-[3px] text-center'>
        We respond within 24 hours · 100% confidential
      </p>
    </form>
  );
};

export default ContactForm;
