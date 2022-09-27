import React from 'react'
import { useLanguage } from 'hooks'
import Switch from 'components/Switch/Switch'
import { Form } from './styled-components/FormLanguageStyled'

const FormLanguage = () => {
  const { languages, error } = useLanguage()

  if (!languages) return null

  console.log(languages)

  return (
    <Form>
      <select name="" id="">
        <option value="" disabled>Selecciona un idioma o dialecto</option>
        {languages?.map(language => (
          <option value={language?.c111_id_lenguage}>{language?.c111_description}</option>
        ))}
      </select>
      <Switch label='Cuentas con alguna certificacion?' />
    </Form>
  )
}

export default FormLanguage