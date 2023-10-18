'use client';
import React, { useState } from 'react';
import { whiskies } from '@/constants/whisky';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  // const [nameAsc, setNameAsc] = useState<boolean | null>();
  // const [priceAsc, setPriceAsc] = useState<boolean | null>();

  let _whiskies = whiskies;

  // if (nameAsc !== null) {
  //   _whiskies = _whiskies.sort((a, b) => {
  //     if (a.name.toLowerCase() > b.name.toLowerCase()) return nameAsc ? 1 : -1;
  //     if (a.name.toLowerCase() < b.name.toLowerCase()) return nameAsc ? -1 : 1;
  //     return 0;

  return (
    <main>
      <div className="w-full h-[500px] bg-[url('/images/barrels.jpg')] bg-cover px-14 flex justify-end items-center">
        <div className="text-white text-right">
          <h1 className="text-7xl">Whisky Voyage</h1>
          <p className="text-gray-100 font-thin pt-5">Discover Your Perfect Whisky Match</p>
        </div>
      </div>
      <div className="p-10 flex gap-10">
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
