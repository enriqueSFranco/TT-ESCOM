import React from "react";
import "./JobCard.css";

const JobCard = ({
  company,
  img_company,
  type_vacancy,
  min_salary,
  max_salary,
  full_time,
  location,
}) => {
  return (
    <article className="card">
      <div className="card_details">
        <i className="company-logo">{img_company}</i>
        <h2 className="title_company">{company}</h2>
        <h3 className="title_job">{type_vacancy}</h3>
        <div className="description_job">Descripcion de la vacante</div>
        <div className="tag">
          <span className="tag_salary">
            Sueldo: ${min_salary} - ${max_salary}
          </span>
          <br />
          <span className="tag_time">
            Horario:{full_time ? "Tiempo Completo" : "Medio Tiempo"}
          </span>
          <br />
          <span className="tag_location">Ubicacion:{location}</span>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
