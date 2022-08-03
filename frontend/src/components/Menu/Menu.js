import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { USERS } from "components/types/users";
import MainMenu from "./MainMenu";
import MenuRecruiter from "./MenuRecruiter";
import LayoutMenu from "Layout/LayoutMenu";

const Menu = () => {
  const { token } = useContext(AuthContext);
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
