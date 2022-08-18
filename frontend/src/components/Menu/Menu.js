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

  if (typeUser === USERS.candidate) {
    return (
      <LayoutMenu>
        <MenuCandidate />
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
