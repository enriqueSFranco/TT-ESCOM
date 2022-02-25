import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ role }) => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/iniciar-sesion" />
};

export default PrivateRoute;
