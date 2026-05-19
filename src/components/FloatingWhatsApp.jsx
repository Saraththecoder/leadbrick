import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919515553459"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute right-full mr-4 bg-black text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
