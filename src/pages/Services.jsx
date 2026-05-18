import React from 'react';
import { MousePointer2, Layout, MessageSquare, Target, CheckCircle2 } from 'lucide-react';
import useInView from '../hooks/useInView';

const Services = ({ onBookCall }) => {
  const heroRef = useInView();
  const ctaRef = useInView();

  const servicesList = [
    {
      id: 'ads',
      icon: MousePointer2,
      number: '01',
      title: 'Meta Ads Management',
      problem: 'Most real estate ads attract casual "window shoppers" who never pick up the phone or visit the site.',
      solution: 'We build high-intent Meta ad campaigns using custom audiences and creative frameworks that speak directly to serious property buyers.',
      outcome: 'Higher click-to-lead conversion rates.',
    },
    {
      id: 'leads',
      icon: Target,
      number: '02',
      title: 'Real Estate Lead Generation',
      problem: 'Builders often struggle with lead quality, spending too much time on junk inquiries.',
      solution: 'Our multi-step qualification process filters out casual browsers, ensuring your sales team only talks to serious prospects.',
      outcome: 'Qualified inquiries ready for site visits.',
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      number: '03',
      title: 'WhatsApp Lead Funnels',
      problem: 'Leads go cold when they aren\'t contacted immediately, resulting in lost opportunities.',
      solution: 'We implement automated WhatsApp funnels that engage leads within seconds of their inquiry, booking site visits automatically.',
      outcome: 'Instant engagement & higher site-visit ratios.',
    },
    {
      id: 'landing',
      icon: Layout,
      number: '04',
      title: 'Landing Page Development',
      problem: 'Generic websites overwhelm visitors with too much information, causing them to leave without inquiring.',
      solution: 'We design hyper-focused landing pages for specific projects that highlight USPs and drive maximum conversions.',
      outcome: '2x-3x higher lead capture compared to websites.',
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
                <div className="lg:col-span-5 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-extrabold group-hover:text-brick transition-colors duration-300">
                    {service.title}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <span className="accent-label text-grey mb-2 block">THE CHALLENGE</span>
                      <p className="text-xl text-charcoal leading-relaxed">{service.problem}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-50">
                      <span className="accent-label text-brick mb-2 block">THE LEADBRICK SOLUTION</span>
                      <p className="text-xl text-grey leading-relaxed">{service.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome - Styled as a "Metric" card */}
                <div className="lg:col-span-5 lg:pl-12">
                  <div className="bg-light p-8 md:p-12 rounded-3xl relative overflow-hidden group-hover:bg-brick transition-colors duration-500">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <span className="accent-label text-grey group-hover:text-white/60 mb-6 block">PROJECT IMPACT</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal group-hover:text-white leading-tight">
                      {service.outcome}
                    </h3>
                    
                    <div className="mt-8 flex items-center gap-2 text-brick group-hover:text-white">
                      <CheckCircle2 size={24} />
                      <span className="font-bold uppercase tracking-wider text-sm">Service Verified</span>
                    </div>
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
