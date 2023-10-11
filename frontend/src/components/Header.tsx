import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Theme } from '../shared'
import { useThemeContext } from '../hooks'
import { IconClose, IconMenu, IconMoon, IconSun } from './icon'
import { Dropdown } from './dropdown'
import { Avatar } from './avatar'

export const Header: React.FC = () => {
  const { theme, toggle } = useThemeContext()

  const [open, updateOpen] = useState(false)

  function toggleMenu () {
    updateOpen(prevState => !prevState)
  }

  return (
    <header className='w-full sticky flex justify-between gap-4 lg:h-12'>
      <h1 className='font-semibold'>Trabaja<span className='text-blue-500'>YA</span></h1>
      <nav className='w-28 flex items-center gap-8'>
        <button onClick={toggle} className={`rounded-full w-8 h-8 grid place-items-center ${theme.toString() === Theme.LIGHT ? 'bg-slate-100' : 'bg-slate-800'}`}>{theme.toString() === Theme.LIGHT ? <IconSun /> : <IconMoon />}</button>
        <Dropdown
          open={open}
          trigger={<button onClick={toggleMenu}>{open ? <IconClose /> : <IconMenu />}</button>}
          menu={[
            <Link to='/'>Inicio</Link>,
            <Link to='/reclutador/iniciar-sesion'>¿Eres empresa?</Link>,
            <Link to='/candidato/iniciar-sesion'>¿Eres candidato?</Link>,
            <Link to='/candidato/perfil' className='flex items-center gap-2'><Avatar photo={new URL('https://unavatar.io/github/enriqueSFranco')} size={30} /> Perfil</Link>
          ]}
        />
      </nav>
    </header>
  )
}
