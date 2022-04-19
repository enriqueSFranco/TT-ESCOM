import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(); // creamos el contecto

// Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => window.sessionStorage.getItem('token')) ;
  const [token, setToken] = useState(() => window.sessionStorage.getItem('token'));
  let navigate = useNavigate();

  const login = useCallback(async (e) => {
    e.preventDefault();

    try {      
      const response = await fetch('/token/student/', {
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
      const json = await response.json();
      console.log(json)

      const { token, user } = json;
      console.log(user);
      let objUser = {username: user?.username, type: user?.user_type};
      console.log(objUser);
      console.log(response)
      if (response.status === 200 || response.status === 201) {
        setUser(objUser);
        setToken(token);
        window.sessionStorage.setItem('token', JSON.stringify(json))
        navigate('/');
      } else {
        console.log(`error: ${response.error}`);
        window.sessionStorage.removeItem('token', JSON.stringify(json))
      }
    } catch (error) {
      console.log(error);
    }
  }, [setToken]);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    window.sessionStorage.removeItem('token');
    navigate('/');
  }, [setToken]);

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
