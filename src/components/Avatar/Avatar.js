import React from "react";
import { Avatar } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const CustomAvatar = ({ picture, username, width, height }) => {
  if (!username) return <Avatar sx={{ width, height }}></Avatar>;

  if (picture) {
    return <Avatar alt={username} src={picture} sx={{ width, height }} />;
  }

  return (
    <Avatar sx={{ width, height, bgcolor: stringToColor(username) }}>
      {username && username.slice(0, 1)}
    </Avatar>
  );
};

export default CustomAvatar;
