import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';

const ProductHero = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  onButtonClick,
  backgroundImage,
  heroImage,
  featureTags = []
}) => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent" />
    
    <Wrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
        {/* Left Content */}
        <div className="space-y-6">
          {subtitle && (
            <div className="inline-block px-4 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
              {subtitle}
            </div>
          )}
          <h1 className="text-[2.2rem] lg:text-[2.5rem] font-bold leading-tight">
            {title}
          </h1>
          <p className="text-gray-300 text-[1rem] max-w-xl leading-relaxed">
            {description}
          </p>
          <button 
            onClick={onButtonClick}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            {buttonText} →
          </button>
        </div>
        
        {/* Right Dashboard/Product Image */}
        <div className="relative lg:block hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl opacity-50" />
          <img 
            src={heroImage} 
            alt="Product Showcase" 
            className="relative z-10 rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500 border border-white/10" 
          />
          
          {/* Feature Tags (Dynamic) */}
          {featureTags.map((tag, index) => (
            <div 
              key={index}
              className={`absolute ${tag.position} bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 shadow-xl`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tag.icon}</span>
                <span className="text-white font-medium">{tag.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  </section>
);

export default ProductHero;
