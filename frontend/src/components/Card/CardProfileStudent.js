import { useState } from "react";
 import { useFetch } from "../../hooks/useFetch.js";
import FormUpdateDataStudent from "../Form/FormUpdateDataStudent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
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
   let t100_boleta = 2014;//useParams();
   const { data } = useFetch(`/api/Students/${t100_boleta}`);
   console.log("Obtuve esto:")
   console.log(data);
   //console.log(data['t100_boleta']);

  const handleEdit = (e) => {
    let isEdit = state === "edit" ? "profile" : "edit";
    setState(isEdit);
  };

  return (
    <>
      {state === "edit" ? (
        <motion.article 
          className="container"
          initial={{scaleY: 0}}
          animate={{scaleY: 1}}
          exit={{scaleY: 0}}
          duration={{duration: 0.5}}
        >
          <FormUpdateDataStudent handleBackToProfile={handleEdit} />
          {/* <button onClick={handleEdit}>perfil</button> */}
        </motion.article>
      ) : (
        <article className="container">
          <div className={`${styles.card}`}>
            <header className={styles.background}>
              <div className={styles.avatar}>
                <IoIcon.IoMdSettings
                  className={styles.config}
                  onClick={handleEdit}
                />
                <img src="https://placeimg.com/640/480/any" alt="user" />
                <div className={styles.nameHolder}>
                  <h3>Enrique Salinas Franco</h3>
                  <h4>Ingeniero de software</h4>
                </div>
              </div>
            </header>
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
              <div className={`${styles.flexColumn} py-4`}>
                <IoIcon.IoIosCheckmarkCircle />
                <p>
                  Tu curriculum esta activo y visible para las empresas.
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
