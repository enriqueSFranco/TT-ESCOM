import React from "react";
import { formatDate } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import {
  WrapperComment,
  WrapperAvatar,
  Description,
  TextDate,
} from "./styled-components/CommentStyled";

const Comment = ({ comment, date, username, token }) => {

  return (
    <WrapperComment typeUser={token}>
      <WrapperAvatar>
        <CustomAvatar username={username} width="50px" height="50px" />
        <TextDate>Fecha: {formatDate(date)}</TextDate>
      </WrapperAvatar>
      <Description>
        <span>{comment}</span>
      </Description>
    </WrapperComment>
  );
};

export default Comment;
