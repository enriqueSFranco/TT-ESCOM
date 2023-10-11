import { useState } from 'react'
// import { companyInitialForm } from 'types/schemes'
import { FormRecruiter } from './form-recruiter'
import { FormCompanyInfo } from './FormCompanyInfo'
import { useThemeContext } from '../hooks'
import { Theme } from '../shared'

/**
 * RFC DE UNA EMPRESA
 * EJM951103H34
 * EJM: Iniciales de una empresa
 * 951103: Fecha de creacion de la empresa (YY/MM/DD) 95/11/03
 * H34: Homoclave, proporcionada por el SAT
 **/

// const validateForm = (form) => {
//   let errors = {}
//   let regex = {
//     t300_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t300_rfc: /^([A-ZÑ\x26]{3,4})([0-9]{6})([A-Z0-9]{3})$/,
//     t300_bussiness_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü.,\s]{4,255}$/,
//     t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_email:
//       /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
//     t301_phonenumber: /\x2b[0-9]+/,
//   }

//   if (!form.t300_name.trim())
//     errors.t300_name = 'El campo 'Nombre de la empresa' es requerido.'
//   else if (!regex.t300_name.test(form.t300_name))
//     errors.t300_name =
//       'El campo 'Empresa' solo acepta letras y espacios en blanco.'

//   if (!form.t300_rfc.trim()) errors.t300_rfc = 'El campo 'rfc' es requerido.'
//   else if (!regex.t300_rfc.test(form.t300_rfc))
//     errors.t300_rfc = 'El campo 'rfc' no es valido.'

//   if (!form.t300_bussiness_name.trim())
//     errors.t300_bussiness_name = 'El campo 'razon social' es requerido'
//   else if (!regex.t300_bussiness_name.test(form.t300_bussiness_name))
//     errors.t300_bussiness_name =
//       'El campo 'razon social' solo acepta letras y espacion en blanco'

//   if (!form.t301_name.trim())
//     errors.t301_name = 'El campo 'Nombre' es requerido'
//   else if (!regex.t301_name.test(form.t301_name))
//     errors.t301_name = 'Elmm campo 'Nombre' es incorrecto'

//   if (!form.t301_last_name.trim())
//     errors.t301_last_name = 'El campo 'Apellidos' es requerido'
//   else if (!regex.t301_last_name.test(form.t301_last_name))
//     errors.t301_last_name = 'Elmm campo 'Apellidos' es incorrecto'

//   if (!form.t301_email.trim())
//     errors.t301_email = 'El campo 'Email' es requerido.'
//   else if (!regex.t301_email.test(form.t301_email))
//     errors.t301_email = 'El campo 'Email' es incorrecto.'

//   return errors
// }

const FormSteps = {
  COMPANY_INFO: 1,
  RECRUITER_INFO: 2
}

export const FormCreateAccountCompany = () => {
  const [step, setStep] = useState(FormSteps.COMPANY_INFO)
  const { theme } = useThemeContext()

  function moveToNextStep () {
    setStep((prevStep: number) => prevStep < FormSteps.RECRUITER_INFO ? prevStep + 1 : prevStep)
  }

  function moveToPreviousStep () {
    setStep((prevStep: number) => prevStep < FormSteps.COMPANY_INFO ? prevStep - 1 : prevStep)
  }
  const isLightTheme = theme.toString() === Theme.LIGHT
  const themeClass = isLightTheme ? 'bg-white text-slate-950' : 'bg-slate-950 text-slate-100'

  return (
    <article className={`${themeClass} text-slate-100 w-full h-sreen transition-colors duration-150 ease-in-out lg:grid lg:grid-cols-2`}>
      <div className=''>
        <h2>wallpaper</h2>
      </div>
      <div>
        {step === FormSteps.COMPANY_INFO ? (
          <FormCompanyInfo updateStep={moveToNextStep} />
        ) : step === FormSteps.RECRUITER_INFO ? (
          <article className=''>
            <h2 className=''>Proporcionanos el nombre de la empresa.</h2>
            <FormRecruiter updateStep={moveToPreviousStep} />
          </article>
        ) : null}
      </div>
    </article>
  )
}
