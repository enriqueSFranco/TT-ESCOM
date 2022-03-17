import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const AuthContext = createContext(); // creamos el contecto

// Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null) ;
  const [token, setToken] = useState(() => window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null);
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {      
      const response = await fetch('/iniciar-sesion/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          "username": (e.target.username.value).trim(),
          "password": (e.target.password.value).trim()
        })
      });
      if (!response.ok) {
        let error = {
          err: true,
          status: response.status || "00",
          statusText: response.statusText || "opps, ha ocurrido un error"
        };
        throw error;
      }
      const json = await response.json();
      console.log(json)
      const { token, user } = json;
      console.log(user)
      if (response.status === 200 || response.status === 201) {
        setUser(user);
        setToken(token);
        window.localStorage.setItem('token', JSON.stringify(json))
        navigate('/');
      } else {
        console.log(`error: ${response.error}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('token');
    navigate('/');
  }

  const data = {
    user,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
};

export { AuthProvider };
export default AuthContext;
