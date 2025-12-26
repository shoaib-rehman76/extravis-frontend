import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { IoCloudOutline, IoLayers } from 'react-icons/io5';
// import { HiOutlineLayers } from 'react-icons/hi2';
import { BsDeviceSsd } from 'react-icons/bs';
import { MdOutlineShield } from 'react-icons/md';
import { GoDatabase, GoServer } from 'react-icons/go';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DeploymentOptions = ({ title, description, options }) => {
  const iconMap = {
    saas: <IoCloudOutline />,
    cloud: <IoLayers />,
    onprem: <GoServer />
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
        <div style={{ bottom: "-40px" }}> {/* Added vertical spacing */}
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 dot-custom"
        />
    )
  };

  const renderOption = (opt, idx) => (
     <div 
        key={idx} 
        data-aos="fade-up"
        data-aos-delay={idx * 100}
        className="p-8 rounded-2xl bg-[#0d0d1f] border border-blue-500/20 flex flex-col mx-2 md:mx-0 h-full"
      >
        <div className="flex items-center gap-3 mb-6">
        <span className={`text-2xl ${opt.id === "saas" ? "text-blue-400" :  opt.id === "cloud" ? "text-green-400" : "text-yellow-400"  }`}>
            {iconMap[opt.id]}
        </span>
        <h3 className={`text-xl font-bold ${opt.id === "saas" ? "text-blue-400" :  opt.id === "cloud" ? "text-green-400" : "text-yellow-400"  }`}>{opt.title}</h3>
        </div>

        <div
            className={`p-6 rounded-xl mb-8 border transition-all duration-300 flex items-center justify-center gap-3 ${opt.highlightBg}`}
        >
            <div className="text-center">
            <p className={`text-sm font-bold ${opt.id === "saas" ? "text-blue-400" :  opt.id === "cloud" ? "text-green-400" : "text-yellow-400"  } mb-2`}>{opt.highlightTitle}</p>

            {/* SaaS → Show 2 boxes + arrow */}
            {opt.id === "saas" ? (
                <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-4 rounded-full bg-blue-400"></div>
                <span className="text-white">→</span>
                <div className="w-8 h-4 rounded-full bg-green-400"></div>
                </div>
            ) : (
                /* Cloud & On-Prem → Show only ONE icon box */
                <div className="flex items-center justify-center">
                
                    {opt.id === "cloud" && <MdOutlineShield  size={24} className='text-green-400'/>}
                    {opt.id === "onprem" && <GoDatabase size={24} className='text-yellow-400'/>}
                
                </div>
            )}
            </div>
        </div>


        <ul className="space-y-3">
        {opt.points.map((pt, pIdx) => (
            <li key={pIdx} className="flex items-start gap-3">
            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${opt.bulletColor}`}></span>
            <span className="text-gray-400 text-sm">{pt}</span>
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
        <div className="md:hidden pb-12 px-4">
            <Slider {...sliderSettings}>
                {options.map((opt, idx) => (
                    <div key={idx} className="h-full py-2">
                        {renderOption(opt, idx)}
                    </div>
                ))}
            </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {options.map((opt, idx) => renderOption(opt, idx))}
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

export default DeploymentOptions;
