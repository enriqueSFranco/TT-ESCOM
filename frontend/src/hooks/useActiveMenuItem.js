import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useActiveMenuItem(initialIndex = 0, menuItems) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const location = useLocation()
  
  useEffect(() => {
    let pathname = window.location.pathname.split("/")[1];
    let activeItem = menuItems.findIndex((item) => item.to === `/${pathname}`);
    setActiveIndex(pathname.length === 0 ? 0 : activeItem);
  }, [location])

  return [activeIndex]
}