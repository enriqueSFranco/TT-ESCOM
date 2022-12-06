import React from 'react'
import Button from 'components/Button/Button'
import Chip from 'components/Chip/Chip'
import CustomAvatar from 'components/Avatar/Avatar'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import { Card, CardActions, CardImage, CardFooter, CardImageName } from './styled-components/CardCollaboratorStyled'

const CardCollaborator = ({collaboratorName, position, picture, openModalEdit, openModalDelete}) => {

  return (
    <Card>
      <CardActions>
        <Button onClick={openModalEdit} bgColor='transparent' color='#000' icon={<GrEdit />} />
        <Button onClick={openModalDelete} bgColor='transparent' color='#000' icon={<MdDelete />} />
      </CardActions>
      <CardImage>
        <CustomAvatar width='100px' height='100px' username={collaboratorName} />
        <CardImageName>
          <span>{collaboratorName}</span>
        </CardImageName>
      </CardImage>
      <CardFooter>
        <Chip label={position} bg="#202C33" color="#fff" />
      </CardFooter>
    </Card>
  )
}

export default CardCollaborator