import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FiClock, FiCheckCircle, FiTrendingDown, FiThumbsUp, FiTrendingUp } from 'react-icons/fi';

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

  return (
    <section className="py-20 border-t border-gray-800 bg-[#090A0C]">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mt-12">
          {cards.map((card, index) => (
            <div 
              key={index} 
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group p-8 rounded-2xl bg-[#090A0C] border border-gray-800 hover:border-purple-500/30 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#0d0d1f]"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110 ${colorClasses[card.color] || colorClasses.blue}`}>
                {iconMap[card.icon]}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              {/* Optional: Add value or extra text if needed to match design complexity, 
                  but design only shows Title + Icon mainly */}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ROIImpact;
