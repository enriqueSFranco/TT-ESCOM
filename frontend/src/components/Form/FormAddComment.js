import React from "react";
import { useParams } from 'react-router-dom'
import { useForm } from "hooks";
import { sendComment } from 'services'
import { BoxComment, Form, Submit, WrapperForm } from './styled-components/FormAddCommentStyled'


const FormAddComment = () => {
  let { t200_id_vacant } = useParams()
  const { form, handleChange } = useForm({
    t223_comment: '',
    t200_id_vacant,
    t400_id_admin: 1
  })
  
  function onSendComment(e) {
    e.preventDefault()
    sendComment(form)
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }
  
  return (
    <WrapperForm>
      <Form onSubmit={onSendComment}>
        <BoxComment name="t223_comment" id="t223_comment" value={form.t223_comment} onChange={handleChange} cols="30" rows="10" placeholder="Por favor, escriba su observacion"></BoxComment>
        <Submit type="submit" value="Enviar" />
      </Form>
    </WrapperForm>
  );
};

export default FormAddComment;
