import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const gradient = 'linear-gradient(90deg, #9810FA 0%, #8200DB 100%)';

const LegalSection = () => {
    const [active, setActive] = useState('privacy'); // 'privacy' | 'legal'
    const sliderRef = useRef(null);

    const mobileSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        afterChange: (index) => setActive(index === 0 ? 'privacy' : 'legal')
    };

    const PrivacyContent = (
        <div>
            <h3 className="text-white text-lg font-semibold mb-2">Your Privacy Matters</h3>
            <p className="text-sm leading-relaxed">
                We are committed to protecting your privacy and personal information. Our contact forms and communications
                are governed by our comprehensive privacy policy.
            </p>
        </div>
    );

    const LegalContent = (
        <div>
            <h3 className="text-white text-lg font-semibold mb-2">Legal Information</h3>
            <p className="text-sm leading-relaxed">
                Company registration, terms of use, and other legal notices are available here. For specific inquiries,
                please contact our legal team.
            </p>
        </div>
    );

    return (
        <section className="bg-[#0b0f16] p-6 rounded-2xl border border-neutral-800">
            <div className="relative max-w-3xl mx-auto">
                {/* Desktop tabs (md+) */}
                <div className="hidden md:block">
                    <div className="relative bg-[#1f2937] rounded-full p-1 flex items-center" role="tablist" aria-label="Legal tabs">
                        {/* Active pill (positioned) */}
                        <div
                            className="absolute top-1 bottom-1 rounded-full"
                            style={{
                                background: gradient,
                                boxShadow: '0px 4px 10px rgba(156, 81, 255, 0.18)',
                                left: active === 'privacy' ? '4px' : 'calc(50% + 4px)',
                                width: 'calc(50% - 8px)',
                                transition: 'left 220ms cubic-bezier(.2,.8,.2,1)'
                            }}
                        />

                        <button
                            role="tab"
                            aria-selected={active === 'privacy'}
                            onClick={() => setActive('privacy')}
                            className={`relative z-10 w-1/2 text-sm font-medium py-2 text-left pl-6 pr-4 ${active === 'privacy' ? 'text-white' : 'text-neutral-400'}`}
                        >
                            Privacy & Data Protection
                        </button>

                        <button
                            role="tab"
                            aria-selected={active === 'legal'}
                            onClick={() => setActive('legal')}
                            className={`relative z-10 w-1/2 text-sm font-medium py-2 text-left pl-6 pr-4 ${active === 'legal' ? 'text-white' : 'text-neutral-400'}`}
                        >
                            Legal Information
                        </button>
                    </div>

                    {/* Desktop content area */}
                    <div className="mt-6 text-neutral-300 max-w-3xl">
                        {active === 'privacy' ? PrivacyContent : LegalContent}
                    </div>
                </div>

                {/* Mobile slider (sm) */}
                <div className="block md:hidden">
                    <div className="mb-4">
                        {/* Small static header to give context above the slider */}
                        <div className="flex gap-3 items-center">
                            <span className="text-sm text-white font-medium">Privacy & Data Protection</span>
                            <span className="text-xs text-neutral-500">•</span>
                            <span className="text-sm text-neutral-400">Legal Information</span>
                        </div>
                    </div>

                    <Slider ref={sliderRef} {...mobileSettings}>
                        <div className="text-neutral-300 px-1">{PrivacyContent}</div>
                        <div className="text-neutral-300 px-1">{LegalContent}</div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default LegalSection;
