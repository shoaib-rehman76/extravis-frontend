const CustomButton = ({ children, className, onClick }) => {
    return (
        <button className={`btn-primary-gradient text-white px-4 py-2 rounded-md ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default CustomButton;