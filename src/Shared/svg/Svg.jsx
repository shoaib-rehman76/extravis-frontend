import React from 'react';

const Svg = React.forwardRef(function Svg(
  {
    children,
    fill = 'none',
    spin = false,
    width = '20px',
    className = '',
    ...rest
  },
  ref
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      className={`shrink-0 self-center ${spin ? 'animate-spinSlow' : ''
        } ${className}`}
      {...rest}
    >
      {children}
    </svg>
  );
});

export default Svg;
