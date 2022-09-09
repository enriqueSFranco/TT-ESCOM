import React from "react";
import { Wrapper } from "./styled-components/LayoutDashboardStyled";

const LayoutDashboard = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default LayoutDashboard;
