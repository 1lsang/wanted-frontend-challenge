import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-blue-500 px-3 py-2 text-white transition-colors transition-transform hover:bg-blue-600 active:scale-95"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
