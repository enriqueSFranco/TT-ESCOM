import React from 'react'
import { Card, Image, InfoVacant, WrapperCompanyImage } from './styled-components/CardJobPreviewRecruiterStyled'

const CardJobPreviewRecruiter = () => {
  return (
    <Card>
      <WrapperCompanyImage>
        <Image />
      </WrapperCompanyImage>
      <InfoVacant></InfoVacant>
    </Card>
  )
}

export default CardJobPreviewRecruiter