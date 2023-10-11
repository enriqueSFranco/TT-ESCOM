import { useThemeContext } from '../hooks'
import { Header } from '../components/header'
import { Theme } from '../shared'

interface LayoutAppProps {
  children: React.ReactNode
}

export const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  const { theme } = useThemeContext()
  const themeClass = theme.toString() === Theme.LIGHT ? 'bg-white text-slate-950' : 'bg-slate-950 text-slate-100 transition-colors duration-150 ease-in-out'

  return (
    <div className={`w-full h-full flex flex-col items-center justify-between gap-4 p-4 ${themeClass}`}>
      <Header />
      {children}
    </div>
  )
}
