import React from "react";
import { Avatar } from "@mui/material";

const CustomAvatar = ({ picture, username, width, height }) => {

  if (picture) {
    return <Avatar alt={username} src={picture} sx={{ width, height }} />;
  }

  return (
    <Avatar
      sx={{ width, height }}
    >
      {username && username.slice(0, 1)}
    </Avatar>
  );
};

export default CustomAvatar;
