import { Heading } from '@kuma-ui/core';
import { PrismaClient } from '@prisma/client';
import { CreateForm } from './_components/CreateForm';

const prisma = new PrismaClient();

export default async function Page() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <Heading as="h2">投稿作成</Heading>
      <CreateForm />
      <Heading as="h2">投稿一覧</Heading>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.name}</div>
        ))}
      </div>
    </>
  );
}
