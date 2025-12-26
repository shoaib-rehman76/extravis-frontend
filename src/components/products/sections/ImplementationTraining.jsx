import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { LuWrench, LuSearch } from 'react-icons/lu';
import { BsChatDots, BsLightningCharge } from 'react-icons/bs';
import { IoPauseCircle, IoSadSharp, IoStatsChartOutline } from 'react-icons/io5';
// import { HiOutlineStackShell } from 'react-icons/hi2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImplementationTraining = ({ title, description, phases, ongoing }) => {
  const iconMap = {
    wrench: <LuWrench />,
    chat: <BsChatDots />,
    stats: <IoStatsChartOutline />,
    users: <IoPauseCircle />,
    search: <LuSearch />,
    stack: <IoSadSharp />,
    bolt: <BsLightningCharge />
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
        <div style={{ bottom: "-40px" }}>
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 dot-custom"
        />
    )
  };

  const renderPhase = (phase, idx) => (
    <div key={idx} className="p-10 rounded-3xl bg-[#0A0118] border border-[#5c3ae480] flex flex-col items-start shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] mx-2 md:mx-0 h-full">
        <div className="flex items-center gap-4 mb-8 w-full">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg ${phase.iconBg}`}>
            {iconMap[phase.icon]}
            </div>
            <div className="flex flex-col">
            <span className="px-3 py-0.5 rounded-full bg-cyan-900/40 text-cyan-400 text-[10px] font-bold uppercase tracking-wider w-fit mb-1 border border-cyan-500/20">
                Phase {idx + 1}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight">{phase.title}</h3>
            </div>
        </div>

        <ul className="space-y-5 w-full">
        {phase.points.map((pt, pIdx) => (
            <li key={pIdx} className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-blue-500/80 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            <span className="text-gray-400 text-sm leading-relaxed">{pt}</span>
            </li>
        ))}
        </ul>
    </div>
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        {/* Implementation Phases */}
        {/* Mobile Slider */}
        <div className="md:hidden mb-16 px-4 pb-12">
            <Slider {...sliderSettings}>
                {phases.map((phase, idx) => (
                    <div key={idx} className="h-full py-2">
                         {renderPhase(phase, idx)}
                    </div>
                ))}
            </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 px-4">
          {phases.map((phase, idx) => renderPhase(phase, idx))}
        </div>

        {/* Ongoing Support & Success */}
        <div className="max-w-7xl mx-auto p-12 rounded-[40px] bg-[#0A0118] border border-[#5c3ae480] shadow-2xl">
          <h3 className="text-center text-white font-bold text-3xl mb-12">{ongoing.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoing.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-black/40 border border-white/10 flex flex-col items-center text-center transition-all hover:bg-black/60 hover:border-white/20 hover:scale-[1.02]">
                <div className="w-16 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white text-xl mb-6 shadow-lg">
                  {iconMap[item.icon]}
                </div>
                <p className="text-gray-300 text-sm font-semibold leading-relaxed tracking-wide px-2">
                  {item.text}
                </p>
              </div>
            ))}
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

export default ImplementationTraining;
