import { useEffect, useState } from "react";

export const useSticky = (defaultValue = false) => {
  const [sticky, setSticky] = useState(defaultValue);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    scrolled >= 392 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [sticky]);

  return [sticky];
}