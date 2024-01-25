'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useDebouncedCallback } from 'use-debounce';

export const KeywordFilter = () => {
  const { params, replaceParams } = useQueryParams();
  const paramKeyword = params.get('keyword') || '';

  /**
   * Update the URL query string with the keyword filter
   */
  const handleChange = useDebouncedCallback((query: string) => {
    if (query) {
      params.set('keyword', query);
    } else {
      params.delete('keyword');
    }
    replaceParams();
  }, 300);

  return (
    <div className="h-[35px] border border-black flex items-center relative">
      <input
        className="h-full w-full"
        type="text"
        defaultValue={paramKeyword}
        onChange={(e) => handleChange(e.target.value)}
      />
      <HiOutlineMagnifyingGlass className="absolute right-2" />
    </div>
  );
};
