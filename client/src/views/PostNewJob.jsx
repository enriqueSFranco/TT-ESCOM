import React from 'react'
import FormPostNewJob from '../components/Form/FormPostNewJob'
import { Container, Header, Paragraph, Title } from './styled-components/PostNewJobStyled'

const PostNewJob = () => {
  return (
    <Container>
      <Header>
        <Title>Publicar una nueva vacante</Title>
        <Paragraph>Compartenos los detalles de tu vacante</Paragraph>
      </Header>
      <FormPostNewJob />
    </Container>
  )
}

export default PostNewJob