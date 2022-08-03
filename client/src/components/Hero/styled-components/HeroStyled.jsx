import styled from "styled-components";
import { device } from "../../../breakpoints"

const Background = styled.figure`
  position: relative;
  width: 100%;
  height: 490px;

`

const Image = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
`

const WrapperHero = styled.div`
  position: ${({position}) => position || 'static'};
  top: ${({top}) => top ? top : '0'};
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export { Background, Image, WrapperHero }
