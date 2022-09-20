import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { applyJob } from "services/students/index";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logoCompany from 'images/facebook.png'
import { useState } from "react";

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
      return response;
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

// export function openModalAddSkill(idUser, skills) {
//   const Modal = lazy(() => import("components/Modal/Modal"));
//   const $containerModal = document.createElement("div");

//   $containerModal.id = "modal-skill";
//   document.body.appendChild($containerModal);

//   let hard = [];
//   let soft = [];

//   skills.forEach(el => el["c116_type"] === "H" ? hard.push(el) : soft.push(el))


//   function sendSkill() {
//     addSkill(idUser)
//       .then(response => console.log(response))
//       .catch(error => console.error(error))
//   }

//   if (!skills) return null

//   render(
//     <Suspense fallback={<div>Cargando...</div>}>
//       <Modal root={$containerModal}>
//       </Modal>
//     </Suspense>,
//     $containerModal
//   );
// }
