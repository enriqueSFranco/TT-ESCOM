import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(); // creamos el contecto

// Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
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
      if (response.status === 200 || response.status === 201) {
        setUser(user);
        setToken(token)
        console.log(user);
        navigate('/');
      } else {
        console.log(`error: ${response.error}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = (e) => {
    setUser(null);
    navigate('/');
  }

  const data = {
    user,
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
