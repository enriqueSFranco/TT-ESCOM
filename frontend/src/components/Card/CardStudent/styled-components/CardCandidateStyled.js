import styled from "styled-components";

const Card = styled.article`
  width: 450px;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const CardContentAvatar = styled.figure`
  padding: .5rem 0 .3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  text-align: center;
  background-color: #FAF9F6;
  border-radius: 1rem;
`

const Text = styled.p`
  display: block;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.textColor || '#000'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Username = styled.span`
  display: inline-block;
  width: 100%;
  font-weight: 500;
  font-size: .8rem;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const H3 = styled.h3`
  font-size: .89rem;
  font-weight: 600;
  /* margin: .5rem 0; */
`

const Speciality = styled.span`
  color: #fff;
  border-radius: 4px;
  background-color: #116BFE;
  padding: .3rem;
  font-size: .8rem;
  outline: 2px solid blue;
`

const WrapperList = styled.div`
  overflow-y: auto; 
  width: 100%; 
  height: 50px;
`

export { Card, CardContentAvatar, Text, Username, H3, WrapperList, Speciality };
