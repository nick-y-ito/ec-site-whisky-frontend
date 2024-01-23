'use client';

import { useEffect } from 'react';
import { ItemCard } from '@/components/ItemCard';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { filterItems, reset, setItems, sortItems } from '@/lib/redux/slices/itemListSlice';
import { whiskies } from '@/data/whisky';
import { useSearchParams } from 'next/navigation';
import { Category, isCategory } from '@/types/productType';
import { SortBy, SortOrder, isSortBy, isSortOrder } from '@/types/sortFilterTypes';

export const ItemList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.itemList.filteredItems);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize the item list
    dispatch(setItems(whiskies));

    // Get the query parameters from the URL
    const categoryParam = searchParams.get('category');
    const sortByParam = searchParams.get('sortBy');
    const sortOrderParam = searchParams.get('sortOrder');

    // Parse the query parameters
    const keyword = searchParams.get('keyword') || undefined;
    const category = isCategory(categoryParam) ? (categoryParam as Category) : undefined;
    const sortBy = isSortBy(sortByParam) ? (sortByParam as SortBy) : undefined;
    const sortOrder = isSortOrder(sortOrderParam) ? (sortOrderParam as SortOrder) : undefined;

    // Filter and sort the items
    if (keyword || category) {
      dispatch(filterItems({ keyword, category }));
    }
    if (sortBy || sortOrder || sortBy || sortOrder) {
      dispatch(sortItems({ by: sortBy, order: sortOrder }));
    }
    // Reset the filter and sort
    if (!keyword && !category && !sortBy && !sortOrder) {
      dispatch(reset());
    }
  }, [dispatch, searchParams]);

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
      {items.map((item, i) => (
        <ItemCard key={i} whisky={item} />
      ))}
    </ul>
  );
};
