import React from "react";
import { formatDate } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import {
  ContainerMessage,
  Message,
  TextDate,
} from "./styled-components/CommentStyled";

const Comment = ({ comment, date, username, whereIsIt, typeUser }) => {

  return (
    <ContainerMessage typeUser={typeUser} whereIsIt={whereIsIt}>
      <CustomAvatar username={username} width="40px" height="40px" />
      <Message typeUser={typeUser}>
        <p style={{margin: '0'}}>{comment}</p>
        <TextDate typeUser={typeUser}>{formatDate(date)}</TextDate>
      </Message>
    </ContainerMessage>
  );
};

export default Comment;
