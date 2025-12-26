import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GettingStarted = ({ title, description, steps }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center gap-2 m-0 p-0 list-none"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-purple-500/50 text-gray-400 text-xs font-medium cursor-pointer hover:bg-purple-500 hover:text-white transition-all pagin-dot">
        {i + 1}
      </div>
    )
  };

  const renderStep = (step, index) => (
    <div 
      key={index} 
      className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 h-full mx-2 md:mx-0"
      data-aos="fade-up"
      data-aos-delay={index * 100}
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
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />

      <Wrapper>
        {/* Mobile Slider */}
        <div className="md:hidden pb-12 px-2">
            <Slider {...settings}>
                {steps.map((step, index) => (
                    <div key={index} className="h-full py-2">
                         {renderStep(step, index)}
                    </div>
                ))}
            </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => renderStep(step, index))}
        </div>
      </Wrapper>
      
      {/* Custom styles for active pagination dot */}
      <style>{`
        .slick-active .pagin-dot {
            background-color: #3b82f6; /* blue-500 */
            color: white;
            border-color: #2563eb;
            transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default GettingStarted;
