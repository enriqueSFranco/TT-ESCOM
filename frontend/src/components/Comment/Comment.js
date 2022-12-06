import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "hooks";
import { formatDate } from "utils";
import { USERS } from "types";
import { AiOutlineSend } from 'react-icons/ai'
import {
  WrapperComment,
  WrapperAvatar,
  Description,
  CommentBox,
  TextDate,
  Form
} from "./styled-components/CommentStyled";
import CustomAvatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";

function CommentRecruiter({ id, token }) {
  const { t200_id_vacant } = useParams();
  const { form, handleChange } = useForm({
    t200_id_vacant,
    t200_id_recruiter: id,
    t223_comment: "",
  });

  // TODO: enviar el comentario del reclutador al colaborador

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
      {token === USERS.recruiter && <Button bgColor="transparent" color="#2172f2" icon={<AiOutlineSend />} />}
    </Form>
  );
}

const Comment = ({ comment, date, nameManager, userId, token }) => {
  return (
    <WrapperComment>
      <WrapperAvatar>
        <CustomAvatar username={nameManager} width="50px" height="50px" />
        <TextDate>Fecha: {formatDate(date)}</TextDate>
      </WrapperAvatar>
      <Description>
        <span>{comment}</span>
      </Description>
      {token === USERS.recruiter && <CommentRecruiter id={userId} token={token} />}
    </WrapperComment>
  );
};

export default Comment;
