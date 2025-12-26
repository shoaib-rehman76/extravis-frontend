const ContentWrapper = ({ children, className }) => {
  return <div className={`w-full py-2 md:py-[4rem] px-2 md:px-[4rem] ${className} content-wrapper`}>{children}</div>;
};

export default ContentWrapper;
