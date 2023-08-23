import React from "react";
import { numberFormat } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import { HiUserCircle } from "react-icons/hi";
import { List, ListItem } from "styled-components/CommonStyles";

const styles = {
  containerCard: {
    height: "200px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    alignContent: "center",
    gap: "1rem",
    outline: "1px solid #ccc",
  },
  subWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F8FD",
    height: "200px",
  },
};

const CardApplicantDetails = ({
  name,
  stateApplication,
  picture,
  residence,
  salary,
  onClick,
}) => {
  return (
    <article style={styles.containerCard}>
      <div style={styles.subWrapper}>
        <CustomAvatar
          height="90px"
          width="90px"
          picture={picture}
          username={name}
        />
        <Button
          text="Ver perfil"
          bgColor="#397DFC"
          color="#fff"
          icon={<HiUserCircle />}
          width="7"
          height="2"
          onClick={onClick}
        />
      </div>
      <List>
        <ListItem>
          <span style={{ fontSize: ".9rem" }}>Nombre: {name}</span>
        </ListItem>
        <ListItem>
          <span style={{ fontSize: ".9rem" }}>Ubicacion: {residence}</span>
        </ListItem>
        <ListItem>
          <span style={{ fontSize: ".9rem" }}>
            Salario deseado: {numberFormat(salary)}
          </span>
        </ListItem>
        <ListItem>
          <span style={{ fontSize: ".9rem" }}>Estado: {stateApplication}</span>
        </ListItem>
      </List>
    </article>
  );
};

export default CardApplicantDetails;
