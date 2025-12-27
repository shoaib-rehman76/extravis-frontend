import React from 'react'

const Card = ({ children, className }) => {
    return (
        <div className={`bg-(--color-primary-card) border-(--color-primary-card-border) p-[34px] rounded-4xl border ${className || ''}`}>
            {children}
        </div>
    )
}

export default Card