import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/whisky';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ItemCardProps {
  whisky: Product;
}

export const ItemCard: React.FC<ItemCardProps> = ({ whisky }) => {
  return (
    <li className="shadow-xl rounded-lg w-full h-full">
      <div className="py-2 h-[200px] bg-radial-gradient rounded-t-lg">
        <div className="w-full h-full relative">
          <Image
            className="object-contain"
            src={`/images/whisky${whisky.imgPath}`}
            alt={whisky.name}
            fill
            sizes="300px"
          />
        </div>
      </div>
      <div className="flex flex-col p-3 rounded-b-lg bg-gray-100">
        <div className="h-10 text-sm">
          <p className="truncate-2-lines text-center">{whisky.name}</p>
        </div>
        <div className="h-10 text-xl font-bold flex justify-center items-center">
          ${whisky.priceInCent / 100}
        </div>
        <AddToCartButton itemId={whisky.id} />
      </div>
    </li>
  );
};
