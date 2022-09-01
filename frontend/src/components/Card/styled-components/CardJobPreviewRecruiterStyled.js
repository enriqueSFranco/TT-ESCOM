import styled from 'styled-components'

const Card = styled.article`
  min-height: 150px;
  border-radius: .5rem;
  background-color: #F3F3F3;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas: "photo info";
`

const WrapperCompanyImage = styled.figure`
  grid-area: photo;
  background-color: red;
  height: 100%;
`

const Image = styled.img``

const InfoVacant = styled.div`
  grid-area: info;
  background-color: blueviolet;
`

export { Card, Image, InfoVacant, WrapperCompanyImage }