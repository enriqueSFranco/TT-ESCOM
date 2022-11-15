import React, { useEffect, useState } from 'react'
import { getAcademicHistorial } from 'services'
import { useGetSkills, useLanguageUser } from 'hooks'
import CustomAvatar from 'components/Avatar/Avatar'
import Chip from 'components/Chip/Chip'
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md'
import { WrapperCard, CardLeft, CardRight, CardHeader, CardInfo, Item } from './styled-components/CardProfileCandidateStyled'
import { List, ListItem } from 'styled-components/CommonStyles'
import CardPersonalInfo from './CardPersonalInfo'

const links = [
  {href: '#', icon: <MdEmail />, id: crypto.randomUUID() },
  {href: '#', icon: <MdOutlinePhoneIphone />, id: crypto.randomUUID() }
]

const menuItems = [
  {id: crypto.randomUUID(), label: 'Informacion Profesional'},
  {id: crypto.randomUUID(), label: 'Ver curriculumn'}

]

const ProfileCandidate = ({ user }) => {
  const [selectedId, setSelectedId] = useState(menuItems[0].id)
  const [historialAcademico, setHistorialAcademico] = useState(null)
  const { skills } = useGetSkills(user?.t100_id_student)
  const { languages } = useLanguageUser(user?.t100_id_student)
  const { t100_name, t100_last_name, t100_second_surname, t100_email, t100_phonenumber, t100_profile_picture, t100_speciality, t100_interest_job } = user

  const handleSelected = id => setSelectedId(id)

  useEffect(() => {
    const controller = new AbortController()
    getAcademicHistorial(user?.t100_id_student)
      .then(({data}) => setHistorialAcademico(data))
      .catch(error => console.log(error))

      return () => controller.abort()
  }, [user?.t100_id_student])

  if (!skills || !languages || !historialAcademico) return null

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
                <ListItem style={{backgroundColor: '#EDEFF3', borderRadius: '50%', height: '35px', width: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={`linkId-${link?.id}`}><a href={link?.href}>{link?.icon}</a></ListItem>
              ))
            }
          </List>
        </CardHeader>
        <CardInfo>
          <div>
            <h2 style={{fontSize: '1.2rem'}}>Habilidades en:</h2>
            <List>
              {
                skills.length === 0 ? (<span>Sin habilidades registradas.</span>) : (
                  skills?.map(skill => (
                    <ListItem><Chip label={skill?.c116_id_skill?.c116_description} bg="#37404D" color="#fff" /></ListItem>
                  ))
                )
              }
            </List>
          </div>
          
          <div>
            <h2 style={{fontSize: '1.2rem'}}>Idioma/Dialecto</h2>
            <List>
              {
                languages.length === 0 ? (<span>Sin idiomas registrados.</span>) : (

                  languages?.map(language => (
                    <ListItem><Chip label={language?.c111_id_language?.c111_description} bg="#37404D" color="#fff" /></ListItem>
                  ))
                )
              }
            </List>
          </div>

          <div>
            <h2 style={{fontSize: '1.2rem'}}>Contacto</h2>
            <List style={{display: 'flex', flexDirection: 'column'}}>
              <ListItem style={{alignSelf: 'flex-start'}}><MdEmail /> {t100_email}</ListItem>
              <ListItem style={{alignSelf: 'flex-start'}}> <MdOutlinePhoneIphone />{t100_phonenumber}</ListItem>
            </List>
          </div>
        </CardInfo>
      </CardLeft>
      <CardRight>
        <nav style={{width: '100%'}}>
          <List style={{justifyContent: 'center'}}>
            {
              menuItems?.map(menuItem => (
                <Item key={`menuItemId-${menuItem.id}`} onClick={() => handleSelected(menuItem.id)}>{menuItem.label}</Item>
              ))
            }
          </List>
        </nav>
        <div>
          {selectedId === menuItems[0]?.id ? <CardPersonalInfo personalObject={user?.t100_personal_objectives} academicHistory={historialAcademico} /> : <h1>curriculumn</h1>}
        </div>
      </CardRight>
    </WrapperCard>
  )
}

export default ProfileCandidate