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
  const [theme, updateTheme] = useState<ThemeType>(() => {
    const storedTheme = window.localStorage.getItem('theme')

    if (storedTheme !== null) {
      return JSON.parse(storedTheme)
    }
    return Theme.Light
  })

  function toggle () {
    updateTheme(prevTheme => {
      const newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light
      window.localStorage.setItem('theme', JSON.stringify(newTheme))
      return newTheme
    })
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