interface TodoProps extends React.HTMLAttributes<HTMLLIElement> {}

const Item = ({ children, ...props }: TodoProps) => {
  return (
    <li className="flex items-center justify-between py-2" {...props}>
      <span>{children}</span>
      <button className="p-1 text-xs text-red-500">❌</button>
    </li>
  );
};

export default Item;
