'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { cn } from '@/lib/utils';
import { Sort } from '@/types/sortFilterTypes';

type SortType = {
  sort: Sort;
  label: string;
};

const sortTypes: SortType[] = [
  { sort: { by: 'name', order: 'asc' }, label: 'A → Z' },
  { sort: { by: 'name', order: 'desc' }, label: 'Z → A' },
  { sort: { by: 'price', order: 'asc' }, label: '$ → $$$' },
  { sort: { by: 'price', order: 'desc' }, label: '$$$ → $' },
];

export const SortField = () => {
  const { params, replaceParams } = useQueryParams();
  const currentSort = {
    by: params.get('sortBy'),
    order: params.get('sortOrder'),
  };

  const handleClick = (sort: Sort) => {
    sort.by ? params.set('sortBy', sort.by) : params.delete('sortBy');
    sort.order ? params.set('sortOrder', sort.order) : params.delete('sortOrder');
    replaceParams();
  };

  return (
    <>
      <p className="mt-3 text-xl font-bold">Sort</p>
      <ul>
        {sortTypes.map((s, i) => {
          const { by, order } = s.sort;
          const selected = by === currentSort.by && order == currentSort.order;
          return (
            <li key={i}>
              <button
                className={cn(
                  'w-full text-left',
                  selected ? 'text-red-500 font-bold' : 'hover:opacity-50',
                )}
                onClick={() => handleClick(s.sort)}
                disabled={selected}
              >
                {s.label}
              </button>
              {/* )} */}
            </li>
          );
        })}
      </ul>
    </>
  );
};
