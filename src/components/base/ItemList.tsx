'use client';

import { useEffect, useState } from 'react';
import { ItemCard } from '@/components/ItemCard';
import { getProductList } from '@/lib/apiClient/productApiClient';
import { useProductSearchParams } from '@/lib/hooks/useProductSearchParams';
import { Product } from '@/data/whisky';

export const ItemList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { keyword, category, sortBy, sortOrder } = useProductSearchParams();

  // Fetch the product list when the predefined search parameters change
  useEffect(() => {
    (async () => {
      const productList = await getProductList({ keyword, category, sortBy, sortOrder });
      setProducts(productList);
    })();
  }, [keyword, category, sortBy, sortOrder]);

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
      {products.map((p, i) => (
        <ItemCard key={i} whisky={p} />
      ))}
    </ul>
  );
};
