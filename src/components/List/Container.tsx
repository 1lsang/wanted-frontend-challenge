import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLUListElement> {}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ul className="divide-y divide-slate-100 px-4" {...props}>
      {children}
    </ul>
  );
};

export default Container;
