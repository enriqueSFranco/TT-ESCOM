import React, { useState, useRef } from "react";
import { useGetSkills, useLanguageUser, useAcademicHistorial } from "hooks";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import { ImProfile } from "react-icons/im";
import { FiFileText } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
  WrapperCard,
  CardLeft,
  CardRight,
  CardHeader,
  CardInfo,
  Item,
} from "./styled-components/CardProfileCandidateStyled";
import { List, ListItem } from "styled-components/CommonStyles";
import CardPersonalInfo from "./CardPersonalInfo";

const menuItems = [
  { id: 0, label: "Informacion Profesional", icon: <ImProfile /> },
  { id: 1, label: "Ver curriculumn", icon: <FiFileText /> },
];

const ProfileCandidate = ({ user }) => {
  const [selectedId, setSelectedId] = useState(menuItems[0].id);
  const [stepWidth, _] = useState(0);
  const listRef = useRef(null);
  const indicatorRef = useRef(null);
  const { historial } = useAcademicHistorial(user?.t100_id_student);
  const { skills } = useGetSkills(user?.t100_id_student);
  const { languages } = useLanguageUser(user?.t100_id_student);
  const {
    t100_name,
    t100_last_name,
    t100_second_surname,
    t100_email,
    t100_phonenumber,
    t100_profile_picture,
    t100_speciality,
    t100_interest_job,
  } = user;

  const handleSelected = (id) => setSelectedId(id);

  // const followUpOnTheApplication = (e) => {
  //   e.preventDefault();
  //   console.log(`candidato con el pk ${pk} aceptado`);
  //   sendStatusApplication(
  //     {
  //       c205_id_application_state: 2,
  //     },
  //     pk
  //   )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const hireCandidate = (e) => {
  //   e.preventDefault();
  //   console.log(`candidato con el pk ${pk} contratado`);
  //   sendStatusApplication(
  //     {
  //       c205_id_application_state: 4,
  //     },
  //     pk
  //   )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const doNotHireCandidate = (e) => {
  //   e.preventDefault();
  //   console.log(`candidato con el pk ${pk} no contratado`);
  //   sendStatusApplication(
  //     {
  //       c205_id_application_state: 5,
  //     },
  //     pk
  //   )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const rejectApplication = (e) => {
  //   e.preventDefault();
  //   console.log(`candidato con el pk ${pk} rechazado`);
  //   sendStatusApplication(
  //     {
  //       c205_id_application_state: 5,
  //     },
  //     pk
  //   )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const menuItem = listRef.current.querySelectorAll('.menu_item')
  //     indicatorRef.current.style.width = `${menuItem.clientWidth}px`;
  //     setStepWidth(menuItem.clientWidth);
  //   }, 50);
  // }, []);


  if (!skills || !languages || !historial) return null;

  return (
    <WrapperCard>
      <CardLeft>
        <CardHeader>
          <CustomAvatar
            picture={t100_profile_picture}
            username={t100_name}
            width="100px"
            height="100px"
          />
          <p>
            Nombre:{" "}
            <span>{`${t100_name} ${t100_last_name} ${
              t100_second_surname ?? ""
            }`}</span>
          </p>
          <p>
            Perfil:{" "}
            <span>{t100_speciality ? t100_speciality : t100_interest_job}</span>
          </p>
          <List>
            <ListItem
              style={{
                'background-color': "#EDEFF3",
                'border-radius': "50%",
                height: "35px",
                width: "35px",
                display: "grid",
                'place-items': "center",
              }}
            >
              <a href={`mailto:${t100_email}`}>
                <MdEmail />
              </a>
            </ListItem>
            <ListItem
              style={{
                'background-color': "#EDEFF3",
                'border-radius': "50%",
                height: "35px",
                width: "35px",
                display: "grid",
                'place-items': "center",
              }}
            >
              <a
                href={`https://wa.me/${t100_phonenumber}?text=¡Estoy interesado!`}
                rel="noopener"
                target="_blanck"
              >
                <AiOutlineWhatsApp style={{color: '#00E676', 'font-size': '20px'}} />
              </a>
            </ListItem>
          </List>
        </CardHeader>
        <CardInfo>
          <div>
            <h2 style={{ fontSize: "1.2rem" }}>Conocimientos en:</h2>
            <List>
              {skills.length === 0 ? (
                <span>Sin habilidades registradas.</span>
              ) : (
                skills?.map((skill) => (
                  <ListItem key={`skill-id-${crypto.randomUUID()}`}>
                    <Chip
                      label={skill?.c116_id_skill?.c116_description}
                      bg="#37404D"
                      color="#fff"
                    />
                  </ListItem>
                ))
              )}
            </List>
          </div>

          <div>
            <h2 style={{ fontSize: "1.2rem" }}>Idioma/Dialecto</h2>
            <List>
              {languages.length === 0 ? (
                <span>Sin idiomas registrados.</span>
              ) : (
                languages?.map((language) => (
                  <ListItem key={`language-id-${crypto.randomUUID()}`}>
                    <Chip
                      label={language?.c111_id_language?.c111_description}
                      bg="#37404D"
                      color="#fff"
                    />
                  </ListItem>
                ))
              )}
            </List>
          </div>

          <div>
            <h2 style={{ fontSize: "1.2rem" }}>Contacto</h2>
            <List style={{ display: "flex", flexDirection: "column" }}>
              <ListItem style={{ alignSelf: "flex-start" }}>
                <MdEmail /> {t100_email}
              </ListItem>
              <ListItem style={{ alignSelf: "flex-start" }}>
                {" "}
                <AiOutlineWhatsApp style={{color: '#00E676', 'font-size': '20px'}} />
                <span>{t100_phonenumber}</span>
              </ListItem>
            </List>
          </div>
        </CardInfo>
      </CardLeft>
      <CardRight>
        <nav style={{ width: "fit-content", margin: "0 auto" }}>
          <div
            ref={indicatorRef}
            className="menu_item_indicator"
            style={{
              transform: `translateY(30%) translateX(${
                selectedId * stepWidth
              }px)`,
            }}
          ></div>
          <List ref={listRef} style={{ justifyContent: "center", gap: "2rem" }}>
            {menuItems?.map((menuItem, index) => (
              <Item
                key={`menuItemId-${menuItem.id}`}
                onClick={() => handleSelected(menuItem.id)}
                className={`menu_item ${selectedId === index ? "active" : ""}`}
              >
                {menuItem.label}
                {menuItem.icon}
              </Item>
            ))}
          </List>
        </nav>
        <div>
          {selectedId === menuItems[0]?.id ? (
            <CardPersonalInfo
              personalObject={user?.t100_personal_objectives}
              academicHistory={historial}
            />
          ) : (
            <h1>curriculumn</h1>
          )}
        </div>
      </CardRight>
    </WrapperCard>
  );
};

export default ProfileCandidate;
