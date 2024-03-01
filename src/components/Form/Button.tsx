import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = ({ disabled, children, ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-blue-500 px-3 py-2 text-white transition-all duration-150 ease-in-out hover:bg-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
