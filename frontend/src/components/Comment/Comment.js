import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "hooks";
import { formatDate } from "utils";
import { USERS } from "types";
import {
  WrapperComment,
  Description,
  CommentBox,
  TextDate,
  Form
} from "./styled-components/CommentStyled";

function CommentRecruiter({ id, token }) {
  const { t200_id_vacant } = useParams();
  const { form, handleChange } = useForm({
    t200_id_vacant,
    t200_id_recruiter: id,
    t223_comment: "",
  });

  return (
    <Form>
      <CommentBox
        name="t223_comment"
        id="t223_comment"
        value={form.t223_comment}
        onChange={handleChange}
        cols="30"
        rows="5"
        placeholder="Responder"
      ></CommentBox>
      {token === USERS.recruiter && <input type="submit" value="Enviar" />}
    </Form>
  );
}

const Comment = ({ comment, date, nameManager, userId, token }) => {
  return (
    <WrapperComment>
      <TextDate>Fecha: {formatDate(date)}</TextDate>
      <Description>
        <p>{comment}</p>
      </Description>
      <CommentRecruiter id={userId} token={token} />
    </WrapperComment>
  );
};

export default Comment;
