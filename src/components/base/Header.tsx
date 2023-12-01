import Link from 'next/link';
import { CartIcon } from '@/components/CartIcon';

export const Header = () => {
  return (
    <header className="w-full h-14 px-5 bg-stone-800 flex items-center">
      <Link href="/" className="h-full mr-auto flex items-center">
        <div className="text-lg text-gray-200">Whisky Voyage</div>
      </Link>
      <CartIcon />
    </header>
  );
};
