const ContentWrapper = ({ children, className }) => {
  return <div className={`w-full px-[4rem] ${className} content-wrapper`}>{children}</div>;
};

export default ContentWrapper;
