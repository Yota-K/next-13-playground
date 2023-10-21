import { Heading } from '@kuma-ui/core';
import { Suspense } from 'react';
import { CreateForm } from '../_components/CreateForm';
import { Todos } from '../_components/Todos';

const Loading = () => <div>Loading...</div>;

export default async function Page() {
  return (
    <>
      <Heading as="h2">投稿作成</Heading>
      <CreateForm />
      <Heading as="h2">投稿一覧</Heading>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <Todos />
      </Suspense>
    </>
  );
}
