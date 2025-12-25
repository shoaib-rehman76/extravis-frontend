import React from 'react';
import ContentWrapper from '../../../Shared/ContentWrapper';

const SectionHeader = ({ title, description, subtitle }) => {
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title.split(' ').map((word, i) => 
        ['Intelligence', 'Features', 'Specifications', 'Complex', 'Solution', 'Applications', 'Optimization'].includes(word) ? (
          <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> {word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      );
    }
    
    if (React.isValidElement(title)) {
      return title;
    }

    if (typeof title === 'object' && title !== null) {
      return (
        <>
          {title.prefix} {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {title.highlight}
          </span>
          {' '} {title.suffix}
        </>
      );
    }

    return title;
  };

  return (
    <ContentWrapper>
      <div className={`mb-16 ${!description ? 'mx-auto text-center' : ''}`}>
        <div className="flex flex-col gap-4">
          <div className="w-full">
            {subtitle && (
              <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            <h2 className="text-[2.2rem] text-center lg:text-[2.8rem] font-[700] leading-tight transition-all duration-300 text-white">
              {renderTitle()}
            </h2>
          </div>
          {description && (
            <div className="w-full flex justify-center align-center">
              <p className="text-gray-400 text-center text-[1.1rem] leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default SectionHeader;
