import React from 'react'
import Button from 'components/Button/Button'
import { Card, CardActions, CardImage, CardFooter, CardImageName } from './styled-components/CardCollaboratorStyled'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'

const CardCollaborator = ({collaboratorName, position, picture, openModalEdit, openModalDelete}) => {

  return (
    <Card>
      <CardActions>
        <Button onClick={openModalEdit} bgColor='transparent' color='#000' icon={<GrEdit />} />
        <Button onClick={openModalDelete} bgColor='transparent' color='#000' icon={<MdDelete />} />
      </CardActions>
      <CardImage>
        <img src="" alt="" />
        <CardImageName>
          <span>Nombre del colaborador</span>
        </CardImageName>
      </CardImage>
      <CardFooter>
        <span>Cargo en ESCOM</span>
      </CardFooter>
    </Card>
  )
}

export default CardCollaborator