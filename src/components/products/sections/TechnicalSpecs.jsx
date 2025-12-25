import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { PiBrainThin } from 'react-icons/pi';
import { FaChartBar, FaNetworkWired } from 'react-icons/fa';
import { LuUsersRound } from 'react-icons/lu';
import { GoServer } from 'react-icons/go';
import { CiGlobe } from 'react-icons/ci';
import { TbAlignBoxCenterStretch, TbHierarchy } from 'react-icons/tb';
import { MdOutlineSecurity } from 'react-icons/md';
import { FiLock, FiKey, FiShield, FiFileText, FiAward } from 'react-icons/fi';
import { PiHandTapLight } from 'react-icons/pi';
import { Wrapper } from '../../../Shared/Wrapper';

const TechnicalSpecs = ({ title, card1, card2, card3 }) => {
  const colorMap = {
    yellow: { text: "text-yellow-500", border: "border-yellow-500/30", hover: "hover:border-yellow-500/20", bg: "bg-yellow-500/5", badge: "bg-yellow-600", borderBadge: "border-yellow-600/30" },
    green: { text: "text-green-500", border: "border-green-500/30", hover: "hover:border-green-500/20", bg: "bg-green-500/5", badge: "bg-green-600", borderBadge: "border-green-600/30" },
    blue: { text: "text-blue-500", border: "border-blue-500/30", hover: "hover:border-blue-500/20", bg: "bg-blue-500/5", badge: "bg-blue-600", borderBadge: "border-blue-500/30" },
    purple: { text: "text-purple-500", border: "border-purple-500/30", hover: "hover:border-purple-500/20", bg: "bg-purple-500/5", badge: "bg-purple-600", borderBadge: "border-purple-500/30" },
    gray: { text: "text-gray-500", border: "border-gray-500/30", hover: "hover:border-gray-500/20", bg: "bg-white/5", badge: "bg-gray-700", borderBadge: "border-gray-400/30" },
    orange: { text: "text-orange-500", border: "border-orange-500/30", hover: "hover:border-orange-500/20", bg: "bg-orange-500/5" },
    cyan: { text: "text-cyan-500", border: "border-cyan-500/30", hover: "hover:border-cyan-500/20", bg: "bg-cyan-500/20" }
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} />

      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1: AI-Driven Reporting & Analytics */}
          <div 
            data-aos="fade-up"
            className="p-8 flex flex-col rounded-2xl bg-[#0d0d1f] border border-purple-500/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl text-blue-400"><PiBrainThin /></span>
              <h3 className="text-lg font-bold text-white">{card1.title}</h3>
            </div>

            <div className="mb-2 p-4 rounded-2xl bg-black/20 overflow-hidden">
               <img src="/assets/montex/ai_driven_card.png" alt="AI Driven Reporting" className="w-full h-auto object-contain" />
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-auto bg-blue-900/10 border border-gray-800/80 rounded-2xl py-6 px-4"> 
              {card1.support.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-medium">
                    <span className="text-white/70">● {s.label}</span>
                  </div>
                  <div className="h-1 bg-gray-800/80 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[85%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Scalability Matrix */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl text-green-400"><FaChartBar /></span>
              <h3 className="text-lg font-bold text-white">{card2.title}</h3>
            </div>

            <div className="space-y-5 mb-10 flex-grow">
              {card2.sizes.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">
                        {React.isValidElement(s.icon) ? s.icon : <LuUsersRound />}
                      </span>
                      <span className="text-sm text-white font-medium">{s.label}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-semibold">{s.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-800/80 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]" style={{ width: s.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-green-900/10 border border-green-500/20 mt-auto">
              <p className="text-[11px] text-green-500 font-bold mb-4 text-center uppercase tracking-widest">Architecture Flexibility</p>
              <div className="flex justify-center gap-6">
                {card2.flexibility.map((f, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center group hover:border-green-500 transition-colors">
                      <span className="text-lg text-green-500">{f.icon}</span>
                    </div>
                    <span className="text-[10px] text-green-500/70 font-bold uppercase">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Security Framework */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-8 flex flex-col rounded-2xl bg-[#0d0d1f] border border-purple-500/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl text-green-400"><MdOutlineSecurity /></span>
              <h3 className="text-lg font-bold text-white">{card3.title}</h3>
            </div>

            <div className="relative flex justify-center items-center py-6 rounded-2xl bg-black/20 mb-8 overflow-hidden group">
              <div className="absolute w-30 h-30 rounded-full border border-yellow-500/5 animate-ping duration-[3s]"></div>
              <div className="absolute w-24 h-24 rounded-full border border-yellow-500/10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute w-18 h-18 rounded-full border border-yellow-500/20 flex items-center justify-center">
                 {/* <div className="w-24 h-24 rounded-full bg-yellow-500/5 blur-xl"></div> */}
              </div>
              <div className="relative w-14 h-14 rounded-full border-2 border-yellow-500/50 flex items-center justify-center bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <span className="text-2xl text-yellow-500"><FiLock /></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {card3.features.map((f, i) => (
                <div key={i} className={`p-4 rounded-xl bg-[#1a1b2e]/60 border border-gray-800/50 hover:border-${f.color}-500/50 transition-all duration-300`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-base ${colorMap[f.color].text}`}>{f.icon}</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{f.label}</span>
                  </div>
                  <div className={`text-lg font-bold ${colorMap[f.color].text}`}>{f.value}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center px-1 gap-2 mt-auto">
              {card3.badges.map((b, i) => (
                <div key={i} className="w-14 h-14 flex items-center justify-center transition-all hover:scale-110">
                  <img src={b.img} alt={b.type} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TechnicalSpecs;
