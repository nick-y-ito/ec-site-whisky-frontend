import { cn } from '@/lib/utils';

interface OverlayProps {
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const Overlay = ({ children, className, onClose }: OverlayProps) => {
  return (
    <div className={cn('fixed inset-0 bg-black bg-opacity-50 z-50', className)} onClick={onClose}>
      <div
        className="absolute bg-white p-4 rounded-lg shadow-xl h-auto max-w-sm w-full"
        // onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};
