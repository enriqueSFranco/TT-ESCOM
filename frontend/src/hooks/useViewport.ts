import { useEffect, useState } from 'react'
import { DEVICE } from '../shared'

const getDevice = (width: number): DEVICE => {
  if (width < 768) return DEVICE.MOBILE
  else if (width < 992) return DEVICE.TABLET
  else return DEVICE.DESKTOP
}

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    device: getDevice(window.innerWidth)
  })

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth)
      })
    }
    window.addEventListener('resize', handleResize, false)

    return () => window.removeEventListener('resize', handleResize, false)
  }, [])

  return viewport
}