import { NextResponse } from 'next/server';

// app directoryを使っている場合はrouteという名前で定義するとapiとして認識される
export async function GET() {
  return NextResponse.json({ text: 'hello' });
}
