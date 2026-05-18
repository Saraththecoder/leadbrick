import { useModal } from '../context/ModalContext';
import { Target, Shield, Zap, Users, Trophy } from 'lucide-react';
import useInView from '../hooks/useInView';
import useSEO from '../hooks/useSEO';

const About = () => {
  const { openModal } = useModal();
  const heroRef = useInView();
  const overviewRef = useInView();
  const missionRef = useInView();
  const valuesRef = useInView();
  const whyRef = useInView();
  const ctaRef = useInView();

  useSEO({
    title: 'About LeadBrick | Pan-India Real Estate Marketing',
    description: 'LeadBrick is a specialized lead generation partner for the real estate industry, delivering high-intent buyers directly to your site office across India.'
  });

  const handleBookCall = () => {
    openModal();
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero - Redesigned with Image */}
      <section ref={heroRef} className="reveal bg-black text-white pt-40 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#C45E2A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
            <span className="accent-label text-brick mb-8 block">THE LEADBRICK STORY</span>
            <h1 className="text-5xl md:text-9xl font-black mb-8 md:mb-12 leading-[1.1] md:leading-[0.9]">
              Built to <br />
              <span className="text-brick">Scale</span> Real <br />
              Estate.
            </h1>
            <p className="text-xl md:text-3xl text-grey leading-relaxed max-w-2xl">
              LeadBrick was founded to solve one specific problem: the massive gap between "digital leads" and "actual site visits" in the real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Vision and Mission */}
      <section ref={overviewRef} className="reveal py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-6xl font-bold leading-tight">Vision <br className="hidden md:block" /> & Mission</h2>
              <div className="w-20 h-2 bg-brick mt-6 md:mt-8"></div>
            </div>
            
            <div className="w-full lg:w-7/12 space-y-12 md:space-y-16">
              <div className="space-y-10 md:space-y-12">
                <div className="bg-light p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brick/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <div className="w-12 h-12 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Trophy size={24} />
                  </div>
                  <span className="accent-label text-brick mb-3 block">OUR VISION</span>
                  <p className="text-2xl md:text-3xl font-bold text-charcoal leading-tight">To be the most reliable growth partner for real estate developers across India.</p>
                </div>
                <div className="bg-light p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brick/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <div className="w-12 h-12 bg-white text-brick rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Target size={24} />
                  </div>
                  <span className="accent-label text-brick mb-3 block">OUR MISSION</span>
                  <p className="text-lg md:text-xl text-grey leading-relaxed">
                    We eliminate the waste in real estate marketing by building performance-driven systems. We bridge the gap between digital leads and actual site visits, ensuring our clients achieve their sales targets predictably and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Core Values - Modern Grid */}
      <section ref={valuesRef} className="reveal py-32 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="accent-label text-brick mb-4 block">HOW WE WORK</span>
              <h2 className="text-3xl md:text-6xl font-black">Our Core Values</h2>
            </div>
            <p className="text-xl text-grey max-w-sm hidden md:block"></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Results-Driven", desc: "We focus on actual site visits and closed sales, not vanity metrics." },
              { title: "Transparency", desc: "You see exactly what we see. No hidden data, no fake numbers." },
              { title: "Professionalism", desc: "We operate as an extension of your team with absolute integrity." },
              { title: "Long-term Partnerships", desc: "We only win when your project sells out, building lasting relationships." },
              { title: "Quality Over Quantity", desc: "We'd rather deliver 10 serious buyers than 100 window shoppers." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <span className="text-brick font-black text-xl mb-6 block opacity-50 group-hover:opacity-100">0{i + 1}</span>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-grey leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - Redesigned */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-6xl max-w-4xl mx-auto font-black">
            Ready to build your lead engine?
          </h2>
          <p className="text-xl opacity-90">Book a consultation to discuss your specific project needs.</p>
          <button 
            onClick={handleBookCall}
            className="bg-white text-brick px-10 py-5 rounded-xl font-bold text-lg hover:bg-light transition-colors shadow-2xl"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
