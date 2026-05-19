import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="LeadBrick" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-grey max-w-xs">
              We generate high-quality buyer inquiries for real estate projects using Meta Ads and WhatsApp lead funnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brick hover:border-brick transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Visit our YouTube channel" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brick hover:border-brick transition-all">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/919515553459" aria-label="Chat with us on WhatsApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brick hover:border-brick transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-grey hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-grey hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-grey hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-grey hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-grey">
                <Mail size={18} className="text-brick" />
                <span>leadbrickmedia@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-grey">
                <MapPin size={18} className="text-brick mt-1 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>

          {/* Location / Note */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Based in</h4>
            <p className="text-grey leading-relaxed">
              Serving real estate builders and developers across India with high-performance lead generation systems to drive site visits.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-grey text-sm">
            © {new Date().getFullYear()} LeadBrick. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-grey">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
