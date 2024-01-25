import { Product, products } from '@/data/whisky';
import { Category } from '@/types/productType';
import { Keyword, SortBy, SortOrder } from '@/types/sortFilterTypes';

export class ProductList {
  private static _products: Product[] = products;
  private static _filteredProducts: Product[] = products;

  static get products(): Product[] {
    return ProductList.products;
  }

  static get filteredProducts(): Product[] {
    return ProductList._filteredProducts;
  }

  static set filteredProducts(products: Product[]) {
    ProductList._filteredProducts = products;
  }

  static filterItems({ keyword, category }: { keyword?: Keyword; category?: Category }) {
    const _keyword = keyword ? keyword.toLowerCase() : '';
    const _category = category;
    ProductList._filteredProducts = ProductList._products.filter((p) => {
      return (
        (_keyword ? p.name.toLowerCase().includes(_keyword) : true) &&
        (_category ? p.category === _category : true)
      );
    });
  }

  static sortItems({ sortBy, sortOrder }: { sortBy?: SortBy; sortOrder?: SortOrder }) {
    const by: SortBy = sortBy ?? 'name';
    const order: SortOrder = sortOrder ?? 'asc';
    ProductList._filteredProducts.sort((a, b) => {
      if (by === 'name') {
        return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (by === 'price') {
        return order === 'asc' ? a.priceInCent - b.priceInCent : b.priceInCent - a.priceInCent;
      } else {
        return 0;
      }
    });
  }
}
