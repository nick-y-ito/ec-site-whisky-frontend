'use client';

import { CartFooter } from '@/components/cart/CartFooter';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { useAppSelector } from '@/lib/redux/hooks';

interface CartProps {}

export const Cart = ({}: CartProps) => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      <div className="p-3 overflow-y-auto h-screen pb-60">
        <h2 className="text-2xl font-bold mb-3">Shopping Cart</h2>
        <div>
          {cartItems.map((cartItem) => (
            <CartItemRow key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <CartFooter />
    </>
  );
};
