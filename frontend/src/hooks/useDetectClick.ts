import { useState, useEffect } from "react"
import { STATE_MENU } from "../shared/enum"

interface useDetectClickProps {
  element: React.RefObject<HTMLElement>
  initialState: STATE_MENU
}

export const useDetectClick = ({ element, initialState = STATE_MENU.CLOSE }: useDetectClickProps) => {
  const [isActive, setIsActive] = useState<STATE_MENU>(initialState)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (element.current !== null && !element.current.contains(e.target as HTMLElement))
        setIsActive(prevStateMenu => prevStateMenu === STATE_MENU.CLOSE ? STATE_MENU.OPEN : STATE_MENU.CLOSE)
    }

    if (isActive) window.addEventListener('click', handleClickOutside)

    return () => window.removeEventListener('click', handleClickOutside)

  }, [isActive, element])

  return { isActive }
}
