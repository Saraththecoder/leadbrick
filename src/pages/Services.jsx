import { Link, useNavigate } from 'react-router-dom';
import { MousePointer2, Layout, MessageSquare, Target, CheckCircle2 } from 'lucide-react';
import useInView from '../hooks/useInView';
import facebookImg from '../assets/facebook.jpeg';
import whatsappImg from '../assets/whatsapp.jpeg';

const Services = () => {
  const navigate = useNavigate();
  const heroRef = useInView();
  const ctaRef = useInView();

  const handleBookCall = () => {
    navigate('/contact');
  };

  const servicesList = [
    {
      id: 'ads',
      icon: MousePointer2,
      number: '01',
      title: 'Meta Ads Management',
      image: facebookImg,
      problem: 'Most real estate builders waste lakhs on broad Meta campaigns that only attract "accidental" clicks and low-intent inquiries that never pick up the phone.',
      solution: 'We deploy a "Zero-Waste" targeting framework. By using hyper-local geo-fencing, HNI interest modeling, and dynamic creative testing, we ensure every rupee of your ad spend is chasing a serious property buyer.',
      outcome: '3x Increase in Qualified Lead-to-Site Visit Ratio.',
    },
    {
      id: 'leads',
      icon: Target,
      number: '02',
      title: 'Real Estate Lead Generation',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      problem: 'Sales teams are often overwhelmed with poor-quality leads, wasting hours calling people who "just clicked by mistake" or don\'t have the budget.',
      solution: 'Our multi-layer qualification system filters leads before they reach you. We use interactive forms and automated pre-screening to verify budget, intent, and location preferences.',
      outcome: 'A Sales Pipeline filled with "Ready-to-Visit" Prospects.',
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      number: '03',
      title: 'WhatsApp Lead Funnels',
      image: whatsappImg,
      problem: 'In the fast-paced Hyderabad real estate market, speed is everything. A lead that isn\'t contacted within minutes is usually lost to a competitor.',
      solution: 'We bridge the gap with Intelligent WhatsApp Automation. From the moment a lead is captured, they receive your brochure, pricing details, and an automated site-visit booking link via WhatsApp.',
      outcome: '80% Reduction in Lead Response Time.',
    },
    {
      id: 'landing',
      icon: Layout,
      number: '04',
      title: 'Landing Page Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      problem: 'Project websites are often too slow, too cluttered, or not optimized for mobile, leading to high bounce rates and lost opportunities.',
      solution: 'We build high-performance "Conversion Engines". These are project-specific landing pages that load in under 2 seconds and use persuasive copywriting to drive inquiries.',
      outcome: '2x Lower Cost-Per-Lead (CPL) via Better UX.',
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="reveal bg-black text-white py-32 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="accent-label text-brick mb-6 block">OUR SERVICES</span>
            <h1 className="text-5xl md:text-8xl mb-8 leading-tight">Performance Marketing <br/> Systems</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed max-w-2xl">
              Every service is a building block in your project's sales engine. No fluff, just qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Service List */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              className="group border-b border-gray-100 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 py-20 lg:py-32 gap-12 items-start">
                {/* Number & Icon */}
                <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start gap-6">
                  <span className="text-6xl md:text-8xl font-black text-light group-hover:text-brick/10 transition-colors duration-500">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 bg-brick text-white rounded-lg flex items-center justify-center lg:mt-4">
                    <service.icon size={24} />
                  </div>
                </div>

                {/* Title & Core Content */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8 lg:hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold group-hover:text-brick transition-colors duration-300">
                    {service.title}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <span className="accent-label text-grey mb-2 block">THE CHALLENGE</span>
                      <p className="text-lg text-charcoal leading-relaxed">{service.problem}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-50">
                      <span className="accent-label text-brick mb-2 block">THE LEADBRICK SOLUTION</span>
                      <p className="text-lg text-grey leading-relaxed">{service.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Image & Outcome */}
                <div className="lg:col-span-6 lg:pl-8 space-y-8">
                  <div className="hidden lg:block relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="bg-light p-8 rounded-3xl relative overflow-hidden group-hover:bg-brick transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <span className="accent-label text-grey group-hover:text-white/60 mb-4 block">PROJECT IMPACT</span>
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-white leading-tight">
                      {service.outcome}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto">
            Ready to build your lead engine?
          </h2>
          <p className="text-xl opacity-90">Book a consultation to discuss your specific project needs.</p>
          <button 
            onClick={handleBookCall}
            className="bg-white text-brick px-10 py-5 rounded-xl font-bold text-lg hover:bg-light transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
