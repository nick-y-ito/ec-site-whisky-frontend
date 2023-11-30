'use client';

import { CartItemRow } from '@/components/cart/CartItemRow';
import { useAppSelector } from '@/lib/redux/hooks';

const ShoppingCart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <table className="p-10 border border-black">
      {cartItems.map((cartItem) => (
        <CartItemRow key={cartItem.id} cartItem={cartItem} />
      ))}
    </table>
  );
};

export default ShoppingCart;
