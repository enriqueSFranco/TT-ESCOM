import React from 'react'
import Language from 'components/Card/Language/Language'
import { useModal } from 'hooks'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Header, AddLanguage } from '../styled-components/LanguageStyled'
import ModalPortal from 'components/Modal/ModalPortal'
import FormLanguage from 'components/Form/FormLanguage'

const PageLanguages = () => {
  const [isOpen, openModal, closeModal] = useModal()

  return (
    <>
      <section style={{height: '93%', padding: '0 1rem'}}>
        <Header>
          <span>Agregar Idioma</span>
          <AddLanguage onClick={openModal}><IoMdAddCircleOutline /></AddLanguage>
        </Header>
        <Language />
      </section>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <FormLanguage />
      </ModalPortal>
    </>
  )
}

export default PageLanguages