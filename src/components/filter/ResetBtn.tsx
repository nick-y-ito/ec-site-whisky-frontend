'use client';

import { useQueryParams } from '@/lib/hooks/useQueryParams';

export const ResetBtn = () => {
  const { params, replaceParams } = useQueryParams();

  const handleClick = () => {
    params.delete('keyword');
    params.delete('category');
    params.delete('sortBy');
    params.delete('sortOrder');
    replaceParams();
  };

  return (
    <div className="my-3 flex justify-center">
      <button
        className="w-[100px] border border-black rounded-full hover:text-white hover:bg-black"
        onClick={() => handleClick()}
      >
        Reset
      </button>
    </div>
  );
};
