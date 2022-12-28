import styled from "styled-components";

const WrapperNotify = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color .3s ease-in-out;
  
  &:hover {
    background-color: #717171;
  }
`;

const TotalNotifications = styled.span`
  position: absolute;
  top: 2px;
  left: 18px;
  border-radius: 22px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 0 4px;
  max-width: 18px;
  min-width: 8px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CC0000;
`;

export { WrapperNotify, TotalNotifications };
