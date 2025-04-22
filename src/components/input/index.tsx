import React from "react";

type InputProps = {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error,
  disabled = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          border border-gray-1 p-3 
          focus:outline-none focus:ring-0 focus:border-transparent 
          disabled:cursor-not-allowed 
          placeholder:text-sm placeholder:font-medium
          ${error ? "border-red-500" : "border-gray-300 mb-7"} 
          ${className}
        `}
      />
      {error && <p className="text-xs text-red-500 h-7">{error}</p>}
    </div>
  );
};

export default Input;
