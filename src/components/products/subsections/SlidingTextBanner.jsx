import React from "react";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa"; // Using a star icon as separator

const SlidingTextBanner = () => {
  const items = [
    "Cloud Integration",
    "API Development",
    "Enterprise Support",
    "SaaS Solutions",
    "Cloud Integration",
    "API Development",
    "Enterprise Support",
    "SaaS Solutions",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-3 border-t border-white/10 relative z-20">
      <Marquee gradient={false} speed={40} direction="left">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-white font-semibold text-lg tracking-wide uppercase">
              {item}
            </span>
            <FaStarOfLife className="text-white/70 w-3 h-3 ml-8 animate-spin-slow" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SlidingTextBanner;
