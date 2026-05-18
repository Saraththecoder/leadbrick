import React from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, MessageSquare, Layout, CheckCircle2, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';
import { useModal } from '../context/ModalContext';
import homeImg from '../assets/home.png';
import useSEO from '../hooks/useSEO';

const Home = () => {
  const { openModal } = useModal();
  const heroRef = useInView();
  const systemRef = useInView();
  const whyRef = useInView();
  const howRef = useInView();
  const aboutRef = useInView();
  const ctaRef = useInView();

  useSEO({
    title: 'LeadBrick | Real Estate Lead Generation & Performance Marketing',
    description: 'We build performance-driven marketing engines that deliver qualified site visits and real estate buyers to your sales team.'
  });

  const handleBookCall = () => {
    openModal();
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="reveal min-h-[90vh] flex items-center relative overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={homeImg} alt="Luxury Real Estate" className="w-full h-full object-cover mix-blend-multiply" />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <div className="max-w-4xl space-y-8">
            <span className="accent-label mx-auto bg-white/50 backdrop-blur-md">REAL ESTATE LEAD GENERATION</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-black">
              Stop Wasting Money on Junk Leads. Start Getting <span className="text-brick">Qualified Site Visits.</span>
            </h1>
            <p className="text-lg md:text-xl text-grey max-w-2xl mx-auto leading-relaxed">
              Most agencies count "leads" as success. We count <strong>Site Visits</strong>. LeadBrick builds performance-driven marketing engines that filter out the window shoppers and deliver serious property buyers to your sales team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button onClick={handleBookCall} aria-label="Book Strategy Call" className="btn-primary text-center">
                Book Strategy Call
              </button>
              <Link to="/services" aria-label="View Our Services" className="btn-secondary text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEAD GENERATION SYSTEM SECTION */}
      <section ref={systemRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="accent-label">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">
              A Complete Lead Generation System for Real Estate Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-8 group-hover:bg-brick group-hover:text-white transition-all">
                <MousePointer2 size={28} />
              </div>
              <h3 className="text-xl mb-4 font-bold">High-Intent Meta Ads</h3>
              <p className="text-grey leading-relaxed">
                We don't just run ads; we engineer campaigns. Using advanced interest-based targeting and custom audience frameworks, we place your project in front of high-net-worth individuals actively looking for properties.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-8 group-hover:bg-brick group-hover:text-white transition-all">
                <Layout size={28} />
              </div>
              <h3 className="text-xl mb-4 font-bold">Conversion-Optimized Landing Pages</h3>
              <p className="text-grey leading-relaxed">
                A slow or confusing website kills leads. We build lightning-fast, mobile-first landing pages designed with psychological triggers that guide potential buyers to leave their details and request a callback or site visit.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-8 group-hover:bg-brick group-hover:text-white transition-all">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl mb-4 font-bold">24/7 WhatsApp Automation</h3>
              <p className="text-grey leading-relaxed">
                Leads go cold in 5 minutes. Our automated WhatsApp funnels engage your prospects instantly, answer common questions about floor plans and pricing, and book site visits for your sales team while they sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BUILDERS CHOOSE LEADBRICK */}
      <section ref={whyRef} className="reveal py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-label">THE LEADBRICK EDGE</span>
              <h2 className="text-3xl md:text-5xl mt-4 mb-8 font-black">Performance That Drives Project Sales</h2>
              <p className="text-lg text-grey leading-relaxed">
                General agencies focus on "Brand Awareness." We focus on your <strong>Sales Target</strong>. We understand that in real estate, the only lead that matters is the one that shows up at your project site.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Zero Junk Leads", desc: "Our filters ensure you only talk to buyers with the right budget." },
                { title: "Immediate Response", desc: "WhatsApp automation engages buyers while the intent is highest." },
                { title: "Data-Backed Creative", desc: "We use ad designs proven to work for the real estate market." },
                { title: "Site Visit Focus", desc: "Our entire funnel is optimized to get people to your project location." },
                { title: "Transparent ROI", desc: "Weekly reports showing exactly how much each site visit cost you." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brick flex items-center justify-center text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-bold text-charcoal">{item.title}</span>
                  </div>
                  <p className="text-grey text-sm ml-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW LEADBRICK WORKS */}
      <section ref={howRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="accent-label">OUR PROCESS</span>
            <h2 className="text-3xl md:text-5xl mt-4">How LeadBrick Works</h2>
          </div>
          
          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { title: "Project Understanding", desc: "We dive deep into your project's unique selling points." },
                { title: "Campaign & Funnel Setup", desc: "We build your ads, landing pages, and WhatsApp automation." },
                { title: "Lead Generation Launch", desc: "Your system goes live, attracting qualified buyer inquiries." },
                { title: "Optimization & Reporting", desc: "We continuously refine campaigns based on lead quality." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-brick flex items-center justify-center text-2xl font-extrabold text-brick shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-grey">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT PREVIEW - REDESIGNED */}
      <section ref={aboutRef} className="reveal py-32 bg-black text-white overflow-hidden relative">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-8xl md:text-[20rem] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
          PAN INDIA BASED
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="accent-label text-brick">PAN-INDIA GROWTH. BUILT FOR BUILDERS.</span>
              <h2 className="text-4xl md:text-7xl leading-tight font-black">
                Performance <br />
                <span className="text-brick">Without the</span> <br />
                Agency Fluff.
              </h2>
            </div>
            
            <div className="space-y-10 lg:pl-10 border-l border-white/10">
              <p className="text-xl md:text-2xl text-grey leading-relaxed">
                LeadBrick isn't just another marketing agency. We are a specialized lead generation partner for the real estate industry. 
              </p>
              <p className="text-lg text-grey leading-relaxed">
                We understand that every square foot counts. Our systems are built to ensure your project's sales pipeline is never empty, delivering high-intent buyers directly to your site office across India.
              </p>
              <div className="flex items-center gap-6">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
                <div className="hidden sm:block h-px w-20 bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-6xl max-w-4xl mx-auto font-black">
            Looking to Generate More Qualified Buyer Leads?
          </h2>
          <p className="text-xl opacity-90">Let's build your lead generation system.</p>
          <button 
            onClick={handleBookCall}
            aria-label="Book a consultation"
            className="bg-white text-brick px-10 py-5 rounded-xl font-bold text-lg hover:bg-light transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
