import React, { useState } from 'react';
import { Mail, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';
import contactImg from '../assets/contact.png';

const Contact = () => {
  const containerRef = useInView();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, company, message } = formData;
    const whatsappNumber = '919515553459';
    const text = `Hi LeadBrick, I'm ${name} from ${company}. My number is ${phone}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-light min-h-screen py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Graphic */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-96 bg-brick/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div ref={containerRef} className="reveal container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="accent-label text-brick mb-4 block">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-charcoal">
            Let's build your <br className="hidden md:block" /> <span className="text-brick">Sales Engine.</span>
          </h1>
          <p className="mt-6 text-grey text-lg md:text-xl leading-relaxed">
            Ready to stop wasting money on junk leads? Contact us today to discuss your project.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-grey mb-4">For general inquiries and project proposals.</p>
              <a href="mailto:leadbrickmedia@gmail.com" className="font-bold text-brick hover:text-charcoal transition-colors">leadbrickmedia@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-6">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-grey mb-4">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+919515553459" className="font-bold text-brick hover:text-charcoal transition-colors">+91 95155 53459</a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-grey">Hyderabad, Telangana, India <br/> Serving builders PAN-India.</p>
            </div>
          </div>

          {/* Contact Form (Right on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
              
              {/* Decorative Header using the provided image */}
              <div className="absolute top-0 left-0 w-full h-40 z-0">
                <img src={contactImg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white"></div>
              </div>

              <div className="relative z-10 mt-8 md:mt-12">
                <h3 className="text-3xl font-black mb-8 text-charcoal">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-grey">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full bg-light border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brick focus:ring-1 focus:ring-brick transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-grey">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full bg-light border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brick focus:ring-1 focus:ring-brick transition-all" 
                        placeholder="+91 90000 00000" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-grey">Company / Project Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="w-full bg-light border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brick focus:ring-1 focus:ring-brick transition-all" 
                      placeholder="ABC Builders" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-grey">Message *</label>
                    <textarea 
                      name="message" 
                      required 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="w-full bg-light border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brick focus:ring-1 focus:ring-brick transition-all h-32 resize-none" 
                      placeholder="Tell us about your project requirements..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brick text-white p-5 rounded-xl font-bold text-lg hover:bg-black transition-colors flex items-center justify-center space-x-2 mt-4"
                  >
                    <span>Send via WhatsApp</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
