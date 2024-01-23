import { Cart } from '@/models/Cart';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Increment or decrement the quantity of the item in the cart.
 * @param {NextRequest} req
 * @param {{ params: { itemId: string } }} { params }
 * @returns {Promise<NextResponse>}
 */
export async function PATCH(req: NextRequest, { params }: { params: { itemId: string } }) {
  try {
    const itemId = Number(params.itemId);
    const body = await req.json();
    const { action } = body;

    if (action === 'increment') {
      Cart.increment(itemId);
    } else if (action === 'decrement') {
      Cart.decrement(itemId);
    }
    return new NextResponse(null, { status: 204 });
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}
