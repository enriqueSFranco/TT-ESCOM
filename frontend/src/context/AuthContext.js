import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext(); // creamos el contecto

// Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => window.sessionStorage.getItem('token') ? jwt_decode(window.sessionStorage.getItem('token')) : null);
  const [token, setToken] = useState(() => window.sessionStorage.getItem('token') ? JSON.parse(window.sessionStorage.getItem('token')) : null);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          "username": (e.target.t100_email.value).trim(),
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
      const data = await response.json();
      console.log(data)

      
      if (response.status === 200 || response.status === 201) {
        setUser(jwt_decode(data?.access));
        setToken(data);
        window.sessionStorage.setItem('token', JSON.stringify(data))
        navigate('/');
      } else {
        console.log(`error: ${response.error}`);
        window.sessionStorage.removeItem('token', JSON.stringify(data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.sessionStorage.removeItem('token');
    navigate('/');
  };

  const data = {
    user,
    token,
    login,
    logout,
  };

  useEffect(() => {
    if (token)
      setUser(jwt_decode(token?.access));
    setLoading(false);
  }, [token, loading]);

  return (
    <AuthContext.Provider value={data}>
      {loading ? null : children }
    </AuthContext.Provider>
  )
};

export { AuthProvider };
export default AuthContext;
