import React, { useState } from "react";

export function usePassword(initialValue = false) {
  const [showPassword, setShowPassword] = useState(initialValue);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return { showPassword, handleShowPassword };
}