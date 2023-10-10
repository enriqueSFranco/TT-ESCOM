import React from "react";
import { useForm } from "hooks";
import { sendComment, sendCommentRecruiter } from "services";
import Button from "components/Button/Button";
import { AiOutlineSend } from "react-icons/ai";
import { USERS } from "types";
import { BoxComment, Form } from "./styled-components/FormAddCommentStyled";


const FormAddComment = ({ typeUser, userId, vacantId }) => {
  const { form, setForm, handleChange } = useForm({
    t223_comment: "",
    t200_id_vacant: vacantId,
  });

  function onSendComment (e) {
    e.preventDefault();

    if (!form.t223_comment.trim()) {
      return;
    }

    if (typeUser === USERS.recruiter) {
      const payload = { ...form, t301_id_recruiter: userId };

      sendCommentRecruiter(payload)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));

      setForm({
        t223_comment: "",
        t200_id_vacant: vacantId,
      });
    }

    if (typeUser === USERS.manager) {
      const payload = { ...form, t400_id_admin: userId };

      sendComment(payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));

      setForm({
        t223_comment: "",
        t200_id_vacant: vacantId,
      });
    }
  }

  return (
    <Form onSubmit={onSendComment} typeUser={typeUser}>
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
