import React from 'react'
import { useForm, useGetPlataforms } from 'hooks'
import { postSocialNetwork } from 'services'
import { INITIAL_FORM_ADD_SOCIAL_NETWORK } from 'types/addSocialNetwork'
import { Button, Select, LinkSocialNetwork } from '../styled-components/FormAddSocialNetworkStyled'

const FormSocialNetwork = ({idUser}) => {
  const { form, handleChange } = useForm(INITIAL_FORM_ADD_SOCIAL_NETWORK)
  const { plataforms } = useGetPlataforms()

  let r = {
    ...form, 
    t100_id_student: idUser
  }

  function handleSubmit(e) {
    e.preventDefault()
    postSocialNetwork(r)
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  if (!plataforms || !idUser) return null

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap:".4rem", height: '100px'}}>
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <Select name="c115_id_plataform" id="c115_id_plataform" onChange={handleChange}>
          <option value="" disabled>Forma de contacto</option>
          {plataforms.map(plataform => (
            <option key={plataform?.c115_id_plataform} value={plataform.c115_id_plataform}>{plataform?.c115_description}</option>
          ))}
        </Select>
        <LinkSocialNetwork type="text" name='t113_link' id='t113_link' value={form.t113_link} onChange={handleChange} />
      </div>
      <Button type="submit" value='Agredar medio' />
    </form>
  )
}

export default FormSocialNetwork