import styled from 'styled-components'

const GroupAvatarsList = styled.ul`
  display: flex;
  margin: 0;
  padding: .5rem 0 0 0;
  list-style: none;
`

const AvatarItem = styled.li`
  border-radius: 50%;
  outline: 2px solid #fff;
  height: 40px;
  width: 40px;
  display: grid;
  place-content: center;
  margin-left: -.5rem;
`

const TotalOfAvatars = styled.span`
  font-weight: 700;
`

export { AvatarItem, GroupAvatarsList, TotalOfAvatars }