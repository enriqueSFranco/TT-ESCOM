import React from "react";
import { stringToColor } from "utils/generateColors";

const CustomAvatar = ({ picture, username = "BT", width, height }) => {
  if (!username) return null;

  if (picture === null) {
    return (
      <div
        style={{
          backgroundColor: `${stringToColor(username.slice(0, 2))}`,
          height: `${`${width}px` || '80px'}`,
          width: `${`${height }px`|| '80px'}`,
          display: 'grid',
          placeContent: 'center',
          borderRadius: "50%",
        }}
      >
        <span style={{color: '#FFF', fontSize: '1.4rem'}}>{username.slice(0, 1)}</span>
      </div>
    );
  }

  return (
    <img
      style={{ objectFit: "contain", borderRadius: "50%" }}
      src={`https://placeimg.com/${width}/${height}/people`}
      alt={username}
    />
  );
};

export default CustomAvatar;
