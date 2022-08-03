import { useEffect, useState } from 'react'

export const useDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => clearTimeout(handler);
  }, [val]);

  return debounceVal;
}