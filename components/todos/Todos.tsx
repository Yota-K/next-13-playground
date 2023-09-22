import { Todo } from '@prisma/client';

// ssr streaminを使用する際は、cache: 'no-store'にしないとエラーになる。
// エラーになる理由は、描画するコンポーネントをSSRするようにしないと、Suspenseでfallbackできないから。
// 挙動的には、リクエストごとに再取得を行う。
export async function Todos() {
  const data = await fetch(`http://localhost:3000/api/todos`, { cache: 'no-store' });
  const todos = (await data.json()) as Todo[];

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
}
