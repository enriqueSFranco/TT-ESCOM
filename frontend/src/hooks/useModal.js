import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen(!initialValue);

  return [isOpen, toggle];
};