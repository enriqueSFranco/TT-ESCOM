import React, { useEffect, useState, useRef } from "react";
import { useGetSkills, useLanguageUser, useAcademicHistorial } from "hooks";
import { getProjects } from "services";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import CardPersonalInfo from "./CardPersonalInfo";
import { ImProfile } from "react-icons/im";
import { FiFileText } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsFilePdf } from 'react-icons/bs'
import { AiOutlineWhatsApp } from "react-icons/ai";
import {
  WrapperCard,
  CardLeft,
  CardRight,
  CardHeader,
  CardInfo,
  Item,
  LinkToCV,
  WrapperCV
} from "./styled-components/CardProfileCandidateStyled";
import { List, ListItem } from "styled-components/CommonStyles";

const menuItems = [
  { id: 0, label: "Información Profesional", icon: <ImProfile /> },
  { id: 1, label: "Ver curriculumn", icon: <FiFileText /> },
];

/**
 * @param {String} value
 **/
function formatPhone(value) {
  if (value === null) return;
  let parseValue = String(value);
  let number = parseValue.slice(0, 2);
  let firstPart = parseValue.slice(2, 6);
  let secondPart = parseValue.slice(6, 10);
  let newFormatPhone = `${number} ${firstPart} ${secondPart}`;
  return newFormatPhone;
}

function generateLevel(level) {
  let result = "";
  if (level >= 30 && level <= 50) return (result += "Básico");
  if (level >= 51 && level <= 60) return (result += "Intermedio");
  if (level >= 61 && level <= 100) return (result += "Avanzado");
}

const ProfileCandidate = ({ user }) => {
  const [selectedId, setSelectedId] = useState(menuItems[0].id);
  const [listProjects, setListProjects] = useState(null);
  const [stepWidth, _] = useState(0);
  const listRef = useRef(null);
  const isMonted = useRef(true);
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

  let idUser = user?.t100_id_student;

  useEffect(() => {
    getProjects(idUser)
      .then((response) => {
        setTimeout(() => {
          if (isMonted.current) setListProjects(response);
        }, 2000);
      })
      .catch((error) => console.error(error));

    return () => (isMonted.current = false);
  }, [idUser]);

  const handleSelected = (id) => setSelectedId(id);

  if (!skills || !languages || !historial || !listProjects) return null;

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
          <span>{`Nombre: ${t100_name} ${t100_last_name} ${
            t100_second_surname ?? ""
          }`}</span>
          <span>
            Perfil: {t100_speciality ? t100_speciality : t100_interest_job}
          </span>
          <List>
            <ListItem
              style={{
                "background-color": "#EDEFF3",
                "border-radius": "50%",
                height: "35px",
                width: "35px",
                display: "grid",
                "place-items": "center",
              }}
            >
              <a href={`mailto:${t100_email}`}>
                <MdEmail />
              </a>
            </ListItem>
            <ListItem
              style={{
                "background-color": "#EDEFF3",
                "border-radius": "50%",
                height: "35px",
                width: "35px",
                display: "grid",
                "place-items": "center",
              }}
            >
              <a
                href={`https://wa.me/${t100_phonenumber}?text=¡Estoy interesado!`}
                rel="noopener"
                target="_blanck"
              >
                <AiOutlineWhatsApp
                  style={{ color: "#00E676", "font-size": "20px" }}
                />
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
                      outline={`1px solid #ccc`}
                      bg="#fff"
                      color="#6D6D6D"
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
                      label={`${
                        language?.c111_id_language?.c111_description
                      } / ${generateLevel(language?.t110_level)}`}
                      outline={`1px solid #ccc`}
                      bg="#fff"
                      color="#6D6D6D"
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
                <AiOutlineWhatsApp
                  style={{ color: "#00E676", "font-size": "20px" }}
                />
                <span>{formatPhone(t100_phonenumber)}</span>
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
              listProjects={listProjects}
            />
          ) : (
            <WrapperCV>
              {
                user?.t100_cv === null ? (<h3>Este usuario no cuenta con su curriculumn</h3>) : <LinkToCV href={user?.t100_cv} alt="curriculum" target="_blank" rel="noreferrer">Abrir curriculumn <BsFilePdf /></LinkToCV>
              }
            </WrapperCV>
          )}
        </div>
      </CardRight>
    </WrapperCard>
  );
};

export default ProfileCandidate;
