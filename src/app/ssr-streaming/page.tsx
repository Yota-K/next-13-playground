import { Suspense } from 'react';
import { Members } from '~/components/Members';
import styles from '~/app/page.module.css';

const Loading = () => <div>Loading...</div>;

// TypeScript が非同期コンポーネントを認識できないので、エラーを無視する
// https://github.com/vercel/next.js/issues/42292
export default async function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <Members />
      </Suspense>
    </main>
  );
}
