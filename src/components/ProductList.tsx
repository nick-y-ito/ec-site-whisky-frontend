import React from 'react';
import Image from 'next/image';
import { AddToCartButton, AddToCartButtonSkeleton } from '@/components/AddToCartButton';
import { Category, isCategory } from '@/types/productType';
import {
  Keyword,
  SortBy,
  SortOrder,
  isKeyword,
  isSortBy,
  isSortOrder,
} from '@/types/sortFilterTypes';
import { getProductList } from '@/lib/apiClient/productApiClient';
import { Skeleton } from '@/components/ui/Skeleton';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

interface ProductListProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const ProductList = ({ searchParams }: ProductListProps) => {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
      <Suspense fallback={<ProductCardsSkeleton />}>
        <ProductCards searchParams={searchParams} />
      </Suspense>
    </ul>
  );
};

interface ProductCardsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const ProductCards: React.FC<ProductCardsProps> = async ({ searchParams }) => {
  const keyword = searchParams.keyword;
  const categoryParam = searchParams.category;
  const sortByParam = searchParams.sortBy;
  const sortOrderParam = searchParams.sortOrder;

  const _keyword = isKeyword(keyword) ? (keyword as Keyword) : undefined;
  const _category = isCategory(categoryParam) ? (categoryParam as Category) : undefined;
  const _sortBy = isSortBy(sortByParam) ? (sortByParam as SortBy) : undefined;
  const _sortOrder = isSortOrder(sortOrderParam) ? (sortOrderParam as SortOrder) : undefined;

  const products = await getProductList({
    keyword: _keyword,
    category: _category,
    sortBy: _sortBy,
    sortOrder: _sortOrder,
  });

  return (
    <>
      {products.map((p, i) => (
        <li key={i} className="shadow-xl rounded-lg w-full h-full">
          <div className="py-2 h-[200px] bg-radial-gradient rounded-t-lg">
            <div className="w-full h-full relative">
              <Image
                className="object-contain"
                src={`/images/products${p.imgPath}`}
                alt={p.name}
                fill
                sizes="300px"
              />
            </div>
          </div>
          <div className="flex flex-col p-3 rounded-b-lg bg-gray-100">
            <div className="h-10 text-sm">
              <p className="truncate-2-lines text-center">{p.name}</p>
            </div>
            <div className="h-10 text-xl font-bold flex justify-center items-center">
              ${p.priceInCent / 100}
            </div>
            <AddToCartButton productId={p.id} />
          </div>
        </li>
      ))}
    </>
  );
};

export const ProductCardsSkeleton = () => {
  const arr = Array.from({ length: 12 }, (_, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return arr.map((i) => (
    <li key={i} className="shadow-xl rounded-lg w-full h-full">
      <Skeleton className="h-[200px] rounded-t-lg" />
      <div className="flex flex-col p-3 rounded-b-lg bg-gray-100">
        <div className="h-10 flex justify-center">
          <Skeleton className="w-40 h-5" />
        </div>
        <div className="h-10 flex justify-center items-center">
          <Skeleton className="w-20 h-6" />
        </div>
        <AddToCartButtonSkeleton />
      </div>
    </li>
  ));
};
