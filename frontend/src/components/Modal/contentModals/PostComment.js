import React from "react";
import FormAddComment from "components/Form/FormAddComment";

const TextH1 = {
  fontSize: '1.5rem',
  fontWeight: '700',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  position: 'relative',
  top: '1rem',
  background: 'linear-gradient(27deg, #3f5efb, #fc466b)',
  backgroundClip: 'text',
  webkitBackgroundClip: 'text',
  color: 'transparent',
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
