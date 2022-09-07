import styled from 'styled-components'

const GroupAvatarsList = styled.ul`
  display: flex;
  padding: .5rem 0 0 .4rem;
  margin: 0;
  list-style: none;
`

const AvatarItem = styled.li`
  border-radius: 50%;
  outline: 2px solid #FFF;
  margin: 0 0 0 -.4rem;
  height: 45px;
  width: 45px;
  display: grid;
  place-content: center;
`

const TotalOfAvatars = styled.span`
  font-weight: 700;
`

export { AvatarItem, GroupAvatarsList, TotalOfAvatars }