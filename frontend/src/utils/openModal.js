import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { applyJob } from "services/students/index";
import Input from "components/Input/Input";
import Switch from "components/Switch/Switch";
import CustomAvatar from "components/Avatar/Avatar";
// import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord";
import logoCompany from 'images/facebook.png'

function createMarkup(data) {
  return { __html: data };
}

export function openModalDetailsJob(description, idJob, userID, titleJob, token) {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);

  const handleApplyJob = async () => {
    let now = new Date();
    try {
      const response = await applyJob({
        t200_id_vacant: idJob,
        t100_id_student: userID,
        c205_id_application_state: 1,
        t201_date_application:
          now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal}>
        <div>
          <figure>
            <img src={logoCompany} alt="facebook" />
            <figcaption>
              <span>Nombre de la Empresa</span>
              <span>{titleJob}</span>
            </figcaption>
          </figure>
        </div>
        <div dangerouslySetInnerHTML={createMarkup(description)}></div>
        {
          token ? <button onClick={handleApplyJob}>Postularme</button> : <button onClick={() => window.location.replace('/registro-alumno')}>Postularme</button>
        }
      </Modal>
    </Suspense>,
    $containerModal
  );
}


export function openModalHistoryRecord() {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const FormAddAcademicRecord = lazy(() => import("components/Form/AcademicRecord/FormAddAcademicRecord"))
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal}>
        <FormAddAcademicRecord />
        <h1>sdlk</h1>
      </Modal>
    </Suspense>,
    $containerModal
  );
}

export function openModalUpdateProfileCandidate(data) {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);

  async function uploadCV() {
    console.log('subiendo cv...')
  }

  async function updateImage() {
    console.log('subiendo foto...')
    const data = new FormData()
    data.append('image', )
  }

  function update(e) {
    e.preventDefault()
    console.log('formulario enviado...')
    updateImage()
    uploadCV()
  }

  if (!data) return null

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal}>
        <h1 style={{fontSize: '1.3rem'}}>Editar datos personales</h1>
        <form onSubmit={e => update(e)}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '150px', marginBottom: '1rem'}}>
            <CustomAvatar picture={null} username={data?.first_name} width='100' height='100' />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <input type="file" />
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
              <Input label='Calle y numero' width='100px'  />
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
      </Modal>
    </Suspense>,
    $containerModal
  );
}