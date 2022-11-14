import React from 'react'
import { useGetSkills, useGetSocialNetwork, useLanguageUser } from 'hooks'
import CustomAvatar from 'components/Avatar/Avatar'
import Chip from 'components/Chip/Chip'
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md'
import { WrapperCard, CardLeft, CardRight, CardHeader, CardInfo } from './styled-components/CardProfileCandidateStyled'
import { List, ListItem } from 'styled-components/CommonStyles'

const links = [
  {href: '#', icon: <MdEmail />, id: crypto.randomUUID() },
  {href: '#', icon: <MdOutlinePhoneIphone />, id: crypto.randomUUID() }
]

const ProfileCandidate = ({ user }) => {
  const { skills } = useGetSkills(user?.t100_id_student)
  const { languages } = useLanguageUser(user?.t100_id_student)
  // user?.id_user.id || t100_id_student
  const { t100_name, t100_last_name, t100_second_surname, t100_email, t100_phonenumber, t100_profile_picture, t100_speciality, t100_interest_job } = user

  if (!skills || !languages) return null

  console.log(languages)
  
  return (
    <WrapperCard>
      <CardLeft>
        <CardHeader>
          <CustomAvatar picture={t100_profile_picture} username={t100_name} width="100px" height="100px" />
          <p>Nombre: <span>{`${t100_name} ${t100_last_name} ${t100_second_surname ?? ""}`}</span></p>
          <p>Perfil: <span>{t100_speciality ? t100_speciality : t100_interest_job}</span></p>
          <List>
            {
              links?.map(link => (
                <ListItem key={`linkId-${link?.id}`}><a href={link?.href}>{link?.icon}</a></ListItem>
              ))
            }
          </List>
        </CardHeader>
        <CardInfo>
          <div>
            <h2 style={{fontSize: '1rem'}}>Habilidades en:</h2>
            <List>
              {skills?.map(skill => (
                <ListItem><Chip label={skill?.c116_id_skill?.c116_description} bg="#37404D" color="#fff" /></ListItem>
              ))}
            </List>
          </div>
          
          <div>
            <h2 style={{fontSize: '1rem'}}>Idioma/Dialecto</h2>
            
            <List>
              {
                languages?.map(language => (
                  <ListItem><Chip label={language?.c111_id_language?.c111_description} bg="#37404D" color="#fff" /></ListItem>
                ))
              }
            </List>
          </div>

          <div>
            <h2 style={{fontSize: '1rem'}}>Contacto</h2>
            <List style={{display: 'flex', flexDirection: 'column'}}>
              <ListItem style={{alignSelf: 'flex-start'}}><MdEmail /> {t100_email}</ListItem>
              <ListItem style={{alignSelf: 'flex-start'}}> <MdOutlinePhoneIphone />{t100_phonenumber}</ListItem>
            </List>
          </div>
        </CardInfo>
      </CardLeft>
      <CardRight></CardRight>
    </WrapperCard>
  )
}

export default ProfileCandidate