import React from 'react'
import CustomAvatar from './Avatar'
import { AvatarItem, GroupAvatarsList, TotalOfAvatars } from './styled-components/GroupAvatarsStyled'

const RestOfAvatars = ({restOfAvatars}) => {
  return (
    <AvatarItem style={{backgroundColor: '#222',color: '#FFF'}}>
      <TotalOfAvatars>+{restOfAvatars}</TotalOfAvatars>
    </AvatarItem>
  )
}

const GroupAvatars = ({users}) => {

  let renderUsers = users.slice(0,3)
  let restOfAvatars = users.length - users.slice(0,2).length

  console.log(restOfAvatars)

  return (
    <GroupAvatarsList>
      {renderUsers.map(user => (
        <AvatarItem>
          <CustomAvatar username={user} />
        </AvatarItem>
      ))}
      <RestOfAvatars restOfAvatars={restOfAvatars} />
    </GroupAvatarsList>
  )
}

export default GroupAvatars