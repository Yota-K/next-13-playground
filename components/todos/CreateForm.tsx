import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function CreateForm() {
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
    <form action={addTodo}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
