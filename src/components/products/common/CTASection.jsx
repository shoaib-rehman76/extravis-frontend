import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';

const CTASection = ({ 
  title, 
  description, 
  buttonText, 
  secondaryButtonText,
  onClick, 
  onSecondaryClick,
}) => (
  <section 
    className="py-28"
    style={{ background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.5) 0%, rgba(88, 28, 135, 0.5) 100%)' }}
  >
    <Wrapper>
      <div 
        data-aos="fade-up"
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-[2.2rem] font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-white/80 text-[1.1rem] mb-10 max-w-2xl mx-auto font-light">{description}</p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <button 
            onClick={onClick}
            className="group px-8 py-3 bg-[#4F46E5] hover:bg-[#4338ca] text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            {buttonText} <span className="text-lg">→</span>
          </button>

          {/* Secondary Button */}
          {secondaryButtonText && (
            <button 
              onClick={onSecondaryClick}
              className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white rounded-full font-medium transition-all transform hover:scale-105 backdrop-blur-sm flex items-center gap-2"
            >
              {secondaryButtonText} <span className="text-lg">→</span>
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  </section>
);

export default CTASection;
