import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({role = []}) => {
  const auth = useAuth();
  const userHasRequiredRole = auth.user && role.includes(auth.token) ? true : false;

  if (!userHasRequiredRole) return <Navigate to='/login-alumno' />

  return auth.user ? <Outlet /> : <Navigate to='/login-alumno' />
}

export default PrivateRoute