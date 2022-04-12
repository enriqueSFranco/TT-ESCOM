import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getStudent, getSocialNetwork } from "services/students/index";
import { uuid } from "utils/uuid";
import FormUpdateDataStudent from "../../Form/updateInfoStudent/FormUpdateDataStudent";
import Avatar from "../../Avatar/Avatar";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  const [state, setState] = useState("profile");
  const [student, setStudent] = useState([]);
  const [socialNetworks, setSocialNetworks] = useState([]);

  const handleEdit = (e) => {
    let isEdit = state === "edit" ? "profile" : "edit";
    setState(isEdit);
  };

  
  const id = "2017";
  useEffect(() => {
    const fetchData = async () => {
      const [studentRes, linksRes] = await Promise.all([
        getStudent(id),
        getSocialNetwork(id),
        // getSkill(id)
      ]);
      setStudent(studentRes);
      setSocialNetworks(linksRes);
    };
    fetchData();

    return () => { // nos desuscribimos de la peticion a la API
      setStudent([]);
      setSocialNetworks([])
    }
  }, [id]);

  console.log(student)
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
                    {student[0]?.t100_name} {student[0]?.t100_last_name}
                  </h3>
                  <h4>{student[0]?.t100_speciality ?? ""}</h4>
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
              <div className={`${styles.socialNetworks} ${styles.separator}`}>
                <h4 className={styles.label}>redes solicales</h4>
                {
                  socialNetworks.length > 0 ? (
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
                  )
                }
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
