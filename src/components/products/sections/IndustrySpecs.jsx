import React, { useState, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { FaFile } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { TbAlignBoxCenterStretch } from 'react-icons/tb';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustrySpecs = ({ title, highlight, tabs }) => {
  const [activeTab, setActiveTab ] = useState(tabs[0].id);
  const sliderRef = useRef(null);

  const activeContent = tabs.find(t => t.id === activeTab);

  // Custom Arrows for Mobile Slider
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:text-white transition-all z-10"
      aria-label="Previous"
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:text-white transition-all z-10"
      aria-label="Next"
    >
      <FaArrowRight />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false
  };

  const renderContentCard = (content) => (
    <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 h-full">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{content.icon}</span>
        <h3 className="text-2xl font-bold text-white">{content.title}</h3>
      </div>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {content.description}
      </p>
      <div className="grid grid-cols-1 gap-y-3">
        {content.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800 bg-[#090A0C]">
      <SectionHeader 
        title={title} 
        highlight={highlight}
        description={activeContent.description} 
      />

      <Wrapper>
        
        {/* --- DESKTOP VIEW (Tabs) --- */}
        <div className="hidden lg:block">
          <div 
            data-aos="fade-down"
            className="max-w-7xl flex flex-wrap justify-between mb-12 gap-2 mx-auto mt-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600/20 border border-purple-500/50 text-purple-500'
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="max-w-7xl mx-auto"
          >
             {/* Re-implementing the desktop card directly to match the original layout exactly if needed, 
                 or using the helper function but adapting grid cols */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{activeContent.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{activeContent.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {activeContent.description}
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE VIEW (Slider) --- */}
        <div className="lg:hidden mt-8">
            <Slider ref={sliderRef} {...sliderSettings}>
                {tabs.map((tab, index) => (
                    <div key={index} className="px-1 py-4 h-full">
                        {renderContentCard(tab)}
                    </div>
                ))}
            </Slider>

            {/* Custom Bottom Arrows */}
            <div className="flex justify-center gap-6 mt-8">
                <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>

      </Wrapper>
    </section>
  );
};

export default IndustrySpecs;
