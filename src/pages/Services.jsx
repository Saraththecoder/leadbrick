import React from 'react';
import { MousePointer2, Layout, MessageSquare, Target, CheckCircle2 } from 'lucide-react';
import useInView from '../hooks/useInView';

const ServiceSection = ({ id, icon: Icon, title, problem, solution, outcome, reverse, index }) => {
  const ref = useInView();
  return (
    <section ref={ref} id={id} className={`reveal py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="w-16 h-16 bg-brick/10 text-brick rounded-2xl flex items-center justify-center mb-8">
              <Icon size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl mb-12">{title}</h2>
            
            <div className="space-y-12">
              <div>
                <span className="accent-label mb-4 block">THE PROBLEM</span>
                <p className="text-xl text-charcoal leading-relaxed">{problem}</p>
              </div>
              
              <div>
                <span className="accent-label mb-4 block">OUR SOLUTION</span>
                <p className="text-xl text-grey leading-relaxed">{solution}</p>
              </div>
              
              <div>
                <span className="accent-label mb-4 block">EXPECTED OUTCOME</span>
                <div className="flex items-center space-x-3 text-brick font-bold text-xl">
                  <CheckCircle2 size={24} />
                  <span>{outcome}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
            {/* Abstract Visual representation */}
            <div className="w-full aspect-square bg-white rounded-3xl border-2 border-gray-100 flex items-center justify-center p-12 overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <pattern id={`pattern-${id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#pattern-${id})`} />
                </svg>
              </div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {id === 'ads' && (
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="h-40 bg-brick/10 rounded-xl animate-pulse"></div>
                    <div className="h-40 bg-black/5 rounded-xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-40 bg-black/5 rounded-xl animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="h-40 bg-brick/20 rounded-xl animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                )}
                {id === 'leads' && (
                  <div className="space-y-4 w-full">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center px-6 space-x-4 animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className="w-8 h-8 rounded-full bg-brick/20"></div>
                        <div className="h-2 w-32 bg-gray-100 rounded"></div>
                      </div>
                    ))}
                  </div>
                )}
                {id === 'whatsapp' && (
                  <div className="relative w-48 h-80 bg-charcoal rounded-[2.5rem] border-8 border-gray-800 p-4 shadow-2xl">
                    <div className="w-12 h-1.5 bg-gray-800 rounded-full mx-auto mb-4"></div>
                    <div className="space-y-3">
                      <div className="bg-brick text-white text-[10px] p-2 rounded-lg rounded-tl-none w-3/4">Hi, I'm interested in the project.</div>
                      <div className="bg-gray-100 text-[10px] p-2 rounded-lg rounded-tr-none w-3/4 ml-auto">Hello! Which floor plan are you looking for?</div>
                    </div>
                  </div>
                )}
                {id === 'landing' && (
                  <div className="w-full h-full bg-white border-4 border-gray-100 rounded-xl p-4 space-y-4">
                    <div className="h-8 w-1/2 bg-brick/10 rounded"></div>
                    <div className="h-48 w-full bg-gray-50 rounded"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-4 bg-gray-100 rounded"></div>
                      <div className="h-4 bg-gray-100 rounded"></div>
                      <div className="h-4 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ onBookCall }) => {
  const heroRef = useInView();
  const ctaRef = useInView();

  const servicesList = [
    {
      id: 'ads',
      icon: MousePointer2,
      title: 'Meta Ads Management',
      problem: 'Most real estate ads attract casual "window shoppers" who never pick up the phone or visit the site.',
      solution: 'We build high-intent Meta ad campaigns using custom audiences and creative frameworks that speak directly to serious property buyers.',
      outcome: 'Higher click-to-lead conversion rates.',
      reverse: false
    },
    {
      id: 'leads',
      icon: Target,
      title: 'Real Estate Lead Generation',
      problem: 'Builders often struggle with lead quality, spending too much time on junk inquiries.',
      solution: 'Our multi-step qualification process filters out casual browsers, ensuring your sales team only talks to serious prospects.',
      outcome: 'Qualified inquiries ready for site visits.',
      reverse: true
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: 'WhatsApp Lead Funnels',
      problem: 'Leads go cold when they aren\'t contacted immediately, resulting in lost opportunities.',
      solution: 'We implement automated WhatsApp funnels that engage leads within seconds of their inquiry, booking site visits automatically.',
      outcome: 'Instant engagement & higher site-visit ratios.',
      reverse: false
    },
    {
      id: 'landing',
      icon: Layout,
      title: 'Landing Page Development',
      problem: 'Generic websites overwhelm visitors with too much information, causing them to leave without inquiring.',
      solution: 'We design hyper-focused landing pages for specific projects that highlight USPs and drive maximum conversions.',
      outcome: '2x-3x higher lead capture compared to websites.',
      reverse: true
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="reveal bg-black text-white py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="accent-label text-brick mb-6 block">OUR SERVICES</span>
            <h1 className="text-5xl md:text-7xl mb-8">Performance Marketing Systems Built for Real Estate Projects</h1>
            <p className="text-xl md:text-2xl text-grey leading-relaxed">
              Every service is designed with one goal: qualified buyer leads for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesList.map((service, index) => (
        <ServiceSection key={service.id} {...service} index={index} />
      ))}

      {/* CTA */}
      <section ref={ctaRef} className="reveal py-24 bg-brick text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto">
            Ready to generate more qualified leads?
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

export default Services;
