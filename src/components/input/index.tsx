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
  pattern?: string;
  dir?: string;
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
  pattern,
  dir = "rtl",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        dir={dir}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        pattern={pattern}
        className={`
          border border-gray-1 p-3 
          focus:outline-none focus:ring-0
          disabled:cursor-not-allowed 
          placeholder:text-sm placeholder:font-medium
          ${error ? "border-red text-red" : "border-gray-1 mb-7"} 
          ${className}
        `}
      />
      {error && <span className="text-xs text-red h-7">{error}</span>}
    </div>
  );
};

export default Input;
