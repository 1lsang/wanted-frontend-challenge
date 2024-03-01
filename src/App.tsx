import './App.css';
import WantedLogo from '@/components/common/WantedLogo.tsx';
import List from '@/components/List';
import Form from '@/components/Form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
import { useState } from 'react';
import { addTodo } from '@/store/todoSlice.ts';

function App() {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');

  return (
    <div className="flex max-h-dvh min-h-dvh flex-col items-center justify-center p-8">
      <main className="flex w-full max-w-lg flex-1 flex-col items-center gap-4 overflow-auto overflow-auto rounded-xl bg-slate-100 p-4">
        <section className="self-stretch">
          <h1 className="flex flex-col items-center justify-center">
            <WantedLogo />
            <span className="text-xs font-light">PreOnboarding Challenge</span>
          </h1>
        </section>

        <section className="self-stretch">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodo(input));
              setInput('');
            }}
          >
            <Form.Input
              value={input}
              onChange={(e) => setInput((e.target as HTMLInputElement).value)}
              placeholder="할 일을 입력해주세요."
            />
            <Form.Button disabled={!input}>추가</Form.Button>
          </Form>
        </section>

        <section className="flex flex-1 flex-col self-stretch overflow-y-scroll rounded-xl bg-white">
          {todos.length > 0 ? (
            <List.Container>
              {todos.map((todo) => (
                <List.Item key={todo.id} todo={todo}>
                  {todo.text}
                </List.Item>
              ))}
            </List.Container>
          ) : (
            <div className="flex flex-1 items-center justify-center text-center text-gray-400">
              할 일이 없습니다.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
