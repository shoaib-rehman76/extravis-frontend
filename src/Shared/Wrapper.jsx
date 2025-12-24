export const Wrapper = ({ children, className }) => {
    return (
        <div className={`w-full px-[4rem] ${className}`}>
            {children}
        </div>
    )
}