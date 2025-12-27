import React from 'react';

const Checkbox = ({ name, checked, onChange, label, value }) => {
    return (
        <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked, e.target.value)}
                className="
    w-4 h-4
    appearance-none
    border border-(--color-input-border)
    bg-(--color-input-bg)
    rounded-sm
    checked:bg-transparent
    checked:border-(--color-input-border)
    checked:after:content-['✓']
    checked:after:text-white
    checked:after:flex
    checked:after:items-center
    checked:after:justify-center
    checked:after:w-4
    checked:after:h-4
  "
            />
            <span className=" text-(--color-text-dimmed) text-sm">{label}</span>
        </label>
    );
};

export default Checkbox;