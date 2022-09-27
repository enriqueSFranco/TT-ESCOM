import React, { useState } from 'react'
import { useLanguage } from 'hooks'
import Input from 'components/Input/Input'
import Switch from 'components/Switch/Switch'
import { Button, Form } from './styled-components/FormLanguageStyled'

const FormLanguage = () => {
  const { languages, error } = useLanguage()
  const [value, setValue] = useState(0)
  const [hasCertification, setHasCertification] = useState(false)

  const handleChange = () => setHasCertification(!hasCertification)

  const handleChangePicker = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formulario enviado...')
  }

  if (!languages) return null

  return (
    <Form onSubmit={handleSubmit}>
      <select name="" id="">
        <option value="" disabled>Selecciona un idioma o dialecto</option>
        {languages?.map(language => (
          <option value={language?.c111_id_lenguage}>{language?.c111_description}</option>
        ))}
      </select>
      <div style={{display: 'flex', gap: '1rem'}}>
        <input type="range" min={0} max={100} value={value} onChange={e => handleChangePicker(e)} />
        <span>{value}</span>
      </div>

      <Switch label='Cuentas con alguna certificacion?' id='hasCertification' name='hasCertification' value={hasCertification} onChange={handleChange} />
      {hasCertification && (
        <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
          <Input label='Nombre de la certificacion' />
          <span>de</span>
          <Input label='Donde' />
        </div>
      )}
      <Button type="submit" value='Agregar idioma' />
    </Form>
  )
}

export default FormLanguage