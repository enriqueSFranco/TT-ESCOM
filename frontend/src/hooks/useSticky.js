import { useEffect, useState, useCallback } from "react";

export const useSticky = (distanceFromTop, elementRef) => {
  const [sticky, setSticky] = useState(null);

  let onScroll = useCallback(() => {
    let box = elementRef.current.getBoundingClientRect();
    console.log(box)
    setSticky(box.top);
  }, [elementRef]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return Math.trunc(sticky) === distanceFromTop;
};
