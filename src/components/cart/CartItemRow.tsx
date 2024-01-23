import Image from 'next/image';
import { whiskies, Whisky } from '@/data/whisky';
import { CartItem } from '@/types/definition';
import { QuantityButtons } from '@/components/cart/QuantityButtons';

interface CartItemRowProps {
  cartItem: CartItem;
}

export const CartItemRow = ({ cartItem }: CartItemRowProps) => {
  const item: Whisky | undefined = whiskies.find((w) => w.id === cartItem.id);

  return (
    item && (
      <div className="w-full flex py-2 border-b border-gray-200">
        <div className="w-1/5 aspect-square py-1 bg-radial-gradient rounded-lg">
          <div className="w-full h-full relative">
            <Image
              className="object-contain"
              src={`/images/whisky${item.imgPath}`}
              alt={item.name}
              fill
              sizes="100px"
            />
          </div>
        </div>
        <div className="w-4/5 pl-3 flex flex-col">
          <div className="h-12 mb-auto text-sm">{item.name}</div>
          <div className="flex items-center justify-between">
            <QuantityButtons itemId={item.id} quantity={cartItem.quantity} />
            <div className="font-bold">$ {item.priceInCent / 100}</div>
          </div>
        </div>
      </div>
    )
  );
};
