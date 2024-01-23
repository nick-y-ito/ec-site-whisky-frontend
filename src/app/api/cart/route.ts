import { Cart } from '@/models/Cart';
import { NextResponse } from 'next/server';

/**
 * Get cart items
 * @returns {Promise<{ cartItems: CartItem[] }>}
 */
export async function GET() {
  const cartItems = Cart.items;
  return NextResponse.json({ cartItems });
}
