import React from "react";
import FormAddComment from "components/Form/FormAddComment";

const TextH1 = {
  fontSize: '1.5rem',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  position: 'relative',
  top: '2rem'
}

const PostComment = () => {
  return (
    <>
      <h1 style={TextH1}>Agregar Observaciones</h1>
      <FormAddComment />
    </>
  );
};

export default PostComment;
