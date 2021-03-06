import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast"
import { loginService } from "services/auth/index";

const AuthContext = createContext(); // creamos el contexto

// Provider
const AuthProvider = ({ children }) => {
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
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  let navigate = useNavigate();

  /*const login = async (e) => {
    e.preventDefault();
    loginService({
      "username": e.target.t100_email.value.trim(),
      "password": e.target.password.value.trim(),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setUser(jwt_decode(response?.data?.access));
          setToken(response?.data);
          window.sessionStorage.setItem("token", JSON.stringify(response?.data));
          navigate("/");
        } else {
          setErrors(response)
          toast.error("correo o password incorrectos.");
          window.sessionStorage.removeItem('token', JSON.stringify(response?.data))
        }
      })
      .catch((error) => {
        return error;
      });
  };*/
  
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
          navigate("/");
        } else {
          setErrors(response)
          toast.error("correo o password incorrectos.");
          window.sessionStorage.removeItem('token', JSON.stringify(response?.data))
        }
      })
      .catch((error) => {
        return error;
      });
  };

  const login = async (e) => {
    e.preventDefault();
    loginService({
      "username": e.target.t100_email.value.trim(),
      "password": e.target.password.value.trim(),
    })
      .then((response) => {
        // console.log(response)
        if (response.status === 200 || response.status === 201) {
          setUser(jwt_decode(response?.data?.access));
          setToken(response?.data);
          window.sessionStorage.setItem("token", JSON.stringify(response?.data));
          //console.log(response.data['user']);
          //console.log(response.data['user']['first_name']);                   
          let val = response.data['user']['first_name'];
          console.log(val);
          console.log(Boolean(val));
          
          if (Boolean(val))
            navigate("/perfil");
          else
            navigate("/actualiza-alumno");
        } else {
          console.log(`error: ${response.error}`);
          window.sessionStorage.removeItem('token', JSON.stringify(response?.data))
        }
      })
      .catch((error) => {
        if (error.response) console.log(error.response.data);
      });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.sessionStorage.removeItem("token");
    navigate("/");
  };

  const data = {
    user,
    token,
    errors,
    loading,
    login,
    logout,
    loginRecruiter
  };

  useEffect(() => {
    if (token) setUser(jwt_decode(token?.access));
    setLoading(false);
  }, [token, loading]);

  return (
    <AuthContext.Provider value={data}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
