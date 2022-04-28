import { useEffect } from 'react';

function scrollListener(listener: () => void): void {
  useEffect(() => {
    listener();
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });
}

export default scrollListener;
