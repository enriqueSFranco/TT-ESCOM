// import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useShowPassword } from '../../hooks/usePassword';
import { $ajax } from '../../utils/$ajax';
import Input from '../Input/Input';
import * as FaIcon from 'react-icons/fa';
import * as MdIcon from 'react-icons/md';

let initialForm = {
  username: "",
  email: "",
  password: ""
};

const CreateAccount = () => {
  // const [typeUser, setTypeUser] = useState();
	const { showPassword, toggle } = useShowPassword(false);
  const { form, handleChange } = useForm(initialForm);
  
  if (form === null) return;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: form
    };

    $ajax().POST('/usuario/usuario/', options)
      .then((response) => {
        if (!response.err) {
          console.log(response);
          
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container w-90">
      <h3>Crear Cuenta</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 inner">
          <i className='right-icon'>
            <FaIcon.FaUser />
          </i>
          <Input 
            type="text" 
            id="username"
            name="username"
            placeholder="Escribre tu nombre de usuario"
            className="input" 
            value={form.username} 
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 inner">
          <i className='right-icon'>
            <MdIcon.MdEmail />
          </i>
          <Input 
            type="email" 
            id="email"
            name="email"
            placeholder="Escribre tu correo electrónico"
            className="input" 
            value={form.email} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 inner">
          <i className='right-icon eye-password' onClick={toggle}>
            {showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
          </i>
          <Input 
            type={showPassword ? "text" : "password"} 
            id="password"
            name="password"
            placeholder="Escribre tu contraseña"
            className="input" 
            value={form.password} 
            onChange={handleChange} 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Crear cuenta</button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount;