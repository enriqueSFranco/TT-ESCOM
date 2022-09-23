import styled from 'styled-components'

const Select = styled.select`
  height: 30px;
  border-radius: 0;
  outline: 1px solid #ccc;
  border: 0;
  background-color: transparent;
`

const LinkSocialNetwork = styled.input`
  outline: 1px solid #ccc;
  border: none;
  text-indent: 2px;
`

const Button = styled.input`
  background-color: #116BFE;
  border: none;
  outline: none;
  color: #fff;
  padding: .2rem;
  border-radius: 4px;
  width: 120px;
`

export { Button, LinkSocialNetwork, Select }