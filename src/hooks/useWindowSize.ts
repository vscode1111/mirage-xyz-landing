import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowDimenion, setWindowDimenion] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const detectSize = () => {
    setWindowDimenion({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return windowDimenion;
}
