import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FaRegChartBar } from 'react-icons/fa';
import { CiFileOn } from 'react-icons/ci';
import { TbHierarchy } from 'react-icons/tb';
import { PiBrainThin } from 'react-icons/pi';
import { RxTarget } from 'react-icons/rx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeyFeatures = ({ title, description, row1, row2 }) => {
  const iconMap = {
    FaRegChartBar: <FaRegChartBar />,
    CiFileOn: <CiFileOn />,
    TbHierarchy: <TbHierarchy />,
    PiBrainThin: <PiBrainThin />,
    RxTarget: <RxTarget />
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

  // Combine cards for mobile slider
  const allCards = [row1.card1, row1.card2, ...row2];

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />

      <Wrapper>
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* --- MOBILE LAYOUT (Image + Slider) --- */}
          <div className="lg:hidden pb-16">
            {/* Image on top */}
            <div className="mb-8 overflow-hidden h-[250px] flex items-center justify-center">
              <img src={row1.image} alt="Feature Preview" className="w-full h-full object-contain" />
            </div>

            {/* Slider for ALL cards */}
            <Slider {...sliderSettings}>
              {allCards.map((card, index) => (
                <div key={index} className="px-2 h-full">
                  <div className="p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm flex flex-col h-[320px]"> {/* Fixed height for consistency */}
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 flex-shrink-0">
                      <span className="text-2xl text-cyan-400">
                        {typeof card.icon === 'string' ? iconMap[card.icon] : card.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{card.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {card.features.slice(0, 3).map((f, i) => ( /* Limit to 3 bullets on mobile if needed */
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <span className="text-purple-400 mr-2">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>


          {/* --- DESKTOP LAYOUT (Original Grid) --- */}
          <div className="hidden lg:block space-y-6">
            {/* Row 1: Custom Asymmetric Layout */}
            <div className="flex flex-wrap gap-6">
              {/* Card 1 */}
              <div 
                data-aos="fade-right"
                className="flex-[1] min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400">
                    {typeof row1.card1.icon === 'string' ? iconMap[row1.card1.icon] : row1.card1.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{row1.card1.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{row1.card1.description}</p>
                <ul className="space-y-2">
                  {row1.card1.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center Image */}
              <div 
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex-[2] min-w-[280px] lg:w-[calc(50%-12px)] overflow-hidden flex items-center justify-center"
              >
                <img src={row1.image} alt="Feature Preview" className="w-full h-full object-contain" />
              </div>

              {/* Card 2 */}
              <div 
                data-aos="fade-left"
                data-aos-delay="300"
                className="flex-[1] min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400">
                    {typeof row1.card2.icon === 'string' ? iconMap[row1.card2.icon] : row1.card2.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{row1.card2.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{row1.card2.description}</p>
                <ul className="space-y-2">
                  {row1.card2.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2: Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {row2.map((card, index) => (
                <div 
                  key={index} 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <span className="text-2xl text-cyan-400">
                      {typeof card.icon === 'string' ? iconMap[card.icon] : card.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.features.map((f, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="text-purple-400 mr-2">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
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

export default KeyFeatures;
