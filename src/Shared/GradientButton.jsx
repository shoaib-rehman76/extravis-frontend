// Variant button with gradient, shadow, fixed height and rounded corners
// Do not change `CustomButton`; import/use this where you specifically want the gradient variant

const GradientButton = ({ children, className = '', onClick, style = {}, type = 'button', width, disabled }) => {
    const defaultStyle = {
        background: 'linear-gradient(90deg, #9810FA 0%, #8200DB 100%)',
        boxShadow: '0px 4px 6px -4px rgba(173, 70, 255, 0.3), 0px 10px 15px -3px rgba(173, 70, 255, 0.3)',
        borderRadius: '22px',
        height: '56px',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        gap: '0.5rem',
        border: 'none',
        color: '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer',
    };

    if (width) {
        defaultStyle.width = (typeof width === 'number') ? `${width}px` : width;
    }

    const mergedStyle = { ...defaultStyle, ...style };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`text-white ${className}`}
            onClick={onClick}
            style={mergedStyle}
        >
            {children}
        </button>
    );
};

export default GradientButton;
