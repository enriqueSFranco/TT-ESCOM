import React from "react";
import { useModal } from "hooks";
import ModalPortal from 'components/Modal/ModalPortal'
import CustomAvatar from "components/Avatar/Avatar";
import ProfileCandidate from '../ProfileCandidate'
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa'
import {
  Card,
  CardContentAvatar,
  Text,
  CardContact,
  CardViwProfile
} from "./styled-components/CardCandidateStyled";

const CardCandidate = ({ user }) => {
  const [isOpen, openModal, closeModal] = useModal(false)

  if (!user) return null;

  return (
    <>
      <Card>
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
            <Text fontWeight="600">{user.t100_name}{" " + user?.t100_last_name}</Text>
            <Text fontWeight="400" textColor="#5D5E7D">
              {user.t100_speciality
                ? user.t100_speciality
                : user.t100_interest_job}
            </Text>
          </figcaption>
        </CardContentAvatar>

        <CardContact>
          <Text style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
            <MdEmail style={{ color: "#5D5E7D", fontSize: "1.1rem" }} />
            <a href={`mailto:${user.t100_email}`}>{user.t100_email}</a>
          </Text>
          <Text style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
            <MdPhoneIphone style={{ color: "#5D5E7D", fontSize: "1.1rem" }} />
            <a
              aria-label="Chat on WhatsApp"
              href={`https://wa.me/55${user.t100_phonenumber}`}
            >
              {user.t100_phonenumber}
            </a>
          </Text>
        </CardContact>
        <CardViwProfile>
          <button onClick={openModal} className="button"> <FaUserCircle /> Ver perfil</button>
        </CardViwProfile>
      </Card>
      
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minWidth="1000px" minHeight="800px" bg="#F3F4F4">
        <ProfileCandidate user={user} />
      </ModalPortal>
    </>
  );
};

export default CardCandidate;
