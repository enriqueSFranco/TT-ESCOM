import React from "react";
import { Link } from "react-router-dom";
import { getRandomColor } from "utils/generateColors";

const bg = getRandomColor()

const CustomAvatar = ({ username }) => {

  if (username === "") {
    return (
      <Link
        to="/perfil"
        style={{
          width: "3.3rem",
          height: "2.8rem",
          backgroundColor: `${bg}`,
          borderRadius: "50%",
          display: "grid",
          placeContent: "center",
          padding: ".3rem",
        }}
      >
        <img
          height="100%"
          src={`https://robohash.org/default.png`}
          alt={username}
        />
      </Link>
    );
  }

  return (
      <Link
        to="/perfil"
        style={{
          width: "3.3rem",
          height: "2.8rem",
          borderRadius: "50%",
          backgroundColor: `${bg}`,
          display: "grid",
          placeContent: "center",
          padding: ".3rem",
        }}
      >
        <img
          height="100%"
          src={`https://robohash.org/${username}.png`}
          alt={username}
        />
      </Link>
  );
};

export default CustomAvatar;
