import React from "react";
import { useModal } from "hooks";
import ModalPortal from 'components/Modal/ModalPortal'
import CustomAvatar from "components/Avatar/Avatar";
import ProfileCandidate from '../ProfileCandidate'
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
  Card,
  CardContentAvatar,
  Text,
  CardContact,
  CardHeader,
  CardViwProfile
} from "./styled-components/CardCandidateStyled";

function formatPhone(value) {
  if (value === null) return
  let parseValue = String(value)
  let number = parseValue.slice(0,2)
  let firstPart = parseValue.slice(2,6)
  let secondPart = parseValue.slice(6,10)
  let newFormatPhone = `${number} ${firstPart} ${secondPart}`  
  return newFormatPhone
}

const CardCandidate = ({ user }) => {
  const [isOpen, openModal, closeModal] = useModal(false)

  if (!user) return null;

  return (
    <>
      <Card>
        <CardHeader>
          <CardContentAvatar>
            <picture>
              <CustomAvatar
                picture={user.t100_profile_picture}
                username={user.t100_name}
                width="100px"
                height="100px"
              />
            </picture>
            <figcaption>
              <Text fontWeight="600" textColor="#fff">{user.t100_name}{" " + user?.t100_last_name}</Text>
              <Text fontWeight="400" textColor="#fff">
                {user.t100_speciality
                  ? user.t100_speciality
                  : user.t100_interest_job}
              </Text>
            </figcaption>
          </CardContentAvatar>
        </CardHeader>

        <CardContact>
          <Text style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
            <MdEmail style={{ color: "#5D5E7D", fontSize: "20px" }} />
            <a href={`mailto:${user.t100_email}`}>{user.t100_email}</a>
          </Text>
          <Text style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
            <AiOutlineWhatsApp style={{ color: "#00E676", fontSize: "21px" }} />
            <a
              aria-label="Chat on WhatsApp"
              href={`https://wa.me/55${user.t100_phonenumber}`}
            >
              {formatPhone(user.t100_phonenumber)}
            </a>
          </Text>
        </CardContact>
        <CardViwProfile>
          <button onClick={openModal} className="button"> <FaUserCircle /> Ver perfil</button>
        </CardViwProfile>
      </Card>
      
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minWidth="1200px" minHeight="900px" bg="#F3F4F4">
        <h3>Informacion del candidato: {user.t100_name}{" "}{user.t100_last_name}</h3>
        <ProfileCandidate user={user} />
      </ModalPortal>
    </>
  );
};

export default CardCandidate;
