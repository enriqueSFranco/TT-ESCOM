import React from 'react'
import Layout from '../layout/Layout'
import FormCreateNewAccountCandidate from '../components/Form/FormCreateNewAccountCandidate'

const NewAccountCandidate = () => {
  return (
    <Layout>
      {/* <Background>
        <Figure>
          <Legend>Grandes oportunidades laborales te estan esperando 🤟</Legend>
          <Image src={bg} alt='login-candidate-bg' />
        </Figure>
      </Background> */}
      <FormCreateNewAccountCandidate />
    </Layout>
  )
}

export default NewAccountCandidate