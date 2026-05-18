import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const heroRef = useInView();
  const contentRef = useInView();

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
    <div className="overflow-hidden">
      {/* 1. Hero */}
      <section ref={heroRef} className="reveal py-24 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="accent-label mb-6 block">GET IN TOUCH</span>
            <h1 className="text-5xl md:text-7xl mb-8">Ready to Scale Your Project Sales?</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed">
              Don't let another high-intent buyer slip away. Contact us today for a free 30-minute strategy call to discuss how we can build your project's lead generation engine.
            </p>
          </div>
        </div>
      </section>

      {/* 2-Column Layout - Redesigned Form */}
      <section ref={contentRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-10">
                <div className="group flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-lg text-grey">leadbrickmedia@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-lg text-grey">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <PhoneCall size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Strategy Call</h3>
                    <p className="text-lg text-grey">Book a 30-min strategy call to discuss your project</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-black text-white rounded-[3rem] space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brick/20 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold">Fast-Track Your Results</h3>
                <p className="text-grey leading-relaxed text-lg">
                  The fastest way to reach us is via WhatsApp. Skip the forms and chat with a real estate growth expert now.
                </p>
                <a 
                  href="https://wa.me/919515553459" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle size={24} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form - Unique Minimalist Design */}
            <div className="lg:col-span-7">
              <div className="bg-light p-8 md:p-16 rounded-[3rem] border border-gray-100 relative">
                <div className="absolute top-12 right-12 text-6xl font-black text-brick/5 select-none">LEADBRICK</div>
                <h3 className="text-4xl font-black mb-12">Send an Enquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-grey transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brick peer-focus:font-bold">Your Full Name</label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-grey transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brick peer-focus:font-bold">Builder / Company Name</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-grey transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brick peer-focus:font-bold">WhatsApp Number</label>
                    </div>
                    
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors appearance-none cursor-pointer"
                      >
                        <option>Apartments</option>
                        <option>Villas</option>
                        <option>Plots</option>
                        <option>Commercial</option>
                      </select>
                      <label className="absolute -top-4 left-0 text-sm text-brick font-bold">Project Category</label>
                    </div>
                  </div>

                  <div className="relative pt-4">
                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors peer resize-none"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute left-0 top-7 text-grey transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-7 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-brick peer-focus:font-bold">Tell us about your project goals...</label>
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-between w-full bg-brick text-white p-6 rounded-2xl font-black text-xl hover:bg-black transition-all transform hover:-translate-y-1"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
