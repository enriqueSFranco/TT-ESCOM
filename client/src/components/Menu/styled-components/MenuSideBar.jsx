import styled from "styled-components";
import { device } from "../../../breakpoints";

const WrapperMenuSideBar = styled.div`
  display: none;
  
  @media screen and ${device.laptop} {
    display: block;
    background-color: #fff;
    border-radius: 1rem;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: sticky;
    top: 5rem;
  }
`

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

const WrapperList = styled.div`
  height: fit-content;
  width: 100%;
  margin-bottom: 1rem;
`

const List = styled.ul``

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: .5rem;
  list-style: none;
  margin: 1rem 1rem 1rem 0;
`

const Check = styled.input`
`;

const Label = styled.label``

const Title = styled.h2`
  text-transform: capitalize;
  font-weight: 600;
`

export { Check, Item, List, Label, Title, WrapperList, WrapperTitle, WrapperMenuSideBar }