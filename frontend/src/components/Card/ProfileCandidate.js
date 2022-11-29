import React, { useEffect, useState, useRef } from "react";
import { getAcademicHistorial } from "services";
import { useGetSkills, useLanguageUser } from "hooks";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import Button from "components/Button/Button";
import { ImProfile } from 'react-icons/im'
import { FiFileText } from 'react-icons/fi'
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
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

const ProfileCandidate = ({ user, isApplying = false }) => {
  const [selectedId, setSelectedId] = useState(menuItems[0].id);
  const [stepWidth, setStepWidth] = useState(0);
  const [historialAcademico, setHistorialAcademico] = useState(null);
  const listRef = useRef(null);
  const indicatorRef = useRef(null);
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     const menuItem = listRef.current.querySelectorAll('.menu_item')
  //     indicatorRef.current.style.width = `${menuItem.clientWidth}px`;
  //     setStepWidth(menuItem.clientWidth);
  //   }, 50);
  // }, []);

  useEffect(() => {
    const controller = new AbortController();
    getAcademicHistorial(user?.t100_id_student)
      .then(({ data }) => setHistorialAcademico(data))
      .catch((error) => console.log(error));

    return () => controller.abort();
  }, [user?.t100_id_student]);

  if (!skills || !languages || !historialAcademico) return null;

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
                backgroundColor: "#EDEFF3",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href={`mailto:${t100_email}`}>
                <MdEmail />
              </a>
            </ListItem>
            <ListItem
              style={{
                backgroundColor: "#EDEFF3",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href={`https://wa.me/${t100_phonenumber}?text=¡Estoy interesado!`}
                rel="noopener"
                target="_blanck"
              >
                <MdOutlinePhoneIphone />
              </a>
            </ListItem>
          </List>
        </CardHeader>
        <CardInfo>
          <div>
            <h2 style={{ fontSize: "1.2rem" }}>Habilidades en:</h2>
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
                  <ListItem>
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
                <MdOutlinePhoneIphone />
                {t100_phonenumber}
              </ListItem>
            </List>
          </div>
          {isApplying && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                text="Aceptar candidato"
                color="#e7f6df"
                bgColor="#62c62e"
                width="10"
                height="3"
              />
              <Button
                text="Rechazar candidato"
                color="#FFEAE7"
                bgColor="#FF5848"
                width="10"
                height="3"
              />
            </div>
          )}
        </CardInfo>
      </CardLeft>
      <CardRight>
        <nav style={{ width: "fit-content", margin: '0 auto'}}>
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
                {menuItem.label}{menuItem.icon}
              </Item>
            ))}
          </List>
        </nav>
        <div>
          {selectedId === menuItems[0]?.id ? (
            <CardPersonalInfo
              personalObject={user?.t100_personal_objectives}
              academicHistory={historialAcademico}
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
