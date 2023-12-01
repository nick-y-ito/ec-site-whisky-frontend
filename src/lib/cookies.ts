import { CartItem } from '@/lib/redux/slices/cartSlice';
import Cookies from 'js-cookie';

export const getCartFromCookie = (): CartItem[] => {
  const cart = Cookies.get('cart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCartToCookie = (cart: CartItem[]) => {
  Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
};
