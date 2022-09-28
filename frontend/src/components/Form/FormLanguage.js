import React, { useEffect, useState } from 'react'
import { useLanguage, useForm } from 'hooks'
import { addLanguage } from 'services'
import { initialFormLanguage } from 'types'
import Input from 'components/Input/Input'
import Switch from 'components/Switch/Switch'
import { IoLanguageOutline } from 'react-icons/io5'
import { Button, Form , Title } from './styled-components/FormLanguageStyled'

// "t110_level": "",
// "c120_id_level": 0,
// "t100_id_student": null,
// "c111_id_language": null

const FormLanguage = ({ id }) => {
  const { languages, error } = useLanguage()
  const { form, handleChange } = useForm(initialFormLanguage)
  const [value, setValue] = useState(30)
  const [hasCertification, setHasCertification] = useState(false)

  const handleHasCertification = () => setHasCertification(!hasCertification)

  const handleRange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formulario enviado...')
  }

  let payload = {...form, c120_id_level: value, t100_id_student: id}

  // useEffect(() => {
  //   const controller = new AbortController()
  //   addLanguage(payload)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => console.error(error))

  //   return () => controller.abort()
  // }, [])

  // 30 - 50 basico
  // 51 - 60 intermedio
  // 61 - 100 avanzado
  // idioma, dialecto, nativo

  if (!languages) return null

  console.log(payload)

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Registrar idioma <IoLanguageOutline style={{color: '#116BFE', fontWeight: '700'}} /></Title>
      <select name="c111_id_lenguage" id="c111_id_lenguage" onChange={handleChange} defaultValue=''>
        <option value="">Selecciona un idioma o dialecto</option>
        {languages?.map(language => (
          <option value={language?.c111_id_lenguage}>{language?.c111_description}</option>
        ))}
      </select>
      <div style={{display: 'flex', gap: '1rem'}}>
        <input type="range" min={30} max={100} value={value} onChange={e => handleRange(e)} />
        <span>{value}</span>
      </div>

      <Input label='Nivel' type='text' id='t110_level' name='t110_level' value={form.t110_level} onChange={handleChange} width='300px'/>

      {/* <Switch label='Cuentas con alguna certificacion?' id='hasCertification' name='hasCertification' value={hasCertification} onChange={handleHasCertification} />
      {hasCertification && (
        <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
          <Input label='Nombre de la certificacion' />
          <span>de</span>
          <Input label='Donde' />
        </div>
      )} */}
      <Button type="submit" value='Agregar idioma' />
    </Form>
  )
}

export default FormLanguage