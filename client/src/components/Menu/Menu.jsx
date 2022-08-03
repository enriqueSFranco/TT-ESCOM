import React from "react";
import { useAuth } from "../../context/AuthContext";
import LayoutMenu from "../../layout/LayoutMenu";
import MainMenu from "./MainMenu";
import MenuRecruiter from "./MenuRecruiter";
import MenuUser from "./MenuUser";

const Menu = () => {
  const auth = useAuth();

  let typeUser = auth?.token?.user?.user_type

  console.log('typeUser:', typeUser)

  if (!typeUser) {
    return (
    <LayoutMenu>
        <MainMenu />
      </LayoutMenu>
    )
  }

  if (typeUser === "RECRUITER") {
    return (
      <LayoutMenu>
        <MenuRecruiter />
      </LayoutMenu>
    )
  }

  if (typeUser === 'STUDENT') {
    return (
      <LayoutMenu>
        <MenuUser />
      </LayoutMenu>
    )
  }
};

export default Menu;