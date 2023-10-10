import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function useThemeContext () {
  const ctx = useContext(ThemeContext)

  if (ctx === null) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return ctx
}