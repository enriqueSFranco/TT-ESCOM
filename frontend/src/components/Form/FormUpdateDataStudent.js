import React from "react";
import { useForm } from "../../hooks/useForm";
// import { useFetch }  from "../../hooks/useFetch";
import Label from "../Input/Label";
import Input from "../Input/Input";
import Span from "../Input/Span";
import Switch from "../Input/Switch";
import * as BiIcon from "react-icons/bi";
import styles from "./FormUpdateDataStudent.module.css";
import { motion } from "framer-motion/dist/framer-motion";

let initialForm = {
  name: "",
  specialty: "",
  phone: undefined,
  location: "",
  travel: false,
  cv: undefined,
  socialNetworks: {
    email: undefined,
    github: undefined,
    gitlab: undefined,
    linkedin: undefined,
  },
};

const FormUpdateDataStudent = ({ handleBackToProfile }) => {
  const { form, handleChange, handleChecked } = useForm(initialForm);
  // const { data } = useFetch();

  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        duration={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>editar informacion</h1>
        <form>
          <Label htmlFor="name">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
            />
            <Span content="Nombre" />
          </Label>
          <Label htmlFor="specialty">
            <Input
              type="text"
              id="specialty"
              name="specialty"
              placeholder=" "
              value={form.specialty}
              onChange={handleChange}
            />
            <Span content="Puesto" />
          </Label>
          <Label htmlFor="location">
            <Input
              type="text"
              name="location"
              id="location"
              placeholder=" "
              value={form.location}
              onChange={handleChange}
            />
            <Span content="Donde vives" />
          </Label>
          <Switch
            label="Disponibilidad para viajar"
            name="travel"
            id="travel"
            value={form.travel}
            onChange={handleChecked}
          />
          <Label htmlFor="phone">
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder=" "
              value={form.phone}
              onChange={handleChange}
            />
            <Span content="Telefono/Whatsapp" />
          </Label>
          <input
            type="file"
            name="cv"
            id="cv"
            className={`${styles.inputFile}`}
            value={form.cv}
            onChange={handleChange}
          />
          <Label htmlFor="cv">
            <BiIcon.BiCloudUpload />
            subir cv
          </Label>
          <div>{/* links de redes sociales */}</div>
        </form>
        <div className="container w-100">
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-primary w-100 my-1">
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Actualizar</div>
                </div>
              </button>
            </div>
            <div className="col">
              <button
                onClick={handleBackToProfile}
                className="btn btn-outline-danger w-100 my-1"
              >
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Cancelar</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FormUpdateDataStudent;
