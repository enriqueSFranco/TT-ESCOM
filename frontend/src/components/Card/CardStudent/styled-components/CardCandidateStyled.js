import styled from "styled-components";

const CardUser = styled.article`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 450px;
  border-radius: .3rem;
  padding: 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 100px 1fr;
  justify-items: center;
  align-items: center;
  grid-template-areas: "avatar information";
`;

const Username = styled.span`
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: .2rem;
`

const H3 = styled.h3`
  font-size: .89rem;
  font-weight: 600;
  margin: .4rem 0;
`

const Speciality = styled.span`
  color: #fff;
  border-radius: 4px;
  background-color: #116BFE;
  padding: .3rem;
`

const WrapperList = styled.div`
  overflow-y: auto; 
  width: 100%; 
  height: 50px;
`

export { CardUser, Username, H3, WrapperList, Speciality };
