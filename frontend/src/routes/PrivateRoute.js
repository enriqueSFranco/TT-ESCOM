import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "context/AuthContext";

const PrivateRoute = ({role = []}) => {
  const { user, token } = useContext(AuthContext);

  const userHasRequiredRole = user && role.includes(token?.user?.user_type) ? true : false;
  
  if (!userHasRequiredRole) return <Navigate to="/registro-alumno" />
  
  return user ? <Outlet /> : <Navigate to="/registro-alumno" />
};

export default PrivateRoute;
