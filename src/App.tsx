import './App.css';
import WantedLogo from '@/components/common/WantedLogo.tsx';
import List from '@/components/List';
import Form from '@/components/Form';

function App() {
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
          <Form>
            <Form.Input placeholder="할 일을 입력해주세요." />
            <Form.Button>추가</Form.Button>
          </Form>
        </section>
        <section className="self-stretch overflow-y-scroll rounded-xl bg-white">
          <List.Container>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
            <List.Item>할 일 1</List.Item>
            <List.Item>할 일 2</List.Item>
            <List.Item>할 일 3</List.Item>
          </List.Container>
        </section>
      </main>
    </div>
  );
}

export default App;
