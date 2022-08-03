import styled from "styled-components";

const Legend = styled.span`
  width: 500px;
  color: #000;
  text-transform: normal;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 2.3rem;
  position: absolute;
  top: 2rem;
  left: 1rem;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(to top, #0630f2, #67009a, #5a0053, #360323, #000000); */
`

const Figure = styled.figure`
  height: 500px;
  width: 500px;
  display: grid;
  place-content: center;
  border-radius: 2rem;
  /* background-color: #ffffff50;
  backdrop-filter: blur(10px); */
  position: relative;
`

const Image = styled.img`
position: absolute;
  width: 400px;
  border-radius: 2rem;
  right: -10rem;
  bottom: -1.6rem;
`

export { Background, Figure, Legend, Image }