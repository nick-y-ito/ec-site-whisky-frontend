import { useEffect } from 'react';

export const useDisableBodyScroll = (active: boolean): void => {
  useEffect(() => {
    const style = document.body.style;
    if (active) {
      style.overflow = 'hidden';
    } else {
      style.overflow = '';
    }
    return () => {
      style.overflow = '';
    };
  }, [active]);
};
