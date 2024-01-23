'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { useAppSelector } from '@/lib/redux/hooks';
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
  const currentSort = useAppSelector((state) => state.itemList.sort);
  const { params, replaceParams } = useQueryParams();

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
              {selected ? (
                <div className="w-full text-left mr-2 text-red-500 font-bold">{s.label}</div>
              ) : (
                <button
                  className="w-full text-left mr-2 hover:opacity-50"
                  onClick={() => handleClick(s.sort)}
                >
                  {s.label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
