import React from 'react'
import Button from 'components/Button/Button'
import { CardContent, CardInfo, CardInfoActions, TextH3 } from './styled-components/CardRecruiterStyled'
import { AiFillCheckCircle, AiFillDelete, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

function formatPhone(value) {
  if (value === null) return
  let parseValue = String(value)
  let number = parseValue.slice(0,2)
  let firstPart = parseValue.slice(2,6)
  let secondPart = parseValue.slice(6,10)
  let newFormatPhone = `${number} ${firstPart} ${secondPart}`  
  return newFormatPhone
}

const CardRecruiter = ({recruiterName, companyName, recruiterEmail, recruiterPhone, openModalAccept, openModalReject}) => {
  return (
    <CardContent>
      <span>Nombre: {recruiterName}</span>
      <br />
      <span>Empresa: {companyName}</span>

      <TextH3>Formasa de Contacto</TextH3>
      <CardInfo>
        <a href={`mailto:${recruiterEmail}`} style={{color: '#717171'}}><AiOutlineMail style={{fontSize: '18px'}} /> {recruiterEmail}</a>
        <a href={`tel:${recruiterPhone}`} style={{color: '#717171'}}><AiOutlineWhatsApp style={{fontSize: '18px'}} /> {formatPhone(recruiterPhone)}</a>
        <CardInfoActions>
          <Button onClick={openModalAccept} bgColor='transparent' color='#74AE61' icon={<AiFillCheckCircle />} />
          <Button onClick={openModalReject} bgColor='transparent' color='#F13465' icon={<AiFillDelete />} />
        </CardInfoActions>
      </CardInfo>
    </CardContent>
  )
}

export default CardRecruiter