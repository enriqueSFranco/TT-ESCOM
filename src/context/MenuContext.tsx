import { createContext, useState } from "react"
import { StateMenu } from "../shared/enum.d"

interface MenuContext {
  isOpenMenu: StateMenu.CLOSE | StateMenu.OPEN
  handleToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface MenuProviderProps {
  children: React.ReactNode
}

const MenuContext = createContext<MenuContext>({
  isOpenMenu: StateMenu.CLOSE,
  handleToggle: () => { }
})

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<StateMenu>(StateMenu.CLOSE)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setIsOpenMenu(
      prevMenuState => prevMenuState === StateMenu.CLOSE ? StateMenu.OPEN : StateMenu.CLOSE
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