import React from 'react'
import Button from 'components/Button/Button'
import { CardContent, CardInfo, CardInfoActions, TextH3 } from './styled-components/CardRecruiterStyled'
import { AiFillCheckCircle, AiFillDelete, AiOutlineMail, AiFillPhone } from 'react-icons/ai'

const CardRecruiter = ({recruiterName, companyName, recruiterEmail, recruiterPhone}) => {
  return (
    <CardContent>
      <TextH3>Reclutador: {recruiterName}</TextH3>
      <TextH3>Empresa: {companyName}</TextH3>

      <CardInfo>
        <TextH3>Medios de Contacto</TextH3>
        <a href={`mailto:${recruiterEmail}`}><AiOutlineMail /> {recruiterEmail}</a>
        <a href={`tel:${recruiterPhone}`}><AiFillPhone /> {recruiterPhone}</a>
        <CardInfoActions>
          <Button bgColor='transparent' color='#74AE61' icon={<AiFillCheckCircle />} />
          <Button bgColor='transparent' color='#F13465' icon={<AiFillDelete />} />
        </CardInfoActions>
      </CardInfo>
    </CardContent>
  )
}

export default CardRecruiter