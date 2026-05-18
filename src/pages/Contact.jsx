import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';
import contactImg from '../assets/contact.png';

const Contact = () => {
  const containerRef = useInView();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    projectType: 'Apartments',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, company, phone, projectType, message } = formData;
    const whatsappNumber = '919515553459';
    const text = `Hi LeadBrick, I'm ${name} from ${company}. My number is ${phone}. Project Type: ${projectType}. Message: ${message}. I'm interested in discussing a lead generation system.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div ref={containerRef} className="reveal flex flex-col lg:flex-row min-h-[90vh]">
      {/* LEFT: The Pitch (Dark) */}
      <div className="lg:w-5/12 bg-black text-white p-8 md:p-16 lg:p-20 xl:p-24 relative overflow-hidden flex flex-col justify-between">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img src={contactImg} alt="Contact" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#C45E2A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brick/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

        <div className="relative z-10 space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <span className="accent-label text-brick block">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Ready to <br />
              <span className="text-brick">Scale</span> Sales?
            </h1>
            <p className="text-lg text-grey max-w-md leading-relaxed">
              Don't let high-intent buyers slip away. Connect with us to discuss how we can build your project's lead generation engine.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <a href="mailto:leadbrickmedia@gmail.com" className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-brick hover:border-brick transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:text-brick transition-transform duration-300 text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-grey group-hover:text-white/80 transition-colors">Email Us</h3>
                <p className="text-lg font-bold text-white">leadbrickmedia@gmail.com</p>
              </div>
            </a>

            <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-grey">Location</h3>
                <p className="text-lg font-bold text-white">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          {/* Fast-Track Card */}
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Fast-Track Your Results</h3>
              <p className="text-grey leading-relaxed text-sm">
                Skip the forms. Chat with a real estate growth expert now via WhatsApp.
              </p>
              <a 
                href="https://wa.me/919515553459" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-brick hover:text-white transition-colors duration-300 mt-4 shadow-xl"
              >
                <MessageCircle size={20} />
                <span>Start Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: The Form (Light) */}
      <div className="lg:w-7/12 bg-white p-8 md:p-16 lg:p-20 xl:p-24 flex items-center justify-center relative">
        <div className="absolute top-12 right-12 text-6xl md:text-8xl font-black text-light select-none pointer-events-none">ENQUIRY</div>
        
        <div className="w-full max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-charcoal">Tell us about <br /> your project.</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="group">
                <label className="text-sm font-bold text-grey uppercase tracking-wider mb-2 block group-focus-within:text-brick transition-colors">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-light border-2 border-transparent focus:border-brick rounded-xl px-5 py-4 text-lg outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              {/* Company Input */}
              <div className="group">
                <label className="text-sm font-bold text-grey uppercase tracking-wider mb-2 block group-focus-within:text-brick transition-colors">Builder / Company</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-light border-2 border-transparent focus:border-brick rounded-xl px-5 py-4 text-lg outline-none transition-all duration-300"
                  placeholder="Acme Builders"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Input */}
              <div className="group">
                <label className="text-sm font-bold text-grey uppercase tracking-wider mb-2 block group-focus-within:text-brick transition-colors">WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-light border-2 border-transparent focus:border-brick rounded-xl px-5 py-4 text-lg outline-none transition-all duration-300"
                  placeholder="+91 90000 00000"
                />
              </div>
              
              {/* Project Type Select */}
              <div className="group">
                <label className="text-sm font-bold text-grey uppercase tracking-wider mb-2 block group-focus-within:text-brick transition-colors">Project Category</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-light border-2 border-transparent focus:border-brick rounded-xl px-5 py-4 text-lg outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option>Apartments</option>
                    <option>Villas</option>
                    <option>Plots</option>
                    <option>Commercial</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-grey">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label className="text-sm font-bold text-grey uppercase tracking-wider mb-2 block group-focus-within:text-brick transition-colors">Project Goals & Details</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-light border-2 border-transparent focus:border-brick rounded-xl px-5 py-4 text-lg outline-none transition-all duration-300 resize-none"
                placeholder="What are your current challenges with lead generation?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex items-center justify-center space-x-3 w-full bg-brick text-white p-5 rounded-xl font-black text-xl hover:bg-brick-dark transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>SUBMIT ENQUIRY</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
