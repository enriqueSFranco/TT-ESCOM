import React from "react";
// import { useParams } from "react-router-dom";
// import { useForm } from "hooks";
import {
  WrapperComment,
  Description,
  CommentBox,
  TextDate,
} from "./styled-components/CommentStyled";

const Comment = ({ comment, date, nameManager }) => {
  // const { t200_id_vacant } = useParams()
  // const { form, handleChange } = useForm({
  //   t200_id_vacant,
  //   t200_id_recruiter: recruiterId,
  //   t223_comment: ''
  // });

  return (
    <WrapperComment>
      <Description>
        <p>{comment}</p>
        <div>
          <TextDate>Fecha: {date}</TextDate>
        </div>
      </Description>
      <div>
        <CommentBox
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Responder"
        ></CommentBox>
      </div>
    </WrapperComment>
  );
};

export default Comment;
