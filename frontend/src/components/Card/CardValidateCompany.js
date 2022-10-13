import React from 'react'
import Button from 'components/Button/Button'
import { MdEmail, MdPhone } from "react-icons/md"
import { AiOutlineFile, AiFillCheckCircle, AiFillDelete } from "react-icons/ai"
import { ImUserTie } from 'react-icons/im'
import {WrapperCard, Title} from './styled-components/CardValidateCompanyStyled'

const CardValidateCompany = ({ nameCompany, busisnessName, rfc, document, nameRecruiter, emailRecruiter, phoneRecriter, openModalAccept, openModalReject }) => {
  return (
    <WrapperCard>
      <div>
        <Title fontSize='1.3'>{nameCompany}</Title>
        <span><AiOutlineFile />Evidencia de la empresa</span>
        <div style={{width: '550px', display: 'flex', justifyContent: 'space-between', margin: '.5rem 0 1rem 0'}}>
          <span>Razon social: {busisnessName}</span>
          <span>RFC: {rfc}</span>
        </div>
        <Title fontSize='1.5' textTransform='normal'>Informacion del reclutador</Title>
        <span><ImUserTie style={{fontSize: '1.2rem'}} /> {nameRecruiter}</span>
        <div style={{width: '550px', display: 'flex', justifyContent: 'space-between', marginTop: '.4rem'}}>
          <a href={`mailto:${emailRecruiter}`}><MdEmail style={{fontSize: '1.2rem'}} />{emailRecruiter}</a>
          <a href={`tel:${phoneRecriter}`}><MdPhone style={{fontSize: '1.2rem'}} />{phoneRecriter}</a>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',gap: '1rem'}}>
        {/* acciones */}
        <Button onClick={openModalAccept} height='2.5' width='10' bgColor='#30D46F' text='Aceptar Empresa' icon={<AiFillCheckCircle />} />
        <Button onClick={openModalReject} height='2.5' width='10' bgColor='#FF0000' text='Rechazar Empresa' icon={<AiFillDelete />} />
      </div>
    </WrapperCard>
  )
}

export default CardValidateCompany