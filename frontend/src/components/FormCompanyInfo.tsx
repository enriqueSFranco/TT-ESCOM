import { BaseInput } from './base-input'
// import { uploadDocumentValidate } from 'services'

type FormCompanyInfoProps = {
  updateStep: () => void
}

export const FormCompanyInfo = ({ updateStep }: FormCompanyInfoProps) => {

  // function convertToBase64 (file) {
  //   return new Promise((resolve, reject) => {
  //     const fr = new FileReader()
  //     fr.readAsDataURL(file)

  //     fr.onload = () => {
  //       resolve(fr.result)
  //     }
  //     fr.onerror = (error) => {
  //       reject(error)
  //     }
  //   })
  // }

  // async function uploadFile (e) {
  //   const file = e.target.files[0]
  //   const base64 = await convertToBase64(file)
  //   form.validation_document = base64
  // }

  // function handleUpload (e) {
  //   uploadFile(e)
  //     .then((response) => console.log(response))
  //     .catch((error) => error)
  // }

  // const continueStep = (e) => {
  //   e.preventDefault()
  //   nextStep()
  // }


  return (
    <div className=''>
      <header className=''>
        <h2 className=''>Datos de la empresa</h2>
      </header>
      <div>
        <BaseInput
          name='t300_name'
          placeholder='Nombre de su empresa'
        // value={form.t300_name}
        // onBlur={handleValidate}
        // onKeyUp={handleValidate}
        // onChange={handleChange}
        />
      </div>
      <div>
        <BaseInput
          name='rfc'
          placeholder='RFC'
        // value={form.t300_rfc}
        // onBlur={handleValidate}
        // onKeyUp={handleValidate}
        // onChange={handleChange}
        />
      </div>
      <div>
        <BaseInput
          name='t300_bussiness_name'
          placeholder='Razon Social'
        // value={form.t300_bussiness_name}
        // onBlur={handleValidate}
        // onKeyUp={handleValidate}
        // onChange={handleChange}
        />
      </div>
      <div>
        <p>
          Proporcionanos el documento que valide que tu empresa esta
          constituida.
        </p>
        <BaseInput
          type='file'
          name='file'
          id='file'
          color='#116BFE'
        // onChange={handleUpload}
        />
      </div>
      <button aria-label='' onClick={updateStep}>
        Siguiente
      </button>
    </div>
  )
}
