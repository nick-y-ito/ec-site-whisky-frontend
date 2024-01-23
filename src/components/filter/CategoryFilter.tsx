'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { useAppSelector } from '@/lib/redux/hooks';
import { cn } from '@/lib/utils';
import { Category, categories } from '@/types/productType';

export const CategoryFilter = () => {
  const category = useAppSelector((state) => state.itemList.filter.category);
  const { params, replaceParams } = useQueryParams();

  /**
   * Update the URL query string with the category filter
   */
  const handleClick = (category: Category) => {
    params.set('category', category);
    replaceParams();
  };

  return (
    <>
      <p className="mt-3 text-xl font-bold">Categories</p>
      <ul>
        {categories.map((c, i) => (
          <li key={i}>
            <button
              className={cn('w-full text-left hover:opacity-50', c === category && 'text-red-500')}
              onClick={() => handleClick(c)}
            >
              <span className="capitalize">{c}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
