'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { Box, Heading } from '@kuma-ui/core';

type Item = {
  name: string;
};

type Props = {
  initialItems: Item[];
  fetchItems: (page?: number) => Promise<Item[]>;
};

export function Items({ initialItems, fetchItems }: Props) {
  const observerTarget = useRef(null);

  const [items, setItems] = useState([initialItems]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const flatItems = items.flatMap((page) => page);

  const loadMore = useCallback(
    async (page: number) => {
      const data = await fetchItems(page);
      setItems((prev) => [...prev, data]);

      const count = data.length;
      setHasMore(count > 0);
    },
    [fetchItems]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasMore) {
            setPage((p) => p + 1);
          }
        });
      },
      { threshold: 1.0 }
    );

    let observerRefValue: null = null;

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
      observerRefValue = observerTarget.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [hasMore, observerTarget]);

  useEffect(() => {
    if (page > 0) loadMore(page);
  }, [page, loadMore]);

  return (
    <div>
      {flatItems.map((item) => (
        <Box key={item.name} p={48} my={20} bg="white" color="black">
          {item.name}
        </Box>
      ))}
      <div ref={observerTarget}>{hasMore && <Heading my={20}>Loading ...</Heading>}</div>
    </div>
  );
}
