import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { applyJob } from "services/students/index";
import logoCompany from 'images/facebook.png'
// import { ModalStyled } from '../styled-components/index'

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
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(token)

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
