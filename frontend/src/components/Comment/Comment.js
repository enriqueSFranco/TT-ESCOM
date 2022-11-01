import React from 'react'
import { WrapperComment } from './styled-components/CommentStyled'
import { useForm } from 'hooks'

const Comment = () => {
  const { form, handleChange } = useForm({})
  return (
    <WrapperComment>
      <div></div>
      <div>
        <textarea name="" id="" cols="30" rows="5" placeholder='Responder'></textarea>
      </div>
    </WrapperComment>
  )
}

export default Comment