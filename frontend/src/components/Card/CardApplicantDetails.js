import React from 'react'
import { numberFormat } from 'utils';
import CustomAvatar from 'components/Avatar/Avatar';
import Button from 'components/Button/Button';
import { HiUserCircle } from 'react-icons/hi'
import { List, ListItem } from 'styled-components/CommonStyles';


const CardApplicantDetails = ({
  name,
  interestJob,
  speciality,
  picture,
  residence,
  salary,
  onClick,
}) => {
  return (
    <article
      style={{
        height: "200px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "150px 1fr",
        alignContent: "center",
        gap: "1rem",
        outline: "1px solid #ccc",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F8FD",
          height: "200px",
        }}
      >
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
          {/* <HiUserCircle style={{fontSize: '1.3rem'}} />  */}
          <span style={{ fontSize: ".9rem" }}>Nombre: {name}</span>
        </ListItem>
        <ListItem>
          {/* <MdWork style={{fontSize: '1.2rem'}} />  */}
          <span style={{ fontSize: ".9rem" }}>
            {interestJob
              ? `Puesto de interes: ${interestJob}`
              : `Especialidad: ${speciality}`}
          </span>
        </ListItem>
        <ListItem>
          {/* <TiLocationOutline style={{fontSize: '1.4rem'}} /> */}
          <span style={{ fontSize: ".9rem" }}>Ubicacion: {residence}</span>
        </ListItem>
        <ListItem>
          {/* <MdAttachMoney style={{fontSize: '1.3rem'}} /> */}
          <span style={{ fontSize: ".9rem" }}>
            Salario deseado: {numberFormat(salary)}
          </span>
        </ListItem>
      </List>
    </article>
  );
};

export default CardApplicantDetails