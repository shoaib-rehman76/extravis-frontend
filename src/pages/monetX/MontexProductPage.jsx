import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { CiFileOn, CiGlobe } from 'react-icons/ci';
import { FaChartBar, FaNetworkWired, FaRegChartBar } from 'react-icons/fa';
import { FaFile, FaUserDoctor } from 'react-icons/fa6';
import { FiAlertTriangle, FiKey, FiShield, FiFileText, FiAward, FiLock } from 'react-icons/fi';
import { GoServer } from 'react-icons/go';
import { HiOutlineBolt } from 'react-icons/hi2';
import { IoMdCloudOutline } from 'react-icons/io';
import { LuUsersRound } from 'react-icons/lu';
import { MdOutlineSecurity } from 'react-icons/md';
import { PiBrainThin, PiHandTapLight } from 'react-icons/pi';
import { RxTarget } from 'react-icons/rx';
import { TbAlignBoxCenterStretch, TbHierarchy, TbHierarchy3 } from 'react-icons/tb';
import { VscTypeHierarchySub } from 'react-icons/vsc';

// Reusable Hero Section Component
const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  buttonLink, 
  image,
  gradient = "from-purple-600/20 to-transparent" 
}) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../assets/montex/hero-bg.png')" }}
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent" />
    
    <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="inline-block px-4 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
          {subtitle}
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-white/90">AI-Powered <br /> Networks</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
            Observability &
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
            Automation
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
          Transform network complexity into competitive advantage with unified visibility, intelligent automation, and comprehensive analytics across your entire infrastructure.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
          {buttonText} →
        </button>
      </div>
      
      {/* Right Dashboard Image */}
      <div className="relative lg:block hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl" />
        <img 
          src="../assets/montex/hero-img.png" 
          alt="MonetX Dashboard" 
          className="relative z-10 rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Feature Tags */}
        <div className="absolute bottom-8 left-0 bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <span className="text-white font-medium">Automated Reports</span>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-0 bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📈</span>
            <span className="text-white font-medium">Interactive Dashboards</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle, description, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-wider">
        {subtitle}
      </p>
    )}
    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
      {title.split(' ').map((word, i) => 
        word === 'Intelligence' || word === 'Features' || word === 'Specifications' || word === 'Complex' ? (
          <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> {word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h2>
    {description && <p className="text-gray-400 text-lg max-w-3xl mx-auto">{description}</p>}
  </div>
);

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description, color = "purple" }) => {
  const colorClasses = {
    purple: "from-purple-600/20 to-purple-900/20 border-purple-500/30",
    blue: "from-blue-600/20 to-blue-900/20 border-blue-500/30",
    green: "from-green-600/20 to-green-900/20 border-green-500/30",
    yellow: "from-yellow-600/20 to-yellow-900/20 border-yellow-500/30"
  };

  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm hover:scale-105 transition-transform`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">
        {title.split(' ').map((word, i) => 
          i === 0 ? <span key={i} className="text-purple-400">{word} </span> : <span key={i}>{word} </span>
        )}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

// Reusable Stats/Info Section
const InfoSection = ({ items, columns = 3 }) => (
  <div className={`grid md:grid-cols-${columns} gap-8`}>
    {items.map((item, index) => (
      <div key={index} className="text-center p-6">
        <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
        <div className="text-gray-400">{item.label}</div>
      </div>
    ))}
  </div>
);

// Reusable Image Grid Component
const ImageGrid = ({ images, columns = 3 }) => (
  <div className={`grid md:grid-cols-${columns} gap-6`}>
    {images.map((img, index) => (
      <div key={index} className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
        <img 
          src={img.src} 
          alt={img.alt} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {img.label && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium">{img.label}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);

// Reusable Pricing/Plan Card
const PricingCard = ({ title, description, features, buttonText, highlighted = false }) => (
  <div className={`p-8 rounded-2xl ${highlighted ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-purple-500/50' : 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20'} backdrop-blur-sm`}>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <span className="text-purple-400 mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-medium transition-all ${highlighted ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
      {buttonText}
    </button>
  </div>
);

// Reusable CTA Section
const CTASection = ({ title, description, buttonText, gradient = "from-purple-600/20 via-blue-600/20 to-purple-600/20" }) => (
  <section className={`py-20 bg-gradient-to-r ${gradient} border-y border-purple-500/20`}>
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{title}</h2>
      <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium text-lg transition-all transform hover:scale-105">
        {buttonText}
      </button>
    </div>
  </section>
);

// Reusable Footer Component
const Footer = () => (
  <footer className="border-t border-gray-800 py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">EXTRAVIS</h3>
          <p className="text-gray-400 text-sm">Real-Time Visual Intelligence</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Overview</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Documentation</li>
            <li>API</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Get Sales</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Contact Us</li>
            <li>Schedule Demo</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2024 EXTRAVIS. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

// Industry Specifications Component with Tabs
const IndustrySpecifications = () => {
  const [activeTab, setActiveTab] = useState('telecoms');

  const tabs = [
    { id: 'telecoms', label: 'Telecoms & ISPs', icon: <VscTypeHierarchySub /> },
    { id: 'financial', label: 'Financial Services', icon: <FaFile /> },
    { id: 'healthcare', label: 'Healthcare', icon: <FaUserDoctor /> },
    { id: 'enterprise', label: 'Enterprise DC', icon: <TbAlignBoxCenterStretch /> }
  ];

  const content = {
    telecoms: {
      title: 'Telecommunications & ISPs',
      description: 'MonetX is built for service providers, addressing the complexities of managing subscriber networks and meeting SLAs across diverse environments.',
      features: [
        { text: 'Real-time monitoring and troubleshooting of subscriber endpoints', icon: '✓' },
        { text: 'Network capacity planning and performance optimization.', icon: '✓' },
        { text: 'Prioritization of issues based on revenue impact.', icon: '✓' },
        { text: 'SLA reporting and service quality metrics.', icon: '✓' },
        { text: 'Multi-tenant isolation for secure, segmented monitoring.', icon: '✓' }
      ]
    },
    financial: {
      title: 'Financial Services',
      description: 'MonetX is built for service providers, addressing the complexities of managing subscriber networks and meeting SLAs across diverse environments.',
      features: [
        { text: 'Real-time monitoring and troubleshooting of subscriber endpoints', icon: '✓' },
        { text: 'Network capacity planning and performance optimization.', icon: '✓' },
        { text: 'Prioritization of issues based on revenue impact.', icon: '✓' },
        { text: 'SLA reporting and service quality metrics.', icon: '✓' },
        { text: 'Multi-tenant isolation for secure, segmented monitoring.', icon: '✓' }
      ]
    },
    healthcare: {
      title: 'Healthcare',
      description: 'MonetX is built for service providers, addressing the complexities of managing subscriber networks and meeting SLAs across diverse environments.',
      features: [
        { text: 'Real-time monitoring and troubleshooting of subscriber endpoints', icon: '✓' },
        { text: 'Network capacity planning and performance optimization.', icon: '✓' },
        { text: 'Prioritization of issues based on revenue impact.', icon: '✓' },
        { text: 'SLA reporting and service quality metrics.', icon: '✓' },
        { text: 'Multi-tenant isolation for secure, segmented monitoring.', icon: '✓' }
      ]
    },
    enterprise: {
      title: 'Enterprise DC',
      description: 'MonetX is built for service providers, addressing the complexities of managing subscriber networks and meeting SLAs across diverse environments.',
      features: [
        { text: 'Real-time monitoring and troubleshooting of subscriber endpoints', icon: '✓' },
        { text: 'Network capacity planning and performance optimization.', icon: '✓' },
        { text: 'Prioritization of issues based on revenue impact.', icon: '✓' },
        { text: 'SLA reporting and service quality metrics.', icon: '✓' },
        { text: 'Multi-tenant isolation for secure, segmented monitoring.', icon: '✓' }
      ]
    }
  };

  const activeContent = content[activeTab];

  return (
    <div className="container mx-auto px-6 lg:px-16">
      {/* Section Header with Glowing Effect */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-white">Industry-Specifications</span>
          <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-2xl bg-purple-600/50 opacity-75"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Applications
            </span>
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl flex flex-wrap justify-between mb-12 gap-2  mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-purple-600/20 border border-purple-500/50 text-purple-500'
                : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto">
        <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{tabs.find(t => t.id === activeTab)?.icon}</span>
            <h3 className="text-2xl font-bold text-white">{activeContent.title}</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {activeContent.description}
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {activeContent.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Product Page Component
const MontexProductPage = () => {
  return (
    <div className="bg-[#090A0C] min-h-screen text-white">
      {/* Hero Section */}
      <HeroSection
        subtitle="AI-Powered"
        title="Observability & Automation"
        description="Transform your network monitoring with intelligent automation and real-time insights powered by advanced AI technology."
        buttonText="Get Started"
        buttonLink="#"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      />

      {/* Modern Networks Section */}
      <section className="py-20 border-t border-gray-800 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent">
        <div className="container mx-auto px-6 lg:px-4 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Modern Networks Are </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                More Complex Than Ever
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              Today's enterprise networks span multiple vendors, cloud providers, and geographic locations. 
              Traditional monitoring tools create silos of information, leaving you blind to critical issues until they 
              impact your users. You need more than just monitoring—you need intelligence.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Vendor Chaos */}
            <div className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105">
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
      <span className="text-2xl text-red-700"><FaNetworkWired /></span>
    </div>

    <div>
      <h3 className="text-xl font-bold text-white mb-2">Vendor Chaos</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Managing equipment from multiple vendors with different interfaces.
      </p>
    </div>
  </div>
</div>

            {/* Alert Fatigue */}
            <div className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <span className="text-2xl text-red-700"><FiAlertTriangle /></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Alert Fatigue</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Too many false alarms drowning out real issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Reactive Operations */}
            <div className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <span className="text-2xl text-red-700"><LuUsersRound /></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Reactive Operations</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Finding out about problems after users complain.
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Drain */}
            <div className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <span className="text-2xl text-red-700"><HiOutlineBolt /></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resource Drain</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Manual processes consuming valuable engineering time.
                  </p>
                </div>
              </div>
            </div>

            {/* Limited Visibility */}
            <div className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <span className="text-2xl text-red-700"><IoMdCloudOutline /></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Limited Visibility</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gaps in monitoring across hybrid environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Command Center */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Your Network </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Intelligence Command
              </span>
              <span className="text-white"> Center</span>
            </h2>
          </div>

          {/* 4 Step Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
            {/* Step 1: Universal Discovery */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <span className="text-3xl text-blue-400 "><TbHierarchy3 /></span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
                  Step 1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Universal Discovery</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MonetX automatically discovers and maps your entire network infrastructure, regardless of vendor or location. From traditional routers and switches to virtualized environments and cloud resources, everything gets catalogued and continuously monitored.
                </p>
              </div>
            </div>

            {/* Step 2: Intelligent Analysis */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <span className="text-3xl text-purple-400 "><PiBrainThin /></span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium mb-3">
                  Step 2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Analysis</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our AI engine doesn't just collect metrics—it understands what they mean in the context of your specific environment. Machine learning algorithms identify patterns, predict potential issues, and recommend optimizations.
                </p>
              </div>
            </div>

            {/* Step 3: Automated Response */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                  <span className="text-3xl text-yellow-400 "><HiOutlineBolt /></span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-medium mb-3">
                  Step 3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Response</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When issues are detected, MonetX can automatically execute predefined remediation procedures, notify the right teams, and even prevent problems before they occur. You move from reactive firefighting to proactive optimization.
                </p>
              </div>
            </div>

            {/* Step 4: Continuous Learning */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30 flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <span className="text-3xl text-green-400 "><RxTarget /></span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium mb-3">
                  Step 4
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The system gets smarter over time, learning from every incident, optimization, and change in your environment. What starts as a monitoring tool evolves into an intelligent partner that knows your network better than anyone.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Key </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Features
              </span>
              <span className="text-white"> & Capabilities</span>
            </h2>
          </div>

          {/* Features Grid - Custom Layout */}
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Row 1: 2 Cards + Wider Image */}
            <div className="flex flex-wrap gap-6">
              
              {/* Card 1: Real-Time Metrics and Monitoring - 25% width */}
              <div className="flex-1 min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400 "><FaRegChartBar /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Metrics and Monitoring</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Delivers continuous, up-to-the-second data into the health and performance of your entire IT infrastructure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Sub-second monitoring
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Custom protocols
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Anomalous forecasting
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Intelligent alerting
                  </li>
                </ul>
              </div>

              {/* Dashboard Image (Center) - 50% width */}
              <div className="flex-1 min-w-[280px] lg:w-[calc(50%-12px)] group rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/40 transition-all">
                <img 
                  src="../assets/montex/key-features.png" 
                  alt="MonetX Dashboard Features" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 2: Seamless Integration Platform - 25% width */}
              <div className="flex-1 min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400 "><CiFileOn /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Seamless Integration Platform</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Connects effortlessly with your existing tools and workflows, enhancing your current IT investments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    API support
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Webhook support
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    ITSM integration
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Real-time notifications
                  </li>
                </ul>
              </div>

            </div>

            {/* Row 2: 3 Equal Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 3: Unified Infrastructure Insights */}
              <div className="group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400 "><TbHierarchy /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Unified Infrastructure Insights</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Provides complete visibility into all network devices through a single, vendor-agnostic dashboard.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Vendor-agnostic
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Unified alerting
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Topology discovery
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Cross-platform correlation
                  </li>
                </ul>
              </div>

              {/* Card 4: AI-Driven Reporting & Analytics */}
              <div className="group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400 "><PiBrainThin /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Driven Reporting & Analytics</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Transforms raw data into actionable insights using machine learning for anomaly detection and predictive planning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Anomaly detection
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Automated reporting
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Predictive planning
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    BI integration
                  </li>
                </ul>
              </div>

              {/* Card 5: Advanced Customization Engine */}
              <div className="group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400"><RxTarget/></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Customization Engine</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Tailors your monitoring experience to match your unique workflows and requirements with custom dashboards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Role-based access
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Flexible alerting
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>
                    Workflow automation
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Industry Specifications - Tabbed Section */}
      <section className="py-20 border-t border-gray-800">
        <IndustrySpecifications />
      </section>

      {/* Technical Specifications */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Technical </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Specifications
              </span>
            </h2>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* Card 1: AI-Driven Reporting & Analytics */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl text-blues-400"><PiBrainThin /></span>
                <h3 className="text-lg font-bold text-white">AI-Driven Reporting & Analytics</h3>
              </div>

              {/* Platform Icons - Circular Design */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">On-Premises</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center">
                    <span className="text-2xl"><PiBrainThin /></span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">Cloud</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500/40 flex items-center justify-center">
                    <span className="text-2xl">📡</span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">Edge</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">Hybrid</span>
                </div>
              </div>

              {/* OS Support - Horizontal Bars */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-20">● Windows</span>
                  <div className="h-0.5 flex-1 bg-gray-700/50"></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-20">● Linux</span>
                  <div className="h-0.5 flex-1 bg-gray-700/50"></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-20">● VMare</span>
                  <div className="h-0.5 flex-1 bg-gray-700/50"></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-20">● Container</span>
                  <div className="h-0.5 flex-1 bg-gray-700/50"></div>
                </div>
              </div>
            </div>

            {/* Card 2: Scalability Matrix */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl text-green-400"><FaChartBar /></span>
                <h3 className="text-lg font-bold text-white">Scalability Matrix</h3>
              </div>

              {/* Deployment Sizes with Icons */}
              <div className="space-y-5 mb-8">
                {/* Small */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400"><LuUsersRound /></span>
                      <span className="text-sm text-white font-medium">Small</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">1K</span>
                  </div>
                  <div className="h-2 bg-gray-800/80 rounded-full overflow-hidden">
                    <div className="h-full w-[25%] bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400"><GoServer /></span>
                      <span className="text-sm text-white font-medium">Medium</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">10K</span>
                  </div>
                  <div className="h-2 bg-gray-800/80 rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Large */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400"><CiGlobe /></span>
                      <span className="text-sm text-white font-medium">Large</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">100K+</span>
                  </div>
                  <div className="h-2 bg-gray-800/80 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Enterprise */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400"><TbAlignBoxCenterStretch /></span>
                      <span className="text-sm text-white font-medium">Enterprise</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">1M+</span>
                  </div>
                  <div className="h-2 bg-gray-800/80 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Architecture Flexibility */}
              <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-900/50">
                <p className="text-sm text-green-400 font-medium mb-4 text-center">Architecture Flexibility</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <span className="text-lg text-green-400"><PiHandTapLight /></span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">Single</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <span className="text-lg text-green-400"><TbHierarchy /></span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">Cluster</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <span className="text-lg text-green-400"><FaNetworkWired /></span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">Distributed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Security Framework */}
            <div className="p-8 rounded-2xl bg-[#0d0d1f] border border-purple-500/30">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl text-green-400"><MdOutlineSecurity /></span>
                <h3 className="text-lg font-bold text-white">Security Framework</h3>
              </div>

              {/* Lock Icon Visualization with Concentric Circles */}
              <div className="relative flex justify-center items-center mb-10 py-12 rounded-2xl bg-black/20">
                {/* Concentric Circles */}
                <div className="absolute w-56 h-56 rounded-full border border-gray-800/10"></div>
                <div className="absolute w-44 h-44 rounded-full border border-gray-800/20"></div>
                <div className="absolute w-32 h-32 rounded-full border border-gray-800/30"></div>
                
                {/* Center Lock */}
                <div className="relative w-16 h-16 rounded-full border-2 border-yellow-500/30 flex items-center justify-center bg-yellow-500/5 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                   <span className="text-3xl text-yellow-500/80"><FiLock /></span>
                </div>
              </div>

              {/* Security Features Grid - 2x2 Sub-cards */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {/* AES-256 */}
                <div className="p-4 rounded-xl bg-[#1a1b2e]/60 border border-gray-800/50 hover:border-yellow-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg text-yellow-500"><FiKey /></span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AES-256</span>
                  </div>
                  <div className="text-xl font-bold text-yellow-500 ml-7">100%</div>
                </div>
                
                {/* Multi-Factor */}
                <div className="p-4 rounded-xl bg-[#1a1b2e]/60 border border-gray-800/50 hover:border-green-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg text-green-500"><FiShield /></span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Multi-Factor</span>
                  </div>
                  <div className="text-xl font-bold text-green-500 ml-7">Enable</div>
                </div>
                
                {/* Audit Logs */}
                <div className="p-4 rounded-xl bg-[#1a1b2e]/60 border border-gray-800/50 hover:border-blue-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg text-blue-500"><FiFileText /></span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Audit Logs</span>
                  </div>
                  <div className="text-xl font-bold text-blue-500 ml-7">24/7</div>
                </div>
                
                {/* Compliance */}
                <div className="p-4 rounded-xl bg-[#1a1b2e]/60 border border-gray-800/50 hover:border-purple-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg text-purple-500"><FiAward /></span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Compliance</span>
                  </div>
                  <div className="text-xl font-bold text-purple-500 ml-7">4 Certificates</div>
                </div>
              </div>

              {/* Certification Badges Row */}
              <div className="flex justify-between items-center px-2 gap-2">
                {/* ISO 27001 */}
                <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-blue-500/5 flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
                  <div className="bg-blue-600 text-[8px] font-bold text-white px-2 py-0.5 rounded-sm mb-1 uppercase tracking-tighter">ISO</div>
                  <span className="text-[7px] text-gray-400 leading-none">27001:2022</span>
                  <span className="text-[6px] text-gray-500 mt-1 uppercase font-medium">Certified</span>
                </div>
                
                {/* ISO 27701 */}
                <div className="w-16 h-16 rounded-full border border-yellow-600/30 bg-yellow-600/5 flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
                  <div className="bg-yellow-600 text-[8px] font-bold text-white px-2 py-0.5 rounded-sm mb-1 uppercase tracking-tighter">ISO</div>
                  <span className="text-[7px] text-gray-400 leading-none">27701</span>
                  <div className="w-4 h-4 border border-green-500/50 rounded-full mt-1 flex items-center justify-center">
                    <span className="text-[8px] text-green-400">✓</span>
                  </div>
                </div>
                
                {/* GDPR */}
                <div className="w-16 h-16 rounded-full border border-blue-800/40 bg-blue-900/10 flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full border border-yellow-500/20 animate-pulse"></div>
                    <span className="text-[9px] font-bold text-white relative z-10 tracking-tight">GDPR</span>
                  </div>
                  <span className="text-[6px] text-blue-400 mt-1 uppercase font-medium">Compliant</span>
                </div>
                
                {/* SOC 2 */}
                <div className="w-16 h-16 rounded-full border border-gray-400/30 bg-white/5 flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
                  <span className="text-[6px] text-gray-500 mb-1 font-medium italic">AICPA</span>
                  <div className="bg-gray-700 text-[8px] font-bold text-white px-2 py-0.5 rounded-sm uppercase tracking-tighter">SOC 2</div>
                  <span className="text-[6px] text-gray-400 mt-1 uppercase font-medium">Type II</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing & Licensing */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Pricing & </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Licensing
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We understand that different organizations have different preferences for software acquisition and budgeting
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            
            {/* Card 1: Subscription Licensing */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Subscription Licensing</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Monthly or annual billing cycles Accordingly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Includes all updates and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Access to all/flexible scaling based on monitored devices basic feat Predictable operational expenditures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Access to all basic feat Predictable operational expenditures</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-[linear-gradient(90deg,#9810FA_0%,#155DFC_50%,#0092B8_100%)] hover:bg-[linear-gradient(90deg,#9810FAcc_0%,#155DFCcc_50%,#0092B8cc_100%)] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                Get Started →
              </button>
            </div>

            {/* Card 2: Perpetual Licensing */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Perpetual Licensing</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">One-time purchase with ongoing maintenance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Optional support and update subscriptions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Traditional capital expense model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Long-term cost savings for stable environments</span>
                </li>
              </ul>
             <button className="w-full py-3 px-6 bg-[linear-gradient(90deg,#9810FA_0%,#155DFC_50%,#0092B8_100%)] hover:bg-[linear-gradient(90deg,#9810FAcc_0%,#155DFCcc_50%,#0092B8cc_100%)] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                Get Started →
              </button>
            </div>

            {/* Card 3: Managed Service Options */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Managed Service Options</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Fully managed Professionally monitoring service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Expert analysis and reporting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">24/7 operations center monitoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">Perfect for organizations without dedicated network operations teams.</span>
                </li>
              </ul>
             <button className="w-full py-3 px-6 bg-[linear-gradient(90deg,#9810FA_0%,#155DFC_50%,#0092B8_100%)] hover:bg-[linear-gradient(90deg,#9810FAcc_0%,#155DFCcc_50%,#0092B8cc_100%)] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                Get Started →
              </button>
            </div>

          </div>
        </div>
      </section>

   

      {/* Getting Started */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Getting </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Started
              </span>
            </h2>
            <p className="text-gray-400">Evaluation Options</p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Step 1: Discovery & Planning */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Step 1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Planning</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Network assessment and requirement gathering</li>
                <li>• POC scope definition and success criteria</li>
                <li>• Installing process and preparation</li>
              </ul>
            </div>

            {/* Step 2: Implementation & Configuration */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Step 2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation & Configuration</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• MonetX installation and initial configuration</li>
                <li>• Device discovery and integration setup</li>
                <li>• Custom dashboard and alert configuration</li>
              </ul>
            </div>

            {/* Step 3: Evaluation & Optimization */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Step 3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Evaluation & Optimization</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• User training and hands-on evaluation</li>
                <li>• Performance tuning and optimization</li>
                <li>• Business case development and ROI analysis</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
   {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Network?"
        description="Get started today and experience the power of intelligent network automation"
        buttonText="Get Started Today"
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MontexProductPage;