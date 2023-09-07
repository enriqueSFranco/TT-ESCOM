import { useEffect, useState } from "react"
import { Device } from "../shared"

const getDevice = (width: number): Device => {
  if (width < 768) return Device.Mobile
  else if (width < 992) return Device.Tablet
  else return Device.Desktop
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