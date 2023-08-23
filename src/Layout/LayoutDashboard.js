import React from "react";
import { Wrapper } from "./styled-components/LayoutDashboardStyled";

const LayoutDashboard = ({ children, top }) => {
  return (
    <Wrapper top={top}>
      {children}
    </Wrapper>
  );
};

export default LayoutDashboard;
