import React from 'react'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'
// import { HiOutlineUser } from 'react-icons/hi'

const DropMenuCandidate = () => {
  const { logout } = useAuth()
  return (
    <>
      <li>
        {/* <HiOutlineUser /> */}
        <Link to='/perfil'>perfil</Link>
      </li>
      <li>
        <Link to='/'>configuracion</Link>
      </li>
      <li>
        <Link to='/' onClick={logout}>cerrar sesion</Link>
      </li>
    </>
  )
}

export default DropMenuCandidate