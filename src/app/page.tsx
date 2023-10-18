'use client';
import React, { useState } from 'react';
import { Category, whiskies } from '@/constants/whisky';
import { CategoryFilter, ResetBtn, KeywordFilter, SortField } from '@/components';
import type { Sort } from '@/components';
import ProductCard from '@/components/ProductCard';
import { FiFilter } from 'react-icons/fi';
import { BiSortUp } from 'react-icons/bi';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<Category>();
  const [sort, setSort] = useState<Sort>('nameAsc');
  const [isOpen, setIsOpen] = useState(false);

  let _whiskies = whiskies;
  if (keyword) {
    _whiskies = _whiskies.filter((w) => w.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }
  if (category) {
    _whiskies = _whiskies.filter((w) => w.category === category);
  }

  if (sort) {
    if (sort === 'nameAsc' || sort === 'nameDesc') {
      _whiskies = _whiskies.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return sort === 'nameAsc' ? 1 : -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return sort === 'nameAsc' ? -1 : 1;
        return 0;
      });
    } else if (sort === 'priceAsc' || sort === 'priceDesc') {
      _whiskies = _whiskies.sort((a, b) => {
        return sort === 'priceAsc'
          ? Number((a.price - b.price).toFixed(2))
          : Number((b.price - a.price).toFixed(2));
      });
    }
  }

  return (
    <main>
      <div className="w-full h-[120px] sm:h-[200px] md:h-[300px] bg-[url('/images/barrels.jpg')] bg-cover px-14 flex justify-center lg:justify-end items-center">
        <div className="text-white text-center lg:text-right">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold ">Whisky Voyage</h1>
          <p className="text-gray-100 text-xs sm:text-lg md:text-xl font-thin mt-1 sm:pt-5">
            Discover Your Perfect Whisky Match
          </p>
        </div>
      </div>
      <div className="p-10 flex gap-10 justify-center relative">
        <aside className="w-[250px] max-md:hidden">
          <KeywordFilter keyword={keyword} setKeyword={setKeyword} />
          <CategoryFilter
            keyword={keyword}
            setKeyword={setKeyword}
            category={category}
            setCategory={setCategory}
          />
          <SortField sort={sort} setSort={setSort} />
          <ResetBtn setKeyword={setKeyword} setCategory={setCategory} setSort={setSort} />
        </aside>
        <div className="w-full max-w-screen-2xl">
          <div className="md:hidden">
            <div className="h-[35px] mb-3 grid grid-cols-1">
              <button
                className={`flex justify-center items-center gap-2 border border-black rounded-sm ${
                  (isOpen || keyword || category || sort !== 'nameAsc') && 'bg-black text-white'
                }`}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <FiFilter />/<BiSortUp />
              </button>
            </div>
            <div className={`mb-3 ${!isOpen && 'hidden'}`}>
              <KeywordFilter keyword={keyword} setKeyword={setKeyword} />
              <div className="grid grid-cols-2">
                <div>
                  <CategoryFilter
                    keyword={keyword}
                    setKeyword={setKeyword}
                    category={category}
                    setCategory={setCategory}
                  />
                </div>
                <div>
                  <SortField sort={sort} setSort={setSort} />
                </div>
              </div>
              <ResetBtn setKeyword={setKeyword} setCategory={setCategory} setSort={setSort} />
            </div>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {_whiskies.map((w, i) => (
              <ProductCard key={i} whisky={w} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
