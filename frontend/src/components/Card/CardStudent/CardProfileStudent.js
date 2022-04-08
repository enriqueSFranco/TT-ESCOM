import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSocialNetwork } from "../../../services/students/getSocialNetwork";
import { uuid } from "../../../utils/uuid";
import FormUpdateDataStudent from "../../Form/FormUpdateDataStudent";
import Avatar from "../../Avatar/Avatar";
import * as MdIcon from "react-icons/md";
// import * as BsIcon from "react-icons/bs";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  const [state, setState] = useState("profile");
  const [socialNetworks, setSocialNetworks] = useState([]);

  const handleEdit = (e) => {
    let isEdit = state === "edit" ? "profile" : "edit";
    setState(isEdit);
  };

  useEffect(() => {
    getSocialNetwork("2017")
      .then((response) => {
        setSocialNetworks(response);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!socialNetworks) return null;

  const student = socialNetworks[1];

  return (
    <>
      {state === "edit" ? (
        <motion.article
          className="container"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          duration={{ duration: 0.5 }}
        >
          <FormUpdateDataStudent
            student={student}
            handleBackToProfile={handleEdit}
          />
        </motion.article>
      ) : (
        <article className={`${styles.mainContainer} container`}>
          <div className={`${styles.card}`}>
            <header className={styles.background}>
              <div className={styles.avatar}>
                <IoIcon.IoMdSettings
                  className={styles.config}
                  onClick={handleEdit}
                />
                {/* <img src="https://placeimg.com/640/480/any" alt="user" /> */}
                <Avatar student={student} />
                <div className={styles.nameHolder}>
                  <h3>
                    {student?.t100_boleta?.t100_name}
                    <span className={styles.username}>
                      {student?.t100_boleta?.t100_username ?? ""}
                    </span>
                  </h3>
                  <h4>{student?.t100_boleta?.t100_speciality ?? ""}</h4>
                </div>
              </div>
            </header>
            <div className={styles.userDetails}>
              <div className={styles.separator}>
                <h4 className={styles.label}>Ubicacion</h4>
                <div className={styles.flex}>
                  <MdIcon.MdLocationPin className={styles.icon} />
                  <p>{student?.t100_boleta?.t100_residence ?? "No especificado."}</p>
                </div>
                <div className={styles.flex}>
                  <MdIcon.MdOutlineAirplanemodeActive className={styles.icon} />
                  <p>
                    {student?.t100_boleta?.travel
                      ? "Disponible para reubicarse."
                      : "No disponible para reubicarse." ?? "No especificado."}
                  </p>
                </div>
              </div>
              <div className={`${styles.socialNetworks} ${styles.separator}`}>
                <h4 className={styles.label}>redes solicales</h4>
                {socialNetworks.map(({ t113_link, c115_id_plataform }) => {
                  return (
                    <a
                      href={`${t113_link}`}
                      target="_blank"
                      rel="noreferrer"
                      key={uuid()}
                    >
                      {c115_id_plataform?.c115_description}
                    </a>
                  );
                })}
              </div>
              <div className={`${styles.cv} py-4`}>
                <IoIcon.IoIosCheckmarkCircle />
                <p>
                  Tu curriculum esta activo y visible para las empresas.
                  <br />
                  <em>Abierto a oportunidades.</em>
                </p>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default CardProfileStudent;
