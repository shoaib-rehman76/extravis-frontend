import React from 'react';
import ContentWrapper from './ContentWrapper';

const SectionTitle = ({ title, subtitle, children, className = '' }) => {
    return (
        <ContentWrapper>
            {/* Content */}
            <div className="relative z-10 md:px-4 mx-auto text-center">
                <h2 className="text-[2.5rem] md:text-4xl font-bold text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-purple-400 text-[2.5rem] font-bold mt-2">
                        {subtitle}
                    </p>
                )}
                {children}
            </div>
        </ContentWrapper>
    );
};

export default SectionTitle;
