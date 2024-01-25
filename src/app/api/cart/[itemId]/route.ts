import { Cart } from '@/models/Cart';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Increment or decrement the quantity of the item in the cart.
 * @param req
 * @param params.itemId - Item ID from the URL query parameter
 * @returns NextResponse with status code
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { itemId: string } },
): Promise<NextResponse> {
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
