import { cn } from '@/lib/utils';

interface OverlayProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Overlay = ({ children, className, isOpen, onClose }: OverlayProps) => {
  return (
    <div className={cn(className, isOpen || 'hidden')}>
      <div
        className={cn(
          'fixed inset-0 z-50',
          'bg-black bg-opacity-50',
          'transition-all ease-in-out duration-1000',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      ></div>
      {children}
    </div>
  );
};
