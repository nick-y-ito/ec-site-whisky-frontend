'use client';

import React, { useEffect } from 'react';
import { ItemCard } from '@/components/ItemCard';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setItems } from '@/lib/redux/slices/itemListSlice';
import { whiskies } from '@/data/whisky';

export const ItemList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.itemList.filteredItems);

  useEffect(() => {
    (async () => {
      const data = whiskies;
      dispatch(setItems(data));
    })();
  }, [dispatch]);

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
      {items.map((item, i) => (
        <ItemCard key={i} whisky={item} />
      ))}
    </ul>
  );
};
