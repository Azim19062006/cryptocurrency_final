import React, { useState } from 'react';
import './index.css';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  label,
  danger = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = `
  input-component
  ${danger ? 'input-component--danger' : 'input-component--normal'}
  ${isFocused ? 'input-component--focused' : ''}
`;

  const labelStyles = `
    input-label
    ${danger ? 'input-label--danger' : ''}
    ${isFocused && !danger ? 'input-label--focused' : ''}
  `;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={label.toLowerCase()} className={labelStyles}>
          {label}
        </label>
      )}
      <input
        id={label?.toLowerCase()}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
