import { useDisableBodyScroll } from '@/lib/hooks/useDisableBodyScroll';
import { cn } from '@/lib/utils';

interface OverlayProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Overlay = ({ children, className, isOpen, onClose }: OverlayProps) => {
  useDisableBodyScroll(isOpen);

  return (
    <div className={cn(className)}>
      <div
        className={cn(
          'fixed inset-0 z-10',
          'bg-black bg-opacity-50',
          'transition-opacity ease-in-out duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      ></div>
      {children}
    </div>
  );
};
