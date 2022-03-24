import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import ModalForm from "../../Modal/ModalForm";
import Input from "../../Input/Input";
import Label from "../../Input/Label";
import Span from "../../Input/Span";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import styles from "./Interests.module.css";

const Interests = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div className={styles.CompOne}>
      <h5>Intereses</h5>
      <div className={styles.content}>
        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Areas de interes</span>
        </div>

        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Posiciones buscadas</span>
        </div>
        <div className={styles.edit}>
          <Link href="/#">
            <i>
              <MdIcon.MdEdit onClick={openModal1} size={25} />
            </i>
          </Link>
        </div>

        <ModalForm isOpen={isOpenModal1} closeModal={closeModal1} title="">
          <h6>Objetivos Personales</h6>
          <form>
            {/* input para objetivos*/}
            <div>
              <h6>Catalogos Cargar</h6>
              <Label htmlFor="intereses">
                <Input type="text" />
                <Span content="Intereses" />
              </Label>
            </div>
          </form>
        </ModalForm>
      </div>
      <div className={styles.content}>
        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Hard Skills</span>
        </div>

        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Soft Skills</span>
        </div>
        <div className={styles.edit}>
          <Link href="/#">
            <i>
              <MdIcon.MdEdit onClick={openModal2} size={25} />
            </i>
          </Link>
        </div>
        <ModalForm isOpen={isOpenModal2} closeModal={closeModal2} title="">
          <h6>Objetivos Personales</h6>
          <form>
            {/* input para objetivos*/}
            <div>
              <h6>Catalogos Cargar</h6>
              <Label htmlFor="intereses">
                <Input type="text" />
                <Span content="Habilidades" />
              </Label>
            </div>
          </form>
        </ModalForm>
      </div>
    </div>
  );
};
export default Interests;
