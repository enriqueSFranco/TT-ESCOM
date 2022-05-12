import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { getSocialNetwork, getStudent } from "services/students/index";
import { getSkill } from "services/catalogs";
import { uuid } from "utils/uuid";
import FormUpdateDataStudent from "components/Form/updateInfoStudent/FormUpdateDataStudent";
import ModalForm from "components/Modal/ModalForm";
import Chip from "@mui/material/Chip"
import CustomAvatar from "../../Avatar/Avatar";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  // TODO: Implementar useReducer para el manejo del estado
  const [student, setStudent] = useState([]);
  const [isOpenModalFormUpdateInfoStudent, openModalFormUpdateInfoStudent, closeModalFormUpdateInfoStudent] = useModal();
  const [skills, setSkills] = useState([]);
  const [socialNetworks, setSocialNetworks] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getStudent(token?.user?.user_id)
      .then(response => {
        setStudent(response);
      })
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSkill(token?.user?.user_id)
      .then(response => {
        setSkills(response)
      })
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSocialNetwork(token?.user?.user_id)
      .then(response => {
        setSocialNetworks(response);
      })
  }, [token?.user?.user_id]);

  return (
    <>
    <article className={`${styles.mainContainer}`}>
          <div className={`${styles.card}`}>
            <header className={styles.background}>
              <div className={styles.avatar}>
                <IoIcon.IoMdSettings
                  className={styles.config}
                  onClick={openModalFormUpdateInfoStudent}
                />
                {/* <img src="https://placeimg.com/640/480/any" alt="user" /> */}
                <CustomAvatar student={student} width="80px" height="80px" fontSize="2rem" />
                <div className={styles.nameHolder}>
                  <h3>
                    {student[0]?.t100_name} {student[0]?.t100_last_name}
                  </h3>
                  <h4>{student[0]?.t100_interest_job ?? ""}</h4>
                </div>
              </div>
            </header>
            <div className={styles.userDetails}>
              <div className={styles.separator}>
                <h4 className={styles.label}>Ubicacion</h4>
                <div className={styles.flex}>
                  <MdIcon.MdLocationPin className={styles.icon} />
                  <p>{student[0]?.t100_residence ?? "No especificado."}</p>
                </div>
                <div className={styles.flex}>
                  <MdIcon.MdOutlineAirplanemodeActive className={styles.icon} />
                  <p>
                    {student[0]?.t100_travel
                      ? "Disponible para reubicarse."
                      : "No disponible para reubicarse." ?? "No especificado."}
                  </p>
                </div>
              </div>
              <h4 className={styles.label}>redes sociales</h4>
              <div className={`${styles.socialNetworks} ${styles.separator}`}>
                {socialNetworks.length > 0 ? (
                  socialNetworks.map(({ t113_link, c115_id_plataform }) => {
                    return (
                      <a
                        href={`${t113_link}`}
                        target="_blank"
                        rel="noreferrer"
                        key={uuid()}
                        className={styles.link}
                      >
                        {c115_id_plataform?.c115_description}
                      </a>
                    );
                  })
                ) : (
                  <h3>Sin redes sociales</h3>
                )}
              </div>
              <div className={`${styles.wrapperSkills} ${styles.separator}`}>
                <h4 className={styles.label}>Skills</h4>
                <ul className={styles.skillList}>
                  {
                    skills.length > 0 ? (
                      skills.map(({ c116_id_skill }) => (
                        <Chip
                          key={uuid()}
                          label={c116_id_skill?.c116_description}
                          variant="outlined"
                        />
                      ))
                    ) : (
                      <h3>Sin skills</h3>
                    )
                  }
                </ul>
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
        <ModalForm 
          isOpen={isOpenModalFormUpdateInfoStudent} 
          closeModal={closeModalFormUpdateInfoStudent}
          width={650}
          height={800}
        >
          <FormUpdateDataStudent student={student} />
        </ModalForm>
    </>
  );
};

export default CardProfileStudent;
