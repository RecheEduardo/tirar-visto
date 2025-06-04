import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  error,
  className = '',
 ...props
}) => {
  const baseStyles = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm";
  const errorStyles = error? "border-red-500 focus:ring-red-500 focus:border-red-500" : "";

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-brand-muted">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;