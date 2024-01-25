import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/redux/hooks';
import { Product } from '@/data/whisky';
import { useEffect, useState } from 'react';
import { getProductList } from '@/lib/apiClient/productApiClient';

export const CartFooter = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const totalPriceInCent = cartItems.reduce((acc, item) => {
    const price = products.find((i) => i.id === item.id)?.priceInCent;
    return price ? acc + price * item.quantity : acc;
  }, 0);

  useEffect(() => {
    (async () => {
      const productList = await getProductList({});
      setProducts(productList);
    })();
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 w-full h-[150px] p-5 rounded-3xl bg-white',
        'shadow-[0_-15px_50px_-12px_rgb(0,0,0,0.25)]',
      )}
    >
      <div className="mb-3 flex justify-between text-xl font-bold">
        <div className="flex items-center gap-1">
          Total <span className="font-normal text-lg">({totalQuantity} items)</span>
        </div>
        <div className="">$ {totalPriceInCent / 100}</div>
      </div>
      <button className="py-4 w-full bg-black text-white rounded-2xl text-xl font-bold">
        Checkout
      </button>
    </div>
  );
};
