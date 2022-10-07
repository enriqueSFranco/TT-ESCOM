import React from 'react'
import Button from 'components/Button/Button'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'

const CardCollaborator = ({collaboratorName, position, picture}) => {
  return (
    <div>
      <div>
        <Button bgColor='transparent' icon={<GrEdit />} />
        <Button bgColor='transparent' icon={<MdDelete />} />
      </div>
      <figure>
        <img src="" alt="" />
        <figcaption>
          <span>Nombre del colaborador</span>
        </figcaption>
      </figure>
      <span>cargo en ESCOM</span>
    </div>
  )
}

export default CardCollaborator