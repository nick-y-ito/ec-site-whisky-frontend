'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';
import { useState } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export const KeywordFilter = () => {
  const { params, replaceParams } = useQueryParams();
  const [inputKeyword, setInputKeyword] = useState('');
  const paramKeyword = params.get('keyword') || '';

  /**
   * Update the URL query string with the keyword filter
   */
  const handleChange = (query: string) => {
    setInputKeyword(query);
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
        value={inputKeyword || paramKeyword}
        onChange={(e) => handleChange(e.target.value)}
      />
      <HiOutlineMagnifyingGlass className="absolute right-2" />
    </div>
  );
};
