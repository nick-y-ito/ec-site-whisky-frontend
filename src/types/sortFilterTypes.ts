import { Category } from '@/types/productType';

/**
 * Types for Sort By
 */
export const SORT_BY = ['name', 'price'] as const;
export type SortBy = (typeof SORT_BY)[number];
// Type guard
export const isSortBy = (str: string | null): str is SortBy => SORT_BY.includes(str as SortBy);

/**
 * Types for Sort Order
 */
const SORT_ORDER = ['asc', 'desc'] as const;
export type SortOrder = (typeof SORT_ORDER)[number];
// Type guard
export const isSortOrder = (str: string | null): str is SortOrder =>
  SORT_ORDER.includes(str as SortOrder);

/**
 * Interface for Sort object
 * @property by - Sort by
 * @property order - Sort order
 */
export interface Sort {
  by?: SortBy;
  order?: SortOrder;
}

export type Keyword = string;

/**
 * Interface for Filter object
 * @property keyword - Search keyword
 * @property category - Category
 */
export interface Filter {
  keyword?: Keyword;
  category?: Category;
}
