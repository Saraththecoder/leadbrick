import { Link } from 'react-router-dom';
import { MousePointer2, Layout, MessageSquare, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import useInView from '../hooks/useInView';
import { useModal } from '../context/ModalContext';
import facebookImg from '../assets/facebook.jpeg';
import leadImg from '../assets/lead.png';
import whatsappImg from '../assets/whatsapp.jpeg';
import landingImg from '../assets/landing.png';

const Services = () => {
  const { openModal } = useModal();
  const heroRef = useInView();
  const ctaRef = useInView();
  const faqRef = useInView();
  const [openFaq, setOpenFaq] = useState(null);

  const handleBookCall = () => {
    openModal();
  };

  const servicesList = [
    {
      id: 'ads',
      icon: MousePointer2,
      image: facebookImg,
      title: 'Meta Ads Management',
      problem: 'Wasting budget on broad campaigns that attract "accidental" clicks and low-intent inquiries.',
      solution: 'Zero-Waste targeting framework. We use hyper-local geo-fencing and HNI interest modeling to find serious buyers.',
      outcome: '3x Increase in Qualified Lead-to-Site Visit Ratio.',
    },
    {
      id: 'leads',
      icon: Target,
      image: leadImg,
      title: 'Real Estate Lead Generation',
      problem: 'Sales teams overwhelmed with poor-quality leads, wasting time calling prospects without budgets.',
      solution: 'Multi-layer qualification system. Interactive forms pre-screen budget, intent, and location preferences.',
      outcome: 'A Sales Pipeline filled with "Ready-to-Visit" Prospects.',
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      image: whatsappImg,
      title: 'WhatsApp Lead Funnels',
      problem: 'Leads go cold within minutes. Traditional follow-ups are too slow in the fast-paced market.',
      solution: 'Intelligent WhatsApp Automation. Instant delivery of brochures, pricing, and automated site-visit booking links.',
      outcome: '80% Reduction in Lead Response Time.',
    },
    {
      id: 'landing',
      icon: Layout,
      image: landingImg,
      title: 'Landing Page Development',
      problem: 'Project websites are slow and cluttered, leading to high bounce rates and lost opportunities.',
      solution: 'High-performance Conversion Engines. Mobile-first landing pages loading in under 2 seconds with persuasive copy.',
      outcome: '2x Lower Cost-Per-Lead (CPL) via Better UX.',
    }
  ];

  const faqs = [
    {
      q: "Do I need a massive ad budget to start?",
      a: "Not necessarily. We focus on 'Zero-Waste' targeting, meaning we can generate highly qualified site visits even with a moderate budget by exclusively targeting High Net-Worth Individuals (HNIs)."
    },
    {
      q: "How fast will I see results?",
      a: "Our campaigns typically go live within 7-10 days after our onboarding call. You will start seeing qualified leads enter your WhatsApp funnel within the first 24-48 hours of launch."
    },
    {
      q: "Do you guarantee site visits?",
      a: "While we cannot force a prospect to visit your site, our entire funnel is optimized for that exact metric. We measure our success by Site Visits, not just 'impressions' or 'clicks'."
    },
    {
      q: "Why WhatsApp Automation over Email?",
      a: "In the Indian real estate market, WhatsApp has a 98% open rate compared to email's 20%. Buyers expect instant communication, and WhatsApp allows us to deliver brochures and answer questions instantly."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="reveal bg-black text-white py-24 md:py-32 border-b border-white/5 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C45E2A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="accent-label text-brick mb-6 block">OUR SERVICES</span>
            <h1 className="text-4xl md:text-7xl mb-6 md:mb-8 leading-tight font-black break-words">Performance Marketing <br className="hidden md:block"/> Systems</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed max-w-2xl">
              We engineer sales pipelines. Clear out the clutter and focus on what matters: qualified site visits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Redesigned for Clarity & Accessibility) */}
      <section className="bg-light py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-full h-48 md:h-56 mb-8 rounded-2xl overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white text-brick rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-brick transition-colors">{service.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-grey uppercase tracking-wider mb-2">The Problem</h3>
                    <p className="text-charcoal leading-relaxed">{service.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brick uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-charcoal leading-relaxed">{service.solution}</p>
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-grey uppercase tracking-wider mb-2">Project Impact</h3>
                    <p className="text-lg font-bold text-black">{service.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="accent-label text-brick block mb-4">CLIENT FAQS</span>
            <h2 className="text-3xl md:text-5xl font-black">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden bg-light transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-lg md:text-xl pr-8">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-brick shrink-0" /> : <ChevronDown className="text-grey shrink-0" />}
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-grey leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-6xl max-w-4xl mx-auto font-black">
            Ready to build your lead engine?
          </h2>
          <p className="text-xl opacity-90">Book a consultation to discuss your specific project needs.</p>
          <button 
            onClick={handleBookCall}
            aria-label="Book a strategy call"
            className="bg-white text-brick px-10 py-5 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-colors shadow-xl"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
