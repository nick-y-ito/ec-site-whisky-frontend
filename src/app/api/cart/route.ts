import { Cart } from '@/models/Cart';
import { NextResponse } from 'next/server';

/**
 * Get cart items
 * @returns NextResponse with cart items
 */
export async function GET(): Promise<NextResponse> {
  const cartItems = Cart.items;
  return NextResponse.json({ cartItems });
}
