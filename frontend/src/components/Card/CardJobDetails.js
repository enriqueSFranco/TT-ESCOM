import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CardJobDetails.module.css";
import * as AiIcon from "react-icons/ai";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";

const requirements = [
  "Fuertes habilidades de comunicación",
  "Tolerancia a la frustración",
  "Administrar sitios de Intranet",
  "Mejora de procesos",
  "Apoyo en el análisis y documentación de procesos",
  "Coordinar programa anual de actualización de documentación",
  "Elaboración de guías de usuario de los sistemas que se utilizan en la organización",
  "Ganas de desarrollarte en empresa de Servicios Financieros",
];

const profit = [
  "Caja de ahorro",
  "Seguro de gastos médicos mayores",
  "Seguro de vida",
  "Vacaciones superiores a las de ley",
  "Vales de despensa"
];

const JobCardDetails = () => {
  let { t200_id_vacant } = useParams();
  const { data } = useFetch(`/api/Vacants/${t200_id_vacant}/`);

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <header className="container">
        <div className={`${styles.flex}`}>
          <h1 className={styles.title}>{data[0]?.t200_job ?? 'Sin nombre de vacante'}</h1>
          <div className={styles.actions}>
            <button
              className={`${styles.like} ${styles.active}`}
              aria-label="like"
              role="switch"
              aria-checked="false"
            >
              <AiIcon.AiOutlineHeart />
            </button>
            <button
              className={styles.like}
              aria-label="like"
              role="switch"
              aria-checked="false"
            >
              <AiIcon.AiFillExclamationCircle />
            </button>
          </div>
        </div>
        <div className={`${styles.flex}`}>
          <div>
            <ul className={`${styles.flex}`}>
              <li className={styles.flex}>
                <FaIcon.FaBuilding />
                <span>{data?.company ?? 'Anonima'}</span>
              </li>
              <li className={styles.flex}>
                <MdIcon.MdOutlineAttachMoney />
                <span>{data?.maxSalary ?? 'No especificado'}</span>
              </li>
              <li className={styles.flex}>
                <FaIcon.FaLocationArrow />
                <span>Remoto</span>
              </li>
            </ul>
            <p>Tiempo completo de 9:00am - 6:00 pm, por tiempo indefinido</p>
          </div>
          <div className={styles.flex}>
            <button type="submit" className={styles.btnApplyEmployment}>
              <IoIcon.IoIosRocket />
              Aplicar
            </button>
          </div>
        </div>
      </header>
      <article className={`container`}>
        <p>
          <span>Formacion:{" "}</span>
          ingenieria industrial, administracion o similar
        </p>
        <p>
          idiomas: <span>ingles nivel intermedio-avanzado</span>
        </p>
        <p>
          software: <span>office, visio, acrobat</span>
        </p>
        <div>
          <p>
            {data[0]?.t200_description ?? 'Sin datos'}
          </p>
        </div>
        <div className={styles.requirements}>
          <h3>Requerimientos de la vacante</h3>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>OFRECEMOS</h3>
          <p>
          Salario Competitivo,más prestaciones superiores a las que
          marca la ley como: 30 días de Aguinaldo, 10% en Vales de Despensa, 13%
          de Fondo de Ahorro, 12 días de vacaciones al primer año, Prima
          Vacacional, Seguro de Gastos Médicos Mayores, Seguro de Vida
          </p>
          <p>
            La contratación es directamente por la empresa. Contrato de planta
          </p>
        </div>
        <div>
          <h3>Postúlate</h3>
          <p>
            Si estás interesado enla vacante y cubres con el perfil requerido postulate por este medio, manda tu CV español e ingles por correo electrónico o comunícate vía telefónica 812074 6435
          </p>
          <p>Tipo de puesto:<span>Tiempo completo, Indefinido</span></p>
          <p>Salario: <span>${data[0]?.t200_max_salary ?? 'No especificado'} al mes</span></p>
        </div>
        <div>
          <h3>Beneficios</h3>
          <ul>
            {profit.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Horario</h3>
          <p>Turno de 8 horas</p>
        </div>
        <div>
          <h3>Experiencia</h3>
          <p>
            documentacion de procesos: 3 años (Obligatorio)
          </p>
        </div>
        <div>
          <h3>Idioma</h3>
          <p>Inglés (Obligatorio)</p>
        </div>
      </article>
    </div>
  );
};

export default JobCardDetails;
