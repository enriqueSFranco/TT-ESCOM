import React from "react";
import { Avatar } from "@mui/material";
import { stringToColor } from "utils/generateColors";

const CustomAvatar = ({ picture, username = "BT", width, height }) => {
  if (picture) {
    return <Avatar alt={username} src={picture} sx={{ width, height }} />;
  }

  return (
    <Avatar
      sx={{ width, height }}
      style={{
        backgroundColor: `${stringToColor(username.slice(0, 1))}`,
      }}
    >
      {username.slice(0, 1)}
    </Avatar>
  );
};

export default CustomAvatar;
