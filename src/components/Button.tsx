import React from "react";

interface ButtonProps {
    id: string;
    onClick: () => void;
    text: string;
    className?: string; // Optional className prop
}

const Button: React.FC<ButtonProps> = ({ id, onClick, text, className }) => (
    <button id={id} onClick={onClick} className={`button ${className || ""}`}>
        {text}
    </button>
);

export default Button;
