import { useEffect, useRef, useState } from 'react'

export function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef(null)

  useEffect(() => {
    let observer;
    let element = externalRef ? externalRef.current : fromRef.current

    let options = {
      rootMargin: distance,
      threshold: 1.0
    }

    function callback([entry]) {
      if (entry.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver : import('intersection-observer') 
    )
    .then(() => {
      observer = new IntersectionObserver(callback, options)
      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}