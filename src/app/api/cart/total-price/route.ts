import { Cart } from '@/models/Cart';
import { CartItem } from '@/types/definition';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Get total price of the cart
 * @returns NextResponse with total price
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { cartItems } = body;
  const totalPrice = Cart.totalPriceInCent(cartItems);
  return NextResponse.json({ totalPrice });
}
