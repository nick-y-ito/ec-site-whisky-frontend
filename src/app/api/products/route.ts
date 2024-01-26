import { ProductList } from '@/models/ProductList';
import { Category, isCategory } from '@/types/productType';
import { SortBy, SortOrder, isSortBy, isSortOrder } from '@/types/sortFilterTypes';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
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

    // Filter and sort products
    ProductList.filterProducts({ keyword, category });
    ProductList.sortProducts({ sortBy, sortOrder });

    // Get filtered and sorted products
    const products = ProductList.filteredProducts;

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
