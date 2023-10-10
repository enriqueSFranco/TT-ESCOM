import { Link } from 'react-router-dom'
import { FormSearchJob } from './form-search'
import { Dropdown } from './dropdown'
import { Avatar } from './avatar'
import { useState } from 'react'

export const Header: React.FC = () => {
  const [open, updateOpen] = useState(false)

  function toggle () {
    updateOpen(prevState => !prevState)
  }

  return (
    <header className='w-full flex flex-col items-center justify-center gap-4 lg:h-20'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='font-semibold'>Trabaja<span className='text-blue-500'>YA</span></h1>
        <Dropdown
          open={open}
          trigger={<button onClick={toggle}>{open ? <span>open</span> : <span>close</span>}</button>}
          menu={[
            <Link to='/'>Inicio</Link>,
            <Link to='/reclutador/iniciar-sesion'>¿Eres empresa?</Link>,
            <Link to='/candidato/iniciar-sesion'>¿Eres candidato?</Link>,
            <Link to='/candidato/perfil' className='flex items-center gap-2'><Avatar photo={new URL('https://unavatar.io/github/enriqueSFranco')} size={30} /> Perfil</Link>
          ]}
        />
      </div>
      <FormSearchJob />
    </header>
  )
}
