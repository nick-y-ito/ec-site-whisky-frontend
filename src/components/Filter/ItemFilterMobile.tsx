'use client';

import { useState } from 'react';
import { KeywordFilter } from '@/components/filter/KeywordFilter';
import { CategoryFilter } from '@/components/filter/CategoryFilter';
import { SortField } from '@/components/filter/SortField';
import { ResetBtn } from '@/components/filter/ResetBtn';
import { FiFilter } from 'react-icons/fi';
import { BiSortUp } from 'react-icons/bi';
import { useAppSelector } from '@/lib/redux/hooks';

export const ItemFilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const keyword = useAppSelector((state) => state.itemList.filter.keyword);
  const category = useAppSelector((state) => state.itemList.filter.category);
  const sort = useAppSelector((state) => state.itemList.sort);

  return (
    <>
      <div className="md:hidden">
        <div className="h-[35px] mb-3 grid grid-cols-1">
          <button
            className={`flex justify-center items-center gap-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              (isOpen || keyword || category || !(sort.by === 'name' && sort.order === 'asc')) &&
              'bg-black text-white'
            }`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FiFilter />/<BiSortUp />
          </button>
        </div>
        <div className={`mb-3 ${!isOpen && 'hidden'}`}>
          <KeywordFilter />
          <div className="grid grid-cols-2">
            <div>
              <CategoryFilter />
            </div>
            <div>
              <SortField />
            </div>
          </div>
          <ResetBtn />
        </div>
      </div>
    </>
  );
};
