import React from 'react'
import { useGetPlataforms } from 'hooks/useGetPlataforms'

const FormSocialNetwork = () => {
  const { plataforms } = useGetPlataforms()

  if (!plataforms) return null

  return (
    <form>
      <select name="" id="">
        <option value="" disabled>Forma de contacto</option>
        {plataforms.map(plataform => (
          <option key={plataform?.c115_id_plataform} value={plataform?.c115_id_plataform}>{plataform?.c115_description}</option>
        ))}
      </select>
      <input type="text" />
      <input type="submit" value='Agredar medio' />
    </form>
  )
}

export default FormSocialNetwork