'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { sortItems, Sort } from '@/lib/redux/slices/itemListSlice';

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
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.itemList.sort);

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
                  onClick={() => dispatch(sortItems({ by, order }))}
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
