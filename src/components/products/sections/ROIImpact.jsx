import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FiClock, FiCheckCircle, FiTrendingDown, FiThumbsUp, FiTrendingUp } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ROIImpact = ({ title, description, cards }) => {
  const iconMap = {
    clock: <FiClock />,
    check: <FiCheckCircle />,
    down: <FiTrendingDown />,
    thumbs: <FiThumbsUp />,
    up: <FiTrendingUp />
  };

  const colorClasses = {
    green: "text-green-400 bg-green-500/20",
    blue: "text-blue-400 bg-blue-500/20",
    purple: "text-purple-400 bg-purple-500/20",
    yellow: "text-yellow-400 bg-yellow-500/20",
    cyan: "text-cyan-400 bg-cyan-500/20"
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

  const renderCard = (card, index) => (
    <div 
      key={index} 
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="group p-8 rounded-2xl bg-[#090A0C] border border-gray-800 hover:border-purple-500/30 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#0d0d1f] h-full mx-2 md:mx-0"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110 ${colorClasses[card.color] || colorClasses.blue}`}>
        {iconMap[card.icon]}
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
    </div>
  );

  return (
    <section className="py-10 lg:py-20 border-t border-gray-800 bg-[#090A0C]">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        {/* Mobile Slider */}
        <div className="md:hidden pb-12 mt-12 px-4">
            <Slider {...sliderSettings}>
                {cards.map((card, index) => (
                    <div key={index} className="h-full py-2">
                         {renderCard(card, index)}
                    </div>
                ))}
            </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mt-12">
          {cards.map((card, index) => renderCard(card, index))}
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

export default ROIImpact;
