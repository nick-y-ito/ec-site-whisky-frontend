import { CartItem } from '@/types/definition';

/**
 * Get cart items from the server
 * @returns {Promise<CartItem[]>}
 */
export async function getCartItems(): Promise<CartItem[]> {
  const res = await fetch('/api/cart');
  const data = await res.json();
  return data.cartItems;
}

/**
 * Add an item to the cart
 * @param {number} itemId
 */
export async function addCartItem(itemId: number) {
  await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId }),
  });
}

/**
 * Increment the quantity of the item in the cart
 * This will add the item to the cart if it doesn't exist
 * @param {number} itemId
 */
export async function incrementCartItem(itemId: number) {
  await fetch(`/api/cart/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'increment' }),
  });
}

/**
 * Decrement the quantity of the item in the cart
 * This will remove the item from the cart if the quantity is 1
 * @param {number} itemId
 */
export async function decrementCartItem(itemId: number) {
  await fetch(`/api/cart/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'decrement' }),
  });
}
