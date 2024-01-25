'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { cn } from '@/lib/utils';
import { Sort } from '@/types/sortFilterTypes';
import { isSortOrder, isSortBy } from '@/types/sortFilterTypes';

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
  const sortParams = {
    sortBy: params.get('sortBy'),
    sortOrder: params.get('sortOrder'),
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
          const noSearchParams = !isSortBy(sortParams.sortBy) && !isSortOrder(sortParams.sortOrder);
          const bySelected = sortParams.sortBy === by && !isSortOrder(sortParams.sortOrder);
          const orderSelected = sortParams.sortOrder === order && !isSortBy(sortParams.sortBy);
          const selected = noSearchParams
            ? i === 0
            : bySelected
            ? by === sortParams.sortBy && order === 'asc'
            : orderSelected
            ? order === sortParams.sortOrder && by === 'name'
            : by === sortParams.sortBy && order === sortParams.sortOrder;
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
            </li>
          );
        })}
      </ul>
    </>
  );
};
