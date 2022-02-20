import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import AuthContext from '../../context/AuthContext';

let initialForm = {
  username: "",
  password: "",
};

const Form = () => {
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h3>Iniciar Sesion</h3>
      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="username" className="htmlF-label">Username</label>
          <input 
            type="text" 
            id="username"
            name="username"
            className="form-control" 
            value={form.username} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            name="password"
            id="password" 
            className="form-control" 
            value={form.password} 
            onChange={handleChange} 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Iniciar sesion</button>
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
