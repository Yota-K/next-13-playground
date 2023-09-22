import { Heading } from '@kuma-ui/core';
import { Suspense } from 'react';
import { CreateForm } from '~/components/todos/CreateForm';
import { Todos } from '~/components/todos/Todos';

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
