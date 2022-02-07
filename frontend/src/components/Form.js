import React, { useState } from 'react';

let initialForm = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const Form = () => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h3>Crea tu cuenta</h3>
      <p>¿Eres reclutador? <a href="/#">Crea tu cuenta aqui</a></p>
      <form>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
        />

        <label htmlFor="lastName">Apellidos</label>
        <input 
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo Electronico</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
        />

        <label htmlFor="password">Contraseña</label>
        <ul>
          <li>Entre 6 y 12 caracteres</li>
          <li>Al menos una letra</li>
          <li>Al menos un numero</li>
        </ul>
        <input 
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
