import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'

const DropMenuCandidate = () => {
  const { logout } = useAuth()
  return (
    <ul>
      <li>
        <Link to='/'>perfil</Link>
      </li>
      <li>
        <Link to='/'>configuracion</Link>
      </li>
      <li>
        <Link to='/' onClick={logout}>cerrar sesion</Link>
      </li>
    </ul>
  )
}

export default DropMenuCandidate