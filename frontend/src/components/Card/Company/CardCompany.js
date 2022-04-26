import { useState } from "react";
import Modal from "@mui/material/Modal";
import * as IoIcon from "react-icons/io";
import styles from "./CardCompany.module.css";

const CardNormal = ({ name, logo, banner, mision, vision, title }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.card} layoutId="cardExpand">
      <div layoutId="cardExpand-img" className={styles.cardLogo}>
        {logo ? <img src={logo} alt={name} /> : <IoIcon.IoMdBusiness />}
      </div>
      <button onClick={handleOpen}>Ver mas</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        disableEnforceFocus
      >
        <div className={`container ${styles.grid}`}>
          <img src={banner} alt={name} />
          <div className={styles.body}>
            <h1>{title}</h1>
            <div className={styles.description}>
              <h2>Mision</h2>
              <p>{mision}</p>
              <h2>Vision</h2>
              <p>{vision}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardNormal;
