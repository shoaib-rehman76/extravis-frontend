import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { TbHierarchy3, TbHierarchy } from 'react-icons/tb';
import { PiBrainThin, PiHandTapLight } from 'react-icons/pi';
import { HiOutlineBolt } from 'react-icons/hi2';
import { RxTarget } from 'react-icons/rx';
import { FaNetworkWired } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommandCenter = ({ title,description, steps }) => {
  const iconMap = {
    TbHierarchy3: <TbHierarchy3 />,
    PiBrainThin: <PiBrainThin />,
    HiOutlineBolt: <HiOutlineBolt />,
    RxTarget: <RxTarget />,
    TbHierarchy: <TbHierarchy />,
    PiHandTapLight: <PiHandTapLight />,
    FaNetworkWired: <FaNetworkWired />
  };

  const colors = {
    blue: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    purple: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    yellow: "bg-yellow-500/20 border-yellow-500/40 text-yellow-400",
    green: "bg-green-500/20 border-green-500/40 text-green-400"
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
        <div style={{ bottom: "-45px" }}>
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 dot-custom"
        />
    )
  };

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title}  description={description}/>
      
      <Wrapper>
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${colors[step.color]}`}>
                  <span className="text-3xl">
                    {typeof step.icon === 'string' ? iconMap[step.icon] : step.icon}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className={`inline-block px-3 py-1 rounded text-xs font-medium mb-3 ${colors[step.color].split('text-')[0]} border ${colors[step.color].split('text-')[1] ? 'text-' + colors[step.color].split('text-')[1] : ''}`}>
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        <div className="md:hidden pb-16">
          <Slider {...sliderSettings}>
            {steps.map((step, index) => (
              <div key={index} className="px-2"> {/* Added padding for slider spacing */}
                <div 
                  className="p-6 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex flex-col gap-4 h-full"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${colors[step.color]}`}>
                      <span className="text-2xl">
                        {typeof step.icon === 'string' ? iconMap[step.icon] : step.icon}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded text-xs font-medium mb-3 ${colors[step.color].split('text-')[0]} border ${colors[step.color].split('text-')[1] ? 'text-' + colors[step.color].split('text-')[1] : ''}`}>
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Wrapper>
      
      <style>{`
        .slick-active .dot-custom {
          background-color: #3b82f6 !important; /* blue-500 */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default CommandCenter;
