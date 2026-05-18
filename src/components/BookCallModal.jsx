import React, { useState } from 'react';
import { X } from 'lucide-react';

const BookCallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Real Estate Lead Generation'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service } = formData;
    const whatsappNumber = '919999999999';
    const message = `Hi LeadBrick, I'm ${name}. My number is ${phone}. I'm interested in: ${service}. I'd like to book a strategy call.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden animate-fade-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-grey hover:text-black transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-extrabold mb-2">Book a Strategy Call</h2>
          <p className="text-grey mb-6">Fill in your details and we'll connect on WhatsApp.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-charcoal">Name</label>
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
              <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-charcoal">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your WhatsApp Number"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-charcoal">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent transition-all appearance-none bg-white"
              >
                <option>Meta Ads Management</option>
                <option>Real Estate Lead Generation</option>
                <option>WhatsApp Lead Funnels</option>
                <option>Landing Page Development</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary mt-4 py-4"
            >
              Book on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCallModal;
