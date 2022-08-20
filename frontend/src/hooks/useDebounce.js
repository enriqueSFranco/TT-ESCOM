import { useEffect, useState } from 'react'

export function useDebounce(val, wait) {
  const [debounce, setDebounce] = useState(val);

  useEffect(() => {
    const callback = () => setDebounce(val)
    
    let handler = setInterval(callback, wait)

    return () => clearInterval(handler)

  }, [val])

  return debounce
}