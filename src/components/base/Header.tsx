import Link from 'next/link';
import { CartIcon } from '@/components/CartIcon';

export const Header = () => {
  return (
    <header className="w-full h-14 px-5 bg-stone-800 text-gray-100 flex items-center">
      <Link href="/" className='h-full mr-auto flex items-center'>
        <h1 className="text-lg text-gray-200">Whisky Voyage</h1>
      </Link>
      <CartIcon />
    </header>
  );
};
