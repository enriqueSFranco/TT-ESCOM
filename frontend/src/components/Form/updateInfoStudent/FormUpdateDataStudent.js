import { useEffect, useState } from "react";
import { useForm } from "hooks/useForm";
import { uploadPhotoStudent } from 'services'
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

const FormUpdateDataStudent = ({ id, username, candidate }) => {
  const [image, setImage] = useState('')
  const { form, handleChange, handleChecked } = useForm(
    updateStudentInitialForm,
    validateForm
  );

  async function uploadCV() {
    console.log('subiendo cv...')

  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader()
      fr.readAsDataURL(file)

      fr.onload = () => {
        resolve(fr.result)
      }
      fr.onerror = (error) => {
        reject(error)
      }
    })
  }

  async function updateImage(e) {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    uploadPhotoStudent(id, {t100_username: "", t100_profile_picture: base64})
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  function update(e) {
    e.preventDefault()
    console.log('formulario enviado...')
    if ( e.target.files !== undefined) 
      updateImage(e)
    uploadCV()
  }

  if (!id) return null

  return (
    <>
      <h1 style={{fontSize: '1.3rem'}}>Editar datos personales</h1>
        <form onSubmit={e => update(e)}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '150px', marginBottom: '1rem'}}>
            <CustomAvatar picture={null} username={username} width='100' height='100' />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <input type="file" onChange={update} />
            </div>
          </div>          
          <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            <Input label='Nombre(s)' width='300px' defaultValue={candidate?.t100_name}/>
            <Input label='Primer Apellido' defaultValue={candidate?.t100_last_name}/>
            <Input label='Segundo Apellido' defaultValue={candidate?.t100_second_surname}/>
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
              <Switch label='Disponible para reubicarte' defailtValue={candidate?.t100_travel}/>
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