import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "context/AuthContext";
// import Unauthorized from "pages/404/Unauthorized";
// import { ROLE } from "./roles";

const PrivateRoute = ({role}) => {
  console.log(role)
  const { user } = useContext(AuthContext);
  const userHasRequiredRole = user && role.includes(user?.user_type) ? true : false;
  
  if (!userHasRequiredRole) return <Navigate to="/registro-alumno" />
  
  return user ? <Outlet /> : <Navigate to="/registro-alumno" />
};

export default PrivateRoute;
