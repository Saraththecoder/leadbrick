import { useNavigate } from 'react-router-dom';
import { Target, Shield, Zap, Users, Trophy } from 'lucide-react';
import useInView from '../hooks/useInView';

const About = () => {
  const navigate = useNavigate();
  const heroRef = useInView();
  const overviewRef = useInView();
  const missionRef = useInView();
  const valuesRef = useInView();
  const whyRef = useInView();
  const ctaRef = useInView();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero - Redesigned with Image */}
      <section ref={heroRef} className="reveal bg-black text-white pt-40 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Real Estate Growth" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
            <span className="accent-label text-brick mb-8 block">THE LEADBRICK STORY</span>
            <h1 className="text-6xl md:text-9xl font-black mb-12 leading-[0.9]">
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

      {/* 2. Philosophy Section - Improved Mobile Layout */}
      <section ref={overviewRef} className="reveal py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Our <br /> Philosophy</h2>
              <div className="w-20 h-2 bg-brick mt-6 md:mt-8"></div>
            </div>
            
            <div className="w-full lg:w-7/12 space-y-12 md:space-y-16">
              <div className="space-y-6 md:space-y-8">
                <p className="text-2xl md:text-3xl font-bold text-charcoal leading-tight">We don't sell marketing packages. We sell sales pipelines.</p>
                <p className="text-lg md:text-xl text-grey leading-relaxed">
                  Most agencies thrive on complexity and jargon. They report on "Reach," "Impressions," and "Engagement." At LeadBrick, we believe these metrics are meaningless unless they result in a buyer standing at your project site.
                </p>
                <p className="text-lg md:text-xl text-grey leading-relaxed">
                  By focusing exclusively on the real estate sector, we've developed a deep understanding of buyer psychology—allowing us to build systems that qualify leads before they ever reach your sales team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Pan-India Specialized", text: "We understand the diverse dynamics of property buyers across different states and cities." },
                  { title: "Performance First", text: "Our entire compensation is tied to the quality of the leads we generate for you." }
                ].map((item, i) => (
                  <div key={i} className="p-8 md:p-10 bg-light rounded-[2rem] border border-gray-100 h-full">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-grey leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Core Values - Modern Grid */}
      <section ref={valuesRef} className="reveal py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="accent-label text-brick mb-4 block">HOW WE WORK</span>
              <h2 className="text-4xl md:text-6xl font-black">Our Core Values</h2>
            </div>
            <p className="text-xl text-grey max-w-sm">The principles that guide every campaign we build.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: "Extreme Transparency", desc: "You see exactly what we see. No hidden data, no fake numbers." },
              { title: "Bias for Action", desc: "We launch fast, test aggressively, and optimize daily." },
              { title: "Quality Over Volume", desc: "We'd rather deliver 10 serious buyers than 100 window shoppers." },
              { title: "Pan-India First", desc: "We live and breathe the diverse real estate market dynamics across the country." },
              { title: "Automation Driven", desc: "Leveraging AI and WhatsApp to ensure no lead ever goes cold." },
              { title: "Long-term Partnerships", desc: "We only win when your project sells out." }
            ].map((value, i) => (
              <div key={i} className="p-12 bg-white hover:bg-light transition-colors group">
                <span className="text-brick font-black text-xl mb-6 block opacity-30 group-hover:opacity-100">0{i + 1}</span>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-grey leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - Redesigned */}
      <section ref={ctaRef} className="reveal py-32 bg-brick text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-8xl font-black leading-tight max-w-5xl mx-auto">
            Ready to Build <br /> Your Story?
          </h2>
          <button 
            onClick={handleBookCall}
            className="bg-white text-brick px-12 py-6 rounded-full font-black text-xl hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-2xl"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
