import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { applyJob } from "services/students/index"

function createMarkup(data) {
  return {__html: data}
}

export function openModalDetailsJob(description, idJob, userID) {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);


  const handleApplyJob = async () => {
    let now = new Date()
    try {
      const response = await applyJob({
        t200_id_vacant: idJob,
        t100_id_student: userID,
        c205_id_application_state: 1,
        t201_date_application:
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
      });
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  };

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal}>
          <div dangerouslySetInnerHTML={createMarkup(description)}></div>
          <button onClick={handleApplyJob}>Postularme</button>
      </Modal>
    </Suspense>,
    $containerModal
  );
}
