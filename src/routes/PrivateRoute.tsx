// import { useAuth } from "context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import { TypeUser } from "../shared"

interface PrivateRouteProps {
  typeUser: TypeUser
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ typeUser }) => {
  let auth = { token: true }

  return auth.token ? <Outlet /> : <Navigate to={typeUser === TypeUser.CANDIDATE ? "/candidato/iniciar-sesion" : "/reclutador/iniciar-sesion"} />
}