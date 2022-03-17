import { useForm } from "../../hooks/useForm";
import Label from "../Input/Label";
import Input from "../Input/Input";
import Span from "../Input/Span";
import Switch from "../Input/Switch";
import * as BiIcon from "react-icons/bi";
import styles from "./FormUpdateDataStudent.module.css";
import React from "react";
let initialForm = {
  name: "",
  specialty: "",
  phone: undefined,
  location: "",
  travel: undefined,
  cv: undefined,
  socialNetworks: {
    email: undefined,
    github: undefined,
    gitlab: undefined,
    linkedin: undefined,
  },
};


const FormUpdateDataStudent = ({ ref }) => {
  const { form, handleChange, handleChecked } = useForm(initialForm);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>editar informacion</h1>
        <form>
          <div>
            <Label htmlFor="name">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
              />
              <Span content="Nombre"/>
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
          </div>
          <div className={`${styles.inputGroup}`}>
            <div className="col">
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
            </div>
            <div className="col">
              <Switch name="travel" id="travel" value={form.travel} onChange={handleChecked} />
            </div>
          </div>
          <div>
            <Label htmlFor="phone">
              <input
                className={styles.inputField}
                type="tel"
                name="phone"
                id="phone"
                placeholder=" "
                value={form.phone}
                onChange={handleChange}
              />
              <span className={styles.inputLabel}>Telefono/Whatsapp</span>
            </Label>
          </div>
          <div>
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
          </div>
          <div>{/* links de redes sociales */}</div>
        </form>
        <div className="container w-100 my-5">
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-primary w-100 my-1">
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Actualizar</div>
                </div>
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-danger w-100 my-1" ref={ref}>
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Cancelar</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUpdateDataStudent;
