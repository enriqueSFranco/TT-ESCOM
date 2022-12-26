import React from "react";
import { WrapperNotify, TotalNotifications } from "./NotifyStyled";

const Notify = ({ icon }) => {
  return (
    <WrapperNotify>
      <TotalNotifications>9+</TotalNotifications>
      {icon}
    </WrapperNotify>
  );
};

export default Notify;
