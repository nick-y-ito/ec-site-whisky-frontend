'use client';
import React, { useState } from 'react';
import { Category, categories, whiskies } from '@/constants/whisky';
import { CategoryFilter, SearchField, SortField } from '@/components';
import type { Sort } from '@/components';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<Category>();
  const [sort, setSort] = useState<Sort>();

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
      <div className="w-full h-[500px] bg-[url('/images/barrels.jpg')] bg-cover px-14 flex justify-end items-center">
        <div className="text-white text-right">
          <h1 className="text-7xl">Whisky Voyage</h1>
          <p className="text-gray-100 font-thin pt-5">Discover Your Perfect Whisky Match</p>
        </div>
      </div>
      <div className="p-10 flex gap-10">
        <aside className="w-[250px]">
          <SearchField keyword={keyword} setKeyword={setKeyword} />
          <p className="mt-3 text-xl font-bold">Categories</p>
          <ul>
            {categories.map((c, i) => (
              <CategoryFilter key={i} c={c} category={category} setCategory={setCategory} />
            ))}
          </ul>
          <p className="mt-3 text-xl font-bold">Sort</p>
          <SortField setSort={setSort} />
        </aside>
        <div className="w-full">
          <ul className="grid grid-cols-5 gap-5">
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
