import { useEffect, useState } from "react";
import { useForm } from "hooks/useForm";
import Input from "components/Input/Input";
import Switch from "components/Switch/Switch";
import CustomAvatar from "components/Avatar/Avatar";
import { updateStudent, getLinks, postSocialNetwork, getStudent } from "services/students/index";
import { updateStudentInitialForm } from "../../../types/schemes";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t100_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_specialty: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_location: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_phone: "",
  };

  if (!form.t100_name.trim()) errors.t100_name = "";
  else if (!regex.t100_name.test(form.t100_name.trim())) errors.t100_name = "";

  return errors;
};

const FormUpdateDataStudent = ({ data }) => {
  const [image, setImage] = useState(null)
  const { form, handleChange, handleChecked } = useForm(
    updateStudentInitialForm,
    validateForm
  );

  async function uploadCV() {
    console.log('subiendo cv...')

  }

  function convertToBase64(file) {
    const fr = new FileReader()
    fr.onload = function() {
      setImage(fr.result.toString())
    }
  }

  async function updateImage(e) {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
    // convertToBase64(e.target.files)
  //   const data = new FormData()
  //   data.append('t100_username', "")
  //   data.append('t100_profile_picture', image)
  //   const response = await fetch(`${process.env.REACT_APP_URL_CANDIDATE_UPLOAD_IMAGE}${data?.id}/`, {
  //     method: 'PUT',
  //     body: data
  //   })

  //   const json = await response.json()
  //   console.log(json)
  }

  function update(e) {
    e.preventDefault()
    console.log('formulario enviado...')
    uploadCV()
  }

  if (!data) return null

  console.log(image)

  return (
    <>
      <h1 style={{fontSize: '1.3rem'}}>Editar datos personales</h1>
        <form onSubmit={e => update(e)}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '150px', marginBottom: '1rem'}}>
            <CustomAvatar picture={null} username={data?.first_name} width='100' height='100' />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <input type="file" onChange={updateImage} />
            </div>
          </div>
          <Input label='Nombre(s)' width='300px' />
          <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            <Input label='Primer Apellido' />
            <Input label='Segundo Apellido' />
          </div>
          <div>
            <h2>Donde te ubicas</h2>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
              <Input label='Calle y numero'  />
              <Input label='CP' width='300px' />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              <Input label='Estado' width='450px' />
              <Input label='Ciudad/Municipio/Alcadia' width='460px' />
              <Input label='Colonia' width='450px' />
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center', justifyContent:'space-between', marginTop: '1rem'}}>
              <Switch label='Disponible para reubicarte' />
              <input type="file" />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem'}}>
            <input type="submit" value='Aceptar' style={{backgroundColor: '#116BFE', color: '#FFF', outline: 'none', border: "none", width: '120px', borderRadius: '4px', padding: '.5rem'}} />
          </div>
        </form>
    </>
  );
};

export default FormUpdateDataStudent;