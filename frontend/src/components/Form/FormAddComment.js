import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "hooks";
import { sendComment, sendCommentRecruiter } from "services";
import { AiOutlineSend } from "react-icons/ai";
import { BoxComment, Form } from "./styled-components/FormAddCommentStyled";
import { USERS } from "types";
import Button from "components/Button/Button";

const textError = {
  color: "#FF0000",
  fontFamily: "sans-serif",
  margin: "0",
};

const textSucces = {
  color: "#09C992",
  fontFamily: "sans-serif",
  margin: "0",
};

const FormAddComment = ({ typeUser, userId }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  let { t200_id_vacant } = useParams();
  const { form, handleChange } = useForm({
    t223_comment: "",
    t200_id_vacant,
  });

  function onSendComment(e) {
    e.preventDefault();

    if (!form.t223_comment.trim()) {
      setError(true);
      return;
    }

    if (typeUser === USERS.recruiter) {
      console.log("enviando mensaje desde reclutador");

      const payload = { ...form, t301_id_recruiter: userId };
      sendCommentRecruiter(payload)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    if (typeUser === USERS.manager) {
      console.log("enviando mensaje desde manager");
      const payload = { ...form, t400_id_admin: userId };

      sendComment(payload)
        .then((response) => {
          setMessage(response.message);
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <Form onSubmit={onSendComment}>
      <BoxComment
        name="t223_comment"
        id="t223_comment"
        value={form.t223_comment}
        onChange={handleChange}
        cols="30"
        rows="10"
        placeholder="Por favor, escriba su observacion"
      ></BoxComment>
      <Button
        type="submit"
        icon={<AiOutlineSend style={{ fontSize: "1.5rem" }} />}
        bgColor="transparent"
        color="#2172f2"
      />
    </Form>
  );
};

export default FormAddComment;
