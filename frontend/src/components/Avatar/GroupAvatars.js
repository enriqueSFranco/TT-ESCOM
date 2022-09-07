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

  if (!users) return null

  let renderUsers = users.slice(0,3)
  let restOfAvatars = users.length - users.slice(0,2).length

  return (
    <GroupAvatarsList>
      {renderUsers.map(user => (
        <AvatarItem>
          <CustomAvatar username={user} />
        </AvatarItem>
      ))}
      {
        (users.length > 0 && restOfAvatars > 0) ? <RestOfAvatars restOfAvatars={restOfAvatars} /> : null
      }
      {/* <RestOfAvatars restOfAvatars={restOfAvatars} /> */}
    </GroupAvatarsList>
  )
}

export default GroupAvatars