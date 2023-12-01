'use client';

import { Overlay } from '@/components/ui/overlay';
import { cn } from '@/lib/utils';
import { RxCross1 } from 'react-icons/rx';

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div
        className={cn(
          'w-full sm:max-w-sm h-4/5 sm:h-screen bg-white',
          'fixed z-50 bottom-0 right-0',
          'transition-transform ease-in-out duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button className="absolute top-0 right-0 p-3 text-xl" onClick={onClose}>
          <RxCross1 />
        </button>
        {children}
      </div>
    </Overlay>
  );
};
