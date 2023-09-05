import { useEffect, useState } from "react";

export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';

const getDevice = width => {
  if (width < 768) return MOBILE;
  else if (width < 992) return TABLET;
  else return DESKTOP;
}

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    device: getDevice(window.innerWidth)
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth)
      });
    }
    window.addEventListener('resize', handleResize, false);
    
    return () => window.removeEventListener('resize', handleResize, false);
  }, []);

  return [viewport];
}