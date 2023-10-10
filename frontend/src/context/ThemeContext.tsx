import { createContext, useState } from 'react'

enum Theme {
  Light = 'light',
  Dark = 'dark'
}

type ThemeType = Theme.Light | Theme.Dark

type ThemeProviderProps = {
  children: React.ReactNode
}

export type ThemeContextType = {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider ({ children }: ThemeProviderProps) {
  const [theme, updateTheme] = useState<ThemeType>(Theme.Light)

  function toggle () {
    updateTheme(prevTheme => prevTheme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  const data: ThemeContextType = {
    theme,
    toggle
  }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}