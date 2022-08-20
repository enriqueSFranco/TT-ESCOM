import React from 'react'

const CustomAvatar = ({ username }) => {

  if (username === "") {
    return (
      <div
        style={{
          // outline: "2px solid #cfcf",
          width: "2.5rem",
          // height: "3rem",
          borderRadius: "50%",
          display: 'grid',
          placeContent: 'center',
          padding: '.3rem'
        }}
      >
        <img
          height="100%"
          src={`https://robohash.org/default.png`}
          alt={username}
        />
      </div>
    );
  }

  return (
    <div
        style={{
          // outline: "2px solid #cfcf",
          width: "2.5rem",
          // height: "3rem",
          borderRadius: "50%",
          display: 'grid',
          placeContent: 'center',
          padding: '.3rem'
        }}
      >
        <img
          height="100%"
          src={`https://robohash.org/${username}.png`}
          alt={username}
        />
      </div>
  );
};

export default CustomAvatar;
