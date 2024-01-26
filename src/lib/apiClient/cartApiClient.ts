import { CartItem } from '@/types/definition';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Get cart items from the server
 * @returns Cart items from the server
 */
export async function getCartItems(): Promise<CartItem[]> {
  const res = await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'GET',
  });
  const data = await res.json();
  return data.cartItems;
}

/**
 * Add an item to the cart
 * @param productId
 */
export async function addCartItem(productId: number) {
  await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
}

/**
 * Increment the quantity of the item in the cart
 * This will add the item to the cart if it doesn't exist
 * @param productId
 */
export async function incrementCartItem(productId: number) {
  await fetch(`${API_BASE_URL}/api/cart/${productId}`, {
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
 * @param productId
 */
export async function decrementCartItem(productId: number) {
  await fetch(`${API_BASE_URL}/api/cart/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'decrement' }),
  });
}

/**
 * Get the total price of the cart
 */
export async function getTotalPriceInCent(cartItems: CartItem[]): Promise<number> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/cart/total-price`, {
      method: 'POST',
      body: JSON.stringify({ cartItems }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data.totalPrice;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch total price: ${error.message}`);
    }
    throw new Error('Failed to fetch total price');
  }
}
