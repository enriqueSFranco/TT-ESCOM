import styled from "styled-components";

const LayoutHeroStyled = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
`

const WrapperPhoto = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  `

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  width: 100%;
  height: 400px;
  bottom: 70px;
  
  `

const Content = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { Content, LayoutHeroStyled, Photo, WrapperPhoto }