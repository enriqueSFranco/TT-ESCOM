import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "hooks";
import {
  WrapperComment,
  Description,
  CommentBox,
  TextDate,
} from "./styled-components/CommentStyled";

function CommentRecruiter({recruiterId}) {
  const { t200_id_vacant } = useParams()
  const { form, handleChange } = useForm({
    t200_id_vacant,
    t200_id_recruiter: recruiterId,
    t223_comment: ''
  });

  return (
  <CommentBox
    name="t223_comment"
    id="t223_comment"
    value={form.t223_comment}
    onChange={handleChange}
    cols="30"
    rows="5"
    placeholder="Responder"
  ></CommentBox>
  )
}

const Comment = ({ comment, date, nameManager, userId }) => {

  return (
    <WrapperComment>
      <Description>
        <p>{comment}</p>
        <div>
          <TextDate>Fecha: {date}</TextDate>
        </div>
      </Description>
      <CommentRecruiter recruiterId={userId} />
    </WrapperComment>
  );
};

export default Comment;
