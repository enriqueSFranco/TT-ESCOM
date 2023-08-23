import React from "react";
import { useAuth } from "context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({role = []}) => {
  const { user, token } = useAuth();

  const userHasRequiredRole = user && role.includes(token?.user?.user_type) ? true : false;
  
  if (!userHasRequiredRole) return <Navigate to="/registro-alumno" />
  
  return user ? <Outlet /> : <Navigate to="/registro-alumno" />
};

export default PrivateRoute;
