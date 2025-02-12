import React from 'react'
type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    className?: string;
};
const FormInput: React.FC<InputProps> = ({ value, onChange, placeholder = "", type = "text", className = "" }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
        />
    );
}

export default FormInput