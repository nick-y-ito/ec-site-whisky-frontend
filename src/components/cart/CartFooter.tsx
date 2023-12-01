import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/redux/hooks';

export const CartFooter = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemList = useAppSelector((state) => state.itemList.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const totalPriceInCent = cartItems.reduce((acc, item) => {
    const price = itemList.find((i) => i.id === item.id)?.priceInCent;
    return price ? acc + price * item.quantity : acc;
  }, 0);

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
