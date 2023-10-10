import styled from "styled-components";
import { USERS } from "types";

const WrapperList = styled.div`
  width: 90%;
  height: calc(100vh - 6.7rem);
  ${({typeOfUser}) => {
    if (typeOfUser === USERS.recruiter) {
      return`
        height: calc(100vh - 10rem);
      `
    }
  }}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding: 0.5rem;
`;

export { WrapperList }
