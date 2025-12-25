import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';

const Pricing = ({ title, subtitle, description, cards }) => {
  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />

      <Wrapper>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {cards.map((card, index) => (
            <div key={index} className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{card.title}</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {card.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={card.onButtonClick}
                className="w-full py-3 px-6 bg-[linear-gradient(90deg,#9810FA_0%,#155DFC_50%,#0092B8_100%)] hover:bg-[linear-gradient(90deg,#9810FAcc_0%,#155DFCcc_50%,#0092B8cc_100%)] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                {card.buttonText || 'Get Started'} →
              </button>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;
