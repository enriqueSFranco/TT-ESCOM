import React from 'react'
import CustomAvatar from 'components/Avatar/Avatar'
import { Card, CardProfile, ContentInfo, Item, List, LinkToFullProfile, Speciality } from './styled-components/CardCandidateStyled'

const CardCandidate = ({ job }) => {
  if (!job) return null

  console.log(job)

  return (
    <div>
      {job.t100_name}
    </div>
    // <Card>
    //   <CardProfile>
    //     <img src="" alt="" />
    //     <ContentInfo>
    //       <LinkToFullProfile to='/'>Enrique</LinkToFullProfile>
    //       <Speciality>Desarrollador web</Speciality>
    //       <List>
    //         <Item>enrique.sfranco04@gmail.com</Item>
    //         {/* iterar las redes sociales */}
    //       </List>
    //     </ContentInfo>
    //   </CardProfile>
    // </Card>
  )
}

export default CardCandidate