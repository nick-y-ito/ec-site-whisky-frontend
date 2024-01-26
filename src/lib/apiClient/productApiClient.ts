import { Product } from '@/data/products';
import { Category } from '@/types/productType';
import { Keyword, SortBy, SortOrder } from '@/types/sortFilterTypes';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface IGetProductList {
  keyword?: Keyword;
  category?: Category;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

/**
 * Get product list
 * @returns Product list from the server
 */
export async function getProductList({
  keyword,
  category,
  sortBy,
  sortOrder,
}: IGetProductList): Promise<Product[]> {
  try {
    const searchParams = {
      ...(keyword && { keyword }),
      ...(category && { category }),
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
    };

    const queryString = new URLSearchParams(searchParams).toString();
    const endpoint = `${API_BASE_URL}/api/products?${queryString}`;

    const res = await fetch(endpoint, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Server responded with status code ${res.status}`);
    }
    const data = await res.json();
    return data.products;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
    throw new Error('Failed to fetch products');
  }
}
