import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder?: string;
}

const Input = ({ value, className, placeholder, ...props }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      className={`flex-1 rounded-lg bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
