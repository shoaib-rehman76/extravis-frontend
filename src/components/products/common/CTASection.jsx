import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';

const CTASection = ({ title, description, buttonText, onClick, gradient = "from-purple-600/20 via-blue-600/20 to-purple-600/20" }) => (
  <section className={`py-20 bg-gradient-to-r ${gradient} border-y border-purple-500/20`}>
    <Wrapper>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[2.2rem] font-[700] text-white mb-6 uppercase tracking-tight">{title}</h2>
        <p className="text-gray-300 text-[1.1rem] mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <button 
          onClick={onClick}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20"
        >
          {buttonText}
        </button>
      </div>
    </Wrapper>
  </section>
);

export default CTASection;
