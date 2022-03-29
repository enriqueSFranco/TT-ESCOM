import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSticky } from "../../hooks/useSticky";
import { numberFormat } from "../../utils/numberFormat";
import * as AiIcon from "react-icons/ai";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import styles from "./CardJobDetails.module.css";

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
  "Vales de despensa",
];

const JobCardDetails = () => {
  const [sticky] = useSticky();
  let { t200_id_vacant } = useParams();
  const [job, setJob] = useState([]);
  const [company, setCompany] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jobResponse = await axios.get(`/api/Vacants/${t200_id_vacant}/`);
        setJob(jobResponse.data);

        
        let catalogueExperienceUrl = `/api/catalogues/catalogs/CatalogueExperience/`;
        let companyUrl = `/api/Companies/${jobResponse.data[0].t300_id_company}/`;
        const [companyResponse, experienceRes] = await Promise.all([
          axios.get(companyUrl),
          axios.get(catalogueExperienceUrl),
        ]);
        setCompany(companyResponse.data);
        setExperience(experienceRes.data);
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
    }, [t200_id_vacant]);

  if (!job && !company) return null;

  console.log(job, company, experience);

  return (
    <div
      className={`container ${
        sticky
          ? `${styles.wrapper} ${styles.positionSticky}`
          : `${styles.wrapper}`
      }`}
    >
      <header className="container">
        <div className={`${styles.flex}`}>
          <h1 className={styles.title}>{job[0]?.t200_job ?? 'Sin nombre de vacante'}</h1>
        </div>
        <div className={`${styles.flex}`}>
          <div>
            <ul className={`${styles.flex}`}>
              <li className={styles.flex}>
                <FaIcon.FaBuilding />
                <span>{company[0]?.t300_name ?? 'Anonima'}</span>
              </li>
              <li className={styles.flex}>
                <MdIcon.MdOutlineAttachMoney />
                <span>{numberFormat(job[0]?.t200_max_salary) ?? 'No especificado'}</span>
              </li>
              <li className={styles.flex}>
                <FaIcon.FaLocationArrow />
                <span>{job[0]?.t200_home_ofice ? 'Remoto' : 'Presencial' ?? 'No especificado'}</span>
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
      <article className={`container ${styles.body}`}>
        <p>
          <span>Formacion: </span>
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
            {job[0]?.t200_description ?? 'Sin datos'}
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
            Salario Competitivo,más prestaciones superiores a las que marca la
            ley como: 30 días de Aguinaldo, 10% en Vales de Despensa, 13% de
            Fondo de Ahorro, 12 días de vacaciones al primer año, Prima
            Vacacional, Seguro de Gastos Médicos Mayores, Seguro de Vida
          </p>
          <p>
            La contratación es directamente por la empresa. Contrato de planta
          </p>
        </div>
        <div>
          <h3>Postúlate</h3>
          <p>
            Si estás interesado enla vacante y cubres con el perfil requerido
            postulate por este medio, manda tu CV español e ingles por correo
            electrónico o comunícate vía telefónica 812074 6435
          </p>
          <p>
            Tipo de puesto:<span>Tiempo completo, Indefinido</span>
          </p>
          <p>Salario: <span>${job[0]?.t200_max_salary ?? 'No especificado'} al mes</span></p>
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
          <p>Horario: <span>{job[0]?.t200_check_time} a {job[0]?.t200_closing_hour}</span></p>
        </div>
        <div>
          <h3>Experiencia</h3>
          <p>documentacion de procesos: 3 años (Obligatorio)</p>
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
