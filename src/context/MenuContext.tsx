import { createContext, useState } from "react"
import { STATE_MENU } from "../shared/enum.d"

interface MenuContext {
  isOpenMenu: STATE_MENU.CLOSE | STATE_MENU.OPEN
  handleToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface MenuProviderProps {
  children: React.ReactNode
}

const MenuContext = createContext<MenuContext>({
  isOpenMenu: STATE_MENU.CLOSE,
  handleToggle: () => { }
})

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<STATE_MENU>(STATE_MENU.CLOSE)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setIsOpenMenu(
      prevMenuState => prevMenuState === STATE_MENU.CLOSE ? STATE_MENU.OPEN : STATE_MENU.CLOSE
    )
  }

  const data = { isOpenMenu, handleToggle }

  return (
    <MenuContext.Provider value={data}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext