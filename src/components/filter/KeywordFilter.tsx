'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { filterItems } from '@/lib/redux/slices/itemListSlice';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export const KeywordFilter = () => {
  const dispatch = useAppDispatch();
  const keyword = useAppSelector((state) => state.itemList.filter.keyword);

  return (
    <div className="h-[35px] border border-black flex items-center relative">
      <input
        className="h-full w-full"
        type="text"
        value={keyword}
        onChange={(e) => {
          dispatch(filterItems({ keyword: e.target.value }));
        }}
      />
      <HiOutlineMagnifyingGlass className="absolute right-2" />
    </div>
  );
};
