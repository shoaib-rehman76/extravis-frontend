import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { FiLock, FiShield, FiKey, FiFileText, FiAward } from 'react-icons/fi';
import { MdOutlinePrivateConnectivity } from 'react-icons/md';

const SecurityCompliance = ({ title, description, security, privacy, compliance }) => {
  const iconMap = {
    lock: <FiLock />,
    shield: <FiShield />,
    key: <FiKey />,
    file: <FiFileText />,
    private: <MdOutlinePrivateConnectivity />
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {/* Enterprise-Grade Security */}
          <div className="p-10 rounded-3xl bg-[#0d0d1f] border border-blue-500/20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl">
                <FiLock />
              </div>
              <h3 className="text-2xl font-bold text-white">{security.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {security.items.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-blue-400 font-bold mb-3 text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Privacy & Protection */}
          <div className="p-10 rounded-3xl bg-[#0d0d1f] border border-purple-500/20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl">
                <FiShield />
              </div>
              <h3 className="text-2xl font-bold text-white">{privacy.title}</h3>
            </div>
            
            <div className="space-y-4">
              {privacy.items.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <div>
                      <h4 className="text-purple-400 font-bold text-sm tracking-wide">{item.title}</h4>
                      <p className="text-gray-500 text-[10px] mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="max-w-7xl mx-auto p-10 rounded-3xl bg-[#070714] border border-white/5">
          <h3 className="text-center text-white font-bold text-xl mb-8">{compliance.title}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {compliance.items.map((item, idx) => (
              <div key={idx} className="px-6 py-2 rounded-lg border border-green-500/30 bg-green-500/5 text-green-500 text-xs font-bold tracking-widest uppercase">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SecurityCompliance;
