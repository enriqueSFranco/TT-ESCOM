import { useState } from "react";

export const useScroll = ({ threshold = 450, isWindow = false, smoot = true} = {}) => {
  const [isAtButton, setIsAtButton] = useState(false);
};