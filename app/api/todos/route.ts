import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  function heavyFunction() {
    let i = 0;

    while (i < 1000000000) {
      i++;
    }
    console.log('重い処理を実行');
  }

  heavyFunction();

  const todos = await prisma.todo.findMany();

  return NextResponse.json(todos);
}
