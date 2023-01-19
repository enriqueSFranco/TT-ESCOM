import React from 'react'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi'
import { FaBell } from "react-icons/fa";
import { BiLogIn } from 'react-icons/bi'

const DropMenuCandidate = () => {
  const { logout } = useAuth()
  return (
    <>
      <li>
        <Link to='/perfil'><HiOutlineUser /> Ver Perfil</Link>
      </li>
      <li>
        <Link to='/'><FaBell />Notificaciones</Link>
      </li>
      <li>
        <Link to='/' onClick={logout}><BiLogIn />Cerrar sesion</Link>
      </li>
    </>
  )
}

export default DropMenuCandidate