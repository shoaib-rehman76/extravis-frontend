import React from 'react';

const Radio = ({ name, options = [], value, onChange, orientation = 'vertical' }) => {
    return (
        <div
            className={`flex ${orientation === 'horizontal' ? 'gap-4' : 'flex-col gap-2'}`}
            role="radiogroup"
        >
            {options.map((opt, i) => (
                <label key={i} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name={name}
                        value={opt.value}
                        checked={value === opt.value}
                        onChange={(e) => onChange && onChange(e.target.value)}
                        className="
              peer sr-only
            "
                    />

                    {/* outer circle */}
                    <span
                        className="
              relative w-4 h-4 rounded-full
              border border-(--color-input-border)
              bg-(--color-input-bg)
              flex items-center justify-center
              peer-checked:border-(--color-primary)
            "
                    >
                        {/* inner dot */}
                        <span
                            className="
                w-4 h-4 rounded-full
                bg-(--color-input-border)
                scale-0
                peer-checked:scale-100
                transition-transform
              "
                        />
                    </span>

                    <span className="text-(--color-text-dimmed) text-sm">{opt.label}</span>
                </label>
            ))}
        </div>
    );
};

export default Radio;
