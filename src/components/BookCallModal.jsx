import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const BookCallModal = () => {
  const { isModalOpen, closeModal } = useModal();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Meta Ads Management'
  });

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service } = formData;
    const whatsappNumber = '919515553459';
    const text = `Hi LeadBrick, I'm ${name}. My number is ${phone}. I'm interested in: ${service}. I'd like to book a strategy call.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in" onClick={closeModal}>
      <div 
        className="bg-white w-full max-w-md rounded-[2rem] p-6 md:p-10 relative animate-fade-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-10 h-10 bg-light rounded-full flex items-center justify-center text-grey hover:text-black hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        <span className="accent-label text-brick mb-2 block">STRATEGY CALL</span>
        <h2 className="text-3xl font-black mb-6">Book Your Slot</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="relative pt-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brick transition-colors appearance-none cursor-pointer"
            >
              <option>Meta Ads Management</option>
              <option>Real Estate Lead Generation</option>
              <option>WhatsApp Lead Funnels</option>
              <option>Landing Page Development</option>
            </select>
            <label className="absolute -top-1 left-0 text-sm text-brick font-bold">Service of Interest</label>
          </div>

          <button
            type="submit"
            className="w-full bg-brick text-white p-4 rounded-xl font-bold text-lg hover:bg-black transition-colors mt-4"
          >
            CONFIRM BOOKING
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal;
