import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { useForm } from "hooks";
import { sendComment } from 'services'
import { BoxComment, Form, Submit, WrapperForm } from './styled-components/FormAddCommentStyled'

const textError = {
  color: '#FF0000',
  fontFamily: 'sans-serif',
  margin: '0'
}

const textSucces = {
  color: '#09C992',
  fontFamily: 'sans-serif',
  margin: '0'
}

const FormAddComment = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  let { t200_id_vacant } = useParams()
  const { form, handleChange } = useForm({
    t223_comment: '',
    t200_id_vacant,
    t400_id_admin: 1
  })
  
  function onSendComment(e) {
    e.preventDefault()
    if (!form.t223_comment.trim()) {
      setError(true)
      return;
    }
    sendComment(form)
      .then(response => {
        setMessage(response.message)
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <WrapperForm>
        <Form onSubmit={onSendComment}>
          <BoxComment name="t223_comment" id="t223_comment" value={form.t223_comment} onChange={handleChange} cols="30" rows="10" placeholder="Por favor, escriba su observacion"></BoxComment>
          <div>
            {error && <p style={textError}>El campo de la observacion no debe ir vacio</p>}
            {!error && <p style={textSucces}>{message}</p>}
          </div>
          <Submit type="submit" value="Enviar" />
        </Form>
      </WrapperForm>
    </>
  );
};

export default FormAddComment;
