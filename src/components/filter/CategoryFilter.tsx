'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { cn } from '@/lib/utils';
import { Category, categories } from '@/types/productType';

export const CategoryFilter = () => {
  const { params, replaceParams } = useQueryParams();
  const selectedCategory = params.get('category');

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
        {categories.map((c, i) => {
          const selected = c === selectedCategory;
          return (
            <li key={i}>
              <button
                className={cn(
                  'w-full text-left',
                  selected ? 'text-red-500 font-bold' : 'hover:opacity-50',
                )}
                onClick={() => handleClick(c)}
                disabled={selected}
              >
                <span className="capitalize">{c}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
