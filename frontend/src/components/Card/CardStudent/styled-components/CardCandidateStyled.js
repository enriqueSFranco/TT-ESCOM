import styled from "styled-components";

const Card = styled.article`
  width: 400px;
  border-radius: 0 0 4px 4px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #4796E7;
  }
`;

const CardContentAvatar = styled.figure`
  padding: .5rem 0 .3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  text-align: center;
  /* background-color: #FAF9F6; */
  border-radius: 1rem;
`

const Text = styled.p`
  display: block;
  margin: 0;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.textColor || '#000'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const CardContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  background-color: #f2f8fd;
  padding: .5rem 0 .3rem .5rem;
  margin-bottom: .8rem;
  outline: 1px solid #eee;
  border-radius: 5px;
`

const CardViwProfile = styled.div`
  display: grid;
  place-content: center;

  .button {
    display: flex;
    align-items: center;
    gap: .3rem;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`


export { Card, CardContentAvatar, CardViwProfile, Text, CardContact};
