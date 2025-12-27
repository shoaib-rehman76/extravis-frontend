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
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-12 lg:py-20">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left w-full">
          {subtitle && (
            <div 
              data-aos="fade-up"
              className="inline-block px-4 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium"
            >
              {subtitle}
            </div>
          )}
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-[2.1rem] font-bold leading-tight">
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 text-[1rem] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
          
          {/* Desktop Button */}
          <div data-aos="fade-up" data-aos-delay="300" className="hidden lg:block">
            <button 
              onClick={onButtonClick}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              {buttonText} 
            </button>
          </div>
        </div>
        
        {/* Right Dashboard/Product Image */}
        <div className="relative w-full" data-aos="fade-left" data-aos-duration="1000">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl opacity-50" />
          <img 
            src={heroImage} 
            alt="Product Showcase" 
            className="relative z-10 rounded-2xl shadow-2xl w-full h-auto transform lg:hover:scale-105 transition-transform duration-500 border border-white/10" 
          />
          
          {/* Feature Tags (Dynamic) - Desktop Only */}
          {/* <div className="hidden lg:block">
            {featureTags.map((tag, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={400 + index * 100}
                className={`absolute ${tag.position} bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 shadow-xl z-20`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tag.icon}</span>
                  <span className="text-white font-medium">{tag.label}</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Mobile Button - Placed after image for mobile layout */}
        <div data-aos="fade-up" className="lg:hidden w-full flex justify-center mt-4">
          <button 
            onClick={onButtonClick}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/50"
          >
            {buttonText} →
          </button>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default ProductHero;
