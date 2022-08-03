import React from 'react'
import Modal from './Modal'
import { Description, Header } from './styled-components/ModalDetailsJobStyled'

const ModalDetailsJob = ({title, root, data}) => {
  console.log(data)
  return (
    <Modal title={title} root={root}>
      <Header>
        <div>
          <h1>{data.t200_job}</h1>
        </div>
      </Header>
      <Description>
        {data.t200_description}
      </Description>
    </Modal>
  )
}

export default ModalDetailsJob