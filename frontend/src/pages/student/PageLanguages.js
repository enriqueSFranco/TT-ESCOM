import React from "react";
import { useAuth } from "context/AuthContext";
import { useModal, useLanguageUser } from "hooks";
import Language from "components/Card/Language/Language";
import Tooltip from "components/Tooltip/Tooltip";
import { MdAdd } from "react-icons/md";
import { Header, AddLanguage } from "../styled-components/LanguageStyled";
import ModalPortal from "components/Modal/ModalPortal";
import FormLanguage from "components/Form/FormLanguage";

const styles = {
  wrapperListLanguages: {
    padding: "0 1rem",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "1rem",
  },
};

const PageLanguages = () => {
  const { token } = useAuth();
  const { languages } = useLanguageUser(token?.user?.id);
  const [isOpen, openModal, closeModal] = useModal();

  if (!languages) return null;

  console.log(languages);

  return (
    <>
      <section style={styles.wrapperListLanguages}>
        <Header>
          <Tooltip title="Agregar Idioma">
            <AddLanguage onClick={openModal}>
              <MdAdd />
            </AddLanguage>
          </Tooltip>
        </Header>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {languages &&
            languages?.map((language) => (
              <Language
                key={crypto.randomUUID()}
                type={language?.c111_id_language?.c111_type}
                language={language?.c111_id_language?.c111_description}
                progress={language.t110_level}
              />
            ))}
        </div>
      </section>
      <ModalPortal
        isOpen={isOpen}
        closeModal={closeModal}
        minHeight="400px"
        minWidth="600px"
        bg="#FF8008"
        colorText="#fff"
      >
        <FormLanguage id={token?.user?.id} />
      </ModalPortal>
    </>
  );
};

export default PageLanguages;
