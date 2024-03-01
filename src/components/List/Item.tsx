import { HTMLAttributes } from 'react';
import { useAppDispatch } from '@/store';
import { removeTodo, ToDo } from '@/store/todoSlice.ts';

interface TodoProps extends HTMLAttributes<HTMLLIElement> {
  todo: ToDo;
}

const Item = ({ todo, ...props }: TodoProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center justify-between py-2" {...props}>
      <span>{todo.text}</span>
      <button
        className="p-1 text-xs text-red-500"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
