// import { useFetch } from 'hooks/useFetch';
import { useForm } from '../hooks'
import { BaseInput } from './base-input'

// const validateForm = (form) => {
//   let errors = {};
//   let regex = {
//     t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_email: /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/,
//     t301_phonenumber: /\x2b[0-9]+/,
//   };

//   if (!form.t301_name.trim())
//     errors.t301_name = 'El campo 'Nombre' es requerido';
//   else if (!regex.t301_name.test(form.t301_name))
//     errors.t301_name = 'El campo 'Nombre' es incorrecto';

//   if (!form.t301_email.trim())
//     errors.t301_email = 'El campo 'Correo electronico' es requerido';
//   else if (!regex.t301_email.test(form.t301_email))
//     errors.t301_email = 'El campo 'Correo electronico' es incorrecto';

//   if (!form.t301_last_name.trim())
//     errors.t301_last_name = 'El campo 'Apellidos' es requerido';
//   else if (!regex.t301_last_name.test(form.t301_last_name))
//     errors.t301_last_name = 'El campo 'Apellidos' es incorrecto';

//   // if (!form.t301_phonenumber.trim())
//   //   errors.t301_phonenumber = 'El campo 'Telefono' es requerido';
//   // else if (!regex.t301_phonenumber.test(form.t301_phonenumber))
//   //   errors.t301_phonenumber = 'El campo 'Telefono' es incorrecto';

//   return errors;
// };

type FormRecruiterProps = {
  updateStep: () => void
}

const initialForm = {
  name: '',
  lastName: '',
  email: '',
  phonenumber: ''
}

function validateForm () { }

export const FormRecruiter = ({ updateStep }: FormRecruiterProps) => {
  const { form, handleChange } = useForm({ initialForm, validateForm })
  // const {
  //   form,
  //   errors,
  //   handleChange,
  //   handleValidate,
  //   handleSubmitCompanyRecruiter,
  // } = useForm(initialForm, validateForm);
  // const { data } = useFetch(process.env.REACT_APP_URL_COMPANY);

  function handleSubmit () { }

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <BaseInput
            type='text'
            name='t301_name'
            placeholder='Nombre(s)'
            value={form.name}
            onChange={handleChange}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          />

        </div>
        <div className=''>
          <BaseInput
            name='t301_last_name'
            placeholder='Apellidos'
            value={form.lastName}
            onChange={handleChange}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          />

        </div>

        <div className=''>
          <BaseInput
            name='t301_email'
            placeholder='Correo electronico'
            value={form.email}
            onChange={handleChange}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          />
        </div>
        <div className=''>
          <BaseInput
            name='t301_phonenumber'
            placeholder='Telefono'
          // value={form.phonenumber}
          // onChange={handleChange}
          // onBlur={handleValidate}
          // onKeyUp={handleValidate}
          />
        </div>
        <footer className=''>
          <button onClick={updateStep}>regresar</button>
          <button className='' type='submit'>
            Enviar Pre-Registro
          </button>
        </footer>
      </form>
    </div>
  )
}
