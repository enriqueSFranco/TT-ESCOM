import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Alert from '../Alert/Alert';

let initialForm = {
  username: "",
  email: "",
  password: ""
};

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const { form, handleChange } = useForm(initialForm);
  
  if (form === null) return;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      let res = await fetch("/usuario/usuario/", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        let error = {
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Oppps, ha ocurrido un error"
        }
        throw error;
      }
      let json = await res.json();
      console.log(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3>Iniciar Sesion</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="email" className="htmlF-label">Correo electronico</label>
          <input 
            type="email" 
            id="email"
            name="email"
            className="form-control" 
            value={form.email} 
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
          <button type="submit" className="btn btn-primary">Crear cuenta</button>
        </div>
        {
          loading && <Alert message="usuario creado correctamente" />
        }
      </form>
    </div>
  )
}

export default CreateAccount;