import React, { lazy, Suspense } from "react";
import { render } from "react-dom";

export function openModal() {
  const Modal = lazy(() => import("components/Modal/Modal"));
  const $containerModal = document.createElement("div");

  $containerModal.id = "modal";
  document.body.appendChild($containerModal);

  render(
    <Suspense fallback={<div>Cargando...</div>}>
      <Modal root={$containerModal} title="Modal de prueba">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          suscipit temporibus, aliquam neque debitis quam error reiciendis.
          Consectetur laboriosam natus beatae expedita eum repudiandae non ut,
          minima quam ipsam. Pariatur?
        </p>
      </Modal>
    </Suspense>,
    $containerModal
  );
}
