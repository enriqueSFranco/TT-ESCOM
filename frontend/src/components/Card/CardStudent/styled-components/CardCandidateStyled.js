import styled from "styled-components";

const CardUser = styled.article`
  outline: 1px solid #ccc;
  width: 450px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 100px 1fr;
  justify-items: center;
  align-items: center;
`;

const Username = styled.span``

const H3 = styled.h3`
  font-size: .89rem;
  font-weight: 600;
  margin-top: .2rem;
`


const WrapperList = styled.div`
  overflow-y: auto; 
  width: 100%; 
  height: 50px;
`

export { CardUser, Username, H3, WrapperList };
