import React from 'react';

const SectionTitle = ({ title, subtitle, children, className = '' }) => {
    return (
        <section
            className={`
        relative w-full
        bg-center bg-cover bg-no-repeat
        flex items-center justify-center
        text-center
        min-h-[140px]
        overflow-hidden
        ${className}
      `}
            style={{
                backgroundImage: "url('/assets/content-bg-1.png')",
            }}
        >

            {/* Content */}
            <div className="relative z-10 px-4">
                <h2 className="text-[40px] md:text-4xl font-bold text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-purple-400 text-[40px] font-bold mt-2">
                        {subtitle}
                    </p>
                )}
                {children}
            </div>
        </section>
    );
};

export default SectionTitle;
