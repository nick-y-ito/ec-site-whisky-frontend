import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <li className="shadow-xl rounded-lg w-full h-full">
      <div className="py-2 h-[200px] bg-radial-gradient rounded-t-lg">
        <div className="w-full h-full relative">
          <Image
            className="object-contain"
            src={`/images/products${product.imgPath}`}
            alt={product.name}
            fill
            sizes="300px"
          />
        </div>
      </div>
      <div className="flex flex-col p-3 rounded-b-lg bg-gray-100">
        <div className="h-10 text-sm">
          <p className="truncate-2-lines text-center">{product.name}</p>
        </div>
        <div className="h-10 text-xl font-bold flex justify-center items-center">
          ${product.priceInCent / 100}
        </div>
        <AddToCartButton productId={product.id} />
      </div>
    </li>
  );
};
