import { Product } from '@/data/whisky';
import { Category, isCategory } from '@/types/productType';
import {
  Keyword,
  SortBy,
  SortOrder,
} from '@/types/sortFilterTypes';

interface IGetProductList {
  keyword?: Keyword;
  category?: Category;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

/**
 * Get product list
 * @returns product list
 */
export async function getProductList({
  keyword,
  category,
  sortBy,
  sortOrder,
}: IGetProductList): Promise<Product[]> {
  const searchParams = {
    ...(keyword && { keyword }),
    ...(category && { category }),
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
  };
  const queryString = new URLSearchParams(searchParams).toString();
  const res = await fetch(`/api/products?${queryString}`, {
    method: 'GET',
  });
  const data = await res.json();
  return data.products;
}
