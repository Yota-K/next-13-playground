import { Heading } from '@kuma-ui/core';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function Home() {
  const todos = await prisma.todo.findMany();

  const addTodo = async (data: FormData) => {
    'use server';
    console.log(data);

    const name = data.get('name') as string;

    try {
      await prisma.todo.create({ data: { name } });
      revalidatePath('/todos');
    } catch (er) {
      console.error(er);
    }
  };

  return (
    <main>
      <Heading as="h2">投稿作成</Heading>
      <form action={addTodo}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <button type="submit">Add Todo</button>
      </form>
      <Heading as="h2">投稿一覧</Heading>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </main>
  );
}
