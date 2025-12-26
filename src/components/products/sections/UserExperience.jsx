import React, { useRef } from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import { FaUserFriends, FaRegSmileBeam, FaUserTie, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
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

const UserExperience = ({ title, columns }) => {
  const sliderRef = useRef(null);
  
  const iconMap = {
    FaUserFriends: <FaUserFriends />,
    FaRegSmileBeam: <FaRegSmileBeam />,
    FaUserTie: <FaUserTie />
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const renderColumn = (col, index) => (
    <div 
        key={index}
        className="flex flex-col h-full p-6 rounded-3xl bg-[#0d0d1f] border border-purple-500/10 mx-2 md:mx-0" // mx-2 for slider spacing
        data-aos="fade-up"
        data-aos-delay={index * 100}
    >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-lg bg-transparent border border-gray-700 flex items-center justify-center text-blue-400 text-xl">
            {typeof col.icon === 'string' ? iconMap[col.icon] : col.icon}
        </div>
        <h3 className="text-xl font-bold text-white">{col.title}</h3>
        </div>

        {/* Cards Stack */}
        <div className="space-y-4 flex-grow">
        {col.items.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#13132b] border border-gray-800 hover:border-gray-700 transition-colors">
            <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
            </div>
        ))}
        </div>
    </div>
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800 bg-[#090A0C]">
      <Wrapper>
        <div className="max-w-7xl mx-auto">
            <h2 className="text-[2rem] font-bold text-white mb-12 text-center" data-aos="fade-up">
                {title}
            </h2>

            {/* Mobile Slider */}
            <div className="lg:hidden px-4">
                <Slider ref={sliderRef} {...sliderSettings}>
                    {columns.map((col, index) => (
                        <div key={index} className="h-full py-2">
                             {renderColumn(col, index)}
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
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-12">
                 {columns.map((col, index) => renderColumn(col, index))}
            </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default UserExperience;
