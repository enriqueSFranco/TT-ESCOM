import React from "react";
import { formatDate } from "utils";
import {
  Card,
  ObjectiveProfesional,
  Experience,
  Education,
  WrapperAcademicHostory,
} from "./styled-components/CardProfileInfoStyled";

const CardPersonalInfo = ({ personalObject, academicHistory }) => {
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
      </Experience>

      <Education>
        <h2 style={{fontSize: '1.2rem', marginTop: '.7rem'}}>Educacion</h2>
        <div style={{overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          {academicHistory.length === 0 ? (
            <span>No cuenta con alguna preparacion educativa</span>
          ) : (
            academicHistory?.map((el) => (
              <WrapperAcademicHostory
                key={`academic-history-${crypto.randomUUID()}`}
              >
                <p className="text">Escuela: {el.t104_academic_unit}</p>
                <p className="text">Carrera: {el.t104_carreer}</p>
                <p className="text">
                  Fecha de ingreso: {formatDate(el.t104_start_date)}
                </p>
              </WrapperAcademicHostory>
            ))
          )}
        </div>
      </Education>
    </Card>
  );
};

export default CardPersonalInfo;
