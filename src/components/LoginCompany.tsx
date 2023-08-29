import { Link } from "react-router-dom"
import BaseButton from "./BaseButton"
import { BaseInput } from "./BaseInput"
// import { usePassword, useForm } from "hooks"
// import { initialFormLoginCompany } from "types/loginUsers"
// import { useAuth } from "context/AuthContext"

// const validateForm = (form) => {
//   let errors = {}
//   let regex = {
//     t301_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
//     password:
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
//   }

//   if (!form.t301_email.trim())
//     errors.t301_email = "El campo 'Email' es requerido."
//   else if (!regex.t301_email.test(form.t301_email.trim()))
//     errors.t301_email = "El campo 'Email' es incorrecto."

//   if (!form.password.trim())
//     errors.password = "El campo 'Contraseña' es requerido."
//   else if (!regex.password.test(form.password.trim()))
//     errors.password = "La Contraseña es incorrecta."

//   return errors
// }

export const LoginCompany = () => {
  // const [showPassword, handleShowPassword] = usePassword()
  // const { form, errors, handleValidate, handleChange } = useForm(
  //   initialFormLoginCompany,
  //   validateForm
  // )
  // const { loginRecruiter } = useAuth()
  function handleLogin () {

  }

  return (
    <div>
      <h2>Iniciar sesión como reclutador</h2>
      <form onSubmit={handleLogin}>
        <div style={{ height: '90px' }}>
          <BaseInput
            placeholder="Correo electronico"
            name="email"
          // value={form.t301_email}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          // onChange={handleChange}
          />
        </div>
        <div>
          <BaseInput
            placeholder="Contraseña"
            name="password"
          // type={showPassword ? "text" : "password"}
          // value={form.password}
          // onChange={handleChange}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          />
        </div>
        <BaseButton>Iniciar sesión</BaseButton>
      </form>
      <footer>
        <span>¿Aun no te has unido con nosotros?</span>
        <Link to="/registro-reclutador">Registrate a qui.</Link>
      </footer>
    </div>
  )
}
