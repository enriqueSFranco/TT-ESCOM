import React from "react";
import { useAuth } from "context/AuthContext";
import { USERS } from "components/types/users";
import MainMenu from "./MainMenu";
import MenuRecruiter from "./MenuRecruiter";
import LayoutMenu from "Layout/LayoutMenu";

const Menu = () => {
  const { token } = useAuth();
  let typeUser = token?.user?.user_type;

  if (typeUser === USERS.candidate) {
    return (
      <></>
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
