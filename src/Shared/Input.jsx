import React from 'react';

// Reusable input component supporting input, textarea and select
const Input = React.forwardRef(({
    label,
    id,
    name,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    as = 'input',
    options = [],
    rows = 4,
    required = false,
    error,
    ...rest
}, ref) => {
    const base = 'bg-(--color-input-bg) text-white p-3 rounded-[8px] border border-(--color-input-border) placeholder-(--color-input-text) focus:outline-none focus:ring-2 focus:ring-purple-600';
    const classes = `${base} ${className}`;

    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id || name} className="text-(--color-text-dimmed) text-sm mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {as === 'textarea' ? (
                <textarea
                    id={id || name}
                    name={name}
                    ref={ref}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={classes}
                    aria-invalid={!!error}
                    {...rest}
                />
            ) : as === 'select' ? (
                <select
                    id={id || name}
                    name={name}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    className={classes}
                    aria-invalid={!!error}
                    {...rest}
                >
                    {options.map((opt, i) => (
                        <option key={i} value={opt.value ?? opt}>
                            {opt.label ?? opt}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id || name}
                    name={name}
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={classes}
                    aria-invalid={!!error}
                    {...rest}
                />
            )}

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;