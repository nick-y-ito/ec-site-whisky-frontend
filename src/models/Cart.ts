import { ProductList } from '@/models/ProductList';
import { CartItem } from '@/types/definition';

export class Cart {
  private static _items: CartItem[] = [];

  static get items() {
    return Cart._items;
  }

  static increment(productId: number) {
    const targetItem = this._items.find((item) => item.id === productId);
    if (targetItem) {
      targetItem.quantity += 1;
    } else {
      this._items.push({ id: productId, quantity: 1 });
    }
  }

  static decrement(productId: number) {
    const targetItem = this._items.find((item) => item.id === productId);
    if (!targetItem) return;
    if (targetItem.quantity === 1) {
      this._items = this._items.filter((item) => item.id !== productId);
    } else {
      targetItem.quantity -= 1;
    }
  }

  static totalPriceInCent(cartItems: CartItem[]) {
    return cartItems.reduce((acc, item) => {
      const product = ProductList.products.find((product) => product.id === item.id);
      if (!product) return acc;
      return acc + product.priceInCent * item.quantity;
    }, 0);
  }
}
