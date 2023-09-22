import { Suspense } from 'react';
import { Members } from '~/components/Members';

const Loading = () => <div>Loading...</div>;

// TypeScript が非同期コンポーネントを認識できないので、エラーを無視する
// https://github.com/vercel/next.js/issues/42292
export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Server Component */}
      <Members />
    </Suspense>
  );
}
