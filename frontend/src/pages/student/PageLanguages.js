import React from 'react'
import { useAuth } from 'context/AuthContext'
import { useModal, useLanguageUser } from 'hooks'
import Language from 'components/Card/Language/Language'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Header, AddLanguage } from '../styled-components/LanguageStyled'
import ModalPortal from 'components/Modal/ModalPortal'
import FormLanguage from 'components/Form/FormLanguage'

const PageLanguages = () => {
  const { token } = useAuth()
  const { languages } = useLanguageUser(token?.user?.id)
  const [isOpen, openModal, closeModal] = useModal()

  if (!languages) return null


  console.log(languages)

  return (
    <>
      <section style={{padding: '0 1rem'}}>
        <Header>
          <span>Agregar Idioma</span>
          <AddLanguage onClick={openModal}><IoMdAddCircleOutline /></AddLanguage>
        </Header>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
          {languages && languages?.map(language => (
            <Language key={crypto.randomUUID()} type={language?.c111_id_language?.c111_type} language={language?.c111_id_language?.c111_description} progress={language.t110_level} />
          ))}
        </div>
      </section>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <FormLanguage id={token?.user?.id} />
      </ModalPortal>
    </>
  )
}

export default PageLanguages