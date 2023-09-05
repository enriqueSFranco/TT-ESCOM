import { useCallback, useEffect, useState } from 'react'

export function useScroll(initialValueTop = 0, initialIsIntersecting = false) {
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);

  const onScroll = useCallback(() => {
    let top = window.scrollY;
    top >= initialValueTop ? setIsIntersecting(true) : setIsIntersecting(false);
  }, [initialValueTop])

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return isIntersecting
}
