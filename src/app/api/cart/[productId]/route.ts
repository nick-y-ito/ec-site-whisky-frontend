import { Cart } from '@/models/Cart';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Increment or decrement the quantity of the item in the cart.
 * @param req
 * @param params.productId - Item ID from the URL query parameter
 * @returns NextResponse with status code
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { productId: string } },
): Promise<NextResponse> {
  try {
    const productId = Number(params.productId);
    const body = await req.json();
    const { action } = body;

    if (action === 'increment') {
      Cart.increment(productId);
    } else if (action === 'decrement') {
      Cart.decrement(productId);
    }
    return new NextResponse(null, { status: 204 });
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}
