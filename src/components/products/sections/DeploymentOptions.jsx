import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { IoCloudOutline, IoLayers } from 'react-icons/io5';
// import { HiOutlineLayers } from 'react-icons/hi2';
import { BsDeviceSsd } from 'react-icons/bs';
import { MdOutlineShield } from 'react-icons/md';
import { GoDatabase, GoServer } from 'react-icons/go';

const DeploymentOptions = ({ title, description, options }) => {
  const iconMap = {
    saas: <IoCloudOutline />,
    cloud: <IoLayers />,
    onprem: <GoServer />
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {options.map((opt, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#0d0d1f] border border-blue-500/20 flex flex-col">
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
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default DeploymentOptions;
