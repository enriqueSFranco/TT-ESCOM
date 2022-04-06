import { useState, useEffect } from "react";
import { motion } from "framer-motion" ;
// import { helpHttp } from "../../../utils/helpHttp";
import FormUpdateDataStudent from "../../Form/FormUpdateDataStudent";
import Avatar from "../../Avatar/Avatar";
import * as MdIcon from "react-icons/md";
import * as BsIcon from "react-icons/bs";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  const [state, setState] = useState("profile");
  const [student, setStudent] = useState({});
  const [residence, setResidencce] = useState({});
  const [linksSocialNewtworks, setLinksSocialNetworks] = useState([]);

  useEffect(() => {
    // uploadPhotoStudent()
    // const fetchData = async () => {
    //   const studentUrl = `/api/Students/2014/`;
    //   const studentResidenceUrl = `/api/Residence/2014`;
    //   const socialNetworksUrl = `/api/Links/2014/`;
      
    //   const [studentRes, studentResidenceRes, socialNetworksRes] = await Promise.all([
    //     helpHttp().GET(studentUrl),
    //     helpHttp().GET(studentResidenceUrl),
    //     helpHttp().GET(socialNetworksUrl)
    //   ]);
    //   setStudent(studentRes)
    //   setResidencce(studentResidenceRes)
    //   setLinksSocialNetworks(socialNetworksRes);
    // }
    // fetchData();
  }, []);
  
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
          <FormUpdateDataStudent student={student} handleBackToProfile={handleEdit} />
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
                  <h3>{student[0]?.t100_name}</h3>
                  <h4>Ingeniero de software</h4>
                </div>
              </div>
            </header>
            <div className={styles.userDetails}>
              <div className={styles.separator}>
                <h4 className={styles.label}>Ubicacion</h4>
                <div className={styles.flex}>
                  <MdIcon.MdLocationPin className={styles.icon} />
                  <p>{`${residence[0]?.t101_state}, ${residence[0]?.t101_municipality}, ${residence[0]?.t101_locality}`}</p>
                </div>
                <div className={styles.flex}>
                  <MdIcon.MdOutlineAirplanemodeActive className={styles.icon} />
                  <p>Disponible para reubicarse</p>
                </div>
              </div>
              <div className={`${styles.socialNetworks} ${styles.separator}`}>
                <h4 className={styles.label}>redes solicales</h4>
                {
                  linksSocialNewtworks.map((link) => {
                    return (
                      <div className={styles.flex}>
                        <span key={Date.now()}>{link?.t113_link}</span>
                      </div>
                    )
                  })
                }
                {/* <Link to="/" className={styles.whatsapp}>
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
                </Link> */}
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
