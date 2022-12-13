import React from "react";
import { formatDate } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import {
  ContainerMessage,
  Message,
  WrapperAvatar,
  TextDate,
} from "./styled-components/CommentStyled";

const Comment = ({ comment, date, username, typeUser }) => {
  return (
    <ContainerMessage typeUser={typeUser}>
      <CustomAvatar username={username} width="40px" height="40px" />
      <Message typeUser={typeUser}>{comment}</Message>
    </ContainerMessage>
  );
};

export default Comment;
