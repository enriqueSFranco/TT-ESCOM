// import { useAuth } from "context/AuthContext"
// import { usePassword } from "../hooks"
import { BaseInput } from "./BaseInput"
import BaseButton from "./BaseButton"
import { Link } from "react-router-dom"
// import { initialFormLoginCandidate } from "types/loginUsers"

// const validateForm = (form) => {
//   let errors = {}
//   let regex = {
//     t100_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
//     password:
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
//   }

//   if (!form.t100_email.trim())
//     errors.t100_email = "El campo 'Email' es requerido."
//   else if (!regex.t100_email.test(form.t100_email.trim()))
//     errors.t100_email = "El campo 'Email' es incorrecto."

//   if (!form.password.trim())
//     errors.password = "El campo 'Contraseña' es requerido."
//   else if (!regex.password.test(form.password.trim()))
//     errors.password = "La Contraseña es incorrecta."

//   return errors
// }

export const FormLoginCandidate = () => {
  // const [showPassword, handleShowPassword] = usePassword()
  // const { loginCandidate } = useAuth()
  // const { form, errors, handleValidate, handleChange } = useForm(
  //   initialFormLoginCandidate,
  //   validateForm
  // )

  function handleLogin () { }

  return (
    <div>
      <h2>Iniciar sesion como candidato</h2>
      <form onSubmit={handleLogin}>
        <div>
          <BaseInput
            placeholder="Correo electronico"
            name="email"
          // value={form.t100_email}
          // onChange={handleChange}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          />
        </div>
        <div>
          <BaseInput
            placeholder="Contraseña"
            name="password"
          // type={showPassword ? "text" : "password"}
          // value={form.password}
          // onClick={handleShowPassword}
          // onChange={handleChange}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          />
        </div>
        <BaseButton>Iniciar sesión</BaseButton>
      </form>
      <footer>
        <span>¿Aun no te has unido con nosotros?</span>
        <Link to="/registro-alumno">Registrate a qu</Link>
      </footer>
    </div>
  )
}
