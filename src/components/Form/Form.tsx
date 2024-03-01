import { HTMLAttributes } from 'react';

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className="flex w-full gap-2" {...props}>
      {children}
    </form>
  );
};

export default Form;
