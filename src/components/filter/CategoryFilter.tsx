'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { filterItems } from '@/lib/redux/slices/itemListSlice';
import { cn } from '@/lib/utils';
import { Category, categories } from '@/types/productType';

export const CategoryFilter = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.itemList.filter.category);
  return (
    <>
      <p className="mt-3 text-xl font-bold">Categories</p>
      <ul>
        {categories.map((c, i) => (
          <li key={i}>
            <button
              className={cn('w-full text-left hover:opacity-50', c === category && 'text-red-500')}
              onClick={() => dispatch(filterItems({ category: c }))}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
