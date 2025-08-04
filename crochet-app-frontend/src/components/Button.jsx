import React from 'react';

const Button = ({ children, onClick, disabled = false, ...props }) => {
    const [hovered, setHovered] = React.useState(false);

    const baseStyle = {
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 500,
        border: 'none',
        borderRadius: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: hovered && !disabled ? '#C6BDE2' : '#D8CFF0',
        color: '#4C3F74',
    };

    return (
        <button
            style={baseStyle}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
