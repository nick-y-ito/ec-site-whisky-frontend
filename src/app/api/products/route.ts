import { ProductList } from '@/models/ProductList';
import { Category, isCategory } from '@/types/productType';
import { SortBy, SortOrder, isSortBy, isSortOrder } from '@/types/sortFilterTypes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Get query parameters object
  const searchParams = req.nextUrl.searchParams;

  // Get plain query parameters
  const keywordParam = searchParams.get('keyword');
  const categoryParam = searchParams.get('category');
  const sortByParam = searchParams.get('sortBy');
  const sortOrderParam = searchParams.get('sortOrder');

  // Convert query parameters to the correct type.
  // If the query parameter is invalid, set it to undefined.
  const keyword = keywordParam ?? undefined;
  const category = isCategory(categoryParam) ? (categoryParam as Category) : undefined;
  const sortBy = isSortBy(sortByParam) ? (sortByParam as SortBy) : undefined;
  const sortOrder = isSortOrder(sortOrderParam) ? (sortOrderParam as SortOrder) : undefined;

  ProductList.filterProducts({ keyword, category });
  ProductList.sortProducts({ sortBy, sortOrder });

  const products = await new Promise((resolve) => {
    // setTimeout(() => {
      resolve(ProductList.filteredProducts);
    // }, 3000);
  });

  return NextResponse.json({ products });
}
