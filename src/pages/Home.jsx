import React from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, MessageSquare, Layout, CheckCircle2, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const Home = ({ onBookCall }) => {
  const heroRef = useInView();
  const systemRef = useInView();
  const whyRef = useInView();
  const howRef = useInView();
  const aboutRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="reveal min-h-[90vh] flex items-center bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="accent-label">REAL ESTATE LEAD GENERATION</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
              Generate Qualified Site-Visit Leads for Your Real Estate Projects
            </h1>
            <p className="text-lg md:text-xl text-grey max-w-2xl leading-relaxed">
              LeadBrick helps builders generate qualified buyer leads using Meta Ads, WhatsApp funnels, and high-converting landing pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={onBookCall} className="btn-primary text-center">
                Book Strategy Call
              </button>
              <Link to="/services" className="btn-secondary text-center">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            {/* Abstract Geometric Visual */}
            <div className="relative w-full aspect-square bg-light rounded-2xl flex items-center justify-center p-8 overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-20 absolute top-0 left-0">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              <div className="relative z-10 w-full space-y-4">
                {/* Floating Stat Cards */}
                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-50 flex items-center justify-between animate-float" style={{ animationDelay: '0s' }}>
                  <div>
                    <p className="text-xs font-bold text-grey uppercase tracking-wider">Leads Today</p>
                    <h3 className="text-2xl text-brick">47</h3>
                  </div>
                  <div className="w-10 h-10 bg-brick/10 rounded-full flex items-center justify-center text-brick">
                    <MousePointer2 size={20} />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-50 flex items-center justify-between ml-8 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div>
                    <p className="text-xs font-bold text-grey uppercase tracking-wider">Site Visits</p>
                    <h3 className="text-2xl text-black">12</h3>
                  </div>
                  <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-black">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-50 flex items-center justify-between ml-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div>
                    <p className="text-xs font-bold text-grey uppercase tracking-wider">Cost Per Lead</p>
                    <h3 className="text-2xl text-brick-dark">₹180</h3>
                  </div>
                  <div className="w-10 h-10 bg-brick-dark/10 rounded-full flex items-center justify-center text-brick-dark">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
              
              {/* Decorative Brick Grid */}
              <div className="absolute -bottom-10 -right-10 grid grid-cols-4 gap-2 rotate-12 opacity-10">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-12 h-6 bg-brick rounded-sm"></div>
                ))}
              </div>
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
              <h3 className="text-xl mb-4">Meta Ads Campaigns</h3>
              <p className="text-grey leading-relaxed">
                Facebook + Instagram campaigns designed specifically for real estate projects to target the right demographic.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-8 group-hover:bg-brick group-hover:text-white transition-all">
                <Layout size={28} />
              </div>
              <h3 className="text-xl mb-4">Landing Pages</h3>
              <p className="text-grey leading-relaxed">
                Conversion-focused pages optimized to capture serious buyer inquiries and showcase your project's value.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-brick/10 text-brick rounded-xl flex items-center justify-center mb-8 group-hover:bg-brick group-hover:text-white transition-all">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl mb-4">WhatsApp Lead Funnels</h3>
              <p className="text-grey leading-relaxed">
                Automated WhatsApp systems that improve lead response time and increase site-visit conversions.
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
              <h2 className="text-4xl md:text-5xl mt-4 mb-8">Why Builders Choose LeadBrick</h2>
              <p className="text-lg text-grey leading-relaxed">
                We don't just run ads; we build comprehensive systems that turn digital interest into physical site visits.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                "Qualified Buyer Leads Only",
                "Faster Lead Response Systems",
                "Conversion-Focused Funnels",
                "Transparent Weekly Reporting",
                "Performance Marketing, Not Just Ads"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brick flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-charcoal">{item}</span>
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

      {/* 5. ABOUT PREVIEW */}
      <section ref={aboutRef} className="reveal py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h2 className="text-4xl md:text-5xl leading-tight">
              Built for Builders. <br />
              <span className="text-brick">Focused on Results.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-grey leading-relaxed">
                LeadBrick is a Hyderabad-based real estate lead generation agency focused on helping builders generate qualified buyer inquiries through performance marketing systems.
              </p>
              <Link to="/about" className="btn-secondary-white inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto">
            Looking to Generate More Qualified Buyer Leads?
          </h2>
          <p className="text-xl opacity-90">Let's build your lead generation system.</p>
          <button 
            onClick={onBookCall}
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
