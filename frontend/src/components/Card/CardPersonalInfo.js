import React from "react";
import { formatDate } from "utils";
import {
  Card,
  ObjectiveProfesional,
  Experience,
  Education,
  Container,
} from "./styled-components/CardProfileInfoStyled";

const CardPersonalInfo = ({ personalObject, listProjects, academicHistory }) => {

  return (
    <Card>
      <ObjectiveProfesional>
        <h2 style={{fontSize: '1.2rem', marginTop: '.7rem'}}>Objetivo Profesional</h2>
        <p>
          {personalObject ? (
            personalObject
          ) : (
            <span>Sin objetivo profesional</span>
          )}
        </p>
      </ObjectiveProfesional>

      <Experience>
        <h2 style={{fontSize: '1.2rem', marginTop: '.7rem'}}>Experiencia</h2>
        {listProjects.map(project => (
          <Container key={`project-id-${crypto.randomUUID()}`}>
            <p className="text" style={{fontWeight: '700'}}>Proyecot: {project?.t117_project_name}</p>
            <p className="text">Descripción: {project?.t117_description}</p>
            <a href={project?.t117_link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </Container>
        ))}
      </Experience>

      <Education>
        <h2 style={{fontSize: '1.2rem', marginTop: '.7rem'}}>Educación</h2>
        <div style={{overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          {academicHistory.length === 0 ? (
            <span>No cuenta con alguna preparacion educativa</span>
          ) : (
            academicHistory?.map((el) => (
              <Container
                key={`academic-history-id-${crypto.randomUUID()}`}
              >
                <p className="text">Escuela: {el.t104_academic_unit}</p>
                <p className="text">Carrera: {el.t104_carreer}</p>
                <p className="text">
                  Fecha de ingreso: {formatDate(el.t104_start_date)}
                </p>
              </Container>
            ))
          )}
        </div>
      </Education>
    </Card>
  );
};

export default CardPersonalInfo;
