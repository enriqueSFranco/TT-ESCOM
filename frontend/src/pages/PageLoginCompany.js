import React from 'react'
import ReactDom from 'react-dom';
import LoginCompany from '../components/Form/LoginCompany';
import Modal from '../components/Modal/Modal';

const modalContainer = document.getElementById("modal");

const PageLoginCompany = ({ isMObile }) => {
  if (!isMObile) {
    return (
      <section>
        <LoginCompany />
      </section>
    )
  }
  return ReactDom.createPortal (
    <Modal>
      <LoginCompany />
    </Modal>,
    modalContainer
  );
};

export default PageLoginCompany;