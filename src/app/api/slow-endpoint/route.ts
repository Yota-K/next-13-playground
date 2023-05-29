import { NextResponse } from 'next/server';

function heavyFunction() {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }
  console.log('重い処理を実行');
}

export async function GET() {
  // SSR streamingの検証のために、重い処理を実行する
  heavyFunction();

  return NextResponse.json([
    {
      name: 'Hoge',
      age: 20,
    },
    {
      name: 'Taro',
      age: 100,
    },
    {
      name: 'Kami',
      age: 20,
    },
    {
      name: 'saikyo',
      age: 20,
    },
  ]);
}
