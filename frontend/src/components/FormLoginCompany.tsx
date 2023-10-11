import { Link } from "react-router-dom"
import BaseButton from "./base-button"
import { BaseInput } from "./base-input"
import { IconEmail, IconEyeOn } from "./icon"
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

const FormLoginCompany = () => {
  // const [showPassword, handleShowPassword] = usePassword()
  // const { form, errors, handleValidate, handleChange } = useForm(
  //   initialFormLoginCompany,
  //   validateForm
  // )
  // const { loginRecruiter } = useAuth()
  function handleLogin () {

  }

  return (
    <div className="w-full h-full flex flex-col p-4">
      <h2 className="text-center font-bold">Iniciar sesión como reclutador</h2>
      <form onSubmit={handleLogin} className="w-full h-2/3 flex flex-col items-center justify-center gap-4">
        <div className='w-full flex items-center bg-white/10 rounded-sm px-2'>
          <IconEmail />
          <BaseInput
            placeholder="Correo electronico"
            name="email"
          // value={form.t301_email}
          // onBlur={handleValidate}
          // onKey={handleValidate}
          // onChange={handleChange}
          />
        </div>
        <div className='w-full flex items-center bg-white/10 rounded-sm px-2'>
          <IconEyeOn />
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
      <footer className="w-full flex flex-col flex-1 items-center justify-end">
        <span>¿Aun no te has unido con nosotros?</span>
        <Link to="/reclutador/crear-cuenta" className="text-blue-500">Registrate a qui.</Link>
      </footer>
    </div>
  )
}

export default FormLoginCompany

