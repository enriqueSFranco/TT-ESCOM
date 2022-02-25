import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useShowPassword } from '../../hooks/usePassword';
import Input from '../Input/Input';
import AuthContext from '../../context/AuthContext';
import * as FaIcon from 'react-icons/fa';
import './Form.css';

let initialForm = {
  username: "",
  password: "",
};

const Form = () => {
  const { showPassword, toggle } = useShowPassword(false);
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <div className="container w-90">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={login}>
        {/* input para el username */}
        <div className="mb-3 inner">
          <i className='right-icon'>
            <FaIcon.FaUser />
          </i>
          <Input 
            type="text"
            id="username"
            name="username"
            placeholder='Escribre tu nombre de usuario'
            className="input ti-16"
            value={form.username} 
            onChange={handleChange}
          />
        </div>
        {/* input para el password */}
        <div className="mb-3 inner">
          <i className='right-icon eye-password' onClick={toggle}>
            {showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
          </i>
          <Input 
            type={showPassword ? "text" : "password"} 
            name="password"
            id="password" 
            placeholder='Escribre tu constraseña'
            className="input ti-16" 
            value={form.password} 
            onChange={handleChange} 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </div>
        <div className="my-3">
          <span>No tines cuenta? <Link to="/nueva-cuenta">Registrate</Link></span>
          <br />
          <span><a href="/#">Recuperar contraseña</a></span>
        </div>
      </form>
    </div>
  );
};

export default Form;
