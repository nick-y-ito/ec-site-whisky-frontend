import { CartItem } from '@/types/definition';

export class Cart {
  private static _items: CartItem[] = [];

  static get items() {
    return Cart._items;
  }

  static increment(itemId: number) {
    const targetItem = this._items.find((item) => item.id === itemId);
    if (targetItem) {
      targetItem.quantity += 1;
    } else {
      this._items.push({ id: itemId, quantity: 1 });
    }
  }

  static decrement(itemId: number) {
    const targetItem = this._items.find((item) => item.id === itemId);
    if (!targetItem) return;
    if (targetItem.quantity === 1) {
      this._items = this._items.filter((item) => item.id !== itemId);
    } else {
      targetItem.quantity -= 1;
    }
  }
}
