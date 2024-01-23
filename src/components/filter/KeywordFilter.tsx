'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { useAppSelector } from '@/lib/redux/hooks';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export const KeywordFilter = () => {
  const keyword = useAppSelector((state) => state.itemList.filter.keyword);
  const { params, replaceParams } = useQueryParams();

  /**
   * Update the URL query string with the keyword filter
   */
  const handleChange = (query: string) => {
    if (query) {
      params.set('keyword', query);
    } else {
      params.delete('keyword');
    }
    replaceParams();
  };

  return (
    <div className="h-[35px] border border-black flex items-center relative">
      <input
        className="h-full w-full"
        type="text"
        value={keyword}
        onChange={(e) => handleChange(e.target.value)}
      />
      <HiOutlineMagnifyingGlass className="absolute right-2" />
    </div>
  );
};
