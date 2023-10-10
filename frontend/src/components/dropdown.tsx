import { useThemeContext } from '../hooks/useThemeContext'

type DropdownProps<T> = {
  open: boolean
  trigger: React.ReactNode
  menu: T[]
}

export const Dropdown = <T extends React.ReactNode> ({ open, trigger, menu }: DropdownProps<T>) => {
  const { theme } = useThemeContext()

  const currentTheme = theme ? 'light' : 'dark'

  console.log(currentTheme)

  return (
    <div className='relative'>
      {trigger}
      {
        open
          ? <ul className='absolute right-7 bg-slate-500 z-20'>{menu.map((it) => <li key={`item-id-${crypto.randomUUID()}`}>{it}</li>)}</ul>
          : null
      }
    </div>
  )
}
