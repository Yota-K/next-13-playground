import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/sample" style={{ color: '#fff' }}>
          Client component
        </Link>
      </li>
      <li>
        server actions sample
        <ul style={{ marginLeft: '12px' }}>
          <li>
            <Link href="/todos" style={{ color: '#fff' }}>
              todos（prisma直で実行してtodo取ってきてるパターン）
            </Link>
          </li>
          <li>
            <Link href="/todos/pattern2" style={{ color: '#fff' }}>
              todos pattern2（SSR Streaming使ってtodo取ってきてるパターン）
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
