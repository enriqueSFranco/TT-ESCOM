import { BaseInput } from './BaseInput'

export const FormRecruiterInfo: React.FC = ({ }) => {

  function handleSubmit () { }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <BaseInput
            type="text"
            name="t301_name"
            placeholder="Nombre(s)"
          // value={form.t301_name}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          // onChange={handleChange}
          />

        </div>
        <div className="">
          <BaseInput
            name="t301_last_name"
            placeholder="Apellidos"
          // value={form.t301_last_name}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          // onChange={handleChange}
          />

        </div>

        <div className="">
          <BaseInput
            name="t301_email"
            placeholder="Correo electronico"
          // value={form.t301_email}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          // onChange={handleChange}
          />
        </div>
        <div className="">
          <BaseInput
            name="t301_phonenumber"
            placeholder="Telefono"
          // value={form.t301_phonenumber}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          // onChange={handleChange}
          />
        </div>
        <footer className="">
          <button className="" type="submit">
            Enviar Pre-Registro
          </button>
        </footer>
      </form>
    </div>
  )
}
