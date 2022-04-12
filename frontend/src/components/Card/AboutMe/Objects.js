import { Link } from "react-router-dom";
import styles from "./Objects.module.css";
import * as MdIcon from "react-icons/md";
import ModalForm from "../../Modal/ModalForm";
import { useModal } from "../../../hooks/useModal";
import Label from "../../Element/Label/Label";
import TextArea from "../../Element/TextArea/TextArea";
import Span from "../../Element/Span/Span";
import Input from "../../Element/Input/Input";

const Objects = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div className={styles.objects}>
      <div className={styles.objectspersonals}>
        <h5>Objetivos Personales</h5>
        <p className={styles.tex}> Deseo desarrollarme en </p>
      </div>

      <div className={styles.salary}>
        <h6>Salario deseado</h6>
        <MdIcon.MdOutlineAttachMoney size={25} />
        <span className={styles.tex}>12,000</span>
      </div>

      <div className={styles.mode}>
        <h6>Modalidad de trabajo</h6>
        <span className={styles.tex}>Remoto</span>
      </div>
      <div className={styles.edit}>
        <Link to="#">
          <i>
            <MdIcon.MdEdit onClick={openModal} size={25} />
          </i>
        </Link>
      </div>
      <ModalForm isOpen={isOpenModal} closeModal={closeModal} title="">
        <h6>Objetivos Personales</h6>
        <form>
          {/* input para objetivos*/}
          <div>
            <Label htmlFor="Misbjetivos">
              <TextArea type="text" />
              <Span content="Mis bjetivos" />
            </Label>
          </div>

          {/* input para Salario deseado*/}
          <div>
            <Label htmlFor="salario">
              <Input type="number" />
              <Span content="Salario deseado" />
            </Label>
          </div>

          {/* input para Modalida Checar el checkbox*/}
          <div>
            <h6>Modalidad deseada</h6>
            <div>
              <Label htmlFor="salario">
                <Input type="checkbox" />
                <Span content="Hibrida" />
              </Label>
            </div>
            <div>
              <Label htmlFor="salario">
                <Input type="checkbox" />
                <Span content="Presencial" />
              </Label>
            </div>
          </div>
        </form>
      </ModalForm>
    </div>
  );
};
export default Objects;
