import React, { useRef } from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { LuWrench } from 'react-icons/lu';
import { BsChatDots } from 'react-icons/bs';
import { IoStatsChartOutline } from 'react-icons/io5';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
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

const IntegrationEcosystem = ({ title, description, categories }) => {
  const sliderRef = useRef(null);
  
  const iconMap = {
    itsm: <LuWrench />,
    communication: <BsChatDots />,
    monitoring: <IoStatsChartOutline />
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const renderCategory = (cat, idx) => (
     <div 
        key={idx} 
        data-aos="fade-up"
        data-aos-delay={idx * 100}
        className="p-8 rounded-3xl bg-[#0d0d1f] border border-blue-500/20 flex flex-col mx-2 md:mx-0"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl mb-8 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          {iconMap[cat.id]}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-8 pr-12">{cat.title}</h3>
        
        <ul className="space-y-4">
          {cat.items.map((item, iIdx) => (
            <li key={iIdx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-gray-400 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        {/* Mobile Slider */}
        <div className="md:hidden mt-8 px-4">
             <Slider ref={sliderRef} {...sliderSettings}>
                {categories.map((cat, idx) => (
                    <div key={idx} className="h-full py-2">
                        {renderCategory(cat, idx)}
                    </div>
                ))}
             </Slider>
             {/* Bottom Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, idx) => renderCategory(cat, idx))}
        </div>
      </Wrapper>
    </section>
  );
};

export default IntegrationEcosystem;
