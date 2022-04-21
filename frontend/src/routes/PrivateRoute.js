import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { ROLE } from "./roles";

const PrivateRoute = ({roles = {}}) => {
  const { user } = useContext(AuthContext);
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;
  
  if (!userHasRequiredRole) return <h1>Acceso denegado.</h1>
  
  return user ? <Outlet /> : <Navigate to="/registro-alumno" />
};

export default PrivateRoute;
