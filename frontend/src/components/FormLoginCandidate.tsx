// import { useAuth } from "context/AuthContext"
// import { usePassword } from "../hooks"
import { BaseInput } from "./base-input"
import BaseButton from "./base-button"
import { Link } from "react-router-dom"
import { IconEmail, IconEyeOn } from "./icon"
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

const FormLoginCandidate = () => {
  // const [showPassword, handleShowPassword] = usePassword()
  // const { loginCandidate } = useAuth()
  // const { form, errors, handleValidate, handleChange } = useForm(
  //   initialFormLoginCandidate,
  //   validateForm
  // )

  function handleLogin () { }

  return (
    <div className="w-full h-full flex flex-col p-4">
      <h2 className="text-center font-bold">Iniciar sesion como candidato</h2>
      <form onSubmit={handleLogin} className="w-full h-2/3 flex flex-col items-center justify-center gap-4">
        <div className='w-full flex items-center bg-white/10 rounded-sm px-2'>
          <IconEmail />
          <BaseInput
            placeholder="Correo electronico"
            name="email"
          // value={form.t100_email}
          // onChange={handleChange}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          />
        </div>
        <div className='w-full flex items-center bg-white/10 rounded-sm px-2'>
          <IconEyeOn />
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
        <BaseButton><span className="capitalize">iniciar sesión</span></BaseButton>
      </form>
      <footer className="w-full flex flex-col flex-1 items-center justify-end">
        <span>¿Aun no te has unido con nosotros?</span>
        <Link to="/candidato/crear-cuenta" className="text-blue-500">Registrate a qui</Link>
      </footer>
    </div>
  )
}

export default FormLoginCandidate
