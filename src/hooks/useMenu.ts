import { useContext } from "react"
import MenuContext from "../context/MenuContext"

export const useMenu = () => {
  const ctx = useContext(MenuContext)

  if (ctx === undefined) {
    throw new Error('useMenu has to be used within <MenuContext.Provider>')
  }
  return ctx
}