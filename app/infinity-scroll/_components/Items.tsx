'use client';

import { useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, Heading } from '@kuma-ui/core';

type Item = {
  name: string;
};

type Props = {
  initialItems: Item[];
  fetchItems: (page?: number) => Promise<Item[]>;
};

export function Items({ initialItems, fetchItems }: Props) {
  const fetching = useRef(false);
  const [pages, setPages] = useState([initialItems]);
  const items = pages.flatMap((page) => page);

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        fetching.current = true;

        const data = await fetchItems(page);
        setPages((prev) => [...prev, data]);
      } finally {
        fetching.current = false;
      }
    }
  };

  return (
    <InfiniteScroll
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={<Heading my={20}>Loading ...</Heading>}
      element="main"
    >
      {items.map((item) => (
        <Box key={item.name} p={48} my={20} bg="white" color="black">
          {item.name}
        </Box>
      ))}
    </InfiniteScroll>
  );
}
