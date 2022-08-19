import React, { lazy, Suspense } from "react";
import { render } from "react-dom";

function createMarkup(data) {
  return {__html: data}
}

export function openModal(data) {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal} title="Modal de prueba">
        <div dangerouslySetInnerHTML={createMarkup(data)}></div>
      </Modal>
    </Suspense>,
    $containerModal
  );
}
