import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, PhoneCall } from 'lucide-react';
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
    const whatsappNumber = '919999999999';
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
            <h1 className="text-5xl md:text-7xl mb-8">Let's Build Your Lead Generation System</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed">
              Reach out to discuss your project. We'll get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2-Column Layout */}
      <section ref={contentRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-lg text-grey">leadbrickmedia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-lg text-grey">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center shrink-0">
                    <PhoneCall size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategy Call</h3>
                    <p className="text-lg text-grey">Book a 30-min strategy call to discuss your project</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-light rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold">Ready to start?</h3>
                <p className="text-grey leading-relaxed">
                  The fastest way to reach us is via WhatsApp. Click the button below to start a chat.
                </p>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  <MessageCircle size={24} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 shadow-xl">
              <h3 className="text-3xl font-bold mb-8">Send Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-charcoal">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-charcoal">Company / Builder Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Builder Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-charcoal">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="WhatsApp Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-charcoal">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all bg-white"
                    >
                      <option>Apartments</option>
                      <option>Villas</option>
                      <option>Plots</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-charcoal">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
