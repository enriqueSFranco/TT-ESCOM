import { useState } from "react";
import FormUpdateDataStudent from "../Form/FormUpdateDataStudent";
import { Link } from "react-router-dom";
import * as MdIcon from "react-icons/md";
import * as BsIcon from "react-icons/bs";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = ({
  name,
  lastName,
  location,
  travel,
  socialNetworks,
}) => {
  const [state, setState] = useState("profile");

  const handleEdit = (e) => {
    let isEdit = state === "edit" ? "profile" : "edit";
    setState(isEdit);
  };

  console.log(state);

  return (
    <>
      {state === "edit" ? (
        <article className="container">
          <FormUpdateDataStudent />
          <button onClick={handleEdit}>perfil</button>
        </article>
      ) : (
        <article className="container">
          <div className={`${styles.card}`}>
            <IoIcon.IoMdSettings className={styles.config} onClick={handleEdit} />
            <div className={styles.avatar}>
              <img src="https://placeimg.com/640/480/any" alt="user" />
              <div className={styles.nameHolder}>
                <h3>Enrique Salinas Franco</h3>
                <h4>Ingeniero de software</h4>
              </div>
            </div>
            <div className={styles.userDetails}>
              <div className={styles.separator}>
                <h4 className={styles.label}>Ubicacion</h4>
                <div className={styles.flex}>
                  <MdIcon.MdLocationPin className={styles.icon} />
                  <p>Santa Clara Coatitla, Edo Mex.</p>
                </div>
                <div className={styles.flex}>
                  <MdIcon.MdOutlineAirplanemodeActive className={styles.icon} />
                  <p>Disponible para reubicarse</p>
                </div>
              </div>
              <div className={`${styles.socialNetworks} ${styles.separator}`}>
                <h4 className={styles.label}>redes solicales</h4>
                <Link to="/" className={styles.whatsapp}>
                  <BsIcon.BsWhatsapp />
                  <span>2938394</span>
                </Link>
                <Link to="/" className={styles.email}>
                  <MdIcon.MdAlternateEmail />
                  <span>enrique@gmail.com</span>
                </Link>
                <Link to="/" className={styles.github}>
                  <BsIcon.BsGithub />
                  <span>enriqueSF</span>
                </Link>
                <Link to="/" className={styles.linkedin}>
                  <BsIcon.BsLinkedin />
                  <span>enrique Salinas Franco</span>
                </Link>
              </div>
              <div className="py-4">
                <p>perfil verificado</p>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default CardProfileStudent;
