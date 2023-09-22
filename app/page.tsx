import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/sample" style={{ color: '#fff' }}>
          sample
        </Link>
      </li>
      <li>
        <Link href="/ssr-streaming" style={{ color: '#fff' }}>
          ssr-streaming
        </Link>
      </li>
      <li>
        <Link href="/todos" style={{ color: '#fff' }}>
          todos (server actions sample)
        </Link>
      </li>
      <li>
        <Link href="/todos/pattern2" style={{ color: '#fff' }}>
          todos pattern2 (server actions sample)
        </Link>
      </li>
    </ul>
  );
}
