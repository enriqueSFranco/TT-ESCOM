import React from "react";
import { useAuth } from "context/AuthContext";
// import { getStudent } from "services/students";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineHome } from 'react-icons/hi'

import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";
import DropMenu from "./DropMenu";

const MenuCandidate = ({ username }) => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   getStudent(student?.user?.user_id).then((response) => {
  //     setUser(response);
  //   });
  // }, [student?.user?.user_id]);

  // console.log(token.user.first_name)

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <HiOutlineHome />
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mis-postulaciones">
            <IoMdBriefcase />
            Mis Postulaciones
          </NavLink>
        </NavItem>
        <NavItem>
          <DropMenu typeuser={typeuser} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuCandidate;
