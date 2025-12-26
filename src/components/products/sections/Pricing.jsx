import React, { useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="w-10 h-10 rounded-full border border-purple-500 text-purple-400 flex items-center justify-center hover:bg-purple-500/20 hover:text-white transition-all backdrop-blur-sm"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="w-10 h-10 rounded-full border border-purple-500 text-purple-400 flex items-center justify-center hover:bg-purple-500/20 hover:text-white transition-all backdrop-blur-sm"
  >
    <FaArrowLeft />
  </button>
);

const Pricing = ({ title, subtitle, description, cards }) => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const renderCard = (card, index) => (
      <div 
        key={index} 
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 flex flex-col h-full mx-2 md:mx-0" // added mx-2 for slider spacing
      >
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
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />

      <Wrapper>
        {/* Mobile Slider */}
        <div className="md:hidden mt-8 px-4">
            <Slider ref={sliderRef} {...sliderSettings}>
                {cards.map((card, index) => (
                    <div key={index} className="h-full py-2">
                        {renderCard(card, index)}
                    </div>
                ))}
            </Slider>
             {/* Bottom Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {cards.map((card, index) => renderCard(card, index))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;
