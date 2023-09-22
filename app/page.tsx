import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
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
      </ul>
    </main>
  );
}
