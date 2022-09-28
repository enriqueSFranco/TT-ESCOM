import React from 'react'
import { useAuth } from 'context/AuthContext'
import { useModal } from 'hooks'
import Language from 'components/Card/Language/Language'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Header, AddLanguage } from '../styled-components/LanguageStyled'
import ModalPortal from 'components/Modal/ModalPortal'
import FormLanguage from 'components/Form/FormLanguage'

const PageLanguages = () => {
  const { token } = useAuth()
  const [isOpen, openModal, closeModal] = useModal()

  console.log(token)

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
        <FormLanguage id={9} />
      </ModalPortal>
    </>
  )
}

export default PageLanguages