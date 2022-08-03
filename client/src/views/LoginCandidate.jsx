import React from 'react'
import Layout from '../layout/Layout'
import FormLoginCandidate from '../components/Form/FormLoginCandidate'
import { Background, Figure, Legend, Image } from './styled-components/LoginCandidateStyled'
import bg from '../assets/images/090320_Final.gif'

const LoginCandidate = () => {
  return (
    <Layout>
      <Background>
        <Figure>
          <Legend>Grandes oportunidades laborales te estan esperando 🤟</Legend>
          <Image src={bg} alt='login-candidate-bg' />
        </Figure>
      </Background>
      <FormLoginCandidate />
    </Layout>
  )
}

export default LoginCandidate