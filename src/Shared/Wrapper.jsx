export const Wrapper = ({ children, className }) => {
    return (
        <div className={`w-full px-2 md:px-[4rem] ${className}`}>
            {children}
        </div>
    )
}