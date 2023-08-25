import { useState } from 'react'

interface FormFields {
  [key: string]: string | boolean
}

interface useFormProps<T extends FormFields> {
  initialForm: T
  validateForm: (form: T) => boolean
}

export const useForm = <T extends FormFields> ({ initialForm, validateForm }: useFormProps<T>) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setForm({
      ...form,
      [name]: checked,
    })
  }

  // const handleSubmitStudent = (e) => {
  //   e.preventDefault() // cancelamos el comporamiento del formulario que tiene por defecto

  //   setErrors(validateForm(form)) // verificamos si hay error en los campos del formulario
  //   if (Object.keys(errors).length === 0) {
  //     // si la longitud de las claves del objeto error es de cero, quiere decir que no hay errores.
  //     setLoading(true)
  //     createAccountStudent(form).then((response) => {
  //       if (response.status || response.status === CODE_201) {
  //         const { data } = response
  //         // TODO: PONER EL ALERT
  //         setTimeout(() => {
  //           navigate('/alumno')
  //         }, 3000)
  //         setForm(initialForm)
  //       } else {
  //         setErrors({ t100_email: 'El email ya esta en uso' })
  //       }
  //     })
  //   } else return
  // }

  // const handleSubmitCompany = (e) => {
  //   e.preventDefault()
  //   setErrors(validateForm(form))

  //   if (Object.keys(errors).length === 0) {
  //     createAccountRecruiter(form).then((response) => {
  //       console.log(response)
  //       if (response.status === 201) {
  //         uploadDocumentValidate(response?.data?.new_company_id, { t300_validator_document: form.validation_document })
  //           .then((response) => console.log(response))
  //           .catch((error) => console.error(error))
  //         setTimeout(() => {
  //           navigate('/pre-registro')
  //         }, 3000)
  //       } else if (response.status === 400) {
  //         // TODO: PONER EL ALERT
  //       }
  //     })
  //   }
  // }

  return { form, errors, handleChange, handleChecked, handleValidate }
}
