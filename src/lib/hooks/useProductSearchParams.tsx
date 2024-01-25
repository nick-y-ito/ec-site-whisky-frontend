import { Category, isCategory } from '@/types/productType';
import { SortBy, SortOrder, isSortBy, isSortOrder } from '@/types/sortFilterTypes';
import { useSearchParams } from 'next/navigation';

export const useProductSearchParams = () => {
  const searchParams = useSearchParams();

  // Get the query parameters from the URL
  const categoryParam = searchParams.get('category');
  const sortByParam = searchParams.get('sortBy');
  const sortOrderParam = searchParams.get('sortOrder');

  // Parse the query parameters
  const keyword = searchParams.get('keyword') || undefined;
  const category = isCategory(categoryParam) ? (categoryParam as Category) : undefined;
  const sortBy = isSortBy(sortByParam) ? (sortByParam as SortBy) : undefined;
  const sortOrder = isSortOrder(sortOrderParam) ? (sortOrderParam as SortOrder) : undefined;

  return { keyword, category, sortBy, sortOrder };
};
