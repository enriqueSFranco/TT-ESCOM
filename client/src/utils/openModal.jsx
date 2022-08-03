import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

export default function openModal(payload = {}) {
  const Modal = lazy(() => import('../components/Modal/ModalDetailsJob'));
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal';
  document.body.appendChild(modalContainer);

  const root = createRoot(modalContainer);

  root.render(<Suspense fallback={<div>loading...</div>}>
    <Modal root={root} data={payload} />
  </Suspense>);
};