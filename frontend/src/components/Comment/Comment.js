import React from 'react'
import { WrapperComment, Description, CommentBox } from './styled-components/CommentStyled'
import { useForm } from 'hooks'

const Comment = () => {
  const { form, handleChange } = useForm({})

  return (
    <WrapperComment>
      <Description>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, voluptate? Eum laudantium sunt natus similique. Eveniet laborum aspernatur unde quaerat reiciendis earum molestiae reprehenderit natus voluptatum pariatur vel, repellendus incidunt.
        </p>
        <div>
          <span>
            Fecha: 
          </span>
        </div>
      </Description>
      <div>
        <CommentBox name="" id="" cols="30" rows="5" placeholder='Responder'></CommentBox>
      </div>
    </WrapperComment>
  )
}

export default Comment