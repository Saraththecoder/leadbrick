import React from 'react';
import { Target, Shield, Zap, Users, Trophy } from 'lucide-react';
import useInView from '../hooks/useInView';

const About = ({ onBookCall }) => {
  const heroRef = useInView();
  const overviewRef = useInView();
  const missionRef = useInView();
  const valuesRef = useInView();
  const whyRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="overflow-hidden">
      {/* 1. Hero */}
      <section ref={heroRef} className="reveal bg-black text-white py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="accent-label text-brick mb-6 block">OUR STORY</span>
            <h1 className="text-5xl md:text-7xl mb-8">We Help Builders Get Qualified Buyers</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed">
              LeadBrick is a performance marketing agency built specifically for real estate. Based in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section ref={overviewRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Who We Are</h2>
              <p className="text-lg text-grey leading-relaxed">
                We started LeadBrick with a simple realization: real estate marketing is often broken. Builders get thousands of "leads," but very few ever turn into site visits or sales. 
              </p>
              <p className="text-lg text-grey leading-relaxed">
                We decided to change that by building a specialized agency that focuses on the only metric that matters for a builder: qualified buyer inquiries. By combining performance marketing with deep industry knowledge, we help developers across India fill their sales pipeline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Real Estate Focused", text: "We only work with builders and developers. We know the industry." },
                { title: "Performance-First", text: "Our success is measured by the quality of leads we generate." },
                { title: "Based in Hyderabad", text: "Proudly operating from the tech hub of Telangana." }
              ].map((box, i) => (
                <div key={i} className="p-8 border-2 border-light rounded-xl hover:border-brick transition-colors">
                  <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                  <p className="text-grey">{box.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section ref={missionRef} className="reveal py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brick/10 text-brick rounded-lg flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-grey leading-relaxed">
                Become a trusted real estate lead generation partner for builders across India.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brick/10 text-brick rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-grey leading-relaxed">
                Help builders generate qualified buyer inquiries using performance marketing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section ref={valuesRef} className="reveal py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="accent-label">OUR ETHOS</span>
            <h2 className="text-3xl md:text-5xl mt-4">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Results-Driven", icon: <Trophy size={24} /> },
              { title: "Transparency", icon: <Shield size={24} /> },
              { title: "Professionalism", icon: <Zap size={24} /> },
              { title: "Partnerships", icon: <Users size={24} /> },
              { title: "Quality First", icon: <Target size={24} /> }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-xl text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="text-brick mb-4">{value.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why LeadBrick */}
      <section ref={whyRef} className="reveal py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">What Makes Us Different?</h2>
              <p className="text-xl text-grey leading-relaxed">
                We are not a general marketing agency. We specialize exclusively in real estate, which gives us an unfair advantage.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Deep Real Estate Knowledge", text: "We understand the difference between a plot buyer and a villa buyer." },
                { title: "Proven Ad Templates", text: "We use data from hundreds of campaigns to know what works." },
                { title: "Focus on Quality", text: "We prioritize lead qualification over lead volume." },
                { title: "Speed to Response", text: "Our automation ensures no lead goes cold." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brick flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-grey">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto">
            Ready to scale your project sales?
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

export default About;
