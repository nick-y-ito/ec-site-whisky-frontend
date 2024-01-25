import { Product } from '@/data/products';
import { Filter, Sort } from '@/types/sortFilterTypes';

export const filterProductList = (products: Product[], filter: Filter): Product[] => {
  const keyword = filter.keyword ? filter.keyword.toLowerCase() : '';
  const category = filter.category;
  return products.filter((p) => {
    return (
      (keyword ? p.name.toLowerCase().includes(keyword) : true) &&
      (category ? p.category === category : true)
    );
  });
};

export const sortProductList = (products: Product[], sort: Sort): Product[] => {
  const { by, order } = sort;
  products.sort((a, b) => {
    if (by === 'name') {
      return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (by === 'price') {
      return order === 'asc' ? a.priceInCent - b.priceInCent : b.priceInCent - a.priceInCent;
    } else {
      return 0;
    }
  });
  return products;
};
