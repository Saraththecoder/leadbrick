import React from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, MessageSquare, Layout, Target, CheckCircle2, ArrowRight, TrendingUp, Building2, Database, BarChart3, Home as HomeIcon, Building, MapPin } from 'lucide-react';
import useInView from '../hooks/useInView';
import { useModal } from '../context/ModalContext';
import homeImg from '../assets/home.png';
import useSEO from '../hooks/useSEO';

const Home = () => {
  const { openModal } = useModal();
  const heroRef = useInView();
  const trustRef = useInView();
  const servicesRef = useInView();
  const howRef = useInView();
  const portfolioRef = useInView();
  const aboutRef = useInView();
  const ctaRef = useInView();

  useSEO({
    title: 'LeadBrick | Real Estate Lead Generation & Performance Marketing',
    description: 'We generate qualified site-visit leads for real estate projects using Meta Ads and WhatsApp funnels.'
  });

  const handleBookCall = () => {
    openModal();
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="reveal min-h-[90vh] flex items-center py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-96 bg-brick/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <span className="accent-label inline-block">REAL ESTATE LEAD GENERATION</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-black text-charcoal">
                We Generate <span className="text-brick">Qualified Site-Visit Leads</span> for Real Estate Projects
              </h1>
              <p className="text-lg md:text-xl text-grey leading-relaxed">
                LeadBrick helps builders and real estate developers generate high-quality buyer inquiries using Meta Ads and WhatsApp lead funnels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button onClick={handleBookCall} aria-label="Book Free Strategy Call" className="btn-primary text-center w-full sm:w-auto text-lg py-4 px-8 shadow-lg hover:shadow-xl">
                  Book Free Strategy Call
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative w-full aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={homeImg} alt="Luxury Real Estate" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL POSITIONING & TRUST BADGES */}
      <section ref={trustRef} className="reveal bg-black text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C45E2A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Helping Hyderabad Real Estate Projects Generate <span className="text-brick">Qualified Buyer Leads</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brick">
                <TrendingUp size={24} />
              </div>
              <span className="font-bold text-sm md:text-base">Performance-Focused</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brick">
                <Building2 size={24} />
              </div>
              <span className="font-bold text-sm md:text-base">Real Estate Focused</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brick">
                <Database size={24} />
              </div>
              <span className="font-bold text-sm md:text-base">Data-Driven Campaigns</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brick">
                <BarChart3 size={24} />
              </div>
              <span className="font-bold text-sm md:text-base">Lead Quality Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Trimmed to 4) */}
      <section ref={servicesRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="accent-label">OUR SERVICES</span>
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto font-black">
              Specialized Real Estate Lead Generation Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <MousePointer2 size={28} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-charcoal group-hover:text-brick transition-colors">1. Meta Ads Management</h3>
              <p className="text-grey leading-relaxed">
                Hyper-targeted campaigns on Facebook and Instagram designed exclusively to attract high-intent property buyers, not window shoppers.
              </p>
            </div>
            
            <div className="bg-light p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Target size={28} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-charcoal group-hover:text-brick transition-colors">2. Real Estate Lead Generation</h3>
              <p className="text-grey leading-relaxed">
                Multi-layer qualification systems that filter out unqualified inquiries so your sales team only speaks to buyers with the right budget.
              </p>
            </div>

            <div className="bg-light p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-charcoal group-hover:text-brick transition-colors">3. WhatsApp Funnels</h3>
              <p className="text-grey leading-relaxed">
                Automated WhatsApp systems that engage leads instantly, deliver project brochures, answer FAQs, and book site visits 24/7.
              </p>
            </div>
            
            <div className="bg-light p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Layout size={28} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-charcoal group-hover:text-brick transition-colors">4. Landing Pages</h3>
              <p className="text-grey leading-relaxed">
                Lightning-fast, mobile-optimized conversion pages engineered with psychological triggers to turn ad clicks into verifiable leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (The LeadBrick System) */}
      <section ref={howRef} className="reveal py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <span className="accent-label">THE LEADBRICK SYSTEM</span>
            <h2 className="text-3xl md:text-5xl mt-4 font-black">How We Generate Site Visits</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-brick/20 -translate-y-1/2 z-0"></div>
            
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
              {[
                { step: "Step 1", title: "Meta Ads", icon: MousePointer2 },
                { step: "Step 2", title: "Landing Page", icon: Layout },
                { step: "Step 3", title: "WhatsApp Funnel", icon: MessageSquare },
                { step: "Step 4", title: "Qualified Leads", icon: Target },
                { step: "Step 5", title: "Site Visits", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex flex-row lg:flex-col items-center lg:w-48 bg-white lg:bg-transparent p-4 lg:p-0 rounded-xl shadow-sm lg:shadow-none border lg:border-none border-gray-100 relative">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-brick flex items-center justify-center text-brick shadow-lg shrink-0 lg:mb-6 z-10">
                    <item.icon size={24} />
                  </div>
                  <div className="ml-6 lg:ml-0 text-left lg:text-center">
                    <div className="text-sm font-bold text-grey uppercase tracking-wider mb-1">{item.step}</div>
                    <h3 className="text-lg font-black text-charcoal">{item.title}</h3>
                  </div>
                  
                  {/* Arrow for Desktop */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_1rem)] -translate-y-1/2 text-brick z-10 bg-light rounded-full">
                      <ArrowRight size={24} />
                    </div>
                  )}
                  {/* Connector for Mobile */}
                  {i < 4 && (
                    <div className="block lg:hidden absolute top-[calc(100%_+_1rem)] left-12 w-0.5 h-6 bg-brick/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO (Sample Campaign Concepts) */}
      <section ref={portfolioRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="accent-label">PROVEN FRAMEWORKS</span>
            <h2 className="text-3xl md:text-5xl mt-4 font-black">Sample Campaign Concepts</h2>
            <p className="text-grey mt-4 max-w-2xl mx-auto text-lg">
              Our targeted funnel structures are adaptable to various real estate asset classes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-2xl border border-gray-100 hover:border-brick/30 transition-colors relative">
              <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Concept</div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brick mb-6 shadow-sm">
                <HomeIcon size={24} />
              </div>
              <h3 className="text-xl font-black mb-3 text-charcoal">Luxury Villas Campaign</h3>
              <p className="text-grey text-sm mb-6 leading-relaxed">Targeting HNIs, Business Owners, and NRIs. Focus on lifestyle, exclusivity, and premium amenities. High-friction lead forms to qualify budgets.</p>
              <ul className="space-y-3 text-sm text-charcoal font-bold">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Video Tour Ads</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Brochure via WhatsApp</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> VIP Site Visit Booking</li>
              </ul>
            </div>

            <div className="bg-light p-8 rounded-2xl border border-gray-100 hover:border-brick/30 transition-colors relative">
              <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Concept</div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brick mb-6 shadow-sm">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-black mb-3 text-charcoal">Apartment Launch Funnel</h3>
              <p className="text-grey text-sm mb-6 leading-relaxed">High-volume campaign targeting IT professionals and young families. Focus on connectivity, EMI schemes, and early-bird pricing.</p>
              <ul className="space-y-3 text-sm text-charcoal font-bold">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Carousel Ads (Floorplans)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Automated FAQ Bot</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Urgency-Driven Offers</li>
              </ul>
            </div>

            <div className="bg-light p-8 rounded-2xl border border-gray-100 hover:border-brick/30 transition-colors relative">
              <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Concept</div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brick mb-6 shadow-sm">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-black mb-3 text-charcoal">Plot Venture Lead Funnel</h3>
              <p className="text-grey text-sm mb-6 leading-relaxed">Investment-focused campaign targeting local investors and salaried professionals looking for long-term appreciation.</p>
              <ul className="space-y-3 text-sm text-charcoal font-bold">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Location Highlight Ads</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Layout PDF Auto-Send</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brick shrink-0" /> Weekend Site Tour Booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW */}
      <section ref={aboutRef} className="reveal py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-8xl md:text-[16rem] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
          REAL ESTATE ONLY
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="accent-label text-brick">HYDERABAD BASED. BUILT FOR BUILDERS.</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-black">
                Performance <br />
                <span className="text-brick">Without the</span> <br />
                Agency Fluff.
              </h2>
            </div>
            
            <div className="space-y-10 lg:pl-10 border-l border-white/10">
              <p className="text-xl md:text-2xl text-grey leading-relaxed">
                LeadBrick isn't a general marketing agency. We are a specialized lead generation partner exclusively for the real estate industry. 
              </p>
              <p className="text-lg text-grey leading-relaxed">
                We understand that general "leads" don't sell properties. Our systems are built to ensure your project's sales pipeline is filled with high-intent buyers, delivering them directly to your site office.
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

      {/* 7. FINAL CTA SECTION */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-black leading-tight">
            Looking to Generate More Qualified Buyer Leads?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Let's build your real estate lead generation system.</p>
          <button 
            onClick={handleBookCall}
            aria-label="Book a consultation"
            className="bg-white text-brick px-10 py-5 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-colors w-full sm:w-auto shadow-xl"
          >
            Book Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
