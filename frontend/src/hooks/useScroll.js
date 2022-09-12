import { useEffect, useState } from 'react'

export function useScroll(initialValueTop = 0, initialIsIntersecting = false) {
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);

  const onScroll = () => {
    let top = window.scrollY;
    top >= initialValueTop ? setIsIntersecting(true) : setIsIntersecting(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isIntersecting
}