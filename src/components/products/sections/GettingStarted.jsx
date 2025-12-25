import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';

const GettingStarted = ({ title, description, steps }) => {
  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />

      <Wrapper>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20"
            >
              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {step.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default GettingStarted;
