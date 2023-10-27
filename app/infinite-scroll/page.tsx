import { Items } from './_components/Items';
import { heavyFunction } from '~/utils/heavyFunction';

async function fetchItems(page = 0) {
  'use server';

  // server actionsを使用した無限スクロール実装の
  // 検証のために、重い処理を実行する
  heavyFunction();

  return Array.from({ length: 10 }).map((_, index) => ({
    name: `Item #${page * 10 + index + 1}`,
  }));
}

export default async function Page() {
  const items = await fetchItems();
  console.log(items);

  return <Items initialItems={items} fetchItems={fetchItems} />;
}
