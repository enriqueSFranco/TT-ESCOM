import { useState } from "react";

export const useShowPassword = (initialValue) => {
  const [showPassword, setShowPassword] = useState(initialValue);

  const toggle = () => setShowPassword(!showPassword);

  return {
    showPassword,
    toggle
  }
};