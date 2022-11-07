import React from "react";
import { Avatar } from "@mui/material";
import { stringToColor } from "utils/generateColors";

const CustomAvatar = ({ picture, username = "BT", width, height }) => {
  if (picture) {
    return (
      <img
        style={{
          objectFit: "cover",
          width: width,
          height: height,
          borderRadius: "50%",
        }}
        src={picture}
        alt={username}
      />
    );
  }

  return (
    <Avatar
      sx={{width: 45, height: 45}}
      style={{ backgroundColor: `${stringToColor(username.slice(0, 2))}` }}
    >
      {username.slice(0, 1)}
    </Avatar>
    // <div
    //   style={{
    //     backgroundColor: `${stringToColor(username.slice(0, 2))}`,
    //     height: `${`${height}px` || "80px"}`,
    //     width: `${`${width}px` || "80px"}`,
    //     display: "grid",
    //     placeContent: "center",
    //     borderRadius: "50%",
    //   }}
    // >
    //   <span style={{ color: "#FFF", fontSize: "1.4rem" }}>
    //     {username.slice(0, 1)}
    //   </span>
    // </div>
  );
};

export default CustomAvatar;
