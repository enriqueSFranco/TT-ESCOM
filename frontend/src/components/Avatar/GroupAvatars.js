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
  let restOfAvatars = users.length - users.slice(0,3).length

  return (
    <GroupAvatarsList>
      {renderUsers.map(user => (
        <AvatarItem>
          <CustomAvatar username={user?.t100_id_student?.t100_name} picture={user?.t100_id_student?.t100_profile_picture} width='40px' height='40px' />
        </AvatarItem>
      ))}
      {
        (renderUsers.length === 3 && restOfAvatars > 0) ? <RestOfAvatars restOfAvatars={restOfAvatars} /> : null
      }
    </GroupAvatarsList>
  )
}

export default GroupAvatars