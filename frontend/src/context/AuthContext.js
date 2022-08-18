import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { loginService } from "services/auth/index";

// creamos el contexto
const AuthContext = createContext({
  user: null,
  token: null,
  loginRecruiter: (e) => {},
  loginCandidate: (e) => {},
  logout: () => {},
});

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    window.sessionStorage.getItem("token")
      ? jwt_decode(window.sessionStorage.getItem("token"))
      : null
  );
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
      ? JSON.parse(window.sessionStorage.getItem("token"))
      : null
  );

  let navigate = useNavigate();

  const loginRecruiter = async (e) => {
    e.preventDefault();
    loginService({
      "username": e.target.t301_email.value.trim(),
      "password": e.target.password.value.trim(),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setUser(jwt_decode(response?.data?.access));
          setToken(response?.data);
          window.sessionStorage.setItem("token", JSON.stringify(response?.data));
          navigate("mis-vacantes");
        } else {
          window.sessionStorage.removeItem('token', JSON.stringify(response?.data))
        }
      })
      .catch((error) => {
        return error;
      });
  };

  const loginCandidate = async (e) => {
    e.preventDefault()
    loginService({
      "username": e.target.t100_email.value.trim(),
      "password": e.target.password.value.trim(),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setUser(response?.data?.access);
          setToken(response?.data);
          window.sessionStorage.setItem("token", JSON.stringify(response?.data));                
          let val = response.data['user']['first_name'];
          
          if (Boolean(val)){
            new Promise(resolve => {
              setTimeout(() => {
                resolve(navigate("/"))
              }, 3000);
            });
          }
          else navigate("/");
        } else {
          window.sessionStorage.removeItem('token', JSON.stringify(response?.data))
        }
      })
      .catch((error) => error)
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.sessionStorage.removeItem("token");
    // toast.success("Sesion finalizada correctamente.");
    navigate("/");
  };

  
  useEffect(() => {
    if (token) setUser(jwt_decode(token?.access));
  }, [token]);

  const data = {
    user,
    token,
    loginCandidate,
    logout,
    loginRecruiter
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
