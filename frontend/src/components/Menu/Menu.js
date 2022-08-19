import React from "react";
import { useAuth } from "context/AuthContext";
import { USERS } from "types/users";
import MainMenu from "./MainMenu";
import MenuCandidate from "./MenuCandidate";
import MenuRecruiter from "./MenuRecruiter";
import LayoutMenu from "Layout/LayoutMenu";

const Menu = () => {
  const { token } = useAuth();

  let typeUser = token?.user?.user_type;
  let username = token?.user.first_name

  if (typeUser === USERS.candidate) {
    return (
      <LayoutMenu>
        <MenuCandidate username={username}  />
      </LayoutMenu>
    )
  }

  if (typeUser === USERS.recruiter) {
    return (
      <LayoutMenu>
        <MenuRecruiter />
      </LayoutMenu>
    );
  }

  return (
    <LayoutMenu>
      <MainMenu />
    </LayoutMenu>
  );
};

export default Menu;
