'use server';

import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addTodo = async (data: FormData) => {
  console.log(data);

  const name = data.get('name') as string;

  try {
    await prisma.todo.create({ data: { name } });
    revalidatePath('/todos');
  } catch (er) {
    console.error(er);
  }
};
